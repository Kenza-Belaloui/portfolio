import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import immoImg from "./assets/agence_immobiliere.png";
import quickImg from "./assets/quick-liv.png";
import portfolioImg from "./assets/portfolio.png";
import geographieImg from "./assets/geographie.png";
import imageImg from "./assets/image.png";
import {
  Home,
  GraduationCap,
  Sparkles,
  FolderGit2,
  Mail,
  Moon,
  Sun,
  Languages,
  Github,
  Linkedin,
} from "lucide-react";
import "./App.css";

// ✅ Mets tes liens ici
const LINKS = {
  github: "https://github.com/Kenza-Belaloui",
  linkedin: "https://www.linkedin.com/in/kenza-belaloui-865476388/",
  email: "mailto:kenzabelaloui6@gmail.com",
};

// ✅ Mets ta photo: src/assets/kenza.jpg (ou png) puis remplace l’URL par ton import si tu veux.
const kenzaPhoto = imageImg;

// ✅ Images projets (remplace par tes images)
// Option A: mets des liens
// Option B: mets des images dans /src/assets et importe-les (ex: import quicklivImg from "./assets/quickliv.jpg")
const PROJECT_IMAGES = {
  quickliv: quickImg,
  immo: immoImg,
  portfolio: portfolioImg,
  viewmusic: geographieImg,
};

