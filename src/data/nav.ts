export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: '/', label: 'whoami' },
  { href: '/writeups/', label: 'writeups' },
  { href: '/contact/', label: 'contact' },
];
