/*
App.jsx - LearnShiz Techies
Palette: Global Trust (Deep Navy, Cyan Accent, Warm Gold CTA, Light Neutral BG)
Single-file demo (Vite/CRA). Requires react-router-dom + Tailwind CSS.

This file is complete — all components included: Header, Footer, Pages, Carousels, etc.
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import dentalBazar from './assets/dental_bazar.png';
import globecommerce from './assets/globlecommerce_logo177-e1549480340347.png';
import gtConsulting from './assets/GT_consulting.png';
import osmia from './assets/osmia.jpg';
import logo from './assets/logo.png';
import upcred from './assets/upcred_blue_logo.c0b15965.svg';
import thirdEye from './assets/thirdeye.jpg';

const activeClass = "border-b-2 border-[var(--primary)] text-[var(--primary)]";

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
      <style>{`
        /* Design tokens: Global Trust */
        :root{
          --primary: #0B3D91;      /* deep navy */
          --primary-800: #07294F;  /* darker */
          --accent: #06B6D4;       /* cyan accent */
          --cta: #FFB020;          /* warm gold for CTAs */
          --cta-700: #E09A12;
          --bg: #F6F8FB;           /* page background */
          --surface: #FFFFFF;      /* cards, surfaces */
          --heading: #0F1724;      /* near-black headings */
          --muted: #6B7280;        /* secondary text */
          --card-shadow: 0 10px 30px rgba(11,61,145,0.08);
          --radius-md: 12px;
          --radius-sm: 8px;
        }

        html, body, #root { height: 100%; background: var(--bg); }
        body { color: var(--heading); -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;}

        /* Buttons */
        .btn-primary {
          background: linear-gradient(180deg, var(--cta), var(--cta-700));
          color: #081018;
          border-radius: var(--radius-sm);
          padding: 0.6rem 1.05rem;
          box-shadow: 0 8px 20px rgba(11,61,145,0.12);
          transition: transform .12s ease, box-shadow .12s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(11,61,145,0.14); }

        .btn-ghost {
          background: transparent;
          border: 1px solid rgba(15,23,36,0.08);
          color: var(--heading);
          padding: 0.5rem 0.9rem;
          border-radius: var(--radius-sm);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* Cards & surfaces */
        .card {
          background: var(--surface);
          border-radius: var(--radius-md);
          box-shadow: var(--card-shadow);
          border: 1px solid rgba(15,23,36,0.04);
        }

        /* Utility */
        .muted { color: var(--muted); }
        .pill { padding: 6px 10px; border-radius: 999px; background: rgba(11,61,145,0.06); color: var(--primary); font-weight: 600; font-size: 13px; display:inline-block; }

        /* Footer & maps */
        footer { background: linear-gradient(180deg,#071230 0%, #0b1f3a 100%); color: #dbeafe; }
        footer a { color: #cfe9ff; }
        .map-frame { border-radius: 10px; overflow: hidden; border: none; display:block; width:100%; height:100%; }
      `}</style>

      <Router>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gcc" element={<GCC />} />
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

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="shadow-sm bg-white/70 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="LearnShiz Techies" className="w-10 h-10 h-auto" />
          <div>
            <div className="font-semibold text-[var(--heading)]">LearnShiz Techies</div>
            <div className="text-xs muted">Decade-old Staffing Partner • Since 2015</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : 'text-gray-700'}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? activeClass : 'text-gray-700'}>Services</NavLink>
          <NavLink to="/gcc" className={({ isActive }) => isActive ? activeClass : 'text-gray-700'}>GCC</NavLink>
          <NavLink to="/clients" className={({ isActive }) => isActive ? activeClass : 'text-gray-700'}>Customers</NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? activeClass : 'text-gray-700'}>Team</NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? activeClass : 'text-gray-700'}>Careers</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : 'text-gray-700'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : 'text-gray-700'}>Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

/* ---------------- Mobile Menu ---------------- */
function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(v => !v)} className="p-2 rounded-md border" aria-label="Open menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
          <Link className="block px-4 py-2 text-sm" to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link className="block px-4 py-2 text-sm" to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link className="block px-4 py-2 text-sm" to="/gcc" onClick={() => setOpen(false)}>GCC</Link>
          <Link className="block px-4 py-2 text-sm" to="/clients" onClick={() => setOpen(false)}>Clients</Link>
          <Link className="block px-4 py-2 text-sm" to="/team" onClick={() => setOpen(false)}>Team</Link>
          <Link className="block px-4 py-2 text-sm" to="/careers" onClick={() => setOpen(false)}>Careers</Link>
          <Link className="block px-4 py-2 text-sm" to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link className="block px-4 py-2 text-sm" to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}

/* ---------------- Pages ---------------- */
function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-[var(--heading)]">Global Staffing & GCC Launch Partner</h1>
          <p className="mt-4 text-gray-700">
            LearnShiz Techies helps US and UK companies set up and scale Global Capability Centers (GCC) in India — from hiring to operations.
            We provide curated talent, compliance guidance, and local hiring expertise so your GCC performs from day one.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link to="/gcc" className="btn-primary font-medium shadow">Explore GCC Services</Link>
            <Link to="/contact" className="btn-ghost">Contact Sales</Link>
            <div className="ml-0 sm:ml-4 mt-3 sm:mt-0 pill text-xs sm:text-sm">Decade-old Partner</div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm muted">
            <div>
              <div className="text-2xl font-semibold text-[var(--primary)]">150+</div>
              <div>Placements</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[var(--primary)]">60+</div>
              <div>GCC Hires</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[var(--primary)]">10</div>
              <div>Enterprise Partners</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden card">
          <div className="p-10 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-800)] text-white h-full flex items-center justify-center">
            <div className="space-y-4 max-w-sm">
              <div className="text-sm uppercase opacity-80">LearnShiz Techies</div>
              <div className="text-2xl font-bold">Build your GCC in India</div>
              <p className="text-sm opacity-90">Hire local talent, reduce operational costs, and accelerate product development with a trusted partner.</p>
              <div className="flex gap-3 mt-4">
                <Link to="/contact" className="btn-primary">Get Started</Link>
                <Link to="/services" className="btn-ghost">Our Services</Link>
              </div>
              <div className="text-xs mt-2 opacity-90">Serving since 2015 • Trusted globally</div>
            </div>
          </div>
        </div>
      </div>

      {/* What we do */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold">Why companies choose us</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Feature title="GCC Setup" desc="End-to-end support to establish your delivery center in India." />
          <Feature title="Talent as a Service" desc="Screened engineers, product managers and designers available for immediate hire." />
          <Feature title="Compliance & Payroll" desc="Local payroll, statutory compliance and onboarding support." />
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold">What we do</h3>
        <p className="mt-3 muted max-w-xl">We are a staffing boutique specializing in technology talent and GCC enablement. Our leadership brings experience from enterprise hiring, operations, and engineering.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          <StatCard value="150+" label="Professionals Hired" accent />
          <StatCard value="12+" label="GCCs Established" />
          <StatCard value="12K+" label="Sq ft Space Managed" />
          <StatCard value="7+" label="Years Experience" />
          <StatCard value="$6M+" label="Capital Investment Created" />
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <InfoCard title="Mission" text="Enable global companies to build successful delivery centers in India with minimal friction." icon="🚀" />
          <InfoCard title="Vision" text="Become the most trusted partner for GCC hiring and operations in India." icon="🎯" />
          <InfoCard title="Values" text="Transparency • Speed • Quality • Partnership" icon="🤝" />
        </div>
      </div>

      {/* Clients & Testimonials */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold">Our Customers</h2>
        <p className="mt-3 muted">We partner with startups and enterprises from around the world.</p>
        <ClientsCarousel />
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold">What our customers say</h2>
        <p className="mt-3 muted">Real feedback from hiring managers and GCC leaders we've helped.</p>
        <div className="mt-8">
          <TestimonialsCarousel />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-[var(--cta)] text-black rounded-md p-10 text-center">
        <h3 className="text-2xl font-bold">Ready to Accelerate Your Digital Journey with Us?</h3>
        <p className="mt-2 muted">Let's talk — we help global companies build and scale high-performing GCCs in India.</p>
        <div className="mt-4">
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Simple pages ---------------- */
function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Our Staffing Services</h2>
      <p className="mt-3 muted">Flexible engagement models to match your hiring needs.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card title="Contract Staffing" desc="Short-term and project-based skilled resources." />
        <Card title="Permanent Hiring" desc="End-to-end recruitment and offer management." />
        <Card title="Managed Teams" desc="Dedicated teams managed by LearnShiz for product delivery." />
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold">Specialized verticals</h3>
        <ul className="mt-4 list-disc list-inside muted">
          <li>Frontend & Backend Engineering</li>
          <li>DevOps, Cloud & SRE</li>
          <li>Product Management & UX</li>
          <li>Data Engineering & ML</li>
        </ul>
      </div>
    </section>
  );
}

function GCC() {
  const navigate = useNavigate();
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">GCC — Build your Global Capability Center in India</h2>
      <p className="mt-3 muted">We help investors and enterprise engineering teams open GCCs in India: hiring strategy, infrastructure, compliance and ramp-up support.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold">What we do</h4>
          <ul className="mt-4 list-disc list-inside muted">
            <li>Market analysis & location advisory</li>
            <li>Talent sourcing, interviewing & onboarding</li>
            <li>Local HR, payroll and statutory compliance</li>
            <li>Infrastructure and vendor introductions</li>
          </ul>

          <div className="mt-6">
            <h5 className="font-semibold">Who should consider a GCC?</h5>
            <p className="mt-2 muted">US/UK product companies and startups that want a highly skilled delivery center with cost efficiency and time-zone overlap for engineering work.</p>
          </div>

          <div className="mt-6">
            <button onClick={() => navigate('/contact')} className="btn-primary">Talk to our GCC experts</button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-md card">
          <h5 className="font-semibold">Quick GCC checklist</h5>
          <ol className="mt-4 list-decimal list-inside muted">
            <li>Define scope & headcount</li>
            <li>Choose city (Bengaluru / Hyderabad / Pune / Chennai)</li>
            <li>Local legal & payroll setup</li>
            <li>Hire leadership & core engineering teams</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const clientsList = [
    { id: 1, name: 'Dental Bazar', icon: dentalBazar },
    { id: 2, name: 'Global Ecommerce', icon: globecommerce },
    { id: 3, name: 'GT Consulting', icon: gtConsulting },
    { id: 4, name: 'Osmia', icon: osmia },
    { id: 5, name: 'Upcred.ai', icon: upcred },
    { id: 6, name: 'Third Eye Intelligence Service', icon: thirdEye },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Our Clients & Partners</h2>
          <p className="mt-3 muted max-w-xl">
            We partner with ambitious product companies, high-growth startups and large enterprises from the US, UK and India — helping them scale engineering teams,
            establish GCCs, and operate high-performance delivery centers.
          </p>
        </div>
        <div>
          <Link to="/contact" className="btn-primary">Work with us</Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
        {clientsList.map((c) => (
          <div key={c.id} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border">
            <div className="w-28 h-14 flex items-center justify-center bg-gray-50 rounded">
              <img src={c.icon} alt={c.name} className="max-h-full max-w-full object-contain" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="mt-2 text-sm muted text-center">{c.name}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Industries we serve</h3>
          <ul className="mt-4 list-disc list-inside muted">
            <li>FinTech & Financial Services</li>
            <li>Enterprise SaaS</li>
            <li>Healthcare & HealthTech</li>
            <li>E-commerce & Marketplaces</li>
            <li>EdTech & SaaS platforms</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Partnership models</h3>
          <div className="mt-4 space-y-3 muted">
            <div><strong>Staffing-as-a-Service:</strong> Fast ramp hiring for product and platform teams.</div>
            <div><strong>Managed Teams:</strong> Dedicated, outcome-driven teams managed by LearnShiz.</div>
            <div><strong>GCC Launch & Advisory:</strong> Strategic advisory and operational execution for establishing GCCs in India.</div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Case studies (Quick Shots)</h3>
          <div className="mt-4 space-y-4">
            <div className="p-4 border rounded-md bg-white shadow-sm">
              <div className="font-semibold">B2B SaaS — Bangalore GCC</div>
              <div className="text-sm muted mt-1">Scaled a 40-person engineering team in 4 months; improved release cycle time by 35% through targeted hires and onboarding.</div>
            </div>
            <div className="p-4 border rounded-md bg-white shadow-sm">
              <div className="font-semibold">FinTech — Offshore Delivery Center</div>
              <div className="text-sm muted mt-1">Delivered compliance-focused engineers and established local payroll and statutory setup for smooth operations.</div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Why clients choose us</h3>
            <ul className="mt-2 list-disc list-inside muted">
              <li>Deep domain hiring expertise across tech stacks</li>
              <li>End-to-end GCC advisory (legal, payroll, infra)</li>
              <li>Transparent SLAs and collaborative onboarding</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-md flex items-center justify-between">
        <div>
          <div className="font-semibold">Interested in partnering with LearnShiz?</div>
          <div className="text-sm muted mt-1">Get a tailored proposal for hiring or GCC setup.</div>
        </div>
        <div>
          <Link to="/contact" className="btn-ghost">Request proposal</Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">What our customers say</h2>
      <p className="mt-3 muted">Real feedback from hiring managers and GCC leaders we've helped.</p>
      <div className="mt-8">
        <TestimonialsCarousel />
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Careers at LearnShiz Techies</h2>
      <p className="mt-3 muted">We're hiring across engineering, recruiting, and GCC operations. Join a team focused on building great products and teams.</p>

      <div className="mt-8 space-y-6">
        <Job title="Frontend Engineer" location="Bengaluru" />
        <Job title="Technical Recruiter" location="Remote (India)" />
        <Job title="GCC Operations Lead" location="Pune" />
      </div>

      <div className="mt-8">
        <h4 className="font-semibold">Why work with us</h4>
        <p className="mt-2 muted">Growth focused culture, competitive compensation, and a chance to help global companies build world-class delivery centers in India.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">About LearnShiz Techies</h2>
      <p className="mt-3 muted max-w-2xl">
        LearnShiz Techies is a specialist staffing and GCC enablement partner. We help global technology companies — from Series A startups to Fortune 500 enterprises —
        build engineering capability in India through focused hiring, operational setup, and ongoing delivery support.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Our Mission</h4>
          <p className="mt-2 muted">Enable global companies to build successful delivery centers in India with minimal friction — delivering skilled talent, operational excellence and measurable outcomes.</p>
        </div>
        <div>
          <h4 className="font-semibold">Our Vision</h4>
          <p className="mt-2 muted">Become the most trusted partner for GCC hiring and operations in India, known for speed, quality and partnership.</p>
        </div>
        <div>
          <h4 className="font-semibold">Our Values</h4>
          <p className="mt-2 muted">Transparency • Speed • Quality • Partnership</p>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-lg bg-white shadow-sm border">
          <h4 className="font-semibold">What we do</h4>
          <ul className="mt-4 list-disc list-inside muted">
            <li>Talent acquisition & specialised technical hiring</li>
            <li>End-to-end GCC setup: legal, payroll, office & vendors</li>
            <li>Managed teams and long-term hiring partnerships</li>
            <li>Onboarding, L&D and retention programs</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-white shadow-sm border">
          <h4 className="font-semibold">Our approach</h4>
          <p className="mt-2 muted">
            We blend consultative advisory with execution — starting with a discovery workshop, followed by hiring roadmaps, candidate sourcing using proprietary screening,
            and a fast but thorough onboarding programme designed to reduce time-to-productivity.
          </p>

          <div className="mt-4">
            <h5 className="font-semibold">Process highlights</h5>
            <ul className="mt-2 list-disc list-inside muted">
              <li>Discovery & role-mapping workshop</li>
              <li>Targeted sourcing & screening</li>
              <li>Technical interviewing and cultural fit checks</li>
              <li>Offer negotiation & onboarding support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold">Metrics & impact</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded shadow-sm text-center">
            <div className="font-bold text-xl">150+</div>
            <div className="text-sm muted">Professionals hired</div>
          </div>
          <div className="p-4 bg-white rounded shadow-sm text-center">
            <div className="font-bold text-xl">12+</div>
            <div className="text-sm muted">GCCs established</div>
          </div>
          <div className="p-4 bg-white rounded shadow-sm text-center">
            <div className="font-bold text-xl">12k+</div>
            <div className="text-sm muted">Sq ft space managed</div>
          </div>
          <div className="p-4 bg-white rounded shadow-sm text-center">
            <div className="font-bold text-xl">$6M+</div>
            <div className="text-sm muted">Capital investment created</div>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 bg-gray-50 rounded-md flex items-center justify-between">
        <div>
          <div className="font-semibold">Want to discuss a GCC or hiring program?</div>
          <div className="text-sm muted mt-1">Schedule a call with our GCC specialists for a free discovery session.</div>
        </div>
        <div>
          <Link to="/contact" className="btn-primary">Schedule a call</Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team (new) ---------------- */
function Team() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Our Team</h2>
      <p className="mt-3 muted">
        We are a 100+ strong distributed team across India, Nepal, Myanmar, Bangladesh, UAE, Israel and more —
        engineers, product managers, recruiters and GCC specialists working together to deliver results.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-white shadow-sm border">
          <h4 className="font-semibold">Values & culture</h4>
          <p className="mt-2 muted">Our team values are rooted in collaboration, ownership and continuous learning. We hire for attitude and train for skills — prioritising engineers who care about clean code, accessibility and product thinking.</p>

          <div className="mt-4">
            <h5 className="font-semibold">How we work</h5>
            <ul className="mt-2 list-disc list-inside muted">
              <li>Small cross-functional squads with clear ownership and measurable outcomes.</li>
              <li>Bi-weekly OKRs and sprint-focused delivery to maintain cadence and predictability.</li>
              <li>Peer code reviews, pair programming and design critiques to raise code quality.</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-white shadow-sm border">
          <h4 className="font-semibold">Quality of our developers</h4>
          <ul className="mt-2 list-disc list-inside muted">
            <li>Strong fundamentals in JavaScript/TypeScript and modern frameworks (React, Angular, Node.js).</li>
            <li>Emphasis on testing, accessibility and maintainable architecture.</li>
            <li>Experience with cloud platforms, CI/CD and scalable systems.</li>
            <li>Client-centric approach with clear communication and SLA-driven delivery.</li>
          </ul>

          <div className="mt-4">
            <h5 className="font-semibold">Hiring signal</h5>
            <p className="mt-2 muted">We screen for problem solving, system design basics and hands-on coding. Hire-ready candidates typically complete our onboarding tech-path in 4–6 weeks.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded shadow-sm text-center">
          <div className="font-bold text-2xl">100+</div>
          <div className="text-sm muted">Team size</div>
        </div>
        <div className="p-4 bg-white rounded shadow-sm text-center">
          <div className="font-bold text-2xl">85%</div>
          <div className="text-sm muted">Retention (12 months)</div>
        </div>
        <div className="p-4 bg-white rounded shadow-sm text-center">
          <div className="font-bold text-2xl">4–6w</div>
          <div className="text-sm muted">Avg ramp time</div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-semibold">Learning & growth</h4>
        <p className="mt-2 muted">We run regular L&D initiatives — internal tech talks, mentorship circles, and workshops on testing, cloud architecture, and product thinking. Every engineer has a growth plan with quarterly milestones.</p>

        <div className="mt-4">
          <h5 className="font-semibold">Mentorship & quality gates</h5>
          <ul className="mt-2 list-disc list-inside muted">
            <li>Structured 1:1 mentorship for new hires during the first 3 months.</li>
            <li>Quality gates including unit test coverage, accessibility checklist, and architecture review.</li>
            <li>Monthly hack days to encourage experimentation and ownership.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-semibold">Diversity & distributed delivery</h4>
        <p className="mt-2 muted">Our distributed model gives us local presence and language strengths in multiple markets while keeping engineering standards consistent. We encourage inclusive hiring and flexible work arrangements for cross-border collaboration.</p>
      </div>

      <div className="mt-8">
        <Link to="/careers" className="btn-primary">View open roles</Link>
      </div>
    </section>
  );
}

function Policies() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold">Privacy & Copyright</h2>
      <div className="mt-4 muted">
        <h4 className="font-semibold">Privacy Policy</h4>
        <p className="mt-2">We collect contact information and hiring requirements to provide staffing services. We do not share personal data with third parties unless required by law or to provide services to you (for example, payroll providers).</p>

        <h4 className="font-semibold mt-4">Copyright</h4>
        <p className="mt-2">All content on this site is © {new Date().getFullYear()} LearnShiz Techies. Reproduction without permission is prohibited.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Get in touch</h2>
      <p className="mt-3 muted">Tell us about your hiring or GCC plans and we'll get back within 24-48 hours.</p>

      <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); window.location = "mailto:hello@learnshiz.com"; }}>
        <input required placeholder="Full name" className="border px-4 py-3 rounded" />
        <input required placeholder="Work email" type="email" className="border px-4 py-3 rounded" />
        <input placeholder="Company" className="border px-4 py-3 rounded" />
        <textarea placeholder="Tell us about your needs (headcount, skills, timeline)" className="border px-4 py-3 rounded h-28" />
        <div className="flex gap-4">
          <button type="submit" className="btn-primary">Send message</button>
          <Link to="/careers" className="btn-ghost">Careers</Link>
        </div>
      </form>

      <div className="mt-8 text-sm muted">
        <div>Phone: +91 95919 67760</div>
        <div>Email: hello@learnshiz.com</div>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h3 className="text-2xl font-bold">Page not found</h3>
      <p className="mt-4 muted">We couldn't find the page you're looking for.</p>
      <Link to="/" className="mt-6 inline-block px-4 py-2 border rounded">Go home</Link>
    </section>
  );
}

/* ---------------- Reusable UI ---------------- */
function Feature({ title, desc }) {
  return (
    <div className="p-6 border rounded-md bg-white">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 muted">{desc}</p>
    </div>
  );
}

function Card({ title, desc }) {
  const navigate = useNavigate();
  return (
    <div className="p-6 rounded-md shadow-sm border bg-white">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 muted">{desc}</p>
      <div className="mt-4">
        <button className="btn-primary" onClick={() => navigate('/contact')}>Learn more</button>
      </div>
    </div>
  );
}

function Job({ title, location }) {
  return (
    <div className="p-4 border rounded-md flex items-center justify-between bg-white">
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm muted">{location}</div>
      </div>
      <Link to="/contact" className="px-4 py-2 border rounded">Apply</Link>
    </div>
  );
}

function StatCard({ value, label, accent = false }) {
  return (
    <div className={`relative overflow-hidden rounded-xl p-6 text-center transition-transform transform hover:-translate-y-1 ${accent ? 'bg-gradient-to-br from-[var(--primary)] to-[var(--primary-800)] text-white' : 'bg-white'}`}>
      <div className={`absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-10 ${accent ? 'bg-white' : 'bg-[var(--primary)]'}`} />
      <div className={`text-2xl font-bold ${accent ? 'text-white' : 'text-[var(--primary)]'}`}>{value}</div>
      <div className={`${accent ? 'text-blue-100' : 'muted'} mt-2 text-sm`}>{label}</div>
    </div>
  );
}

function InfoCard({ title, text, icon }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--primary)] text-white text-xl shadow-sm">{icon}</div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-2 muted text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Carousels ---------------- */
function ClientsCarousel() {
  const clients = [
    { id: 1, name: 'Dental Bazar', icon: dentalBazar },
    { id: 2, name: 'Global Ecommerce', icon: globecommerce },
    { id: 3, name: 'GT Consulting', icon: gtConsulting },
    { id: 4, name: 'Osmia', icon: osmia },
    { id: 5, name: 'Upcred.ai', icon: upcred },
    { id: 6, name: 'Third Eye Intelligence Service', icon: thirdEye },
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % clients.length), 3500);
    return () => clearInterval(t);
  }, [clients.length]);

  const prev = () => setIndex(i => (i - 1 + clients.length) % clients.length);
  const next = () => setIndex(i => (i + 1) % clients.length);

  const visible = React.useMemo(() => {
    const out = [];
    for (let i = 0; i < 4; i++) {
      out.push(clients[(index + i) % clients.length]);
    }
    return out;
  }, [index, clients]);

  return (
    <div className="relative mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {visible.map((c) => (
          <div key={c.id} className="flex items-center justify-center p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition transform hover:-translate-y-1">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={c.icon} alt={c.name} className="max-h-full max-w-full object-contain" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className="mt-3 text-sm muted text-center">{c.name}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <button onClick={prev} className="ml-2 p-2 rounded-full bg-white shadow border hover:bg-gray-50" aria-label="Previous client">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <button onClick={next} className="mr-2 p-2 rounded-full bg-white shadow border hover:bg-gray-50" aria-label="Next client">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const items = [
    { name: 'Dharampal Chaudhary, Upcred.ai', role: 'Founder', text: 'LearnShiz helped us hire a focused team in Bangalore within 6 weeks. Their screening process is top-notch.' },
    { name: 'David Abady, Ira Net Spooz', role: 'Founder', text: 'They supported our GCC launch end-to-end — from legal to people ops. Highly recommended.' },
    { name: 'Yossi D.', role: 'CEO', text: 'Great partnership and fast turnaround on challenging roles.' },
  ];
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, [items.length]);

  const prev = () => setIdx(i => (i - 1 + items.length) % items.length);
  const next = () => setIdx(i => (i + 1) % items.length);

  return (
    <div className="relative mt-4">
      <div className="overflow-hidden">
        <div className="min-h-[140px] bg-white rounded-xl border shadow-sm p-6 flex flex-col justify-between transition-all duration-500 ease-in-out">
          <div className="text-lg italic text-gray-800">“{items[idx].text}”</div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="font-semibold">{items[idx].name}</div>
              <div className="text-sm muted">{items[idx].role}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="p-2 rounded-md border bg-white hover:bg-gray-50" aria-label="Previous testimonial">‹</button>
              <button onClick={next} className="p-2 rounded-md border bg-white hover:bg-gray-50" aria-label="Next testimonial">›</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full transition ${i === idx ? 'bg-[var(--primary)]' : 'bg-gray-300'}`} aria-label={`Go to testimonial ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6">
        <div>
          <div className="font-semibold">LearnShiz Techies</div>
          <div className="text-sm mt-2">Decade-old Staffing Partner • Since 2015</div>
          <div className="text-sm mt-2">Staffing & GCC enablement for global companies building in India.</div>
        </div>
        <div>
          <div className="font-semibold">Quick links</div>
          <div className="mt-2 flex flex-col gap-2 text-sm">
            <Link to="/gcc">GCC Services</Link>
            <Link to="/services">Staffing</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/policies">Policies</Link>
            <Link to="/testimonials">Testimonials</Link>
          </div>
        </div>
        <div>
          <div className="font-semibold">Team</div>
          <div className="mt-2 text-sm">100+ team members across India, Nepal, Myanmar, Bangladesh, UAE, Israel and more.</div>
          <div className="mt-3 text-sm text-gray-300">Values: Transparency • Ownership • Continuous learning</div>
        </div>
        <div>
          <div className="font-semibold">Contact & Offices</div>
          <div className="mt-2 text-sm">
            <div>hello@learnshiz.com</div>
            <div className="mt-2">Phone: +91 95919 67760</div>

            <div className="mt-4">
              <div className="font-semibold">Office locations</div>
              <ul className="mt-2 list-inside text-sm">
                <li>Bengaluru - BTM 1stage, KA</li>
                <li>Lucknow - Indira Nagar, UP</li>
                <li>Indore - New Town, MP</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded card overflow-hidden">
            <iframe title="Bengaluru office" src="https://www.google.com/maps?q=BTM%201st%20Stage%20Bengaluru&output=embed" className="map-frame h-40" />
            <div className="p-3 text-black text-sm">Bengaluru — BTM 1st Stage</div>
          </div>

          <div className="bg-white rounded card overflow-hidden">
            <iframe title="Lucknow office" src="https://www.google.com/maps?q=Indira%20Nagar%20Lucknow&output=embed" className="map-frame h-40" />
            <div className="p-3 text-black text-sm">Lucknow — Indira Nagar</div>
          </div>

          <div className="bg-white rounded card overflow-hidden">
            <iframe title="Indore office" src="https://www.google.com/maps?q=New%20Town%20Indore&output=embed" className="map-frame h-40" />
            <div className="p-3 text-black text-sm">Indore — New Town</div>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-300 text-center py-4">
        © {new Date().getFullYear()} LearnShiz Techies. All rights reserved.
      </div>
    </footer>
  );
}

export default App;
