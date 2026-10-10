import { Mail } from "lucide-react";
import { nav, site } from "@/content/site";

export function Sidebar() {
  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur">
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="shrink-0 font-mono text-sm text-white">
            {site.shortName}
          </a>
          <nav className="flex gap-4 overflow-x-auto font-mono text-xs text-muted">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-20 w-60 flex-col border-r border-line bg-background px-7 py-8">
        <a href="#top" className="font-mono text-sm text-white">
          {site.name}
        </a>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">
          {site.role}
        </p>

        <nav className="mt-10 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[13px] text-muted">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ul className="mt-8 flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-muted">
          {site.links
            .filter((link) => link.href.startsWith("http"))
            .map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {link.label} <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
        </ul>

        <div className="mt-auto border-t border-line pt-6">
          <p className="text-xs leading-relaxed text-muted">
            For work, projects &amp; everything else, reach me at
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-white hover:text-muted transition-colors"
          >
            <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {site.email}
          </a>
        </div>
      </aside>
    </>
  );
}
