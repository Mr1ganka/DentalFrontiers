import { clinicConfig } from "../config/clinic";

export function getWhatsAppUrl(message?: string) {
  const number = clinicConfig.whatsapp.replace(/[^0-9]/g, "");
  const defaultMessage = clinicConfig.whatsappMessage;
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}
