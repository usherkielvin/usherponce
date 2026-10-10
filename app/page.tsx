import Image from "next/image";
import { Section, TimelineRow } from "@/components/Section";
import { Sidebar } from "@/components/Sidebar";
import {
  education,
  experience,
  highlights,
  projects,
  site,
  stack,
} from "@/content/site";

export default function Home() {
  const [firstNames, lastName] = [
    site.name.split(" ").slice(0, -1).join(" "),
    site.name.split(" ").slice(-1)[0],
  ];

  return (
    <div id="top">
      <Sidebar />

      <main className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:pl-[calc(15rem+3rem)] lg:pr-12 xl:pr-16">
        {/* Hero */}
        <header className="hero-grid relative isolate flex flex-col pt-16 lg:block pb-14 sm:pt-24 lg:pt-32 lg:pb-20">
          {/* Portrait: black studio background melts into the page */}
          <div className="portrait-mask relative order-last mx-auto mt-12 aspect-square w-full max-w-md lg:absolute lg:inset-y-0 lg:right-[-2rem] lg:mx-0 lg:mt-0 lg:aspect-auto lg:w-[56%] lg:max-w-none">
            <Image
              src="/usher-graded.webp"
              alt={`Portrait of ${site.name}`}
              fill
              priority
              quality={92}
              sizes="(min-width: 1024px) 640px, 90vw"
              className="object-cover object-[50%_15%]"
            />
          </div>

          <div className="relative z-10 lg:max-w-[55%]">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {site.role} <span className="text-faint">/</span> {site.location}
            </p>
            <h1 className="mt-6 text-[clamp(2.75rem,11vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-white lg:text-[clamp(3.5rem,6vw,7rem)]">
              {firstNames}
              <br />
              <span className="text-outline">{lastName}</span>
              <span className="text-white">.</span>
            </h1>

            <div className="mt-10 max-w-md space-y-4 text-lg leading-relaxed text-neutral-300">
              {site.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
              {site.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {link.label} <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>

        {/* Highlights */}
        <ul className="grid border-t border-line sm:grid-cols-3">
          {highlights.map((item, i) => (
            <li
              key={item.title}
              className={`py-6 sm:px-6 sm:first:pl-0 ${
                i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
                {item.caption}
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                {item.title}
              </p>
            </li>
          ))}
        </ul>

        <Section
          id="work"
          index="01"
          title="Selected work"
          note="Systems I designed and built end to end."
        >
          <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
            {projects.map((project, i) => (
              <li
                key={project.name}
                className="group flex flex-col bg-background p-6 transition-colors hover:bg-[#0e0e11] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-5xl font-light text-neutral-800 transition-colors group-hover:text-neutral-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs text-faint">
                    {project.year}
                  </span>
                </div>
                <h3 className="mt-14 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-faint">
                  {project.label}
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-muted">
                  {project.summary}
                </p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-8">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-line px-2 py-1 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" index="02" title="Experience">
          <ul>
            {experience.map((row) => (
              <TimelineRow key={row.org} {...row} />
            ))}
          </ul>
        </Section>

        <Section
          id="education"
          index="03"
          title="Education"
          note="Formal training behind the systems I build."
        >
          <div className="grid gap-px border border-line bg-line md:grid-cols-5">
            <div className="flex flex-col bg-background p-6 sm:p-8 md:col-span-3">
              <div className="flex items-center justify-between gap-4">
                <span className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {education.code}
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-faint">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                  />
                  {education.status}
                </span>
              </div>
              <h3 className="mt-12 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                {education.degree}
              </h3>
              <p className="mt-3 text-lg text-neutral-300">{education.major}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-10">
                {education.focus.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2 py-1 font-mono text-[10px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 md:col-span-2 md:grid-cols-1">
              {[
                ["School", education.school],
                ["Period", education.period],
              ].map(([label, value]) => (
                <div key={label} className="bg-background p-6 sm:p-8">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">
                    {label}
                  </dt>
                  <dd className="mt-2 text-lg font-medium text-white">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section
          id="stack"
          index="04"
          title="Stack"
          note="What I reach for most days."
        >
          <ul className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 xl:grid-cols-4">
            {stack.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-b border-r border-line px-4 py-5 transition-colors hover:bg-[#0e0e11]"
              >
                <span className="font-mono text-[10px] text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] text-neutral-200">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-line py-20 [container-type:inline-size] lg:py-32"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Have a system to build?
          </p>
          <a
            href={`mailto:${site.email}`}
            className="group mt-6 flex items-baseline gap-[0.3em] whitespace-nowrap text-[7.6cqw] font-semibold leading-none tracking-[-0.04em] text-white transition-colors hover:text-muted"
          >
            {site.email}
            <span
              aria-hidden
              className="text-[0.6em] font-light text-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </a>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line py-6 font-mono text-xs text-faint">
          <span>
            © {site.year} {site.name}
          </span>
          <a href="#top" className="hover:text-white transition-colors">
            back to top <span aria-hidden>↑</span>
          </a>
        </footer>
      </main>
    </div>
  );
}
