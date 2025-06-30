import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  color: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "murilosilvamoraes@gmail.com",
    href: "mailto:murilosilvamoraes@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "Telefone",
    value: "(47) 9 9902-3880",
    href: "tel:+5547999023880",
  },
  {
    icon: MapPinIcon,
    label: "Localização",
    value: "Itapema, SC - Brasil",
    href: "#",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/murilo-moraes-3a297222b",
    color: "bg-slate-700 hover:bg-slate-800",
  },
  {
    name: "GitHub",
    url: "https://github.com/MurilosMoraes",
    color: "bg-gray-800 hover:bg-gray-900",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5547999023880",
    color: "bg-green-600 hover:bg-green-700",
  },
];

export interface FooterSocialLink {
  name: string;
  href: string;
  icon: string;
}

export const footerSocialLinks: FooterSocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/MurilosMoraes",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/murilo-moraes-3a297222b",
    icon: "linkedin",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5547999023880",
    icon: "whatsapp",
  },
];
