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


function HeroMiniPricing() {
  return (
    <div className="rounded-xl border border-gray-200 px-4 py-3 bg-gray-50">
      <div className="flex items-center justify-between text-[0.65rem] text-gray-500">
        <span>Cost &amp; retention snapshot</span>
        <span>Illustrative</span>
      </div>

      <div className="mt-2 space-y-3 text-[0.7rem] text-gray-600">
        {/* Monthly cost */}
        <div>
          <div className="mb-1 text-[0.7rem] text-gray-500">
            Monthly cost (lower is better)
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-20 text-[0.7rem] text-gray-600">
                LearnShiz
              </span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: "55%", backgroundColor: "#4f46e5" }}
                />
              </div>
              <span className="w-10 text-right text-[0.65rem] text-gray-500">
                ~55%
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-20 text-[0.7rem] text-gray-500">
                Typical vendor
              </span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: "85%", backgroundColor: "#9ca3af" }}
                />
              </div>
              <span className="w-10 text-right text-[0.65rem] text-gray-500">
                ~85%
              </span>
            </div>
          </div>
        </div>

        {/* Money reaching developer */}
        <div>
          <div className="mb-1 text-[0.7rem] text-gray-500">
            Money reaching developer (higher is better)
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-20 text-[0.7rem] text-gray-600">
                LearnShiz
              </span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: "90%", backgroundColor: "#10b981" }}
                />
              </div>
              <span className="w-10 text-right text-[0.65rem] text-gray-500">
                80–90%
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-20 text-[0.7rem] text-gray-500">
                Typical vendor
              </span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: "60%", backgroundColor: "#9ca3af" }}
                />
              </div>
              <span className="w-10 text-right text-[0.65rem] text-gray-500">
                50–60%
              </span>
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

        {/* Right card with pictorial graph */}
<div className="card p-6 md:p-7 relative overflow-hidden">
  {/* subtle background blobs */}
  <div className="absolute -top-16 -right-8 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60" />
  <div className="absolute -bottom-16 -left-8 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-60" />

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
        From Bengaluru
        <br />
        to Tel Aviv &amp; beyond
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
          RAG, vector search, prompt engineering, MLOps and production LLM
          pipelines.
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
          React / Angular / Node / Java / .NET engineers embedding into your
          sprints.
        </p>
      </div>
    </div>

    {/* NEW pictorial graph widget */}
    <HeroMiniPricing />
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

/* ---------------- Developers ---------------- */