const TEXT = {
  fr: {
    portfolio: "Portfolio",
    nav: {
      home: "Accueil",
      journey: "Parcours",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      name: "Kenza BELALOUI",
      role: "Étudiante — Dev Data & IA",
      bio:
        "Passionnée par le développement et la data, j’aime construire des produits propres, élégants et utiles — du front au backend, jusqu’à la partie IA.",
      cta1: "Voir mes projets",
      cta2: "Me contacter",
    },
    journey: {
      title: "Parcours",
      subtitle: "Formation & expériences",
      items: [
        {
          date: "2023",
          title: "Diplôme Créateur de site web",
          org: "Institut Algerian Training Services — Béjaïa",
        },
        {
          date: "2024–2025",
          title: "Licence en Informatique",
          org: "Université Abderrahmane Mira — Béjaïa",
        },
        {
          date: "2024",
          title: "Stage pratique",
          org: "SARL K SHIPS / ALGERIAN STAR (KALSTAR)",
        },
        {
          date: "2025-2026",
          title: "Bachelor 3 — Dev Data & IA",
          org: "ECE (École d’ingénieurs)",
        },
      ],
    },
    skills: {
      title: "Compétences",
      groups: [
        { title: "Frontend", items: ["HTML", "CSS", "React"] },
        { title: "Backend", items: ["Express.js"] },
        { title: "Logiciels / Desktop", items: ["Java", "Swing", "JavaFX"] },
        { title: "Mobile", items: ["Flutter", "Dart"] },
        { title: "Bases de données", items: ["MySQL", "SQLite", "NoSQL"] },
        { title: "Langages", items: ["C", "PHP", "Laravel"] },
        { title: "Data & IA", items: ["Python", "Scraping", "Traitement", "Visualisation", "Streamlit"] },
        { title: "Gestion", items: ["Jira", "Gantt"] },
        { title: "Design", items: ["Figma"] },
        { title: "DevOps", items: ["Git", "Linux"] },
      ],
    },
    projects: {
      title: "Projets",
      btnCode: "Code",
      btnDemo: "Détails",
      list: [
        {
          key: "quickliv",
          title: "QuickLiv",
          desc:
            "App mobile d’achat & livraison (L3) — Flutter + Node/Express + temps réel.",
          tech: ["Flutter", "Dart", "Node", "Express", "Socket.io", "JWT", "Maps API"],
          link: "https://github.com/Kenza-Belaloui/Quick-Liv",
          image: PROJECT_IMAGES.quickliv,
        },
        {
          key: "immo",
          title: "Agence immobilière (Desktop)",
          desc:
            "Gestion complète d’une agence : biens, clients, employés, contrats, RDV.",
          tech: ["Java Swing", "MySQL", "MVC"],
          link: "https://github.com/Kenza-Belaloui/Agence-immobiliere",
          image: PROJECT_IMAGES.immo,
        },
        {
          key: "portfolio",
          title: "Portfolio interactif",
          desc:
            "Version pro : thème clair/sombre, FR/EN, animations, UI moderne.",
          tech: ["React", "CSS", "Framer Motion"],
          link: "https://github.com/Kenza-Belaloui/portfolio",
          image: PROJECT_IMAGES.portfolio,
        },
        {
          key: "viewmusic",
          title: "Geographie musicale",
          desc:
            "Analyse & prédiction de tendances (Apple Music + Spotify) + dashboards.",
          tech: ["Python", "SQL", "Streamlit", "ML"],
          link: "https://github.com/Kenza-Belaloui/geographie_musicale",
          image: PROJECT_IMAGES.viewmusic,
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Cliques sur une carte pour ouvrir directement.",
      cards: [
        { title: "Email", value: "Envoyer un mail", href: LINKS.email, icon: "mail" },
        { title: "LinkedIn", value: "Voir mon profil", href: LINKS.linkedin, icon: "linkedin" },
        { title: "GitHub", value: "Voir mes repos", href: LINKS.github, icon: "github" },
      ],
    },
  },
  en: {
    portfolio: "Portfolio",
    nav: {
      home: "Home",
      journey: "Journey",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      name: "Kenza BELALOUI",
      role: "Student — Data & AI Dev",
      bio:
        "Passionate about software and data, I build clean, elegant and useful products — from frontend to backend, up to AI.",
      cta1: "See projects",
      cta2: "Contact me",
    },
    journey: {
      title: "Journey",
      subtitle: "Education & experience",
      items: [
        { date: "2023", title: "Website Creator Diploma", org: "Algerian Training Services — Bejaia" },
        { date: "2024–2025", title: "BSc in Computer Science", org: "Abderrahmane Mira University — Bejaia" },
        { date: "2024", title: "Internship", org: "SARL K SHIPS / ALGERIAN STAR (KALSTAR)" },
        { date: "2025-2026", title: "Bachelor Year 3 — Data & AI Dev", org: "ECE (Engineering School)" },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Only your stack",
      groups: [
        { title: "Frontend", items: ["HTML", "CSS", "React"] },
        { title: "Backend", items: ["Express.js"] },
        { title: "Desktop", items: ["Java", "Swing", "JavaFX"] },
        { title: "Mobile", items: ["Flutter", "Dart"] },
        { title: "Databases", items: ["MySQL", "SQLite", "NoSQL"] },
        { title: "Languages", items: ["C", "PHP", "Laravel"] },
        { title: "Data & AI", items: ["Python", "Scraping", "Processing", "Visualization", "Streamlit"] },
        { title: "Project tools", items: ["Jira", "Gantt"] },
        { title: "Design", items: ["Figma"] },
        { title: "DevOps", items: ["Git", "Linux"] },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "2 cards per row, same size, with actions & hover.",
      btnCode: "Code",
      btnDemo: "Details",
      list: [
        {
          key: "quickliv",
          title: "QuickLiv",
          desc: "Mobile grocery delivery app — Flutter + Node/Express + realtime.",
          tech: ["Flutter","Dart","Node","Express","Socket.io","JWT","Maps API"],
          link: "https://github.com/Kenza-Belaloui/Quick-Liv",
          badge: "Featured",
          image: PROJECT_IMAGES.quickliv,
        },
        {
          key: "immo",
          title: "Real-estate agency (Desktop)",
          desc: "Full agency management: assets, clients, employees, contracts, meetings.",
          tech: ["Java Swing","MySQL","MVC"],
          link: "https://github.com/Kenza-Belaloui/Agence-immobiliere",
          badge: "In progress",
          image: PROJECT_IMAGES.immo,
        },
        {
          key: "portfolio",
          title: "Interactive Portfolio",
          desc: "Pro version: light/dark, FR/EN, animations, modern UI.",
          tech: ["React","CSS","Framer Motion"],
          link: "https://github.com/Kenza-Belaloui/portfolio",
          image: PROJECT_IMAGES.portfolio,
        },
        {
          key: "viewmusic",
          title: "Geographie musicale",
          desc: "Trends analysis & prediction (Apple Music + Spotify) + dashboards.",
          tech: ["Python","SQL","Streamlit","ML"],
          link: "https://github.com/Kenza-Belaloui/geographie_musicale",
          image: PROJECT_IMAGES.viewmusic,
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Click a card to open directly.",
      cards: [
        { title: "Email", value: "Send an email", href: LINKS.email, icon: "mail" },
        { title: "LinkedIn", value: "Open my profile", href: LINKS.linkedin, icon: "linkedin" },
        { title: "GitHub", value: "Open my repos", href: LINKS.github, icon: "github" },
      ],
    },
  },
};

function useLocal(key, initial) {
  const [v, setV] = useState(() => {
    try {
      const s = localStorage.getItem(key);
      return s ? JSON.parse(s) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
  }, [key, v]);
  return [v, setV];
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i, duration: 0.6 } }),
};

export default function App() {
  const [theme, setTheme] = useLocal("kenza_theme_v2", "dark");
  const [lang, setLang] = useLocal("kenza_lang_v2", "fr");

  const t = TEXT[lang];

  useEffect(() => {
    document.documentElement.dataset.theme = theme; // ✅ light/dark
  }, [theme]);

  const nav = useMemo(
    () => [
      { id: "home", label: t.nav.home, icon: <Home size={16} /> },
      { id: "journey", label: t.nav.journey, icon: <GraduationCap size={16} /> },
      { id: "skills", label: t.nav.skills, icon: <Sparkles size={16} /> },
      { id: "projects", label: t.nav.projects, icon: <FolderGit2 size={16} /> },
      { id: "contact", label: t.nav.contact, icon: <Mail size={16} /> },
    ],
    [t]
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ✅ petite fonction pour l’icône dans Contact (sans changer le style global)
  const ContactIcon = ({ kind }) => {
    if (kind === "github") return <Github size={18} />;
    if (kind === "linkedin") return <Linkedin size={18} />;
    return <Mail size={18} />;
  };

  return (
    <div className="app">
      {/* background particles / glow */}
      <div className="bgFX" aria-hidden="true" />

      {/* NAV */}
      <header className="navWrap">
        <div className="nav">
          <button className="brand" onClick={() => scrollTo("home")}>
            <span className="brandDot" />
            <span className="brandTxt">{t.portfolio}</span>
          </button>

          <nav className="navLinks">
            {nav.map((it) => (
              <button key={it.id} className="navBtn" onClick={() => scrollTo(it.id)}>
                {it.icon}
                <span>{it.label}</span>
              </button>
            ))}
          </nav>

          <div className="navActions">
            <button className="chip" onClick={() => setLang((p) => (p === "fr" ? "en" : "fr"))}>
              <Languages size={16} />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button className="chip" onClick={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}>
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === "dark" ? "Light" : "Dark"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="section hero">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="heroCard">
          <div className="heroTop">
            <div className="pill">✦ {t.portfolio}</div>
          </div>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show" className="heroTitle">
            {t.hero.name}
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show" className="heroRole">
            {t.hero.role}
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="avatarWrap">
            <img className="avatar" src={kenzaPhoto} alt="Kenza Belaloui" />
            <span className="ring" />
          </motion.div>

          <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show" className="heroBio">
            {t.hero.bio}
          </motion.p>

          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" className="heroCTA">
            <button className="btn primary" onClick={() => scrollTo("projects")}>
              {t.hero.cta1}
            </button>
            <button className="btn ghost" onClick={() => scrollTo("contact")}>
              {t.hero.cta2}
            </button>
          </motion.div>

          {/* icons sous le texte */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" animate="show" className="socialRow">
            <a className="social" href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a className="social" href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a className="social" href={LINKS.email} aria-label="Email">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="section">
        <div className="head">
          <h2>{t.journey.title}</h2>
          <p>{t.journey.subtitle}</p>
        </div>

        <div className="timeline">
          <div className="rope" aria-hidden="true" />
          {t.journey.items.map((it, i) => (
            <motion.div
              key={it.title}
              className={`tItem ${i % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <div className="dot" />
              <div className="tCard">
                <div className="tDate">{it.date}</div>
                <div className="tTitle">{it.title}</div>
                <div className="tOrg">{it.org}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="head">
          <h2>{t.skills.title}</h2>
          <p>{t.skills.subtitle}</p>
        </div>

        <div className="skillsGrid">
          {t.skills.groups.map((g, i) => (
            <motion.div
              key={g.title}
              className="skillCard"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
            >
              <div className="skillHead">
                <div className="skillTitle">{g.title}</div>
                <div className="skillCount">{g.items.length}</div>
              </div>
              <div className="tags">
                {g.items.map((x) => (
                  <span key={x} className="tag">{x}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="head">
          <h2>{t.projects.title}</h2>
          <p>{t.projects.subtitle}</p>
        </div>

        <div className="projectsGrid">
          {t.projects.list.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="projCard"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              {/* ✅ NOUVEAU: image projet */}
              <div className="projMedia" aria-hidden="true">
                <img className="projImg" src={p.image} alt="" loading="lazy" />
                <div className="projMediaOverlay" />
              </div>

              <div className="projTop">
                <div className="projTitle">{p.title}</div>
                {p.badge ? <div className="badge">{p.badge}</div> : null}
              </div>

              <div className="projDesc">{p.desc}</div>

              <div className="chips">
                {p.tech.slice(0, 7).map((x) => (
                  <span key={x} className="chipMini">{x}</span>
                ))}
              </div>

              <div className="projActions">
                <span className="miniBtn">{t.projects.btnCode}</span>
                <span className="miniBtn ghost">{t.projects.btnDemo}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="head">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
        </div>

        <div className="contactGrid">
          {t.contact.cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="contactCard"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              {/* ✅ NOUVEAU: icône dans la box */}
              <div className="contactIcon">
                <ContactIcon kind={c.icon} />
              </div>

              <div className="contactTitle">{c.title}</div>
              <div className="contactValue">{c.value}</div>
              <div className="contactGlow" aria-hidden="true" />
            </motion.a>
          ))}
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Kenza BELALOUI
        </div>
      </section>
    </div>
  );
}
