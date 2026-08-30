export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export const socials: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/viktormikeska' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/viktormikeska' },
  { id: 'x', label: 'X (Twitter)', href: 'https://x.com/viktormikeska' },
  { id: 'telegram', label: 'Telegram', href: 'https://t.me/viktormikeska' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@viktormikeska' },
];
