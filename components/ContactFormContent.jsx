"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";
import { FaWhatsapp } from "react-icons/fa";

const challengeMessages = {
  "customer-follow-ups":
    "I would like help improving customer follow-ups, reminders, and response times.",

  "manual-work":
    "I would like help reducing manual work and improving business workflows.",

  "business-visibility":
    "I would like help getting clearer visibility over operations, tasks, records, and reporting.",

  "website-or-app":
    "I would like to discuss a website, customer portal, or mobile application for my business.",

  "crm-erp":
    "I would like to discuss a CRM or ERP system for managing customers, sales, projects, tasks, and operations.",

  "network-security":
    "I would like help with network infrastructure, structured cabling, CCTV, or security-system requirements.",
};

const serviceMapping = {
  "customer-follow-ups": "AI automation",
  "manual-work": "AI automation",
  "business-visibility": "CRM / ERP",
  "website-or-app": "Custom software",
  "crm-erp": "CRM / ERP",
  "network-security": "Network / security systems",
};

export default function ContactFormContent() {
  const searchParams = useSearchParams();
  const challenge = searchParams.get("challenge");

  const [state, handleSubmit] = useForm("mgaegnyk");

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const whatsappNumber = "971521302565";

  const whatsappMessage =
    "Hi ZenStax, I would like to discuss a software, automation, CRM/ERP, network, or security requirement.";

  useEffect(() => {
    if (!challengeMessages[challenge]) {
      return;
    }

    setForm((currentForm) => ({
      ...currentForm,
      service: serviceMapping[challenge] || currentForm.service,
      message: challengeMessages[challenge],
    }));
  }, [challenge]);

  function updateField(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  if (state.succeeded) {
    return (
      <>
        <section className="page-hero">
          <div className="container page-hero-content">
            <p className="eyebrow">Enquiry received</p>

            <h1>
              Thank you for contacting
              <span> ZenStax.</span>
            </h1>

            <p>
              Your enquiry has been sent successfully. We will review your
              details and respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="success-card">
              <span className="success-icon">✓</span>

              <h2>Your enquiry is on its way.</h2>

              <p>
                Thank you for sharing your requirement. Our team will review
                it and contact you using the details you provided.
              </p>

              <a
                className="button button-primary"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Contact ZenStax</p>

          <h1>
            Tell us what is slowing
            <span> your business down.</span>
          </h1>

          <p>
            Share your challenge, current workflow, or project idea. We will
            help you identify a clear and practical next step.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-intro">
            <p className="section-label">Start a conversation</p>

            <h2>Let&apos;s discuss your requirements.</h2>

            <p>
              Whether you need software, AI automation, CRM/ERP, a mobile app,
              network infrastructure, CCTV, or security support, send us the
              details and we will review the best next step.
            </p>

            <div className="contact-details">
              <div>
                <span>Email</span>
                <a href="mailto:hello@zenstaxit.net">
                  contactus@zenstaxit.net
                </a>
              </div>

              <div>
                <span>Location</span>
                <p>Ajman, United Arab Emirates</p>
              </div>

              <div>
                <span>Prefer WhatsApp?</span>
                <a
                  className="contact-whatsapp-link"
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp aria-hidden="true" />
                  Chat with ZenStax
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </label>

              <label>
                Company name
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={updateField}
                  placeholder="Your company"
                  autoComplete="organization"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </label>

              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="+971 50 000 0000"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label>
              What do you need help with?
              <select
                name="service"
                value={form.service}
                onChange={updateField}
                required
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="Custom software">Custom software</option>
                <option value="AI automation">AI automation</option>
                <option value="CRM / ERP">CRM / ERP</option>
                <option value="Mobile app">Mobile app</option>
                <option value="Network / security systems">
                  Network / security systems
                </option>
                <option value="Other requirement">Other requirement</option>
              </select>
            </label>

            <label>
              Project details
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={updateField}
                placeholder="Briefly describe your current workflow, challenge, or project idea."
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </label>

            {state.errors && (
              <p className="form-error">
                We could not send your enquiry. Please check the fields and try
                again, or contact us through WhatsApp.
              </p>
            )}

            <button
              type="submit"
              className="button button-primary"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending enquiry..." : "Send Enquiry"}
              {!state.submitting && <span aria-hidden="true">→</span>}
            </button>

            <p className="form-note">
              Your details are used only to respond to this enquiry.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}