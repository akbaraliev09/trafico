const socials = [
  { name: "Facebook", href: "https://facebook.com", d: "M14 8h-2c-.6 0-1 .4-1 1v2h3l-.5 3H11v7H8v-7H6v-3h2V9a4 4 0 014-4h2z" },
  { name: "Twitter", href: "https://twitter.com", d: "M20 7.5c-.6.3-1.2.4-1.8.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2 .8a3.2 3.2 0 00-5.5 2.9A9 9 0 015 7.200a3.2 3.2 0 001 4.300c-.5 0-1-.2-1.400-.4 0 1.500 1.1 2.800 2.600 3.1-.5.100-.9.100-1.400.1.400 1.300 1.600 2.200 3 2.200A6.400 6.400 0 014 18a9 9 0 0014-8z" },
  { name: "Instagram", href: "https://instagram.com", d: "M8 4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4zm4 4a4 4 0 100 8 4 4 0 000-8zm5-1a1 1 0 100 2 1 1 0 000-2z" },
];

export default function Footer() {
  return (
    <footer className="wrap footer">
      <span>Copyright © {new Date().getFullYear()}</span>
      <div className="socials">
        {socials.map((s) => (
          <a key={s.name} href={s.href} aria-label={s.name} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="#fff" aria-hidden="true"><path d={s.d} /></svg>
          </a>
        ))}
      </div>
    </footer>
  );
}
