"use client";

import { track } from "@vercel/analytics";

export default function TrackedWhatsAppLink({
  href,
  children,
  location = "unknown",
  className = "",
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer"
      onClick={() =>
        track("whatsapp_click", {
          location,
        })
      }
    >
      {children}
    </a>
  );
}