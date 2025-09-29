import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/shadcn-io/terminal";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/use-section-reveal";

interface ProjectCommand {
  prompt: string;
  command: string;
  response: string[];
}

interface ProjectEntry {
  id: string;
  label: string;
  description: string;
  github: string;
  commands: ProjectCommand[];
}

const PROJECTS_SECTION_ID = "projects" as const;

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const sectionRef = useSectionReveal<HTMLDivElement>({ y: 120 });


  const entries = useMemo(
    () => t("projects.entries", { returnObjects: true }) as ProjectEntry[],
    [t]
  );

  return (
    <section
      id={PROJECTS_SECTION_ID}
      ref={sectionRef}
      className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-4 py-24 text-center opacity-0"
    >
      <div className="max-w-3xl space-y-6">
        <Badge className="mx-auto rounded-sm border border-white/20 bg-white/10 px-3 py-1.5 font-dot uppercase tracking-[0.36em] text-sm text-white">
          {t("projects.title")}
        </Badge>
        <p className="font-instrument text-lg text-white/70 md:text-2xl">
          {t("projects.subtitle")}
        </p>
      </div>
      <div className="grid w-full gap-8 lg:grid-cols-3 xl:max-w-6xl">
        {entries.map((project) => (
          <article key={project.id} className="flex flex-col gap-4 text-left">
            <div className="space-y-2">
              <h3 className="font-dot text-xl uppercase tracking-[0.28em] text-white">
                {project.label}
              </h3>
              <p className="font-instrument text-base text-white/75">
                {project.description}
              </p>
            </div>
            <Terminal className="border-white/15 bg-background/80">
              {project.commands.map((command, index) => (
                <div key={`${project.id}-${index}`} className="grid gap-2">
                  <TypingAnimation
                    delay={150 * index}
                    className="font-terminal text-[1.05rem] tracking-[0.08em] text-emerald-200"
                  >
                    {`${command.prompt} $ ${command.command}`}
                  </TypingAnimation>
                  {command.response.map((line, lineIndex) => (
                    <AnimatedSpan
                      key={`${command.command}-${lineIndex}`}
                      delay={350 + lineIndex * 120}
                      className="font-terminal text-[1.05rem] tracking-[0.04em] text-white/80"
                    >
                      {line}
                    </AnimatedSpan>
                  ))}
                </div>
              ))}
              <AnimatedSpan delay={project.commands.length * 600 + 400} className="mt-3 text-xs font-terminal">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-terminal text-sm tracking-[0.08em] text-red-300 transition hover:text-red-100"
                >
                  {t("projects.githubLabel")}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </AnimatedSpan>
            </Terminal>
          </article>
        ))}
      </div>
    </section>
  );
};
