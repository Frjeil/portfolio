export const resources = {
  en: {
    translation: {
      nav: {
        brand: "FB",
        sections: {
          hero: "Home",
          skills: "Skills",
          projects: "Projects",
          contact: "Contact",
        },
        cta: "Download CV",
        language: {
          label: "Language",
          en: "English",
          it: "Italiano",
        },
        menu: "Menu",
      },
      hero: {
        title: "Your go-to Full-Stack developer.",
        subtitle: "Fast, insightful, and reliable.",
        primaryCta: "Get in touch",
        secondaryCta: "Browse the projects",
        footnotePrimary: "Junior Full-Stack Developer",
        footnoteSecondary: "Aspiring Junior Graphic Designer",
      },
      skills: {
        title: "Tailored experience across the stack",
        subtitle:
          "Pixel-precise frontends, resilient backends, and toolchains that let clients ship web solutions without friction.",
        cards: [
          {
            key: "frontend",
            title: "Frontend",
            description:
              "Modern interfaces with React, Mantine, ShadCN, and cinematic motion powered by GSAP and Framer.",
            items: ["React", "TypeScript", "PHP", "ShadCN", "Mantine", "MapLibre"],
          },
          {
            key: "backend",
            title: "Backend",
            description:
              "APIs and services with Node.js, edge-ready deployments, and production-grade observability.",
            items: ["Node.js", "Django", "Laravel", "Spring"],
          },
          {
            key: "utility",
            title: "Utility",
            description:
              "Automating repetitive flows with containers and custom CLIs, safe versioning, and best practices followed to the letter.",
            items: ["Docker", "Git", "Biome", "FileZilla"],
          },
          {
            key: "misc",
            title: "Miscellaneous",
            description:
              "Tools and resources for creative work.",
            items: ["Adobe CC", "Google Workspace", "Microsoft 365", "Notion", "Figma"],
          },
        ],
      },
      projects: {
        title: "Selected projects",
        subtitle:
          "Terminals straight from production — curated highlights of launched and scaled products.",
        githubLabel: "View on GitHub",
        entries: [
          {
            id: "launchpad",
            label: "Cloistr.live",
            description: "Web platform that helps students find available study rooms.",
            github: "https://github.com/frjeil/cloistr",
            commands: [
              {
                prompt: "~/cloistr.live",
                command: "npm run ship",
                response: [
                  "Executing API calls…",
                  "Delivering an unforgettable user experience…",
                  "Growing new communities…",
                  "✅ Deployed to production in 2m50s!",
                ],
              },
            ],
          },
          {
            id: "atelier",
            label: "Portfolio",
            description: "Personal portfolio built with React, Vite, and ShadCN.",
            github: "https://github.com/frjeil/portfolio",
            commands: [
              {
                prompt: "~/portfolio",
                command: "npm run dev",
                response: [
                  "Compiling skills and projects…",
                  "Optimizing animations and components…",
                  "Searching for typos...",
                  "📨 Sending resumes worldwide…",
                ],
              },
            ],
          },
          {
            id: "omniops",
            label: "Spring Forum Backend",
            description: "Backend development for a forum with multiple entity relationships.",
            github: "https://github.com/royal/spring-forum-backend",
            commands: [
              {
                prompt: "~/spring-forum-backend",
                command: "docker compose up --build",
                response: [
                  "Testing Postman collections…",
                  "Publishing new comments…",
                  "🧵 Monitoring discussions in real time…",
                ],
              },
            ],
          },
        ],
      },
      contact: {
        title: "Let’s build the next project together",
        subtitle:
          "Hit me up for collaborations, advice, or to design experience-first products.",
        links: {
          github: "GitHub",
          linkedin: "LinkedIn",
          email: "Email",
        },
      },
    },
  },
  it: {
    translation: {
      nav: {
        brand: "FB",
        sections: {
          hero: "Home",
          skills: "Competenze",
          projects: "Progetti",
          contact: "Contatti",
        },
        cta: "Scarica il CV",
        language: {
          label: "Lingua",
          en: "Inglese",
          it: "Italiano",
        },
        menu: "Menu",
      },
      hero: {
        // badge: "Vite · React · GSAP",
        title: "Il tuo sviluppatore Full-Stack di fiducia.",
        subtitle:
          "Rapido, perspicace e affidabile.",
        primaryCta: "Contattami",
        secondaryCta: "Dai un'occhiata ai progetti",
        footnotePrimary: "Junior Full-Stack Developer",
        footnoteSecondary: "Aspirante Junior Graphic Designer",
        /* stats: [
          { label: "Anni di interfacce immersive", value: "6+" },
          { label: "Design system consegnati", value: "12" },
          { label: "Team abilitati", value: "8" },
        ], */
      },
      skills: {
        title: "Esperienza curata su tutto lo stack",
        subtitle:
          "Frontend millimetrico, backend resilienti e toolchain che permettono al cliente di rilasciare soluzioni web senza attriti.",
        cards: [
          {
            key: "frontend",
            title: "Frontend",
            description:
              "Interfacce moderne con React, Mantine, ShadCN e motion cinematografici alimentati da GSAP e Framer.",
            items: ["React", "TypeScript", "PHP", "ShadCN", "Mantine", "MapLibre"],
          },
          {
            key: "backend",
            title: "Backend",
            description:
              "API e servizi con Node.js, deployment edge-ready e osservabilità a prova di produzione.",
            items: ["Node.js", "Django", "Laravel", "Spring"],
          },
          {
            key: "utility",
            title: "Strumenti ausiliari",
            description:
              "Automazione dei flussi ripetitivi con container e CLI personalizzate, versioning sicuro e best practices seguite alla lettera.",
            items: ["Docker", "Git", "Biome", "FileZilla"],
          },
          {
            key: "misc",
            title: "Varie",
            description:
              "Strumenti e risorse per il lavoro creativo.",
            items: ["Adobe CC", "Google Workspace", "Microsoft 365", "Notion", "Figma"],
          },
        ],
      },
      projects: {
        title: "Progetti selezionati",
        subtitle:
          "Terminali direttamente dalla produzione — highlight curati di prodotti lanciati e scalati.",
        githubLabel: "Apri su GitHub",
        entries: [
          {
            id: "launchpad",
            label: "Cloistr.live",
            description: "Piattaforma web che supporta lo studente nella ricerca di aule studio libere.",
            github: "https://github.com/frjeil/cloistr",
            commands: [
              {
                prompt: "~/cloistr.live",
                command: "npm run ship",
                response: [
                  "Effettuando chiamate API...",
                  "Offrendo una user experience indimenticabile...",
                  "Creando nuove community...",
                  "✅ Deploy in produzione in 2m50s!",
                ],
              },
            ],
          },
          {
            id: "atelier",
            label: "Portfolio",
            description: "Portfolio personale sviluppato con React, Vite e ShadCN/UI.",
            github: "https://github.com/frjeil/portfolio",
            commands: [
              {
                prompt: "~/portfolio",
                command: "npm run dev",
                response: [
                  "Compilando competenze e progetti...",
                  "Ottimizzando animazioni e componenti...",
                  "Cercando errori di battitura...",
                  "📨 Spedendo curricula in tutto il mondo!",
                ],
              },
            ],
          },
          {
            id: "omniops",
            label: "Forum Spring Backend",
            description: "Sviluppo backend di un forum con multiple relazioni tra entità.",
            github: "https://github.com/royal/spring-forum-backend",
            commands: [
              {
                prompt: "~/spring-forum-backend",
                command: "docker compose up --build",
                response: [
                  "Testando la collection di Postman...",
                  "Pubblicando nuovi commenti...",
                  "🧵 Monitorando discussioni in tempo reale!",
                ],
              },
            ],
          },
        ],
      },
      contact: {
        title: "Costruiamo insieme il prossimo progetto",
        subtitle:
          "Scrivimi per collaborazioni, consigli o per progettare prodotti experience-first.",
        links: {
          github: "GitHub",
          linkedin: "LinkedIn",
          email: "Email",
        },
      },
    },
  },
} as const;

export type AppLanguage = keyof typeof resources;
