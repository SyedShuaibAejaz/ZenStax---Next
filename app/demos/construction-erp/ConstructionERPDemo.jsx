"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

const projects = [
  {
    id: "PRJ-2408",
    name: "Harbor View Residences",
    client: "Harbor View Developments",
    type: "CCTV & Network Upgrade",
    location: "Dubai Marina, Dubai",
    manager: "Omar Ali",
    budget: "AED 485,000",
    spent: "AED 276,400",
    progress: 62,
    status: "In Progress",
    deadline: "18 Oct 2026",
    tasks: 18,
    completedTasks: 11,
    materials: 7,
    invoiced: "AED 242,500",
    receivable: "AED 121,250",
  },
  {
    id: "PRJ-2407",
    name: "Greenline Offices",
    client: "Greenline Properties",
    type: "Structured Cabling & Access Control",
    location: "Business Bay, Dubai",
    manager: "Maya George",
    budget: "AED 320,000",
    spent: "AED 198,750",
    progress: 78,
    status: "In Progress",
    deadline: "04 Oct 2026",
    tasks: 12,
    completedTasks: 10,
    materials: 4,
    invoiced: "AED 240,000",
    receivable: "AED 80,000",
  },
  {
    id: "PRJ-2406",
    name: "Northgate Warehouse",
    client: "Northgate Logistics",
    type: "Security & Network Infrastructure",
    location: "Al Quoz, Dubai",
    manager: "Sarah Khan",
    budget: "AED 640,000",
    spent: "AED 92,400",
    progress: 18,
    status: "Planning",
    deadline: "22 Nov 2026",
    tasks: 21,
    completedTasks: 4,
    materials: 9,
    invoiced: "AED 128,000",
    receivable: "AED 128,000",
  },
];

const workOrders = [
  {
    id: "WO-1094",
    title: "Install Level 3 network cabinets",
    project: "Harbor View Residences",
    assignee: "Network Team A",
    due: "Today",
    status: "In Progress",
    priority: "High",
  },
  {
    id: "WO-1093",
    title: "CCTV camera positioning review",
    project: "Harbor View Residences",
    assignee: "Omar Ali",
    due: "Tomorrow",
    status: "Scheduled",
    priority: "Medium",
  },
  {
    id: "WO-1092",
    title: "Access-control reader testing",
    project: "Greenline Offices",
    assignee: "Security Team B",
    due: "Today",
    status: "Quality Check",
    priority: "High",
  },
  {
    id: "WO-1091",
    title: "Cable tray material inspection",
    project: "Greenline Offices",
    assignee: "Maya George",
    due: "28 Sep",
    status: "Completed",
    priority: "Medium",
  },
  {
    id: "WO-1090",
    title: "Warehouse site survey",
    project: "Northgate Warehouse",
    assignee: "Sarah Khan",
    due: "30 Sep",
    status: "Draft",
    priority: "High",
  },
];

const materialRequests = [
  {
    id: "MR-084",
    project: "Harbor View Residences",
    item: "Cat6A cable — 305m boxes",
    quantity: "24 boxes",
    requestedBy: "Network Team A",
    status: "Awaiting Delivery",
    date: "26 Sep 2026",
  },
  {
    id: "MR-083",
    project: "Greenline Offices",
    item: "HID access-control readers",
    quantity: "16 units",
    requestedBy: "Security Team B",
    status: "Delivered",
    date: "25 Sep 2026",
  },
  {
    id: "MR-082",
    project: "Northgate Warehouse",
    item: "Outdoor IP cameras",
    quantity: "32 units",
    requestedBy: "Sarah Khan",
    status: "Pending Approval",
    date: "24 Sep 2026",
  },
];

const invoices = [
  {
    id: "INV-2038",
    client: "Harbor View Developments",
    project: "Harbor View Residences",
    amount: "AED 121,250",
    due: "30 Sep 2026",
    status: "Due Soon",
  },
  {
    id: "INV-2037",
    client: "Greenline Properties",
    project: "Greenline Offices",
    amount: "AED 80,000",
    due: "12 Oct 2026",
    status: "Open",
  },
  {
    id: "INV-2036",
    client: "Northgate Logistics",
    project: "Northgate Warehouse",
    amount: "AED 128,000",
    due: "22 Sep 2026",
    status: "Overdue",
  },
  {
    id: "INV-2035",
    client: "Greenline Properties",
    project: "Greenline Offices",
    amount: "AED 160,000",
    due: "15 Sep 2026",
    status: "Paid",
  },
];

