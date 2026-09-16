"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

const initialLeads = [
  {
    id: "LD-1048",
    name: "Ahmed Rahman",
    phone: "+971 50 321 8842",
    email: "ahmed.r@example.com",
    source: "Property Portal",
    property: "2BR Apartment — Dubai Marina",
    budget: "AED 1.85M",
    agent: "Sarah Khan",
    status: "New",
    created: "12 min ago",
    lastContact: "Not contacted",
    priority: "High",
  },
  {
    id: "LD-1047",
    name: "Olivia Bennett",
    phone: "+971 55 732 1468",
    email: "olivia.b@example.com",
    source: "Website",
    property: "3BR Townhouse — Arabian Ranches",
    budget: "AED 3.2M",
    agent: "Omar Ali",
    status: "Contacted",
    created: "35 min ago",
    lastContact: "18 min ago",
    priority: "High",
  },
  {
    id: "LD-1046",
    name: "Priya Menon",
    phone: "+971 52 448 2291",
    email: "priya.m@example.com",
    source: "WhatsApp",
    property: "Studio — JVC",
    budget: "AED 620K",
    agent: "Sarah Khan",
    status: "Viewing Booked",
    created: "1 hr ago",
    lastContact: "42 min ago",
    priority: "Medium",
  },
  {
    id: "LD-1045",
    name: "Daniel Cooper",
    phone: "+971 58 114 6590",
    email: "daniel.c@example.com",
    source: "Referral",
    property: "Office Space — Business Bay",
    budget: "AED 280K / year",
    agent: "Maya George",
    status: "Negotiation",
    created: "2 hrs ago",
    lastContact: "1 hr ago",
    priority: "High",
  },
  {
    id: "LD-1044",
    name: "Fatima Noor",
    phone: "+971 54 909 7881",
    email: "fatima.n@example.com",
    source: "Instagram",
    property: "1BR Apartment — Downtown Dubai",
    budget: "AED 1.1M",
    agent: "Omar Ali",
    status: "Contacted",
    created: "3 hrs ago",
    lastContact: "2 hrs ago",
    priority: "Medium",
  },
  {
    id: "LD-1043",
    name: "James Wilson",
    phone: "+971 56 631 2207",
    email: "james.w@example.com",
    source: "Property Portal",
    property: "4BR Villa — Dubai Hills",
    budget: "AED 6.5M",
    agent: "Maya George",
    status: "New",
    created: "4 hrs ago",
    lastContact: "Not contacted",
    priority: "High",
  },
];

const activities = [
  {
    time: "10:42 AM",
    title: "New website enquiry assigned",
    detail: "Olivia Bennett → Omar Ali",
    type: "lead",
  },
  {
    time: "10:24 AM",
    title: "Viewing confirmed",
    detail: "Priya Menon — JVC Studio, Tomorrow 5:30 PM",
    type: "viewing",
  },
  {
    time: "10:12 AM",
    title: "Follow-up due",
    detail: "Daniel Cooper — Business Bay office space",
    type: "followup",
  },
  {
    time: "09:56 AM",
    title: "New property portal lead",
    detail: "Ahmed Rahman — Dubai Marina 2BR",
    type: "lead",
  },
];

const agents = [
  {
    name: "Sarah Khan",
    initials: "SK",
    active: 18,
    viewings: 6,
    response: "8 min",
    color: "orange",
  },
  {
    name: "Omar Ali",
    initials: "OA",
    active: 14,
    viewings: 5,
    response: "11 min",
    color: "blue",
  },
  {
    name: "Maya George",
    initials: "MG",
    active: 12,
    viewings: 4,
    response: "14 min",
    color: "green",
  },
];

const pipelineColumns = [
  "New",
  "Contacted",
  "Viewing Booked",
  "Negotiation",
];

