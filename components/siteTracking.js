const SUPABASE_URL = 'https://yawfuqmqrijhyphnhtjj.supabase.co';
const PUBLISHABLE_KEY = 'sb_publishable_tGwx3_Ery8HFywiTqL3O-A_3vbOkh03';
const VISITOR_KEY = 'zenstax-visitor-id';
const SESSION_KEY = 'zenstax-session-id';

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

function readOrCreate(storage, key) {
  try {
    let value = storage.getItem(key);

    if (!value) {
      value = createId();
      storage.setItem(key, value);
    }

    return value;
  } catch {
    return null;
  }
}

function trackingAllowed() {
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') {
    return false;
  }

  if (navigator.globalPrivacyControl === true) {
    return false;
  }

  return true;
}

function deviceType() {
  const width = window.innerWidth;

  if (width < 768) {
    return 'mobile';
  }

  if (width < 1100) {
    return 'tablet';
  }

  return 'desktop';
}

function referrerHost() {
  try {
    if (!document.referrer) {
      return null;
    }

    const host = new URL(document.referrer).hostname;

    return host === window.location.hostname ? null : host.slice(0, 100);
  } catch {
    return null;
  }
}

export function trackEvent(event, data = {}) {
  if (typeof window === 'undefined' || !trackingAllowed()) {
    return;
  }

  const visitorId = readOrCreate(window.localStorage, VISITOR_KEY);
  const sessionId = readOrCreate(window.sessionStorage, SESSION_KEY);

  if (!visitorId || !sessionId) {
    return;
  }

  const payload = {
    visitor_id: visitorId,
    session_id: sessionId,
    event,
    path: window.location.pathname.slice(0, 200),
    device: deviceType(),
    language: (navigator.language || '').slice(0, 20) || null,
    referrer_host: referrerHost(),
    ...data,
  };

  try {
    fetch(`${SUPABASE_URL}/rest/v1/website_events`, {
      method: 'POST',
      headers: {
        apikey: PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Tracking must never break the page.
  }
}
