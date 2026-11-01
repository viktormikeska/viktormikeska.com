export interface SocialLink {
  id: 'github' | 'linkedin' | 'x' | 'telegram' | 'youtube';
  label: string;
  href: string;
}

export const socials: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/viktormikeska' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/viktormikeska' },
  { id: 'x', label: 'X', href: 'https://x.com/viktormikeska' },
  { id: 'telegram', label: 'Telegram', href: 'https://t.me/viktormikeska' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@viktormikeska' },
];

// Base64-encoded so the address never appears as plain text in the shipped
// HTML; it's decoded in the browser by EmailLink.astro.
export const encodedEmail = 'dmlrLm1pa2Vza2FAZ21haWwuY29t';