export default function RealEstateCRMDemo() {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLead, setSelectedLead] = useState(initialLeads[0]);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [search, setSearch] = useState("");

  const filteredLeads = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return leads;
    }

    return leads.filter((lead) =>
      [
        lead.name,
        lead.id,
        lead.property,
        lead.agent,
        lead.source,
        lead.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(value)
    );
  }, [leads, search]);

  function updateLeadStatus(leadId, newStatus) {
    setLeads((currentLeads) =>
      currentLeads.map((lead) =>
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      )
    );

    setSelectedLead((currentLead) =>
      currentLead?.id === leadId
        ? { ...currentLead, status: newStatus }
        : currentLead
    );
  }

  function selectLead(lead) {
    setSelectedLead(lead);
  }

  return (
    <main className="crm-demo-page">
      <div className="demo-notice">
        <div className="demo-notice-inner">
          <span className="demo-notice-dot" />
          <strong>Demo Environment</strong>
          <span>Fictional sample data. Built by ZenStax for demonstration purposes.</span>
          <Link
  href="/contact?challenge=crm-erp"
  className="button"
  onClick={() =>
    track("real_estate_demo_cta_click", {
      location: "demo_bottom_cta",
    })
  }
>
  Request a Free 20-Minute CRM Review -{">"}
  
</Link>
        </div>
      </div>

      <section className="crm-shell">
        <aside className="crm-sidebar">
          <Link href="/" className="crm-brand" aria-label="ZenStax home">
            <span className="crm-brand-mark">Z</span>
            <span>
              Zen<span>Stax</span>
            </span>
          </Link>

          <p className="crm-workspace">Harbor Properties</p>

          <nav className="crm-nav" aria-label="CRM demo navigation">
            {[
              "Dashboard",
              "Leads",
              "Properties",
              "Viewings",
              "Agents",
              "Reports",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className={activeSection === item ? "active" : ""}
                onClick={() => setActiveSection(item)}
              >
                <span className="nav-icon">
                  {item === "Dashboard" && "▦"}
                  {item === "Leads" && "◉"}
                  {item === "Properties" && "⌂"}
                  {item === "Viewings" && "◷"}
                  {item === "Agents" && "◌"}
                  {item === "Reports" && "▤"}
                </span>
                {item}
              </button>
            ))}
          </nav>

          <div className="crm-sidebar-bottom">
            <div className="crm-user">
              <span className="crm-avatar">ZA</span>
              <div>
                <strong>ZenStax Admin</strong>
                <small>Demo workspace</small>
              </div>
            </div>

            <Link href="/services/crm-erp" className="crm-back-link">
              ← ZenStax CRM & ERP
            </Link>
          </div>
        </aside>

        <section className="crm-main">
          <header className="crm-topbar">
            <div>
              <p className="crm-breadcrumb">Workspace / {activeSection}</p>
              <h1>{activeSection}</h1>
            </div>

            <div className="crm-topbar-actions">
              <label className="crm-search">
                <span>⌕</span>
                <input
                  type="search"
                  placeholder="Search leads..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </label>

              <button
                type="button"
                className="crm-add-lead"
                onClick={() => setActiveSection("Leads")}
              >
                + Add lead
              </button>
            </div>
          </header>

          <div className="crm-content">
            {activeSection === "Dashboard" && (
              <>
                <section className="crm-welcome">
                  <div>
                    <p>Tuesday, 16 September</p>
                    <h2>Good morning, ZenStax Admin.</h2>
                    <span>
                      Here is a quick view of Harbor Properties lead activity.
                    </span>
                  </div>

                  <button
                    type="button"
                    className="crm-outline-button"
                    onClick={() => setActiveSection("Leads")}
                  >
                    View all leads →
                  </button>
                </section>

                <section className="crm-stat-grid">
                  <StatCard
                    label="New leads today"
                    value="18"
                    change="+4 from yesterday"
                    accent="orange"
                  />
                  <StatCard
                    label="Follow-ups due"
                    value="7"
                    change="3 need attention"
                    accent="red"
                  />
                  <StatCard
                    label="Viewings this week"
                    value="24"
                    change="+18% from last week"
                    accent="blue"
                  />
                  <StatCard
                    label="Qualified pipeline"
                    value="AED 18.6M"
                    change="36 active opportunities"
                    accent="green"
                  />
                </section>

                <section className="crm-dashboard-grid">
                  <div className="crm-panel crm-pipeline-panel">
                    <div className="crm-panel-heading">
                      <div>
                        <p>Sales pipeline</p>
                        <h3>Lead status overview</h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveSection("Leads")}
                      >
                        View pipeline →
                      </button>
                    </div>

                    <div className="pipeline-bars">
                      <div>
                        <span className="pipeline-label">New</span>
                        <strong>18</strong>
                        <div className="pipeline-track">
                          <span className="pipeline-fill fill-orange" style={{ width: "82%" }} />
                        </div>
                      </div>

                      <div>
                        <span className="pipeline-label">Contacted</span>
                        <strong>32</strong>
                        <div className="pipeline-track">
                          <span className="pipeline-fill fill-blue" style={{ width: "67%" }} />
                        </div>
                      </div>

                      <div>
                        <span className="pipeline-label">Viewing booked</span>
                        <strong>24</strong>
                        <div className="pipeline-track">
                          <span className="pipeline-fill fill-purple" style={{ width: "52%" }} />
                        </div>
                      </div>

                      <div>
                        <span className="pipeline-label">Negotiation</span>
                        <strong>12</strong>
                        <div className="pipeline-track">
                          <span className="pipeline-fill fill-green" style={{ width: "33%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="crm-panel crm-attention-panel">
                    <div className="crm-panel-heading">
                      <div>
                        <p>Priority actions</p>
                        <h3>Needs attention</h3>
                      </div>
                    </div>

                    <div className="attention-list">
                      <button
                        type="button"
                        onClick={() => {
                          selectLead(leads[0]);
                          setActiveSection("Leads");
                        }}
                      >
                        <span className="attention-icon urgent">!</span>
                        <span>
                          <strong>3 high-priority leads</strong>
                          <small>Have not been contacted yet</small>
                        </span>
                        <span>→</span>
                      </button>

                      <button type="button" onClick={() => setActiveSection("Viewings")}>
                        <span className="attention-icon calendar">◷</span>
                        <span>
                          <strong>6 viewings tomorrow</strong>
                          <small>Confirm agents and client attendance</small>
                        </span>
                        <span>→</span>
                      </button>

                      <button type="button" onClick={() => setActiveSection("Reports")}>
                        <span className="attention-icon message">◌</span>
                        <span>
                          <strong>7 follow-ups due</strong>
                          <small>Keep opportunities moving forward</small>
                        </span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </section>

                <section className="crm-dashboard-grid crm-lower-grid">
                  <div className="crm-panel">
                    <div className="crm-panel-heading">
                      <div>
                        <p>Latest activity</p>
                        <h3>Today&apos;s updates</h3>
                      </div>
                    </div>

                    <div className="activity-list">
                      {activities.map((activity) => (
                        <div className="activity-item" key={`${activity.time}-${activity.title}`}>
                          <span className={`activity-icon ${activity.type}`}>
                            {activity.type === "lead" && "+"}
                            {activity.type === "viewing" && "◷"}
                            {activity.type === "followup" && "!"}
                          </span>

                          <div>
                            <strong>{activity.title}</strong>
                            <p>{activity.detail}</p>
                          </div>

                          <time>{activity.time}</time>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="crm-panel">
                    <div className="crm-panel-heading">
                      <div>
                        <p>Agent activity</p>
                        <h3>Team overview</h3>
                      </div>
                    </div>

                    <div className="agent-list">
                      {agents.map((agent) => (
                        <div className="agent-item" key={agent.name}>
                          <span className={`agent-avatar ${agent.color}`}>
                            {agent.initials}
                          </span>

                          <div className="agent-name">
                            <strong>{agent.name}</strong>
                            <small>{agent.active} active leads</small>
                          </div>

                          <div className="agent-metric">
                            <strong>{agent.viewings}</strong>
                            <small>Viewings</small>
                          </div>

                          <div className="agent-metric">
                            <strong>{agent.response}</strong>
                            <small>Avg. reply</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}

            {activeSection === "Leads" && (
              <LeadWorkspace
                leads={filteredLeads}
                selectedLead={selectedLead}
                onSelectLead={selectLead}
                onUpdateStatus={updateLeadStatus}
              />
            )}

            {["Properties", "Viewings", "Agents", "Reports"].includes(
              activeSection
            ) && (
              <section className="crm-empty-state">
                <span>◈</span>
                <p className="section-label">Demo module</p>
                <h2>{activeSection} workspace preview</h2>
                <p>
                  In a real ZenStax CRM setup, this module would be configured
                  around the client&apos;s actual workflow, team roles, and
                  reporting requirements.
                </p>
                <button
                  type="button"
                  className="crm-add-lead"
                  onClick={() => setActiveSection("Dashboard")}
                >
                  Back to dashboard
                </button>
              </section>
            )}
          </div>
        </section>
      </section>

      <section className="demo-sales-section">
        <div className="container demo-sales-grid">
          <div>
            <p className="section-label">What this demo represents</p>
            <h2>A CRM built to make sure no property lead is forgotten.</h2>
          </div>

          <div>
            <p>
              This fictional workspace shows how a real estate team can bring
              leads from websites, WhatsApp, Instagram, referrals, and property
              portals into one process—from first enquiry to viewing,
              negotiation, and closing.
            </p>

            <Link
  href="/contact?challenge=crm-erp"
  className="button button-primary"
  onClick={() =>
    track("real_estate_demo_cta_click", {
      location: "demo_bottom_cta",
    })
  }
>
  Request a Free 20-Minute CRM Review
  <span aria-hidden="true">→</span>
</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value, change, accent }) {
  return (
    <article className={`crm-stat-card ${accent}`}>
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{change}</span>
    </article>
  );
}

function LeadWorkspace({
  leads,
  selectedLead,
  onSelectLead,
  onUpdateStatus,
}) {
  return (
    <section className="lead-workspace">
      <div className="lead-workspace-heading">
        <div>
          <p className="section-label">Lead pipeline</p>
          <h2>Track every enquiry from first contact to closing.</h2>
        </div>

        <span>{leads.length} sample leads</span>
      </div>

      <div className="lead-board">
        {pipelineColumns.map((status) => {
          const columnLeads = leads.filter((lead) => lead.status === status);

          return (
            <div className="lead-column" key={status}>
              <div className="lead-column-heading">
                <span>{status}</span>
                <strong>{columnLeads.length}</strong>
              </div>

              <div className="lead-column-list">
                {columnLeads.map((lead) => (
                  <button
                    type="button"
                    className={`lead-card ${
                      selectedLead?.id === lead.id ? "selected" : ""
                    }`}
                    key={lead.id}
                    onClick={() => {
        track("demo_lead_selected", {
            stage: lead.status,
        });

        onSelectLead(lead);
        }}
                  >
                    <div className="lead-card-top">
                      <span>{lead.id}</span>
                      <span className={`priority ${lead.priority.toLowerCase()}`}>
                        {lead.priority}
                      </span>
                    </div>

                    <strong>{lead.name}</strong>
                    <p>{lead.property}</p>

                    <div className="lead-card-footer">
                      <span>{lead.agent}</span>
                      <span>{lead.created}</span>
                    </div>
                  </button>
                ))}

                {columnLeads.length === 0 && (
                  <p className="empty-column">No leads in this stage.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selectedLead && (
        <aside className="lead-detail-card">
          <div className="lead-detail-top">
            <div>
              <p>{selectedLead.id}</p>
              <h3>{selectedLead.name}</h3>
            </div>

            <button type="button" onClick={() => onSelectLead(null)}>
              ×
            </button>
          </div>

          <div className="lead-detail-meta">
            <div>
              <span>Interested in</span>
              <strong>{selectedLead.property}</strong>
            </div>

            <div>
              <span>Budget</span>
              <strong>{selectedLead.budget}</strong>
            </div>

            <div>
              <span>Source</span>
              <strong>{selectedLead.source}</strong>
            </div>

            <div>
              <span>Assigned agent</span>
              <strong>{selectedLead.agent}</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>{selectedLead.phone}</strong>
            </div>

            <div>
              <span>Last contact</span>
              <strong>{selectedLead.lastContact}</strong>
            </div>
          </div>

          <label className="lead-status-control">
            Lead status
            <select
              value={selectedLead.status}
              onChange={(event) =>
                onUpdateStatus(selectedLead.id, event.target.value)
              }
            >
              {pipelineColumns.map((status) => (
                <option value={status} key={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          <div className="lead-detail-actions">
            <button type="button">Add follow-up</button>
            <button type="button">Schedule viewing</button>
          </div>
        </aside>
      )}
    </section>
  );
}