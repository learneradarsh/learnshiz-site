// App.jsx - LearnShiz Techies (Global Tech & AI Staffing)

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import dentalBazar from "./assets/dental_bazar.png";
import globecommerce from "./assets/globlecommerce_logo177-e1549480340347.png";
import gtConsulting from "./assets/GT_consulting.png";
import osmia from "./assets/osmia.jpg";
import logo from "./assets/logo.png";
import upcred from "./assets/upcred_blue_logo.c0b15965.svg";
import thirdEye from "./assets/thirdeye.jpg";

const activeClass =
  "border-b-2 border-indigo-600 text-indigo-700 font-medium";

const DEV_FORM_URL = "https://forms.gle/dxaLoQkrhn7JcDiX8";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <style>{`
        :root {
          --primary: #4f46e5;
          --accent: #06b6d4;
          --cta: #facc15;
          --cta-700: #eab308;
          --bg: #f3f4fb;
          --surface: #ffffff;
          --heading: #0f172a;
          --muted: #6b7280;
          --card-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          --radius-md: 18px;
          --radius-sm: 999px;
        }

        html, body, #root {
          height: 100%;
          background: var(--bg);
        }

        body {
          margin: 0;
          color: var(--heading);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--cta), var(--cta-700));
          color: #111827;
          border-radius: var(--radius-sm);
          padding: 0.6rem 1.4rem;
          box-shadow: 0 14px 30px rgba(250, 204, 21, 0.35);
          transition: transform .12s ease, box-shadow .12s ease, filter .12s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        .btn-primary:hover {
          transform: translateY(-1px);
          filter: brightness(1.03);
          box-shadow: 0 18px 40px rgba(250, 204, 21, 0.45);
        }

        .btn-ghost {
          background: transparent;
          border: 1px solid #d1d5db;
          color: #111827;
          padding: 0.55rem 1.2rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
        }
        .btn-ghost:hover {
          background: #e5e7eb;
        }

        .card {
          background: var(--surface);
          border-radius: var(--radius-md);
          box-shadow: var(--card-shadow);
          border: 1px solid #e5e7eb;
        }

        .glass-soft {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
        }

        .muted {
          color: var(--muted);
        }

        .pill {
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(79, 70, 229, 0.06);
          border: 1px solid rgba(79, 70, 229, 0.3);
          color: #312e81;
          font-weight: 500;
          font-size: 0.72rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .chip {
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          font-size: 0.72rem;
          color: #111827;
          background: #f9fafb;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Router>
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

/* ---------- Scroll to top on route change ---------- */

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/* ---------------- Header ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="LearnShiz Techies"
            className="w-10 h-10 rounded-2xl border border-indigo-100 bg-indigo-50 object-contain"
          />
          <div>
            <div className="font-semibold text-sm md:text-base text-gray-900 tracking-tight">
              LearnShiz Techies
            </div>
            <div className="text-[11px] md:text-xs text-gray-500">
              Global Tech &amp; AI Staffing • Since 2015
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : "text-gray-600 hover:text-gray-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? activeClass : "text-gray-600 hover:text-gray-900"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/developers"
            className={({ isActive }) =>
              isActive ? activeClass : "text-gray-600 hover:text-gray-900"
            }
          >
            Process
          </NavLink>
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive ? activeClass : "text-gray-600 hover:text-gray-900"
            }
          >
            Case studies
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClass : "text-gray-600 hover:text-gray-900"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? activeClass : "text-gray-600 hover:text-gray-900"
            }
          >
            Team
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? activeClass : "text-gray-600 hover:text-gray-900"
            }
          >
            Join as dev
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="btn-ghost text-xs">
            Talk to us
          </Link>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-lg border border-gray-300 bg-white"
        aria-label="Open menu"
      >
        <svg
          className="w-5 h-5 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-2xl py-2 z-50 shadow-lg">
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["Process", "/developers"],
            ["Case studies", "/clients"],
            ["Team", "/team"],
            ["Join as dev", "/careers"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <Link
              key={path}
              className="block px-4 py-2 text-xs text-gray-800 hover:bg-gray-50"
              to={path}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function PricingComparison() {
  return (
    <div className="card p-6 mt-12 rounded-xl bg-white shadow-md border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900">
        Pricing Comparison — How You Save
      </h3>
      <p className="text-sm text-gray-600 mt-2 max-w-xl">
        Because we only charge a minimal management fee and 80–90% goes directly
        to the developer, you get better talent AND lower total cost.
      </p>

      <div className="mt-6 space-y-6 text-sm">
        {/* Total Monthly Cost */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-medium">Total Monthly Cost</span>
            <span>LearnShiz vs Typical Vendor</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-24 text-gray-600">LearnShiz</span>
              <div className="flex-1 bg-gray-100 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-indigo-500"
                  style={{ width: "55%" }}
                ></div>
              </div>
              <span className="text-gray-700 text-xs">~55%</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-24 text-gray-600">Typical Vendor</span>
              <div className="flex-1 bg-gray-100 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gray-400"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <span className="text-gray-700 text-xs">~85%</span>
            </div>
          </div>
        </div>

        {/* Money reaching developer */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-medium">Money Reaching Developer</span>
            <span>Retention / Happiness</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-24 text-gray-600">LearnShiz</span>
              <div className="flex-1 bg-gray-100 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-emerald-500"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <span className="text-gray-700 text-xs">80–90%</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-24 text-gray-600">Typical Vendor</span>
              <div className="flex-1 bg-gray-100 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gray-400"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <span className="text-gray-700 text-xs">50–60%</span>
            </div>
          </div>
        </div>

        {/* Retention */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-medium">12-Month Retention</span>
            <span>Stability / Delivery Rate</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-24 text-gray-600">LearnShiz</span>
              <div className="flex-1 bg-gray-100 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-blue-600"
                  style={{ width: "88%" }}
                ></div>
              </div>
              <span className="text-gray-700 text-xs">~88%</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-24 text-gray-600">Typical Vendor</span>
              <div className="flex-1 bg-gray-100 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gray-400"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <span className="text-gray-700 text-xs">60–70%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ---------------- Home ---------------- */

function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
      {/* Hero */}
      <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="pill">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              100+ vetted developers • 20+ global clients
            </span>
            <span className="chip hidden sm:inline-flex">
              Fullstack • Mobile • QA • Data • AI
            </span>
          </div>

          <h1 className="mt-5 text-3xl md:text-4xl lg:text-[2.5rem] font-semibold leading-tight text-gray-900">
            Global developers for{" "}
            <span className="text-indigo-700">software</span>, data &amp;{" "}
            <span className="text-indigo-700">AI-native products.</span>
          </h1>

          <p className="mt-4 text-sm md:text-[0.95rem] leading-relaxed text-gray-700">
            LearnShiz Techies connects you with vetted engineers across
            fullstack development, mobile, QA, Data Engineering, Data Science
            and AI/ML — including GenAI and LLM specialists. We charge a minimal
            management fee; most of the billing goes to the developer so you
            attract and retain better talent.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link to="/contact" className="btn-primary text-sm">
              Get 3 profiles in 48 hours
            </Link>
            <Link to="/developers" className="btn-ghost text-xs">
              See sample roles
            </Link>
          </div>

          <div className="mt-4 inline-flex flex-wrap items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-sm border border-indigo-100 text-[11px] md:text-xs">
  <span className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold">
    For developers
  </span>
  <span className="text-gray-700">
    Want to work with global product teams?
  </span>
  <Link
    to="/careers"
    className="ml-auto btn-ghost !px-3 !py-1.5 !text-[11px]"
  >
    Join as dev
  </Link>
</div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-xs md:text-sm">
            <Metric label="Vetted developers" value="100+" />
            <Metric label="Global clients" value="20+" />
            <Metric label="Avg shortlist time" value="48–72h" />
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-gray-600">
            <span className="chip">US &amp; Europe time zones</span>
            <span className="chip">Remote-first teams</span>
            <span className="chip">Product &amp; platform experience</span>
          </div>
        </div>

        {/* Right card */}
        <div className="card p-6 md:p-7 relative overflow-hidden">
          <div className="absolute -top-16 -right-8 w-40 h-40 bg-indigo-100 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-8 w-40 h-40 bg-cyan-100 rounded-full blur-3xl" />
          <div className="relative flex flex-col gap-5">
            <div className="flex justify-between items-start gap-4">
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.18em] text-gray-500">
                  GLOBAL DELIVERY
                </div>
                <div className="mt-1.5 text-lg font-semibold text-gray-900">
                  Distributed engineering pods
                </div>
              </div>
              <div className="text-right text-[0.7rem] text-gray-500">
                From Bengaluru<br />to Tel Aviv &amp; beyond
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="glass-soft p-3">
                <div className="text-[0.65rem] text-gray-500 uppercase tracking-[0.16em]">
                  AI &amp; DATA
                </div>
                <div className="mt-1 text-sm font-semibold text-gray-900">
                  LLM / GenAI talent
                </div>
                <p className="mt-1 text-[0.75rem] text-gray-600">
                  RAG, vector search, prompt engineering, MLOps and production
                  LLM pipelines.
                </p>
              </div>
              <div className="glass-soft p-3">
                <div className="text-[0.65rem] text-gray-500 uppercase tracking-[0.16em]">
                  PRODUCT
                </div>
                <div className="mt-1 text-sm font-semibold text-gray-900">
                  Fullstack squads
                </div>
                <p className="mt-1 text-[0.75rem] text-gray-600">
                  React / Angular / Node / Java / .NET engineers embedding into
                  your sprints.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 px-4 py-3 text-xs bg-gray-50">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[0.65rem] text-gray-500 uppercase tracking-[0.16em]">
                    PRICING MODEL
                  </div>
                  <p className="mt-1 text-gray-700">
                    Minimal management fee — 80–90% of billing goes to the
                    developer.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[0.65rem] text-gray-500 uppercase tracking-[0.16em]">
                    RETENTION
                  </div>
                  <div className="mt-1 text-lg font-semibold text-emerald-600">
                    85%
                  </div>
                  <div className="text-[0.65rem] text-gray-500">
                    12-month average
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI stack band */}
      <AIStackBand />

      {/* How it works */}
      <div className="mt-10 grid md:grid-cols-3 gap-4 text-xs md:text-sm">
        <div className="glass-soft p-4 text-left">
          <div className="text-[0.7rem] text-gray-500 uppercase tracking-[0.16em] mb-1">
            STEP 1
          </div>
          <div className="font-semibold text-gray-900 text-sm">
            Share your roles
          </div>
          <p className="mt-1 text-gray-600">
            Tell us your stack, experience range, budget and time zone needs —
            usually a 15–20 minute call.
          </p>
        </div>
        <div className="glass-soft p-4 text-left">
          <div className="text-[0.7rem] text-gray-500 uppercase tracking-[0.16em] mb-1">
            STEP 2
          </div>
          <div className="font-semibold text-gray-900 text-sm">
            Get vetted profiles
          </div>
          <p className="mt-1 text-gray-600">
            We send a curated shortlist (typically 3–5 profiles) in 48–72 hours
            with clear rate bands.
          </p>
        </div>
        <div className="glass-soft p-4 text-left">
          <div className="text-[0.7rem] text-gray-500 uppercase tracking-[0.16em] mb-1">
            STEP 3
          </div>
          <div className="font-semibold text-gray-900 text-sm">
            Start in weeks, not months
          </div>
          <p className="mt-1 text-gray-600">
            You interview, select and onboard. We handle payroll, compliance and
            ongoing engagement.
          </p>
        </div>
      </div>

      {/* Why companies choose us */}
      <div className="mt-12 md:mt-14">
        <SectionTitle
          title="Why global teams choose LearnShiz"
          subtitle="Lean, developer-first staffing with a strong focus on modern web, cloud, data & AI."
        />
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Feature
            title="Deep tech & AI focus"
            desc="We specialise only in technology roles — from SPA and microfrontends to data platforms, GenAI apps and ML engineering."
          />
          <Feature
            title="Designed for remote-first"
            desc="Engineers experienced in async communication, distributed teams, CI/CD and observability. They plug into your rituals and tools."
          />
          <Feature
            title="Transparent economics"
            desc="We charge a minimal management fee. Most of the value reaches the developer, which means better talent and lower churn for you."
          />
        </div>
      </div>

      <PricingComparison />


      {/* Impact + testimonials row */}
      <div className="mt-12 md:mt-14 grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Impact in numbers
          </h3>
          <p className="mt-2 text-sm text-gray-600 max-w-md">
            We help product and platform teams add high-ownership engineers
            without building a local HR or payroll stack.
          </p>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <StatCard value="100+" label="Active developers" accent />
            <StatCard value="20+" label="Global clients" />
            <StatCard value="30–60%" label="Time saved in hiring" />
            <StatCard value="<15%" label="Typical management fee" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            What our customers say
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            From early-stage founders to enterprise engineering leaders.
          </p>
          <div className="mt-4">
            <TestimonialsCarousel />
          </div>
        </div>
      </div>

      {/* Dev CTA section */}
      <div className="mt-12 glass-soft p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-gray-900">
            Are you a developer?
          </div>
          <div className="mt-1 text-sm text-gray-700 max-w-md">
            Join our vetted pool to work with global product teams. Enjoy free
            Udemy training, work-from-home support, global exposure and a guided
            career path.
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/careers" className="btn-ghost text-xs">
            See benefits
          </Link>
          <a
            href={DEV_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs"
          >
            Register as developer
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 rounded-2xl p-7 md:p-9 text-center bg-white border border-indigo-100 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Planning to ship faster with a lean, AI-ready team?
        </h3>
        <p className="mt-3 text-sm md:text-[0.95rem] text-gray-700 max-w-2xl mx-auto">
          Share your roadmap and tech stack. We’ll respond with vetted profiles,
          rate bands and a simple engagement plan — usually within 48 hours.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn-primary text-sm">
            Tell us what you need
          </Link>
          <Link to="/developers" className="btn-ghost text-xs">
            See roles we staff
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI Stack band ---------------- */

function AIStackBand() {
  const chips = [
    "GenAI application development",
    "RAG & vector search (Pinecone, Weaviate, Qdrant)",
    "LLM orchestration (LangChain, LlamaIndex)",
    "Prompt engineering & evaluation",
    "MLOps (Kubeflow, SageMaker, Vertex)",
    "Data pipelines (Airflow, DBT, Kafka)",
  ];
  return (
    <div className="mt-10 glass-soft px-4 md:px-6 py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
            <span className="text-indigo-600 text-lg">⚙️</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-indigo-700 tracking-wide">
              AI &amp; DATA STACK
            </div>
            <div className="text-[11px] text-gray-600">
              Vetted engineers across LLMs, data platforms and AI infrastructure.
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-[10px] justify-start md:justify-end overflow-x-auto no-scrollbar md:flex-wrap">
          {chips.map((c) => (
            <span key={c} className="chip whitespace-nowrap">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  const roleGroups = [
    {
      title: "Fullstack developers",
      desc: "Own end-to-end features across frontend, backend and data.",
      items: ["React", "Angular", "Node.js", "Java", ".NET"],
    },
    {
      title: "Frontend engineers",
      desc: "Build fast, accessible SPAs and microfrontends.",
      items: ["SPA architecture", "Microfrontends", "Performance tuning"],
    },
    {
      title: "Backend & API developers",
      desc: "Design secure, scalable APIs and services.",
      items: ["REST & GraphQL", "Event-driven systems", "Microservices"],
    },
    {
      title: "Mobile / app developers",
      desc: "Native & cross-platform apps for iOS and Android.",
      items: ["Kotlin / Swift", "React Native", "Flutter"],
    },
    {
      title: "QA & automation specialists",
      desc: "Ship with confidence through automated testing.",
      items: ["Playwright", "Cypress", "API & integration tests"],
    },
    {
      title: "DevOps, cloud & SRE",
      desc: "Keep your stack reliable, observable and scalable.",
      items: ["AWS / GCP / Azure", "CI/CD & Terraform", "Monitoring & SLOs"],
    },
    {
      title: "Data engineers",
      desc: "Build robust data pipelines and analytics foundations.",
      items: ["Airflow & DBT", "Spark / Kafka", "ETL / ELT pipelines"],
    },
    {
      title: "Data scientists, ML & LLM engineers",
      desc: "Turn data and models into production AI features.",
      items: ["ML models", "LLMs, RAG, LangChain", "MLOps & monitoring"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
      {/* Intro */}
      <SectionTitle
        title="Staffing services for modern engineering & AI teams"
        subtitle="Flexible engagement models to add high-quality developers to your roadmap — without building an entire local hiring function."
      />

      {/* Engagement models */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card
          title="Dedicated developers"
          desc="Full-time remote engineers embedded into your squad — same rituals, same tools, same codebase."
        />
        <Card
          title="Product pods"
          desc="2–6 member pods (fullstack, QA, data) to own specific modules, features or experiments end-to-end."
        />
        <Card
          title="Specialist AI & data roles"
          desc="Data engineers, data scientists, ML & LLM engineers to accelerate analytics and AI initiatives."
        />
      </div>

      {/* Roles we provide – nicer UX */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold text-gray-900">
          Roles we provide
        </h3>
        <p className="mt-2 text-sm text-gray-600 max-w-2xl">
          Every role goes through the same vetting process — hands-on technical
          screening, architecture discussions for senior talent, and
          communication checks for remote work.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {roleGroups.map((role) => (
            <div
              key={role.title}
              className="card p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold text-gray-900">
                    {role.title}
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{role.desc}</p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {role.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[0.75rem] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing model / comparison */}
      <div className="mt-14 grid md:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
        <div className="card p-6 text-sm">
          <h3 className="font-semibold text-gray-900">
            Engagement & pricing model
          </h3>
          <p className="mt-2 text-gray-700">
            You pay a simple monthly fee per developer. We keep our management
            fee lean and pass most of the value to the engineer — which attracts
            stronger talent and keeps them invested in your product.
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1.5">
            <li>Minimum 3–6 month engagements, extendable as needed.</li>
            <li>
              Developers follow your tools and rituals — Jira/Linear, GitHub,
              your CI/CD and review process.
            </li>
            <li>
              Time zone overlap aligned with your needs (US/EU-friendly
              options).
            </li>
            <li>
              We handle payroll, compliance and long-term career growth for the
              developer.
            </li>
          </ul>
        </div>

        <div className="card p-6 text-xs md:text-sm">
          <h4 className="font-semibold text-gray-900">
            How we compare to traditional vendors
          </h4>

          <div className="mt-4 space-y-4">
            <div>
              <div className="flex justify-between text-gray-600 mb-1">
                <span>Markup / management fee</span>
                <span>Lower is better</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-24 text-[0.7rem] text-gray-500">
                    LearnShiz
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-indigo-500"
                      style={{ width: "20%" }}
                    />
                  </div>
                  <span className="text-[0.7rem] text-gray-700">
                    ~10–15%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-24 text-[0.7rem] text-gray-500">
                    Typical vendor
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gray-400"
                      style={{ width: "45%" }}
                    />
                  </div>
                  <span className="text-[0.7rem] text-gray-700">
                    30–50%+
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-600 mb-1">
                <span>Money reaching developer</span>
                <span>Higher is better</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-24 text-[0.7rem] text-gray-500">
                    LearnShiz
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-emerald-500"
                      style={{ width: "90%" }}
                    />
                  </div>
                  <span className="text-[0.7rem] text-gray-700">
                    80–90%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-24 text-[0.7rem] text-gray-500">
                    Typical vendor
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gray-400"
                      style={{ width: "60%" }}
                    />
                  </div>
                  <span className="text-[0.7rem] text-gray-700">
                    50–60%
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mt-3">
              Most of our clients tell us they get both{" "}
              <strong>better interview hit-rates</strong> and{" "}
              <strong>lower net cost</strong> compared to traditional staffing
              arrangements.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          Need developers for your roadmap?
        </h3>
        <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
          Share your roles, tech stack and timeline — we’ll send a curated
          shortlist of vetted profiles, usually within 48 hours.
        </p>
        <Link to="/contact" className="btn-primary mt-5 inline-block text-sm">
          Talk to us about roles
        </Link>
      </div>
    </section>
  );
}


function RoleCard({ title, stack }) {
  return (
    <div className="p-4 card bg-white rounded-lg border shadow-sm hover:shadow-md transition">
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{stack}</div>
    </div>
  );
}

function VetCard({ step, title, desc }) {
  return (
    <div className="p-4 card bg-white rounded-lg border shadow-sm hover:shadow-md transition">
      <div className="text-xs font-semibold text-indigo-600">STEP {step}</div>
      <div className="font-semibold text-gray-900 mt-1">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{desc}</div>
    </div>
  );
}

/* ---------------- Developers ---------------- */

function Developers() {
  const sampleRoles = [
    {
      title: "Senior Fullstack Engineer",
      stack: "React • Node.js • PostgreSQL • AWS",
      exp: "7+ years",
      tags: ["Product companies", "System design", "Performance"],
      band: "Upper mid / senior band",
    },
    {
      title: "Data & ML Engineer",
      stack: "Python • Spark • Airflow • DBT • MLflow",
      exp: "6+ years",
      tags: ["ETL pipelines", "Feature stores", "MLOps"],
      band: "Senior band",
    },
    {
      title: "LLM / GenAI Engineer",
      stack: "Python • LangChain • Vector DB • RAG",
      exp: "5+ years",
      tags: ["RAG systems", "Prompt engineering", "Evaluation"],
      band: "Mid–senior band",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-5 py-14">
      {/* HERO */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Hire vetted developers for your product team
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Fullstack, mobile, QA, automation, cloud, data, AI/ML and LLM engineers —
          screened for product experience, communication and ownership.
        </p>

        {/* CTA → contact us */}
        <Link to="/contact" className="btn-primary mt-6 inline-block">
          Talk to our team
        </Link>
      </div>

      {/* ROLES & TECH STACKS */}

        {/* VETTING PROCESS */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-900">Our hiring process</h2>

        <div className="grid grid-cols-1 gap-4 mt-5">
          <VetCard step="1" title="Discovery & role mapping" desc="Understand your product, stack, seniority & culture needs." />
          <VetCard step="2" title="Profile Screening" desc="Deep review of experience, past products & domain fit." />
          <VetCard step="3" title="Hands-on Technical Test" desc="Coding & debugging tasks aligned to target role." />
          <VetCard step="4" title="Architecture / System Design" desc="Trade-off discussions & design skills for senior roles." />
          <VetCard step="5" title="Communication & Ownership" desc="Client communication, async work, stakeholder handling." />
          <VetCard step="6" title="Final shortlist" desc="We share 3–5 profiles with notes, rate bands & availability." />
        </div>
      </div>

      {/* SAMPLE PROFILES */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-900">Sample profiles</h2>

        <div className="grid grid-cols-1 gap-4 mt-5">
          {sampleRoles.map((dev) => (
            <div
              key={dev.title}
              className="p-5 card bg-white border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="font-semibold text-gray-900">{dev.title}</div>
              <div className="text-sm text-gray-600 mt-1">{dev.stack}</div>

              <div className="mt-2 text-xs text-gray-500">{dev.exp}</div>
              <div className="text-xs text-gray-700">{dev.band}</div>

              <div className="mt-3 flex flex-wrap gap-2">
                {dev.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-[0.7rem] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Want to see matching profiles?
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Share your tech stack & timeline — we’ll send 3 vetted profiles in 48 hours.
        </p>

        <Link to="/contact" className="btn-primary mt-5 inline-block">
          Contact us
        </Link>
      </div>
    </section>
  );
}




/* ---------------- Clients ---------------- */

function Clients() {
  const clientsList = [
    { id: 1, name: "Dental Bazar", icon: dentalBazar },
    { id: 2, name: "Global Ecommerce", icon: globecommerce },
    { id: 3, name: "GT Consulting", icon: gtConsulting },
    { id: 4, name: "Osmia", icon: osmia },
    { id: 5, name: "Upcred.ai", icon: upcred },
    { id: 6, name: "Third Eye Intelligence Service", icon: thirdEye },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <SectionTitle
            title="Teams who build with us"
            subtitle="SaaS startups, product companies and enterprises across US, Europe and Asia."
            noMargin
          />
        </div>
        <div>
          <Link to="/contact" className="btn-primary text-xs">
            Work with us
          </Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 items-center">
        {clientsList.map((c) => (
          <div
            key={c.id}
            className="glass-soft p-4 flex flex-col items-center hover:shadow-md transition-shadow"
          >
            <div className="w-24 h-12 flex items-center justify-center bg-gray-50 rounded-md border border-gray-100">
              <img
                src={c.icon}
                alt={c.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="mt-2 text-[0.8rem] text-gray-600 text-center">
              {c.name}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Industries we serve
          </h3>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1.5">
            <li>FinTech &amp; Financial Services</li>
            <li>Enterprise SaaS &amp; B2B platforms</li>
            <li>Healthcare &amp; HealthTech</li>
            <li>E-commerce &amp; marketplaces</li>
            <li>EdTech &amp; knowledge platforms</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            Partnership models
          </h3>
          <div className="mt-3 space-y-2 text-gray-700">
            <div>
              <strong className="text-gray-900">
                Long-term staff augmentation:
              </strong>{" "}
              full-time developers working with your squads.
            </div>
            <div>
              <strong className="text-gray-900">Pods / delivery teams:</strong>{" "}
              outcome-focused pods for specific modules or projects.
            </div>
            <div>
              <strong className="text-gray-900">Specialist consultants:</strong>{" "}
              data, AI and performance experts for focused interventions.
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Case studies (quick shots)
          </h3>
          <div className="mt-4 space-y-4">
            <div className="glass-soft p-4">
              <div className="font-semibold text-gray-900">
                B2B SaaS — US-based product team
              </div>
              <div className="text-gray-700 mt-1 text-sm">
                Augmented their core team with 6 fullstack developers and 2 QA
                engineers. Helped them double release frequency within 5 months
                while maintaining quality.
              </div>
            </div>
            <div className="glass-soft p-4">
              <div className="font-semibold text-gray-900">
                FinTech — Data &amp; AI hiring
              </div>
              <div className="text-gray-700 mt-1 text-sm">
                Built a data/ML pod (3 engineers) to improve risk models and
                reporting with production ML pipelines.
              </div>
            </div>
          </div>

          <div className="mt-6 glass-soft p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
            <div>
              <div className="font-semibold text-gray-900">
                Interested in adding developers to your team?
              </div>
              <div className="text-gray-600 mt-1">
                Share your roadmap; we’ll propose profiles and engagement
                options.
              </div>
            </div>
            <div>
              <Link to="/contact" className="btn-ghost">
                Request proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <SectionTitle
        title="What our customers say"
        subtitle="Feedback from founders, CTOs and engineering leaders."
      />
      <div className="mt-8">
        <TestimonialsCarousel />
      </div>
    </section>
  );
}

/* ---------------- Careers -> Join as dev ---------------- */

function Careers() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <SectionTitle
        title="Join as a developer"
        subtitle="Become part of the LearnShiz remote engineering pool and work with global product teams."
      />

      <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
        <div className="card p-5">
          <h4 className="font-semibold text-gray-900">
            Why developers choose LearnShiz
          </h4>
          <p className="mt-2 text-gray-700">
            We keep our model developer-first. You get transparent pay, strong
            projects and long-term growth — while we handle client relations,
            contracts and admin.
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1.5">
            <li>Work with product-first teams across the globe.</li>
            <li>Remote-first culture with clear expectations.</li>
            <li>Support with interviews, onboarding and feedback.</li>
            <li>Focused on long-term, stable engagements.</li>
          </ul>
        </div>

        <div className="card p-5">
          <h4 className="font-semibold text-gray-900">Benefits you get</h4>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>
              <strong>Free Training Through Udemy:</strong> access to curated
              Udemy courses to keep your skills sharp and up to date.
            </li>
            <li>
              <strong>Work From Home Setup:</strong> guidance and support for a
              solid remote setup so you can focus on delivery.
            </li>
            <li>
              <strong>Global Exposure:</strong> work with clients across
              geographies, stacks and industries.
            </li>
            <li>
              <strong>Guided Career Path:</strong> regular check-ins, feedback
              and support to move towards your next role or stack.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 card p-5 text-sm">
        <h4 className="font-semibold text-gray-900">Who we’re looking for</h4>
        <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1.5">
          <li>
            Engineers with experience in product companies or high-ownership
            teams.
          </li>
          <li>
            Strong hands-on skills in one or more: React, Angular, Node, Java,
            .NET, Python, mobile, QA automation, data or ML/LLM.
          </li>
          <li>Good written & spoken English, comfortable with async work.</li>
          <li>
            People who care about code quality, observability and business
            outcomes — not just “finishing tickets”.
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 items-center">
        <a
          href={DEV_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-primary text-sm"
        >
          Register via Google Form
        </a>
        <Link to="/contact" className="btn-ghost text-xs">
          Talk to us about roles
        </Link>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <SectionTitle
        title="About LearnShiz Techies"
        subtitle="A specialist technology staffing partner focused on global, remote-first teams."
      />

      <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-gray-900">Our mission</h4>
          <p className="mt-2 text-gray-700">
            To connect great product teams with great engineers through a
            transparent, developer-first staffing model.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Our vision</h4>
          <p className="mt-2 text-gray-700">
            To be the go-to partner for remote-first engineering and AI teams
            hiring out of India and neighbouring regions.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Our values</h4>
          <p className="mt-2 text-gray-700">
            Transparency • Speed • Quality • Developer-first • Long-term
            thinking
          </p>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-8 text-sm">
        <div className="card p-6">
          <h4 className="font-semibold text-gray-900">What we do</h4>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1.5">
            <li>Technical talent acquisition &amp; staff augmentation</li>
            <li>Remote developer placement for long-term engagements</li>
            <li>Product pods for focused feature or module delivery</li>
            <li>Specialist staffing for data &amp; AI initiatives</li>
          </ul>
        </div>

        <div className="card p-6">
          <h4 className="font-semibold text-gray-900">Our approach</h4>
          <p className="mt-2 text-gray-700">
            We act as an extension of your engineering and hiring leadership —
            understanding your architecture, tech stack, team rituals and
            constraints before suggesting candidates.
          </p>

          <div className="mt-4">
            <h5 className="font-semibold text-gray-900">Process highlights</h5>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1.5">
              <li>Discovery &amp; role-mapping workshop</li>
              <li>Targeted sourcing from our vetted pool</li>
              <li>Technical and cultural screening pre-shortlist</li>
              <li>Offer, onboarding and ongoing engagement support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-900">
          Metrics &amp; reach
        </h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <StatCard value="100+" label="Active developers" accent />
          <StatCard value="20+" label="Global clients" />
          <StatCard value="7+" label="Years in business" />
          <StatCard value="4–6w" label="Typical ramp time" />
        </div>
      </div>

      <div className="mt-10 glass-soft p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
        <div>
          <div className="font-semibold text-gray-900">
            Want to explore a hiring partnership?
          </div>
          <div className="text-gray-700 mt-1">
            Schedule a quick call and we’ll walk you through our model, rate
            cards and sample profiles.
          </div>
        </div>
        <div>
          <Link to="/contact" className="btn-primary text-xs">
            Schedule a call
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */

function Team() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <SectionTitle
        title="Our team"
        subtitle="A distributed team of engineers, recruiters and delivery leaders across India, Nepal, Myanmar, Bangladesh, UAE, Israel and more."
      />

      <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
        <div className="card p-5">
          <h4 className="font-semibold text-gray-900">
            Values &amp; culture
          </h4>
          <p className="mt-2 text-gray-700">
            We value collaboration, ownership and continuous learning. We hire
            engineers who care about clean code, observability, accessibility
            and real business outcomes.
          </p>

          <div className="mt-4">
            <h5 className="font-semibold text-gray-900">How we work</h5>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1.5">
              <li>Small cross-functional squads with clear outcomes.</li>
              <li>Bi-weekly goals and sprint-focused delivery.</li>
              <li>Peer code reviews and design discussions to raise quality.</li>
            </ul>
          </div>
        </div>

        <div className="card p-5">
          <h4 className="font-semibold text-gray-900">
            Quality of our developers
          </h4>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1.5">
            <li>
              Strong fundamentals in JavaScript/TypeScript and modern
              frameworks.
            </li>
            <li>Focus on testing, performance and maintainable architecture.</li>
            <li>Experience with cloud platforms, CI/CD and scalable systems.</li>
            <li>Client-centric communication and SLA-driven delivery.</li>
          </ul>

          <div className="mt-4">
            <h5 className="font-semibold text-gray-900">Hiring signal</h5>
            <p className="mt-2 text-gray-700">
              We screen for problem solving, design thinking and hands-on
              coding. Hire-ready candidates typically clear our vetting path
              before you meet them.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6 text-xs">
        <StatCard value="100+" label="Team size" />
        <StatCard value="85%" label="Retention (12 months)" />
        <StatCard value="4–6w" label="Average ramp time" />
      </div>
    </section>
  );
}

/* ---------------- Policies ---------------- */

function Policies() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        Privacy &amp; copyright
      </h2>
      <div className="mt-4 text-sm text-gray-700 space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900">Privacy policy</h4>
          <p className="mt-2">
            We collect contact information and hiring requirements to provide
            staffing services. We do not share personal data with third parties
            unless required by law or to provide services to you (for example,
            payroll providers).
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Copyright</h4>
          <p className="mt-2">
            All content on this site is © {new Date().getFullYear()} LearnShiz
            Techies. Reproduction without permission is prohibited.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <SectionTitle
        title="Tell us what you’re building"
        subtitle="Share your roles, tech stack, experience range and budget. We’ll respond with a shortlist and next steps."
      />

      <form
        className="mt-6 grid grid-cols-1 gap-4 text-sm"
        onSubmit={(e) => {
          e.preventDefault();
          window.location = "mailto:hello@learnshiz.com";
        }}
      >
        <input
          required
          placeholder="Full name"
          className="border border-gray-300 bg-white text-gray-900 px-4 py-3 rounded-xl"
        />
        <input
          required
          placeholder="Work email"
          type="email"
          className="border border-gray-300 bg-white text-gray-900 px-4 py-3 rounded-xl"
        />
        <input
          placeholder="Company"
          className="border border-gray-300 bg-white text-gray-900 px-4 py-3 rounded-xl"
        />
        <textarea
          placeholder="Roles, tech stack, experience range, time zone overlap, budget, start date"
          className="border border-gray-300 bg-white text-gray-900 px-4 py-3 rounded-xl h-32"
        />
        <div className="flex flex-wrap gap-4 items-center">
          <button type="submit" className="btn-primary text-sm">
            Send brief
          </button>
          <Link to="/developers" className="btn-ghost text-xs">
            See sample profiles
          </Link>
        </div>
      </form>

      <div className="mt-8 text-xs md:text-sm text-gray-700">
        <div>Phone: +91 95919 67760</div>
        <div>Email: hello@learnshiz.com</div>
      </div>
    </section>
  );
}

/* ---------------- Not Found ---------------- */

function NotFound() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-20 text-center">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
        Page not found
      </h3>
      <p className="mt-3 text-gray-600">
        We couldn’t find the page you’re looking for.
      </p>
      <Link to="/" className="mt-6 inline-block btn-ghost text-xs">
        Go home
      </Link>
    </section>
  );
}

/* ---------------- Reusable UI ---------------- */

function SectionTitle({ title, subtitle, noMargin = false }) {
  return (
    <div className={noMargin ? "" : "mb-2"}>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-xs md:text-sm text-gray-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div className="text-xl md:text-2xl font-semibold text-indigo-700">
        {value}
      </div>
      <div className="mt-1 text-[0.8rem] text-gray-600">{label}</div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="glass-soft p-5 text-sm">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="mt-2 text-gray-700">{desc}</p>
    </div>
  );
}

function Card({ title, desc }) {
  const navigate = useNavigate();
  return (
    <div className="card p-5 text-sm">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="mt-2 text-gray-700">{desc}</p>
      <div className="mt-4">
        <button
          className="btn-primary text-xs"
          onClick={() => navigate("/contact")}
        >
          Talk to us
        </button>
      </div>
    </div>
  );
}

function StatCard({ value, label, accent = false }) {
  const valueClass = accent ? "text-indigo-700" : "text-gray-900";
  const labelClass = "text-gray-600";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-4 md:p-5 text-center border ${
        accent
          ? "bg-indigo-50 border-indigo-200"
          : "bg-white border-gray-200"
      }`}
    >
      <div className={`text-lg md:text-xl font-semibold ${valueClass}`}>
        {value}
      </div>
      <div className={`mt-1 text-[0.75rem] ${labelClass}`}>{label}</div>
    </div>
  );
}

