export const PHONE_RE = /^(\+?61|0)[2-478]\d{8}$/;
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const cleanPhone = (p: string) => p.replace(/[\s()-]/g, "");
