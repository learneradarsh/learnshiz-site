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
  "border-b-2 border-blue-600 text-blue-700 font-medium";

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
          --primary: #1f57e7;
          --primary-hover: #1640b3;
          --bg: #ffffff;
          --surface: #f8fafc;
          --heading: #0f172a;
          --muted: #64748b;
          --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          --radius-md: 12px;
          --radius-sm: 6px;
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
          background: var(--primary);
          color: #ffffff;
          border-radius: var(--radius-sm);
          padding: 0.6rem 1.4rem;
          transition: background-color .15s ease, transform .1s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        .btn-primary:hover {
          background: var(--primary-hover);
        }

        .btn-ghost {
          background: transparent;
          border: 1px solid #cbd5e1;
          color: #0f172a;
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-sm);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: background-color .15s ease, border-color .15s ease;
        }
        .btn-ghost:hover {
          background: #f1f5f9;
          border-color: #94a3b8;
        }
        
        .btn-ghost-dark {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-sm);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: background-color .15s ease;
        }
        .btn-ghost-dark:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .card {
          background: var(--surface);
          border-radius: var(--radius-md);
          box-shadow: var(--card-shadow);
          border: 1px solid #e2e8f0;
        }

        .glass-soft {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .muted {
          color: var(--muted);
        }

        .pill {
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(31, 87, 231, 0.1);
          color: var(--primary);
          font-weight: 600;
          font-size: 0.72rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .chip {
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          border: 1px solid #e2e8f0;
          font-size: 0.75rem;
          color: #334155;
          background: #f8fafc;
          font-weight: 500;
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
            <Route path="/careers" element={<Careers />} />
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
            className="w-10 h-10 rounded-2xl border border-blue-100 bg-blue-50 object-contain"
          />
          <div>
            <div className="font-semibold text-sm md:text-base text-gray-900 tracking-tight flex items-center gap-2">
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
            to="/careers"
            className={({ isActive }) =>
              isActive ? activeClass : "text-gray-600 hover:text-gray-900"
            }
          >
            Join as dev
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={DEV_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 mr-2"
          >
            Apply for Jobs
          </a>
          <Link to="/contact" className="btn-primary text-sm">
            Hire Developers
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
            ["Join as dev", "/careers"],
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
                  className="h-3 rounded-full bg-blue-500"
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
    <div className="w-full">
      {/* Dark Hero Section */}
      <section className="w-full bg-[#0a0f1c] text-white pt-20 pb-24 md:pt-32 md:pb-40 px-4 md:px-6 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1f57e7]/20 to-transparent pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1f57e7] rounded-full blur-[150px] opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs md:text-sm font-semibold border bg-blue-900/40 border-blue-500/30 text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block animate-pulse" />
              AI-Powered Talent Matching
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs md:text-sm font-semibold border bg-slate-800/60 border-slate-600/50 text-slate-200">
              🇺🇸 Presence in Miami, FL
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl">
            The most deeply vetted developers and teams, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">matched by AI.</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Join hundreds of companies that use LearnShiz's Intelligent Talent Cloud to source, vet, match, and manage the world's best software developers remotely.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
              Hire Developers
            </Link>
            <a href={DEV_FORM_URL} target="_blank" rel="noreferrer" className="btn-ghost-dark text-base px-8 py-3.5">
              Apply for Jobs
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-gray-400">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white mb-1">100+</span>
              Vetted Developers
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white mb-1">48h</span>
              Average Match Time
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white mb-1">20+</span>
              Global Clients
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Band */}
      <ClientsCarouselBand />

      {/* AI Vetting Process (Turing equivalent) */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why choose our Intelligent Talent Cloud?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We use AI-driven signals and rigorous technical assessments to find the top 1% of global engineering talent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Rigorous Vetting</h3>
            <p className="text-gray-600 leading-relaxed">
              Our 4-step vetting process evaluates communication, technical depth, architectural design, and problem-solving skills.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Matching</h3>
            <p className="text-gray-600 leading-relaxed">
              We match your exact stack, timezone, and project requirements using millions of data points to ensure the perfect fit.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Time Zone Aligned</h3>
            <p className="text-gray-600 leading-relaxed">
              Our developers work in your time zone with overlapping hours for seamless collaboration and daily standups.
            </p>
          </div>
        </div>
      </section>

      {/* AI stack band */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 pb-10">
          <AIStackBand />
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">
        <PricingComparison />
      </section>

      {/* Impact + testimonials row */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Impact in numbers
            </h3>
            <p className="mt-4 text-lg text-gray-600 max-w-md">
              We help product and platform teams add high-ownership engineers
              without building a local HR or payroll stack.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-2 gap-4">
              <StatCard value="100+" label="Active developers" accent />
              <StatCard value="20+" label="Global clients" />
              <StatCard value="30–60%" label="Time saved in hiring" />
              <StatCard value="<15%" label="Typical management fee" />
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">
              What our customers say
            </h3>
            <p className="mt-2 text-gray-600">
              From early-stage founders to enterprise engineering leaders.
            </p>
            <div className="mt-6">
              <TestimonialsCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CTA */}
      <BottomCTA 
        title="Ready to build your dream engineering team?"
        subtitle="Hire the top 1% of global developers. Risk-free, fast, and matched precisely to your stack and culture."
      />
    </div>
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
          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
            <span className="text-blue-600 text-lg">⚙️</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-blue-700 tracking-wide">
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
    <div className="w-full">
      <PageHero 
        pillText="Services"
        title="Staffing services for modern engineering"
        titleHighlight="& AI teams"
        subtitle="Flexible engagement models to add high-quality developers to your roadmap — without building an entire local hiring function."
      />
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
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
                    className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[0.75rem] font-medium"
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
                      className="h-2 rounded-full bg-blue-500"
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

      </section>

      <BottomCTA 
        title="Need developers for your roadmap?"
        subtitle="Share your roles, tech stack and timeline — we’ll send a curated shortlist of vetted profiles, usually within 48 hours."
      />
    </div>
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
        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-[3px] bg-blue-200 rounded-full"></div>

        <div className="flex flex-col gap-10">
          {steps.map((s, index) => (
            <div key={index} className="relative">
              {/* Step Circle */}
              <div
                className="absolute -left-[6px] md:-left-[10px] top-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-600 flex items-center justify-center text-[0.75rem] md:text-xs text-white shadow-md"
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
    <div className="w-full">
      <PageHero 
        pillText="For Companies"
        title="Hire vetted developers for your"
        titleHighlight="product team"
        subtitle="Fullstack, mobile, QA, automation, cloud, data, AI/ML and LLM engineers — screened for product experience, communication and ownership."
      />
      <section className="max-w-6xl mx-auto px-5 py-16">
        {/* VETTING PROCESS */}
     <ProcessTimeline />

      {/* SAMPLE PROFILES */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-900">Sample profiles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
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
                    className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-[0.7rem] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      </section>

      <BottomCTA 
        title="Want to see matching profiles?"
        subtitle="Share your tech stack & timeline — we’ll send 3 vetted profiles in 48 hours."
      />
    </div>
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
            <div className="text-xl font-semibold text-blue-700">
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
        <div className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2">
          <div className="text-[0.65rem] text-blue-700 uppercase tracking-[0.14em]">
            Stability
          </div>
          <div className="mt-1 text-base font-semibold text-blue-800">
            6–24 months
          </div>
          <div className="text-[0.68rem] text-blue-800/80">
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
      <div className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-blue-600">
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
    <div className="w-full">
      <PageHero 
        pillText="For Talent"
        title="Join as a"
        titleHighlight="developer"
        subtitle="Work with global product teams as a LearnShiz consultant — with transparent payouts, remote-first culture and clear growth paths."
      />
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        {/* Top: quick split + benefit chart */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-6">
        <div className="card bg-white border rounded-xl p-6 shadow-sm">
          <div className="text-xs font-semibold text-blue-600">
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
            <div className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-3">
              <div className="text-[0.7rem] text-blue-700 font-semibold">
                Part-time consultant
              </div>
              <div className="mt-1 text-[0.8rem] text-blue-900">
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
            <div className="text-sm font-semibold text-blue-600">
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
            <div className="text-sm font-semibold text-blue-600">
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

      </section>

      <BottomCTA 
        title="Ready to accelerate your career?"
        subtitle="Join our talent network today. We match you with high-growth global teams where you can make a real impact."
      />
    </div>
  );
}


/* ---------------- About ---------------- */

function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">

      {/* HERO BAND */}
      <div className="rounded-2xl bg-white border border-blue-100 shadow-sm p-8 md:p-10">
        <div className="text-xs font-semibold text-blue-700 uppercase tracking-[0.16em]">
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
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            Our mission
          </div>
          <p className="mt-2 text-gray-700">
            To connect great product teams with high-ownership engineers through
            a transparent and developer-centric staffing model.
          </p>
        </div>

        <div className="card p-6 shadow-sm border rounded-xl">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            Our vision
          </div>
          <p className="mt-2 text-gray-700">
            To be the most trusted global partner for building remote engineering,
            data & AI teams — from prototype to scale.
          </p>
        </div>

        <div className="card p-6 shadow-sm border rounded-xl">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
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
      <div className="mt-12 rounded-2xl p-7 text-center bg-white border border-blue-100 shadow-lg">
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
      <div className="rounded-2xl bg-white border border-blue-100 shadow-sm p-8 md:p-10">
        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
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
              <li>• Engineers think beyond tasks (impact &gt; output)</li>
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
            <div className="font-semibold text-blue-700 text-xl">35%</div>
            <div className="text-gray-700 mt-1">Faster sprint delivery after ramp-up</div>
          </div>
          <div className="p-5 border rounded-xl bg-gray-50">
            <div className="font-semibold text-blue-700 text-xl">40–70%</div>
            <div className="text-gray-700 mt-1">Cost savings vs US/UK hiring</div>
          </div>
          <div className="p-5 border rounded-xl bg-gray-50">
            <div className="font-semibold text-blue-700 text-xl">4–6 weeks</div>
            <div className="text-gray-700 mt-1">Average engineer ramp time</div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-6 max-w-3xl">
          Our internal engineering coaches help developers ramp faster with guidance on architecture,
          testing, documentation and communication — ensuring consistent quality across engagements.
        </p>
      </div>

      {/* LEADERSHIP BAND */}
      <div className="mt-16 rounded-2xl bg-blue-50 border border-blue-200 p-7 shadow-sm">
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
      <div className="mt-16 rounded-2xl p-7 text-center bg-white border border-blue-100 shadow-lg">
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
    <div className="w-full">
      <PageHero 
        pillText="Contact Us"
        title="Tell us what you're"
        titleHighlight="building"
        subtitle="Share your roles, tech stack, experience range and budget. We’ll respond with a shortlist and next steps."
        ctaText="See sample profiles"
        ctaLink="/developers"
      />
      <section className="max-w-3xl mx-auto px-4 md:px-6 py-16">

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
    </div>
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

function PageHero({ pillText, title, titleHighlight, subtitle, ctaText = "Hire Developers", ctaLink = "/contact" }) {
  return (
    <section className="w-full bg-[#0a0f1c] text-white pt-20 pb-24 md:pt-32 md:pb-40 px-4 md:px-6 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1f57e7]/20 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1f57e7] rounded-full blur-[150px] opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        {pillText && (
          <div className="pill mb-8 bg-blue-900/40 border border-blue-500/30 text-blue-300">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 inline-block" />
            {pillText}
          </div>
        )}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl">
          {title}{" "}
          {titleHighlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {titleHighlight}
            </span>
          )}
        </h1>
        
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto">
            {subtitle}
          </p>
        )}
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link to={ctaLink} className="btn-primary text-base px-8 py-3.5">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}

function BottomCTA({ 
  title = "Ready to build your dream engineering team?", 
  subtitle = "Hire the top 1% of global developers. Risk-free, fast, and matched precisely to your stack and culture." 
}) {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-20">
      <div className="rounded-3xl p-10 md:p-14 text-center bg-blue-600 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <h3 className="text-3xl md:text-4xl font-bold relative z-10">
          {title}
        </h3>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto relative z-10">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
          <Link to="/contact" className="btn-primary bg-white text-blue-600 hover:bg-blue-50 px-8 py-3.5 shadow-lg">
            Hire Developers
          </Link>
          <a href={DEV_FORM_URL} target="_blank" rel="noreferrer" className="btn-ghost-dark px-8 py-3.5 border-blue-400 hover:bg-blue-500">
            Apply for Jobs
          </a>
        </div>
      </div>
    </section>
  );
}

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
      <div className="text-xl md:text-2xl font-semibold text-blue-700">
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
  const valueClass = accent ? "text-blue-700" : "text-gray-900";
  const labelClass = "text-gray-600";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-4 md:p-5 text-center border ${
        accent
          ? "bg-blue-50 border-blue-200"
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
              i === idx ? "bg-blue-600" : "bg-gray-300"
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
                  <li>Florida - Miami, FL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
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

          <div className="card overflow-hidden">
            <iframe
              title="Florida office"
              src="https://www.google.com/maps?q=Miami%20Florida&output=embed"
              className="w-full h-40 border-0"
            />
            <div className="p-3 text-[0.75rem] text-gray-800">
              Florida — Miami, FL
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

function ClientsCarouselBand() {
  return (
    <section className="logo-cloud">
      <div className="centered-header">
        <p className="trusted-label">TRUSTED BY INNOVATIVE COMPANIES</p>
      </div>
      <div className="carousel-mask">
        <div className="carousel-track">
          {/* Render the list 3 times for smooth infinite scroll */}
          {[1, 2, 3].map((group) => (
            <div key={group} className="flex gap-[125px] shrink-0 items-center">
              {/* 1. neuraFlow */}
              <div className="logo-item flex items-center gap-3" style={{ color: "#8046FD", opacity: 1 }}>
                <span className="logo-icon">
                  <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.04165 8.6424C0.0059185 11.2006 -0.265077 14.0155 0.262973 16.7313C0.790959 19.447 2.09428 21.9416 4.00802 23.8995C5.92176 25.8574 8.36009 27.1908 11.0145 27.731C13.6691 28.2712 16.4205 27.9939 18.921 26.9343C21.4214 25.8747 23.5586 24.0802 25.0622 21.778C25.1023 21.7166 25.1419 21.6549 25.181 21.5929C25.2086 21.5492 25.236 21.5052 25.2632 21.4611V28H26.3158C29.0223 28 31.668 27.1789 33.9183 25.6405C36.1687 24.1023 37.9226 21.9157 38.9583 19.3575C39.9941 16.7994 40.2651 13.9845 39.737 11.2687C39.209 8.55301 37.9058 6.05842 35.992 4.10052C34.0782 2.14255 31.6399 0.809212 28.9855 0.269041C26.3309 -0.271195 23.5795 0.00605512 21.079 1.06569C18.5786 2.12533 16.4414 3.91976 14.9378 6.22202C14.8694 6.3268 14.8024 6.43249 14.7368 6.53891V7.99449e-06H13.6842C10.9777 7.99449e-06 8.33201 0.821109 6.08168 2.35946C3.83134 3.89774 2.07739 6.08425 1.04165 8.6424ZM12.6316 14V2.20289C10.713 2.38207 8.86244 3.04897 7.2513 4.15027C5.34714 5.45193 3.86308 7.3021 2.98668 9.46666C2.11028 11.6313 1.88098 14.0131 2.32776 16.3111C2.77454 18.609 3.87735 20.7198 5.49664 22.3765C7.116 24.0332 9.17918 25.1614 11.4253 25.6185C13.6714 26.0756 15.9995 25.841 18.1153 24.9444C20.1461 24.0838 21.8937 22.6504 23.1559 20.814C22.1993 21.2786 21.1293 21.5385 20 21.5385C15.9306 21.5385 12.6316 18.1633 12.6316 14ZM27.3684 25.7971V14C27.3684 9.83665 24.0694 6.46154 20 6.46154C18.8707 6.46154 17.8007 6.72144 16.8441 7.18602C18.1063 5.34959 19.8539 3.91614 21.8847 3.0556C24.0005 2.15898 26.3286 1.92439 28.5747 2.38148C30.8208 2.83856 32.884 3.96682 34.5034 5.62348C36.1227 7.28021 37.2255 9.391 37.6722 11.6889C38.119 13.9869 37.8897 16.3687 37.0133 18.5333C36.137 20.6979 34.6529 22.5481 32.7487 23.8497C31.1376 24.951 29.287 25.6179 27.3684 25.7971ZM19.8947 19.3836C17.0715 19.3269 14.7933 16.996 14.7379 14.1077H16.7291C18.2999 14.474 19.5365 15.739 19.8947 17.3461V19.3836ZM20.1052 19.3836C22.9284 19.3269 25.2067 16.996 25.2621 14.1077H23.2709C21.6999 14.474 20.4633 15.7392 20.1052 17.3465V19.3836ZM25.2621 13.8923C25.2067 11.004 22.9284 8.6731 20.1052 8.61644V10.6535C20.4633 12.2607 21.6998 13.5259 23.2706 13.8923H25.2621ZM19.8947 8.61644C17.0716 8.6731 14.7933 11.004 14.7379 13.8923H16.7294C18.3001 13.5259 19.5366 12.2609 19.8947 10.6539V8.61644Z" fill="#8046FD"></path>
                  </svg>
                </span>
                <span className="logo-name">neuraFlow</span>
              </div>

              {/* 2. QUANTIX */}
              <div className="logo-item flex items-center gap-3" style={{ color: "#2563EB", opacity: 1 }}>
                <span className="logo-name wordmark-font">QUANTIX</span>
              </div>

              {/* 3. stratos */}
              <div className="logo-item flex items-center gap-3" style={{ color: "black", opacity: 1 }}>
                <span className="logo-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" opacity="0.2"></circle>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <path d="M2 12h20"></path>
                    <circle cx="12" cy="12" r="3" fill="black"></circle>
                  </svg>
                </span>
                <span className="logo-name">stratos</span>
              </div>

              {/* 4. LUMINA */}
              <div className="logo-item flex items-center gap-3" style={{ color: "inherit", opacity: 1 }}>
                <span className="logo-icon">
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0C9.50659 0 1 8.50659 1 19V20.1719L4 23.1719V19C4 10.1634 11.1634 3 20 3C28.8366 3 36 10.1634 36 19V23.1719L39 20.1719V19C39 8.50659 30.4934 0 20 0ZM20 10C15.0294 10 11 14.0294 11 19V31.0498C11 31.5743 10.5743 32 10.0498 32C9.7981 31.9999 9.55691 31.8997 9.37891 31.7217L0 22.3428V26.585L7.25781 33.8428C7.99842 34.5834 9.00245 34.9999 10.0498 35C12.2312 35 14 33.2312 14 31.0498V19C14 15.6863 16.6863 13 20 13C23.3137 13 26 15.6863 26 19V31.0498C26 33.2312 27.7688 35 29.9502 35C30.9976 34.9999 32.0016 34.5834 32.7422 33.8428L34.7066 31.8785L37.7066 28.8785L40 26.585V22.3428L37.8789 24.4639L35.5854 26.7574L32.5854 29.7574L30.6211 31.7217C30.4431 31.8997 30.2019 31.9999 29.9502 32C29.4257 32 29 31.5743 29 31.0498V19C29 14.0294 24.9706 10 20 10ZM20 15C17.7909 15 16 16.7909 16 19V31.0498C16 34.3358 13.3358 37 10.0498 37C8.47201 36.9999 6.95846 36.3735 5.84277 35.2578L0 29.4141V33.6562L3.72168 37.3789C5.39997 39.0572 7.67636 39.9999 10.0498 40C14.9926 40 19 35.9926 19 31.0498V19C19 18.4477 19.4477 18 20 18C20.5523 18 21 18.4477 21 19V31.0498C21 35.9926 25.0074 40 29.9502 40C32.3236 39.9999 34.6 39.0572 36.2783 37.3789L40 33.6562V29.4141L34.1572 35.2578C33.0415 36.3735 31.528 36.9999 29.9502 37C26.6642 37 24 34.3358 24 31.0498V19C24 16.7909 22.2091 15 20 15ZM20 5C12.268 5 6 11.268 6 19V25.1719L9 28.1719V19C9 12.9249 13.9249 8 20 8C26.0751 8 31 12.9249 31 19V28.1719L34 25.1719V19C34 11.268 27.732 5 20 5Z" fill="#ff4d00"></path>
                  </svg>
                </span>
                <span className="logo-name" style={{ background: "linear-gradient(135deg, #ff4c00 0%, #ff8300 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 800 }}>LUMINA</span>
              </div>

              {/* 5. VERTEX */}
              <div className="logo-item flex items-center gap-3" style={{ color: "#2563EB", opacity: 1 }}>
                <span className="logo-name flex items-center">
                  <span style={{ color: "black", marginRight: "4px" }}>[</span>
                  <span style={{ color: "#2563EB" }}>VERTEX</span>
                  <span style={{ color: "black", marginLeft: "4px" }}>]</span>
                </span>
              </div>

              {/* 6. apex.ai */}
              <div className="logo-item flex items-center gap-3" style={{ color: "#777777", opacity: 1 }}>
                <span className="logo-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers" aria-hidden="true">
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                  </svg>
                </span>
                <span className="logo-name">apex.ai</span>
              </div>

              {/* 7. DATEWELL */}
              <div className="logo-item flex items-center gap-3" style={{ color: "inherit", opacity: 1 }}>
                <span className="logo-icon">
                  <svg width="42" height="32" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="40" r="32" stroke="#fdbb4b" strokeWidth="6"></circle>
                    <circle cx="28" cy="22" r="6" fill="#f05423"></circle>
                    <path d="M12 45C12 35 28 35 28 45V72" stroke="#f05423" strokeWidth="5" strokeLinecap="round"></path>
                    <circle cx="45" cy="20" r="6" fill="#58b0bc"></circle>
                    <path d="M60 45C60 35 44 35 44 45V71" stroke="#58b0bc" strokeWidth="5" strokeLinecap="round"></path>
                  </svg>
                </span>
                <span className="logo-name flex items-baseline gap-1.5 wordmark-font" style={{ fontWeight: 900 }}>
                  <span style={{ color: "#58b0bc" }}>DATE</span>
                  <span style={{ color: "#f05423" }}>WELL</span>
                </span>
              </div>

              {/* 8. upcred.ai */}
              <div className="logo-item flex items-center gap-3" style={{ color: "#34495e", opacity: 1 }}>
                <span className="logo-icon">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <rect width="42" height="42" rx="10" fill="#22439c"></rect>
                    <path d="M12 16V22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22V15" stroke="white" strokeWidth="5.5" strokeLinecap="round"></path>
                    <circle cx="12.5" cy="15.5" r="3.5" fill="white" stroke="#22439c" strokeWidth="1"></circle>
                    <path d="M16 13C17 11.5 18.5 11.5 19.5 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"></path>
                    <path d="M15 10C17.5 7 21 7 23.5 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.4"></path>
                    <path d="M14 7C18 3 24 3 28 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.2"></path>
                  </svg>
                </span>
                <span className="logo-name">upcred.ai</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