const projectActivities = [
  {
    title: "Site progress report submitted",
    detail: "Harbor View Residences — Level 3 containment completed.",
    time: "42 min ago",
    type: "report",
  },
  {
    title: "Material request awaiting delivery",
    detail: "MR-084 — Cat6A cable requested by Network Team A.",
    time: "1 hr ago",
    type: "material",
  },
  {
    title: "Work order moved to quality check",
    detail: "WO-1092 — Access-control reader testing.",
    time: "2 hrs ago",
    type: "task",
  },
  {
    title: "Invoice payment overdue",
    detail: "INV-2036 — Northgate Warehouse deposit invoice.",
    time: "3 hrs ago",
    type: "invoice",
  },
];

const workOrderColumns = [
  "Draft",
  "Scheduled",
  "In Progress",
  "Quality Check",
  "Completed",
];

export default function ConstructionERPDemo() {
  const [isDesktopDemo, setIsDesktopDemo] = useState(null);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [selectedWorkOrder, setSelectedWorkOrder] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function checkScreenSize() {
      setIsDesktopDemo(window.innerWidth >= 768);
    }

    checkScreenSize();

    if (window.innerWidth < 768) {
      track("construction_erp_demo_mobile_blocked", {
        viewport_group: "mobile",
      });
    }

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return projects;
    }

    return projects.filter((project) =>
      [
        project.id,
        project.name,
        project.client,
        project.type,
        project.location,
        project.manager,
        project.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(value)
    );
  }, [search]);

  function openProject(project) {
    track("erp_project_selected", {
      project_status: project.status,
    });

    setSelectedProject(project);
  }

  function openWorkOrder(workOrder) {
    track("erp_work_order_selected", {
      work_order_status: workOrder.status,
    });

    setSelectedWorkOrder(workOrder);
  }

  function navigateTo(section) {
    setActiveSection(section);
    setSelectedWorkOrder(null);
  }

  if (isDesktopDemo === null) {
    return (
      <main className="demo-device-loading" aria-label="Loading ERP demo">
        <span className="demo-device-loader" />
      </main>
    );
  }

  if (!isDesktopDemo) {
    return <MobileERPNotice />;
  }

  return (
    <main className="erp-demo-page">
      <div className="demo-notice">
        <div className="demo-notice-inner">
          <span className="demo-notice-dot" />
          <strong>Demo Environment</strong>
          <span>Fictional sample data. Built by ZenStax for demonstration purposes.</span>

          <Link
            href="/contact?challenge=crm-erp"
            className="demo-notice-link"
            onClick={() =>
              track("construction_erp_demo_cta_click", {
                location: "demo_top_notice",
              })
            }
          >
            Request a Free Workflow Review →
          </Link>
        </div>
      </div>

      <section className="erp-shell">
        <aside className="erp-sidebar">
          <Link href="/" className="erp-brand" aria-label="ZenStax home">
            <span className="erp-brand-mark">Z</span>
            <span>
              Zen<span>Stax</span>
            </span>
          </Link>

          <p className="erp-workspace">Apex Build Contracting</p>

          <nav className="erp-nav" aria-label="ERP demo navigation">
            {[
              "Dashboard",
              "Projects",
              "Work Orders",
              "Materials",
              "Site Reports",
              "Invoices",
              "Reports",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className={activeSection === item ? "active" : ""}
                onClick={() => navigateTo(item)}
              >
                <span className="erp-nav-icon">
                  {item === "Dashboard" && "▦"}
                  {item === "Projects" && "▤"}
                  {item === "Work Orders" && "✓"}
                  {item === "Materials" && "◫"}
                  {item === "Site Reports" && "◷"}
                  {item === "Invoices" && "◈"}
                  {item === "Reports" && "▥"}
                </span>
                {item}
              </button>
            ))}
          </nav>

          <div className="erp-sidebar-bottom">
            <div className="erp-user">
              <span className="erp-avatar">ZA</span>
              <div>
                <strong>ZenStax Admin</strong>
                <small>Demo workspace</small>
              </div>
            </div>

            <Link href="/services/crm-erp" className="erp-back-link">
              ← ZenStax CRM & ERP
            </Link>
          </div>
        </aside>

        <section className="erp-main">
          <header className="erp-topbar">
            <div>
              <p className="erp-breadcrumb">Workspace / {activeSection}</p>
              <h1>{activeSection}</h1>
            </div>

            <div className="erp-topbar-actions">
              <label className="erp-search">
                <span>⌕</span>
                <input
                  type="search"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </label>

              <button
                type="button"
                className="erp-primary-button"
                onClick={() => navigateTo("Projects")}
              >
                + Create project
              </button>
            </div>
          </header>

          <div className="erp-content">
            {activeSection === "Dashboard" && (
              <Dashboard
                onViewProjects={() => navigateTo("Projects")}
                onViewWorkOrders={() => navigateTo("Work Orders")}
                onSelectProject={(project) => {
                  openProject(project);
                  navigateTo("Projects");
                }}
              />
            )}

            {activeSection === "Projects" && (
              <ProjectsWorkspace
                projects={filteredProjects}
                selectedProject={selectedProject}
                onSelectProject={openProject}
              />
            )}

            {activeSection === "Work Orders" && (
              <WorkOrdersWorkspace
                selectedWorkOrder={selectedWorkOrder}
                onSelectWorkOrder={openWorkOrder}
              />
            )}

            {activeSection === "Materials" && <MaterialsWorkspace />}

            {activeSection === "Invoices" && <InvoicesWorkspace />}

            {activeSection === "Site Reports" && <SiteReportsWorkspace />}

            {activeSection === "Reports" && <ReportsWorkspace />}
          </div>
        </section>
      </section>

      <section className="demo-sales-section">
        <div className="container demo-sales-grid">
          <div>
            <p className="section-label">What this demo represents</p>
            <h2>From quotation to completion, keep project operations visible.</h2>
          </div>

          <div>
            <p>
              This fictional ERP workspace shows how contractors, engineering
              firms, and project teams can connect projects, work orders,
              materials, site progress, invoices, and receivables in one
              practical workflow.
            </p>

            <Link
              href="/contact?challenge=crm-erp"
              className="button button-primary"
              onClick={() =>
                track("construction_erp_demo_cta_click", {
                  location: "demo_bottom_cta",
                })
              }
            >
              Request a Free 20-Minute Workflow Review
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Dashboard({ onViewProjects, onViewWorkOrders, onSelectProject }) {
  return (
    <>
      <section className="erp-welcome">
        <div>
          <p>Monday, 28 September</p>
          <h2>Project operations, in one view.</h2>
          <span>
            Track projects, work orders, materials, progress, invoices, and
            outstanding receivables.
          </span>
        </div>

        <button
          type="button"
          className="erp-outline-button"
          onClick={onViewProjects}
        >
          View all projects →
        </button>
      </section>

      <section className="erp-stat-grid">
        <ERPStatCard
          label="Active projects"
          value="8"
          change="3 projects need review this week"
          accent="orange"
        />
        <ERPStatCard
          label="Tasks due this week"
          value="14"
          change="4 due today"
          accent="red"
        />
        <ERPStatCard
          label="Material requests"
          value="6"
          change="2 awaiting approval"
          accent="blue"
        />
        <ERPStatCard
          label="Outstanding receivables"
          value="AED 329K"
          change="3 invoices need follow-up"
          accent="green"
        />
      </section>

      <section className="erp-dashboard-grid">
        <div className="erp-panel">
          <div className="erp-panel-heading">
            <div>
              <p>Project health</p>
              <h3>Active project progress</h3>
            </div>

            <button type="button" onClick={onViewProjects}>
              View projects →
            </button>
          </div>

          <div className="erp-project-health-list">
            {projects.map((project) => (
              <button
                type="button"
                className="erp-project-health-item"
                key={project.id}
                onClick={() => onSelectProject(project)}
              >
                <div className="erp-project-health-top">
                  <div>
                    <strong>{project.name}</strong>
                    <span>{project.type}</span>
                  </div>
                  <span className={`erp-project-status ${project.status.toLowerCase().replace(" ", "-")}`}>
                    {project.status}
                  </span>
                </div>

                <div className="erp-project-progress-row">
                  <div className="erp-project-progress-track">
                    <span style={{ width: `${project.progress}%` }} />
                  </div>
                  <strong>{project.progress}%</strong>
                </div>

                <div className="erp-project-health-meta">
                  <span>{project.manager}</span>
                  <span>Target: {project.deadline}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="erp-panel">
          <div className="erp-panel-heading">
            <div>
              <p>Priority actions</p>
              <h3>Needs attention</h3>
            </div>
          </div>

          <div className="erp-attention-list">
            <button type="button" onClick={onViewWorkOrders}>
              <span className="erp-attention-icon urgent">!</span>
              <span>
                <strong>4 work orders due today</strong>
                <small>Review owners, site access, and blockers.</small>
              </span>
              <span>→</span>
            </button>

            <button type="button" onClick={() => onViewProjects()}>
              <span className="erp-attention-icon material">◫</span>
              <span>
                <strong>2 material requests pending</strong>
                <small>Approval is required before purchase.</small>
              </span>
              <span>→</span>
            </button>

            <button type="button" onClick={() => onViewProjects()}>
              <span className="erp-attention-icon invoice">◈</span>
              <span>
                <strong>AED 128K invoice overdue</strong>
                <small>Northgate Warehouse deposit invoice.</small>
              </span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="erp-dashboard-grid erp-lower-grid">
        <div className="erp-panel">
          <div className="erp-panel-heading">
            <div>
              <p>Latest activity</p>
              <h3>Today&apos;s project updates</h3>
            </div>
          </div>

          <div className="erp-activity-list">
            {projectActivities.map((activity) => (
              <div
                className="erp-activity-item"
                key={`${activity.time}-${activity.title}`}
              >
                <span className={`erp-activity-icon ${activity.type}`}>
                  {activity.type === "report" && "▤"}
                  {activity.type === "material" && "◫"}
                  {activity.type === "task" && "✓"}
                  {activity.type === "invoice" && "!"}
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

        <div className="erp-panel">
          <div className="erp-panel-heading">
            <div>
              <p>Receivables</p>
              <h3>Invoice follow-up</h3>
            </div>
          </div>

          <div className="erp-receivable-list">
            {invoices.slice(0, 3).map((invoice) => (
              <div className="erp-receivable-item" key={invoice.id}>
                <div>
                  <strong>{invoice.id}</strong>
                  <span>{invoice.project}</span>
                </div>

                <div>
                  <strong>{invoice.amount}</strong>
                  <span className={`invoice-status ${invoice.status.toLowerCase().replace(" ", "-")}`}>
                    {invoice.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectsWorkspace({ projects, selectedProject, onSelectProject }) {
  return (
    <section className="erp-projects-workspace">
      <div className="erp-workspace-heading">
        <div>
          <p className="section-label">Project portfolio</p>
          <h2>Keep project scope, progress, tasks, and finances connected.</h2>
        </div>

        <span>{projects.length} sample projects</span>
      </div>

      <div className="erp-project-card-grid">
        {projects.map((project) => (
          <button
            type="button"
            className={`erp-project-card ${
              selectedProject?.id === project.id ? "selected" : ""
            }`}
            key={project.id}
            onClick={() => onSelectProject(project)}
          >
            <div className="erp-project-card-top">
              <span>{project.id}</span>
              <span className={`erp-project-status ${project.status.toLowerCase().replace(" ", "-")}`}>
                {project.status}
              </span>
            </div>

            <h3>{project.name}</h3>
            <p>{project.type}</p>

            <div className="erp-project-card-progress">
              <div>
                <span>Project progress</span>
                <strong>{project.progress}%</strong>
              </div>

              <div className="erp-project-progress-track">
                <span style={{ width: `${project.progress}%` }} />
              </div>
            </div>

            <div className="erp-project-card-footer">
              <span>{project.manager}</span>
              <span>{project.deadline}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && <ProjectDetailPanel project={selectedProject} />}
    </section>
  );
}

function ProjectDetailPanel({ project }) {
  return (
    <aside className="erp-project-detail">
      <div className="erp-project-detail-top">
        <div>
          <p>{project.id}</p>
          <h3>{project.name}</h3>
          <span>{project.client}</span>
        </div>

        <span className={`erp-project-status ${project.status.toLowerCase().replace(" ", "-")}`}>
          {project.status}
        </span>
      </div>

      <div className="erp-detail-metrics">
        <div>
          <span>Project type</span>
          <strong>{project.type}</strong>
        </div>
        <div>
          <span>Location</span>
          <strong>{project.location}</strong>
        </div>
        <div>
          <span>Project manager</span>
          <strong>{project.manager}</strong>
        </div>
        <div>
          <span>Target completion</span>
          <strong>{project.deadline}</strong>
        </div>
        <div>
          <span>Budget / spent</span>
          <strong>
            {project.budget} / {project.spent}
          </strong>
        </div>
        <div>
          <span>Open receivable</span>
          <strong>{project.receivable}</strong>
        </div>
      </div>

      <div className="erp-detail-progress">
        <div>
          <strong>Overall progress</strong>
          <span>{project.progress}% complete</span>
        </div>
        <div className="erp-project-progress-track">
          <span style={{ width: `${project.progress}%` }} />
        </div>
      </div>

      <div className="erp-detail-summary-grid">
        <div>
          <strong>
            {project.completedTasks}/{project.tasks}
          </strong>
          <span>Tasks completed</span>
        </div>
        <div>
          <strong>{project.materials}</strong>
          <span>Material requests</span>
        </div>
        <div>
          <strong>{project.invoiced}</strong>
          <span>Invoiced to date</span>
        </div>
      </div>

      <div className="erp-detail-actions">
        <button type="button">Open work orders</button>
        <button type="button">Add site report</button>
      </div>
    </aside>
  );
}

function WorkOrdersWorkspace({ selectedWorkOrder, onSelectWorkOrder }) {
  return (
    <section className="erp-work-orders-workspace">
      <div className="erp-workspace-heading">
        <div>
          <p className="section-label">Work order board</p>
          <h2>Give every site task an owner, due date, and clear stage.</h2>
        </div>

        <span>{workOrders.length} sample work orders</span>
      </div>

      <div className="erp-work-order-board">
        {workOrderColumns.map((status) => {
          const columnOrders = workOrders.filter(
            (workOrder) => workOrder.status === status
          );

          return (
            <div className="erp-work-order-column" key={status}>
              <div className="erp-work-order-column-heading">
                <span>{status}</span>
                <strong>{columnOrders.length}</strong>
              </div>

              <div className="erp-work-order-column-list">
                {columnOrders.map((workOrder) => (
                  <button
                    type="button"
                    className={`erp-work-order-card ${
                      selectedWorkOrder?.id === workOrder.id ? "selected" : ""
                    }`}
                    key={workOrder.id}
                    onClick={() => onSelectWorkOrder(workOrder)}
                  >
                    <div className="erp-work-order-card-top">
                      <span>{workOrder.id}</span>
                      <span className={`priority ${workOrder.priority.toLowerCase()}`}>
                        {workOrder.priority}
                      </span>
                    </div>

                    <strong>{workOrder.title}</strong>
                    <p>{workOrder.project}</p>

                    <div className="erp-work-order-card-footer">
                      <span>{workOrder.assignee}</span>
                      <span>{workOrder.due}</span>
                    </div>
                  </button>
                ))}

                {columnOrders.length === 0 && (
                  <p className="empty-column">No work orders in this stage.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selectedWorkOrder && (
        <aside className="erp-work-order-detail">
          <p>{selectedWorkOrder.id}</p>
          <h3>{selectedWorkOrder.title}</h3>
          <span>{selectedWorkOrder.project}</span>

          <div>
            <strong>Assigned to</strong>
            <p>{selectedWorkOrder.assignee}</p>
          </div>

          <div>
            <strong>Due date</strong>
            <p>{selectedWorkOrder.due}</p>
          </div>

          <div>
            <strong>Status</strong>
            <p>{selectedWorkOrder.status}</p>
          </div>
        </aside>
      )}
    </section>
  );
}

function MaterialsWorkspace() {
  return (
    <section className="erp-table-workspace">
      <div className="erp-workspace-heading">
        <div>
          <p className="section-label">Materials & purchasing</p>
          <h2>Track what each project needs before site work is delayed.</h2>
        </div>

        <button type="button" className="erp-primary-button">
          + Material request
        </button>
      </div>

      <div className="erp-table-panel">
        <table>
          <thead>
            <tr>
              <th>Request</th>
              <th>Project</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Requested by</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {materialRequests.map((request) => (
              <tr key={request.id}>
                <td>
                  <strong>{request.id}</strong>
                  <span>{request.date}</span>
                </td>
                <td>{request.project}</td>
                <td>{request.item}</td>
                <td>{request.quantity}</td>
                <td>{request.requestedBy}</td>
                <td>
                  <span className={`material-status ${request.status.toLowerCase().replaceAll(" ", "-")}`}>
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function InvoicesWorkspace() {
  return (
    <section className="erp-table-workspace">
      <div className="erp-workspace-heading">
        <div>
          <p className="section-label">Invoices & receivables</p>
          <h2>Keep progress billing and payment follow-up visible.</h2>
        </div>

        <button type="button" className="erp-primary-button">
          + Create invoice
        </button>
      </div>

      <div className="erp-table-panel">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Client</th>
              <th>Project</th>
              <th>Amount</th>
              <th>Due date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>
                  <strong>{invoice.id}</strong>
                </td>
                <td>{invoice.client}</td>
                <td>{invoice.project}</td>
                <td>
                  <strong>{invoice.amount}</strong>
                </td>
                <td>{invoice.due}</td>
                <td>
                  <span className={`invoice-status ${invoice.status.toLowerCase().replace(" ", "-")}`}>
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SiteReportsWorkspace() {
  return (
    <section className="erp-report-workspace">
      <div className="erp-workspace-heading">
        <div>
          <p className="section-label">Site progress reports</p>
          <h2>Capture completed work, blockers, and next actions from site.</h2>
        </div>

        <button type="button" className="erp-primary-button">
          + New site report
        </button>
      </div>

      <div className="erp-site-report-grid">
        <article>
          <div className="erp-site-report-top">
            <span>SR-043</span>
            <span>Today, 10:20 AM</span>
          </div>
          <h3>Harbor View Residences</h3>
          <p>Level 3 cable containment completed. Network cabinet installation is in progress.</p>
          <div>
            <span className="report-tag completed">Completed: Containment</span>
            <span className="report-tag blocker">Blocker: Ceiling access approval</span>
          </div>
        </article>

        <article>
          <div className="erp-site-report-top">
            <span>SR-042</span>
            <span>Yesterday, 4:10 PM</span>
          </div>
          <h3>Greenline Offices</h3>
          <p>Access-control devices installed. Reader testing moved to quality check.</p>
          <div>
            <span className="report-tag completed">Completed: Device installation</span>
            <span className="report-tag action">Next: Client testing</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function ReportsWorkspace() {
  return (
    <section className="erp-report-workspace">
      <div className="erp-workspace-heading">
        <div>
          <p className="section-label">Management reporting</p>
          <h2>See project progress, risk, spending, and collections in one place.</h2>
        </div>
      </div>

      <div className="erp-report-card-grid">
        <article>
          <p>Project completion</p>
          <strong>62%</strong>
          <span>Average progress across active projects</span>
        </article>
        <article>
          <p>Budget used</p>
          <strong>58%</strong>
          <span>Across active construction projects</span>
        </article>
        <article>
          <p>On-time tasks</p>
          <strong>76%</strong>
          <span>Tasks completed on or before target date</span>
        </article>
        <article>
          <p>Receivable at risk</p>
          <strong>AED 128K</strong>
          <span>Invoice overdue and requiring follow-up</span>
        </article>
      </div>

      <div className="erp-report-note">
        <span>◈</span>
        <div>
          <strong>Demo reporting view</strong>
          <p>
            A production ERP can include project-cost reports, material spend,
            purchase approvals, manpower utilisation, invoice ageing, and
            management-specific dashboards.
          </p>
        </div>
      </div>
    </section>
  );
}

function ERPStatCard({ label, value, change, accent }) {
  return (
    <article className={`erp-stat-card ${accent}`}>
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{change}</span>
    </article>
  );
}

function MobileERPNotice() {
  return (
    <main className="demo-device-page">
      <section className="demo-device-card">
        <Link href="/" className="demo-device-brand" aria-label="ZenStax home">
          <span className="demo-device-brand-mark">Z</span>
          <span>
            Zen<span>Stax</span>
          </span>
        </Link>

        <div className="demo-device-icon" aria-hidden="true">
          <span className="demo-device-monitor" />
          <span className="demo-device-phone" />
        </div>

        <p className="section-label">Desktop demo experience</p>

        <h1>This ERP demo works best on a larger screen.</h1>

        <p>
          The interactive Construction & Project Operations ERP is designed
          for desktop and tablet screens, where you can clearly explore
          projects, work orders, materials, site reports, and receivables.
        </p>

        <div className="demo-device-minimum">
          <span>✓</span>
          Use a desktop or tablet screen at least 768px wide
        </div>

        <div className="demo-device-actions">
          <Link href="/services/crm-erp" className="button button-primary">
            Explore CRM & ERP Services
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="/contact?challenge=crm-erp"
            className="button button-secondary"
          >
            Request a Workflow Review
          </Link>
        </div>

        <p className="demo-device-note">
          This is a fictional ZenStax demo environment. No real project,
          client, financial, or company data is shown.
        </p>
      </section>
    </main>
  );
}