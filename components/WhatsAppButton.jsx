import { FaWhatsapp } from "react-icons/fa";
import TrackedWhatsAppLink from "./TrackedWhatsAppLink";

export default function WhatsAppButton() {
  const phoneNumber = "971521302565";

  const message =
    "Hi ZenStax, I would like to discuss a software, automation, CRM/ERP, network, or security requirement.";

  return (
    <TrackedWhatsAppLink
      className="whatsapp-button"
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      location="main_header"
      aria-label="Chat with ZenStax on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" aria-hidden="true" />
      <span className="whatsapp-label">WhatsApp Us</span>
    </TrackedWhatsAppLink>
  );
}