function ProcessTimeline() {
  const steps = [
    {
      step: "1",
      title: "Discovery & role mapping",
      desc: "Understand your product, stack, seniority & culture needs.",
    },
    {
      step: "2",
      title: "Profile screening",
      desc: "Deep review of experience, past projects & domain match.",
    },
    {
      step: "3",
      title: "Hands-on technical test",
      desc: "Coding & debugging aligned to your target role.",
    },
    {
      step: "4",
      title: "Architecture / system design",
      desc: "Trade-off discussions & design thinking for senior roles.",
    },
    {
      step: "5",
      title: "Communication & ownership",
      desc: "Remote-first collaboration skills & stakeholder handling.",
    },
    {
      step: "6",
      title: "Final shortlist",
      desc: "You receive 3–5 curated profiles with notes & rate bands.",
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold text-gray-900 text-center md:text-left">
        Our hiring process
      </h2>
      <p className="text-gray-600 mt-2 text-sm max-w-xl md:text-left text-center mx-auto md:mx-0">
        A structured, transparent workflow ensuring only high-quality engineers reach your interview.
      </p>

      <div className="relative mt-10 pl-6 md:pl-10">
        {/* Vertical Line */}
        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-[3px] bg-indigo-200 rounded-full"></div>

        <div className="flex flex-col gap-10">
          {steps.map((s, index) => (
            <div key={index} className="relative">
              {/* Step Circle */}
              <div
                className="absolute -left-[6px] md:-left-[10px] top-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-indigo-600 flex items-center justify-center text-[0.75rem] md:text-xs text-white shadow-md"
              >
                {s.step}
              </div>

              {/* Card */}
              <div className="ml-6 md:ml-10 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="font-semibold text-gray-900 text-sm md:text-base">
                  {s.title}
                </div>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


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
     <ProcessTimeline />

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

function CaseStudyCard({ company, title, bullets, metrics }) {
  return (
    <div className="card p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition text-sm">
      <div className="font-semibold text-gray-900 text-lg">{company}</div>
      <div className="mt-1 text-gray-700">{title}</div>

      <ul className="mt-3 space-y-1.5 text-gray-700">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl border bg-gray-50 px-3 py-3 flex flex-col"
          >
            <div className="text-xl font-semibold text-indigo-700">
              {m.value}
            </div>
            <div className="text-[0.7rem] text-gray-600">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


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

      {/* Outcome-driven case stories */}
<div className="mt-14">
  <h3 className="text-xl font-semibold text-gray-900">
    Success stories
  </h3>
  <p className="text-sm text-gray-600 mt-1 max-w-2xl">
    A quick look at how we helped founders, CTOs and engineering leaders scale
    faster with vetted developers and transparent pricing.
  </p>

  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    <CaseStudyCard
      company="Dental Bazar"
      title="Modernized their e-commerce platform and scaled engineering."
      bullets={[
        "Added 4 fullstack developers within 3 weeks",
        "Improved front-end performance by ~35%",
        "Reduced checkout failures by ~22%",
      ]}
      metrics={[
        { value: "4", label: "Devs added" },
        { value: "35%", label: "Perf gain" },
        { value: "22%", label: "Error drop" },
      ]}
    />

    <CaseStudyCard
      company="Global Ecommerce"
      title="Built cross-functional squad to increase release frequency."
      bullets={[
        "Provided 3 remote engineers (2 FE + 1 QA)",
        "Helped double release frequency in 5 months",
        "Stabilized mobile UI issues across browsers",
      ]}
      metrics={[
        { value: "3", label: "Engineers" },
        { value: "2x", label: "Faster releases" },
        { value: "<3%", label: "Bug escape rate" },
      ]}
    />

    <CaseStudyCard
      company="GT Consulting"
      title="Enabled faster delivery for enterprise SaaS projects."
      bullets={[
        "Setup a 5-member delivery pod",
        "Reduced dependency on contractors by 60%",
        "Improved turnaround time for integrations",
      ]}
      metrics={[
        { value: "5", label: "Pod size" },
        { value: "60%", label: "Contractor cut" },
        { value: "40%", label: "Faster delivery" },
      ]}
    />

    <CaseStudyCard
      company="Upcred.ai"
      title="Specialist hiring for fintech & AI roadmap."
      bullets={[
        "Added fullstack + QA + data engineers",
        "Reduced interview load by 70% using our vetting",
        "Enabled launch of 3 new risk models",
      ]}
      metrics={[
        { value: "6", label: "Roles filled" },
        { value: "70%", label: "Interview time saved" },
        { value: "3", label: "AI models shipped" },
      ]}
    />

    <CaseStudyCard
      company="Osmia"
      title="End-to-end pod for mobile & backend enhancements."
      bullets={[
        "Deployed a hybrid pod (Backend + Mobile)",
        "Cut API response time by ~45%",
        "Improved app crash-free ratio to 99.3%",
      ]}
      metrics={[
        { value: "45%", label: "Faster APIs" },
        { value: "99.3%", label: "Stability" },
        { value: "2", label: "Pod roles" },
      ]}
    />

    <CaseStudyCard
      company="Ira net Spooz"
      title="Data & ML-led improvements for analytics workflows."
      bullets={[
        "Provided 2 data engineers for ML pipelines",
        "Reduced pipeline failures by ~50%",
        "Improved model training time significantly",
      ]}
      metrics={[
        { value: "2", label: "Data engineers" },
        { value: "50%", label: "Fewer failures" },
        { value: "3x", label: "Faster training" },
      ]}
    />
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

function PaySplitChart() {
  return (
    <div className="card p-5 text-xs md:text-sm">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-900">
          How your payout compares
        </h4>
        <span className="text-[0.65rem] text-gray-500">Illustrative</span>
      </div>

      {/* Payout bar */}
      <div className="mt-3">
        <div className="text-[0.7rem] text-gray-500 mb-1">
          % of client billing going to you
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-28 text-[0.7rem] text-gray-600">
              LearnShiz model
            </span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full"
                style={{ width: "88%", backgroundColor: "#4f46e5" }}
              />
            </div>
            <span className="w-12 text-right text-[0.65rem] text-gray-500">
              80–90%
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-28 text-[0.7rem] text-gray-500">
              Typical vendor
            </span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full"
                style={{ width: "60%", backgroundColor: "#9ca3af" }}
              />
            </div>
            <span className="w-12 text-right text-[0.65rem] text-gray-500">
              50–60%
            </span>
          </div>
        </div>
      </div>

      {/* Stability row */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-[0.7rem]">
        <div className="rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-2">
          <div className="text-[0.65rem] text-indigo-700 uppercase tracking-[0.14em]">
            Stability
          </div>
          <div className="mt-1 text-base font-semibold text-indigo-800">
            6–24 months
          </div>
          <div className="text-[0.68rem] text-indigo-800/80">
            typical engagement length
          </div>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2">
          <div className="text-[0.65rem] text-emerald-700 uppercase tracking-[0.14em]">
            Focus
          </div>
          <div className="mt-1 text-base font-semibold text-emerald-800">
            1–2 teams
          </div>
          <div className="text-[0.68rem] text-emerald-800/80">
            not shuffled every few weeks
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ tag, title, desc }) {
  return (
    <div className="card p-4 flex flex-col gap-2 text-sm">
      <div className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-indigo-600">
        {tag}
      </div>
      <div className="font-semibold text-gray-900">{title}</div>
      <p className="text-[0.8rem] text-gray-700">{desc}</p>
    </div>
  );
}

function BenefitsGrid() {
  const benefits = [
    {
      tag: "LEARNING",
      title: "Free training through Udemy",
      desc: "Access to curated Udemy courses so you can keep growing in React, Node, cloud, data and AI.",
    },
    {
      tag: "SETUP",
      title: "Work-from-home support",
      desc: "Guidance and allowances for a solid remote setup — so you can deliver without friction.",
    },
    {
      tag: "EXPOSURE",
      title: "Global product teams",
      desc: "Work with SaaS, fintech and platform companies across US, Europe and the Middle East.",
    },
    {
      tag: "GROWTH",
      title: "Guided career path",
      desc: "Regular check-ins, feedback and help to move towards the tech stack and role you want next.",
    },
  ];

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Why developers choose LearnShiz
        </h3>
        <span className="hidden md:inline-block text-[0.75rem] text-gray-500">
          Developer-first model • Transparent payouts • Long-term projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {benefits.map((b) => (
          <BenefitCard
            key={b.title}
            tag={b.tag}
            title={b.title}
            desc={b.desc}
          />
        ))}
      </div>
    </div>
  );
}


function Careers() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <SectionTitle
        title="Join as a developer"
        subtitle="Work with global product teams as a LearnShiz consultant — with transparent payouts, remote-first culture and clear growth paths."
      />

      {/* Top: quick split + benefit chart */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-6">
        <div className="card bg-white border rounded-xl p-6 shadow-sm">
          <div className="text-xs font-semibold text-indigo-600">
            Two ways to work with us
          </div>
          <h3 className="text-lg font-semibold mt-1 text-gray-900">
            Choose what fits you today — switch later as your plans change.
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            Some developers prefer evenings/weekends on top of a day job.
            Others want full-time remote with a single global product team. We
            support both.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-3">
              <div className="text-[0.7rem] text-indigo-700 font-semibold">
                Part-time consultant
              </div>
              <div className="mt-1 text-[0.8rem] text-indigo-900">
                10–20 hours / week • Ideal if you want extra income and
                exposure alongside your current role.
              </div>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-3">
              <div className="text-[0.7rem] text-emerald-700 font-semibold">
                Full-time consultant
              </div>
              <div className="mt-1 text-[0.8rem] text-emerald-900">
                40 hours / week • Join a product team full-time, remote-first,
                with payouts aligned to client billing.
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-[0.75rem] text-gray-600">
            <span className="chip">Remote-first</span>
            <span className="chip">Global clients</span>
            <span className="chip">Developer-first payouts</span>
            <span className="chip">Long-term engagements</span>
          </div>
        </div>

        {/* Pictorial data: payout & stability */}
        <PaySplitChart />
      </div>

      {/* Consultant Paths (your two cards) */}
      <section className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Part-time */}
          <div className="card bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-sm font-semibold text-indigo-600">
              PART-TIME CONSULTANT
            </div>
            <h3 className="text-lg font-semibold mt-1 text-gray-900">
              Evenings &amp; weekend consulting
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Ideal if you want additional income and global exposure while
              keeping your full-time job. You’ll work on specific modules,
              features or problem statements with flexible hours.
            </p>

            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li>• 10–20 hours per week</li>
              <li>• Async-friendly work with US / EU teams</li>
              <li>• Paid hourly or per-module basis</li>
              <li>• Great fit for specialists or senior ICs</li>
            </ul>

            <a
              href={DEV_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 inline-block text-sm"
            >
              Apply as part-time consultant
            </a>
          </div>

          {/* Full-time */}
          <div className="card bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-sm font-semibold text-indigo-600">
              FULL-TIME CONSULTANT
            </div>
            <h3 className="text-lg font-semibold mt-1 text-gray-900">
              Dedicated full-time consultant
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Join a product team full-time, working closely with their
              engineering leads. You’ll be part of daily rituals while we manage
              payroll, compliance and long-term growth planning.
            </p>

            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li>• Full 40 hours per week</li>
              <li>• Embedded into client sprints &amp; ceremonies</li>
              <li>• Long-term stable contracts (6–24 months)</li>
              <li>• Premium payouts — 80–90% goes to the developer</li>
            </ul>

            <a
              href={DEV_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 inline-block text-sm"
            >
              Apply as full-time consultant
            </a>
          </div>
        </div>
      </section>

      {/* Visual benefits grid */}
      <BenefitsGrid />

      {/* Who we're looking for + bottom CTAs (reusing your content) */}
      <div className="mt-10 card p-5 text-sm">
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
          <li>Good written &amp; spoken English, comfortable with async work.</li>
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
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">

      {/* HERO BAND */}
      <div className="rounded-2xl bg-white border border-indigo-100 shadow-sm p-8 md:p-10">
        <div className="text-xs font-semibold text-indigo-700 uppercase tracking-[0.16em]">
          ABOUT LEARNSHIZ TECHIES
        </div>
        <h1 className="mt-3 text-2xl md:text-3xl font-semibold text-gray-900">
          A global, developer-first staffing partner for modern engineering & AI teams.
        </h1>
        <p className="mt-3 text-sm md:text-base text-gray-700 max-w-3xl">
          We help product & platform companies build high-quality remote teams by providing
          vetted engineers across fullstack, cloud, data, AI/ML and automation.
          Our pricing is transparent, our model is developer-first, and our
          engagements are built for long-term stability.
        </p>
      </div>

      {/* STATS RIBBON */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="100+" label="Active developers" accent />
        <StatCard value="20+" label="Global clients" />
        <StatCard value="7+" label="Years in operation" />
        <StatCard value="85%" label="12-month retention" />
      </div>

      {/* 3-PILLAR GRID */}
      <div className="mt-14 grid md:grid-cols-3 gap-6 text-sm">
        <div className="card p-6 shadow-sm border rounded-xl">
          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Our mission
          </div>
          <p className="mt-2 text-gray-700">
            To connect great product teams with high-ownership engineers through
            a transparent and developer-centric staffing model.
          </p>
        </div>

        <div className="card p-6 shadow-sm border rounded-xl">
          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Our vision
          </div>
          <p className="mt-2 text-gray-700">
            To be the most trusted global partner for building remote engineering,
            data & AI teams — from prototype to scale.
          </p>
        </div>

        <div className="card p-6 shadow-sm border rounded-xl">
          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Our values
          </div>
          <ul className="mt-2 text-gray-700 space-y-1.5">
            <li>• Transparency</li>
            <li>• Developer-first approach</li>
            <li>• Speed + quality</li>
            <li>• Clear communication</li>
            <li>• Long-term thinking</li>
          </ul>
        </div>
      </div>

      {/* CAPABILITIES CHART */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold text-gray-900">What we excel at</h3>
        <p className="text-sm text-gray-600 mt-1 max-w-2xl">
          We specialize only in technology roles — and deeply understand engineering culture.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="card p-5 border rounded-xl">
            <div className="font-semibold text-gray-900">Modern engineering</div>
            <ul className="mt-2 text-gray-700 space-y-1.5">
              <li>• Fullstack (React / Node / Java / .NET)</li>
              <li>• Microfrontends & SPA</li>
              <li>• API & microservices</li>
              <li>• QA automation</li>
            </ul>
          </div>

          <div className="card p-5 border rounded-xl">
            <div className="font-semibold text-gray-900">Cloud & DevOps</div>
            <ul className="mt-2 text-gray-700 space-y-1.5">
              <li>• AWS / GCP / Azure</li>
              <li>• CI/CD & IaC</li>
              <li>• SRE & observability</li>
              <li>• Cost-efficient scaling</li>
            </ul>
          </div>

          <div className="card p-5 border rounded-xl">
            <div className="font-semibold text-gray-900">Data, ML & AI</div>
            <ul className="mt-2 text-gray-700 space-y-1.5">
              <li>• Data engineering (Airflow, DBT, Spark)</li>
              <li>• ML pipelines (MLflow, feature stores)</li>
              <li>• LLM & GenAI (RAG, vector DBs)</li>
              <li>• MLOps & monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* GLOBAL PRESENCE – ABSTRACT BAND */}
      <div className="mt-16 glass-soft p-6 md:p-7 rounded-2xl border shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">
          A distributed global team
        </h3>
        <p className="text-sm text-gray-600 mt-2 max-w-2xl">
          Our engineers and delivery leaders operate remotely across India,
          Nepal, Bangladesh, Myanmar, UAE and Israel — enabling 24×5 coverage,
          better collaboration windows, and diverse technical expertise.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-[0.75rem] text-gray-700">
          <span className="chip">Bengaluru</span>
          <span className="chip">Lucknow</span>
          <span className="chip">Indore</span>
          <span className="chip">Kathmandu</span>
          <span className="chip">Dubai</span>
          <span className="chip">Tel Aviv</span>
        </div>
      </div>

      {/* STORY BLOCK */}
      <div className="mt-14 card p-6 border rounded-xl shadow-sm text-sm">
        <h4 className="font-semibold text-gray-900">Our story</h4>
        <p className="mt-2 text-gray-700 leading-relaxed">
          LearnShiz began as a small engineering group in 2015 focused on solving
          real product problems. Over time, founders & CTOs started asking us to
          help them hire developers with the same quality bar.  
          <br /><br />
          That’s when we built a developer-first staffing model — transparent
          pricing, high-quality vetting, global communication standards, and
          long-term engagement stability.  
          <br /><br />
          Today, we work with startups and mid-market product teams across US,
          Europe and the Middle East, helping them ship faster with engineers who
          think like product owners.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl p-7 text-center bg-white border border-indigo-100 shadow-lg">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          Want to explore a hiring partnership?
        </h3>
        <p className="mt-3 text-sm md:text-base text-gray-700 max-w-xl mx-auto">
          Schedule a quick call — we’ll walk you through our model, rate cards,
          screening process and sample profiles.
        </p>
        <Link to="/contact" className="btn-primary mt-6 inline-block text-sm">
          Schedule a call
        </Link>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */

function Team() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">

      {/* HERO */}
      <div className="rounded-2xl bg-white border border-indigo-100 shadow-sm p-8 md:p-10">
        <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">
          OUR TEAM
        </div>
        <h1 className="mt-3 text-2xl md:text-3xl font-semibold text-gray-900">
          A high-ownership engineering team trusted by product companies worldwide.
        </h1>
        <p className="mt-3 text-sm md:text-base text-gray-700 max-w-3xl">
          We’re a remote-first, developer-focused organization of 100+ engineers, 
          architects, QA specialists, DevOps leaders, data engineers and AI/ML practitioners 
          working across India, Nepal, Bangladesh, Myanmar, UAE and Israel.
        </p>
      </div>

      {/* TEAM METRICS RIBBON */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="100+" label="Active engineers" accent />
        <StatCard value="85%" label="1-year retention rate" />
        <StatCard value="4 days" label="Average hiring turnaround" />
        <StatCard value="96%" label="Client satisfaction score" />
      </div>

      {/* WHY OUR TEAM WORKS */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-900">Why our engineering team delivers better outcomes</h2>
        <p className="text-gray-600 text-sm max-w-2xl mt-2">
          A combination of strong fundamentals, product mindset, communication and accountability — backed by
          a structured internal review system.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="card p-5 border rounded-xl shadow-sm">
            <div className="font-semibold text-gray-900">Product-first mindset</div>
            <ul className="mt-2 text-gray-700 space-y-1.5">
              <li>• Engineers think beyond tasks (impact > output)</li>
              <li>• Experience working with US/EU product teams</li>
              <li>• Strong understanding of business KPIs</li>
            </ul>
          </div>

          <div className="card p-5 border rounded-xl shadow-sm">
            <div className="font-semibold text-gray-900">Engineering excellence</div>
            <ul className="mt-2 text-gray-700 space-y-1.5">
              <li>• Code reviews, pair programming, linting, a11y</li>
              <li>• Testing culture: unit, e2e, automation</li>
              <li>• Modern stacks: React, Node, Python, Kotlin, ML, RAG</li>
            </ul>
          </div>

          <div className="card p-5 border rounded-xl shadow-sm">
            <div className="font-semibold text-gray-900">Remote delivery maturity</div>
            <ul className="mt-2 text-gray-700 space-y-1.5">
              <li>• Daily async updates, clear documentation</li>
              <li>• Jira, GitHub, CircleCI/GHA, Slack alignment</li>
              <li>• Overlap hours across EST, CET & Middle East</li>
            </ul>
          </div>
        </div>
      </div>

      {/* DELIVERY FOOTPRINT */}
      <div className="mt-16 rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">How our teams improve delivery outcomes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mt-6">
          <div className="p-5 border rounded-xl bg-gray-50">
            <div className="font-semibold text-indigo-700 text-xl">35%</div>
            <div className="text-gray-700 mt-1">Faster sprint delivery after ramp-up</div>
          </div>
          <div className="p-5 border rounded-xl bg-gray-50">
            <div className="font-semibold text-indigo-700 text-xl">40–70%</div>
            <div className="text-gray-700 mt-1">Cost savings vs US/UK hiring</div>
          </div>
          <div className="p-5 border rounded-xl bg-gray-50">
            <div className="font-semibold text-indigo-700 text-xl">4–6 weeks</div>
            <div className="text-gray-700 mt-1">Average engineer ramp time</div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-6 max-w-3xl">
          Our internal engineering coaches help developers ramp faster with guidance on architecture,
          testing, documentation and communication — ensuring consistent quality across engagements.
        </p>
      </div>

      {/* LEADERSHIP BAND */}
      <div className="mt-16 rounded-2xl bg-indigo-50 border border-indigo-200 p-7 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Leadership & mentoring</h2>

        <p className="text-gray-700 mt-2 text-sm max-w-3xl">
          Senior engineers, tech leads and architects guide teams on:
        </p>

        <ul className="text-gray-800 text-sm mt-4 space-y-1.5">
          <li>• Architecture decisions & tech design</li>
          <li>• Quality gates (testing, performance, security)</li>
          <li>• Cloud architecture (AWS / GCP)</li>
          <li>• Data pipelines, ML workflows & LLM-based systems</li>
          <li>• Code quality, patterns & maintainability</li>
        </ul>

        <p className="text-gray-700 text-sm mt-4">
          This ensures consistent velocity even with distributed teams.
        </p>
      </div>

      {/* TRUST METRICS */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard value="92%" label="Repeat business" accent />
        <StatCard value="50%" label="Clients scaling to 5+ developers" />
        <StatCard value="20–50%" label="Fewer production issues after 3 months" />
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl p-7 text-center bg-white border border-indigo-100 shadow-lg">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          Want to work with a mature engineering team?
        </h3>
        <p className="mt-3 text-sm md:text-base text-gray-700 max-w-xl mx-auto">
          Share your roadmap and we’ll send vetted profiles, delivery plan and
          engineering fit recommendations — within 48 hours.
        </p>
        <Link to="/contact" className="btn-primary mt-6 inline-block text-sm">
          Request profiles
        </Link>
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
