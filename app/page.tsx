import Image from "next/image";
import { ParticleField } from "@/components/particle-field";
import {
  ecosystemProjects,
  featuredProjects,
  quickLinks,
  studioPillars,
} from "@/lib/projects";

const projectButtonClassName =
  "inline-flex h-10 items-center rounded-lg border border-white/12 bg-white/7 px-3.5 text-sm font-medium text-white transition hover:border-white/28 hover:bg-white hover:!text-black hover:[&_*]:!text-black";

export default function Home() {
  const totalStars = 2000;

  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <ParticleField />
      <div className="noise pointer-events-none fixed inset-0 -z-20 opacity-55" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-24 sm:opacity-30">
        <Image
          src="/brand/logo.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="brand-backdrop-image object-contain"
        />
      </div>
      <section className="relative mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-20 sm:px-8 lg:px-10">
        <div className="relative z-10 max-w-4xl">
          <div className="mb-2 inline-flex text-xl font-semibold text-white sm:text-2xl">
            人工智能，时间和爱。
          </div>

          <h1 className="max-w-5xl text-balance text-[clamp(4.25rem,14vw,12.5rem)] font-black leading-[0.82] tracking-normal">
            Aimes
            <span className="block text-white/84">Soft</span>
          </h1>

          <p className="mt-8 max-w-2xl text-balance text-lg leading-8 text-white sm:text-xl">
            独立软件工作室，专注媒体系统、创作工具、跨平台原生框架与 agent 基础设施。
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <TextLink href="/research/zh/" label="AimesSoft Research" />
            <TextLink href="https://bern.aimes-soft.com" label="Bern" />
            <TextLink href="https://github.com/AimesSoft" label="GitHub" />
          </div>
        </div>

        <div className="relative z-10 mt-10 grid grid-cols-[repeat(2,max-content)] gap-x-8 gap-y-5 sm:grid-cols-[repeat(4,max-content)] sm:gap-x-12">
          <Metric label="开源项目" value="15+" />
          <Metric label="GitHub Stars" value={`${totalStars}+`} />
          <Metric label="研究与方向" value="Media & Agent" />
          <Metric label="核心栈" value="Rust / Flutter" />
        </div>
      </section>

      <section
        id="projects"
        className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10"
      >
        <SectionHeading
          eyebrow="Projects"
          title="正在打磨的核心作品"
          text="从播放器到创作工具，Aimes Soft 的项目更像一套相互连接的产品生态，而不是彼此孤立的仓库。"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => {
            return (
              <article
                key={project.name}
                className="project-panel group overflow-hidden rounded-lg"
              >
                <div className="grid min-h-full md:grid-cols-[1.02fr_0.98fr]">
                  <div className="flex min-h-[390px] flex-col p-6 sm:p-7">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-white">
                        {project.category}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-normal">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-base font-medium text-white">
                        {project.subtitle}
                      </p>
                      <p className="mt-5 text-sm leading-7 text-white">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/12 bg-white/6 px-2.5 py-1 text-xs text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-7">
                      <div className="mb-5 grid gap-2 text-sm text-white sm:grid-cols-3">
                        {project.highlights.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <span
                              className="h-px w-5 shrink-0"
                              style={{ backgroundColor: project.accent }}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <TextLink href={project.repo} label="Repository" />
                        {project.website ? (
                          <TextLink href={project.website} label="官网入口" />
                        ) : null}
                        <span className={projectButtonClassName}>
                          <span>Stars {project.stars}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <ProjectPreview project={project} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Studio"
          title="工作室的技术方向"
          text="Aimes Soft 的工程选择偏向可迁移、可扩展和长周期维护，产品视觉则保持克制、清晰和可连续使用。"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {studioPillars.map((pillar, index) => {
            return (
              <article
                key={pillar.title}
                className="glass-panel rounded-lg p-6"
              >
                <div className="mb-8 text-sm font-semibold uppercase tracking-[0.24em] text-white">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white">
                  {pillar.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeading
              eyebrow="Frameworks & Core"
              title="框架、内核与生态"
              text="除终端应用外，我们也维护跨平台原生 UI 框架、播放内核与插件生态。"
            />
          </div>

          <div className="grid gap-3">
            {ecosystemProjects.map((project) => {
              return (
                <a
                  key={project.name}
                  href={project.website ?? project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel group grid gap-4 rounded-lg p-5 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white">
                        {project.subtitle}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white">
                      {project.description}
                    </p>
                  </div>
                  <span className="self-start rounded-md border border-white/10 px-2.5 py-1 text-xs uppercase tracking-[0.18em] text-white transition group-hover:border-white/24">
                    Open
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="glass-panel grid items-center gap-6 rounded-lg p-7 sm:p-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-white">
              Research
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              AimesSoft Research
            </h2>
            <p className="mt-4 text-base leading-7 text-white">
              发布我们在真实软件中的技术报告、工程笔记与实验记录，涵盖由 agent 操作的软件、agent 基础设施、媒体系统与原生框架。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <TextLink href="/research/zh/" label="进入 Research" />
            <TextLink
              href="/research/zh/tr-2026-01/"
              label="AIMESSOFT-TR-2026-01"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="glass-panel grid overflow-hidden rounded-lg lg:grid-cols-[1fr_auto]">
          <div className="p-7 sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-white">
              Connect
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-5xl">
              关注 Aimes Soft 的下一次发布。
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <TextLink key={link.href} href={link.href} label={link.label} />
              ))}
              <TextLink href="mailto:contact@aimes-soft.com" label="Email" />
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden border-t border-transparent bg-transparent lg:w-[360px] lg:border-l lg:border-t-0">
            <Image
              src="/brand/logo2.webp"
              alt="Aimes Soft"
              fill
              sizes="360px"
              className="object-contain p-12 opacity-90"
            />
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-10 text-sm text-white sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>© 2026 Aimes Soft</p>
        <p>Artificial Intelligence, Time and Love.</p>
      </footer>
    </main>
  );
}

function TextLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={projectButtonClassName}
    >
      <span>{label}</span>
    </a>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white">
        {label}
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-white">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-normal sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-white">{text}</p>
    </div>
  );
}

function ProjectPreview({
  project,
}: {
  project: (typeof featuredProjects)[number];
}) {
  return (
    <div className="project-frame relative flex min-h-72 items-center justify-center overflow-hidden border-t border-transparent p-8 md:border-l md:border-t-0">
      <div
        className="absolute inset-x-10 top-10 h-px"
        style={{ backgroundColor: project.accent }}
      />
      <div className="grid w-full max-w-sm gap-3">
        {project.highlights.map((item, index) => (
          <div
            key={item}
            className="rounded-lg border border-white/12 bg-black/34 p-4"
            style={{
              transform: `translateX(${index % 2 === 0 ? 0 : 22}px)`,
            }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
              <span className="text-xs uppercase tracking-[0.18em] text-white">
                {project.category}
              </span>
            </div>
            <p className="text-lg font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