/* ---------------- Carousels ---------------- */

function TestimonialsCarousel() {
  const items = [
    {
      name: "Dharampal Chaudhary, Upcred.ai",
      role: "Founder",
      text: "LearnShiz helped us add high-quality fullstack developers in Bangalore within weeks. Their screening saved our team a lot of time.",
    },
    {
      name: "David Abady",
      role: "Founder",
      text: "They provided a stable remote team that integrated seamlessly with our product squad. Great communication and clarity on pricing.",
    },
    {
      name: "Yossi D.",
      role: "CEO",
      text: "We rely on LearnShiz for specialist roles in data and QA. The hit-rate in interviews is consistently high.",
    },
  ];
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % items.length),
      5500
    );
    return () => clearInterval(t);
  }, [items.length]);

  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);

  return (
    <div className="relative mt-4">
      <div className="overflow-hidden">
        <div className="card min-h-[150px] p-5 flex flex-col justify-between transition-all duration-500 ease-in-out">
          <div className="text-sm md:text-[0.95rem] italic text-gray-900">
            “{items[idx].text}”
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-900 text-sm">
                {items[idx].name}
              </div>
              <div className="text-xs text-gray-600">{items[idx].role}</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-xs"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-xs"
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === idx ? "bg-indigo-600" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="mt-10 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-8 pb-6">
        <div className="grid md:grid-cols-4 gap-7 text-xs md:text-sm">
          <div>
            <div className="font-semibold text-gray-900">
              LearnShiz Techies
            </div>
            <div className="text-gray-600 mt-2">
              Global Tech &amp; AI Staffing Partner • Since 2015
            </div>
            <div className="text-gray-500 mt-2 text-[0.8rem]">
              We provide vetted developers to product and platform teams
              worldwide, with a developer-first pricing model.
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Links</div>
            <div className="mt-2 flex flex-col gap-1 text-gray-700">
              <Link to="/developers">Process</Link>
              <Link to="/services">Staffing services</Link>
              <Link to="/clients">Case studies</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/careers">Join as dev</Link>
              <Link to="/policies">Policies</Link>
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Team</div>
            <div className="mt-2 text-gray-600 text-[0.8rem]">
              100+ team members across India, Nepal, Myanmar, Bangladesh, UAE,
              Israel and more.
            </div>
            <div className="mt-3 text-[0.8rem] text-gray-500">
              Values: Transparency • Developer-first • Continuous learning
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">
              Contact &amp; offices
            </div>
            <div className="mt-2 text-[0.8rem] text-gray-700">
              <div>hello@learnshiz.com</div>
              <div className="mt-1">Phone: +91 95919 67760</div>
              <div className="mt-3">
                <div className="font-semibold text-gray-900 text-xs">
                  Office locations
                </div>
                <ul className="mt-1 list-inside text-[0.8rem] text-gray-700 space-y-0.5">
                  <li>Bengaluru - BTM 1st Stage, KA</li>
                  <li>Lucknow - Indira Nagar, UP</li>
                  <li>Indore - New Town, MP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Maps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
          <div className="card overflow-hidden">
            <iframe
              title="Bengaluru office"
              src="https://www.google.com/maps?q=BTM%201st%20Stage%20Bengaluru&output=embed"
              className="w-full h-40 border-0"
            />
            <div className="p-3 text-[0.75rem] text-gray-800">
              Bengaluru — BTM 1st Stage
            </div>
          </div>

          <div className="card overflow-hidden">
            <iframe
              title="Lucknow office"
              src="https://www.google.com/maps?q=Indira%20Nagar%20Lucknow&output=embed"
              className="w-full h-40 border-0"
            />
            <div className="p-3 text-[0.75rem] text-gray-800">
              Lucknow — Indira Nagar
            </div>
          </div>

          <div className="card overflow-hidden">
            <iframe
              title="Indore office"
              src="https://www.google.com/maps?q=New%20Town%20Indore&output=embed"
              className="w-full h-40 border-0"
            />
            <div className="p-3 text-[0.75rem] text-gray-800">
              Indore — New Town
            </div>
          </div>
        </div>

        <div className="mt-6 text-[0.7rem] text-gray-500 text-center">
          © {new Date().getFullYear()} APSS Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default App;
