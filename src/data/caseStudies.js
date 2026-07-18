export const caseStudies = [
  {
    slug: "leakypockets",
    title: "LeakyPockets",
    subtitle: "Tax-Leak Diagnostic for Canadian Investors",
    description:
      "A privacy-first FinTech diagnostic tool that ingests complex brokerage CSVs entirely on the client side. It identifies asset-location mistakes, unharvested losses, and withholding drag to deliver actionable financial insights ranked in dollars, in under a minute.",
    extendedDescription: 
      "LeakyPockets was conceived as a privacy-first FinTech solution for DIY Canadian investors. The core challenge was parsing and normalizing massive brokerage CSV exports containing complex transaction histories, without ever sending sensitive financial data to a backend server. We architected a robust client-side processing pipeline leveraging Web Workers and React. By offloading the heavy computational load of tax-leak diagnostics (like withholding drag and unharvested capital losses) to the client, we ensured zero server-side data retention while processing tens of thousands of rows in milliseconds.",
    teamSize: "3 Engineers (1 Lead Frontend, 1 FinTech Domain Specialist, 1 QA)",
    architecture: ["React", "Client-Side Processing", "Web Workers", "TailwindCSS"],
    outcomes: [
      "Zero server-side data retention, ensuring total user privacy.",
      "Processes tens of thousands of transaction rows in milliseconds.",
      "Delivers immediate, actionable ROI insights to DIY investors.",
    ],
    graphTitle: "Processing Speed (Rows per Millisecond)",
    graphData: [
      { name: "Week 1", value: 1200 },
      { name: "Week 2", value: 3000 },
      { name: "Week 3", value: 8500 },
      { name: "Week 4", value: 15000 },
      { name: "Week 5", value: 24000 }
    ],
    link: "https://www.leakypockets.ca/",
    color: "teal",
  },
  {
    slug: "oratio",
    title: "Oratio",
    subtitle: "AI Communication Coach",
    description:
      "An AI-powered coaching application for US-based professionals. It analyzes meeting recordings and practice conversations to provide clear, private AI feedback on communication skills, ensuring secure and confidential processing.",
    extendedDescription: 
      "Oratio bridges the gap between public speaking practice and actionable feedback using AI. The startup required a highly secure, high-fidelity audio pipeline that could ingest meeting recordings and process them through advanced AI speech models without compromising user privacy. We engineered a robust Next.js frontend coupled with a highly scalable AWS CloudFront distribution to handle large audio file uploads seamlessly. The platform provides detailed, private analytics on pacing, filler words, and clarity, enabling professionals to improve their communication skills in a strictly confidential environment.",
    teamSize: "4 Engineers (1 Senior AI/ML, 1 Next.js Developer, 1 Cloud Architect, 1 QA)",
    architecture: ["Next.js", "AWS CloudFront", "AI Audio Processing", "WebRTC"],
    outcomes: [
      "High-fidelity audio processing for precise AI transcription and feedback.",
      "Strictly private, secure infrastructure prioritizing user confidentiality.",
      "Intuitive recording and upload workflows optimized for performance.",
    ],
    graphTitle: "Average User Communication Score Improvement",
    graphData: [
      { name: "Session 1", value: 55 },
      { name: "Session 3", value: 68 },
      { name: "Session 5", value: 76 },
      { name: "Session 10", value: 89 },
      { name: "Session 15", value: 94 }
    ],
    link: "https://dbak4v28okhc7.cloudfront.net/record/",
    color: "coral",
  },
  {
    slug: "dulcia",
    title: "Dulcia",
    subtitle: "The Offline Book Discovery Network",
    description:
      "A marketplace connecting authors with curated offline venues (cafés, coworking spaces) for physical book discovery. Features an integrated system tracking QR engagements from physical placement to online purchase.",
    extendedDescription: 
      "Dulcia aimed to reinvent book discovery by placing physical copies in curated offline venues like cafés and coworking spaces. The technical challenge was bridging the gap between a physical interaction and an online conversion. We developed a comprehensive marketplace platform that connects authors and venues, driven by a sophisticated QR analytics engine. Each physical book placement is tracked in real-time, allowing authors to see exactly when and where their books are being scanned, read, and subsequently purchased online, creating a measurable offline-to-online marketing funnel.",
    teamSize: "3 Engineers (1 Full Stack Node.js, 1 React Developer, 1 Data Engineer)",
    architecture: ["React", "Node.js", "QR Analytics", "TailwindCSS"],
    outcomes: [
      "Bridged offline discovery with online conversion tracking.",
      "Created a scalable marketplace model for authors and venues.",
      "Real-time analytics for offline book placement engagement.",
    ],
    graphTitle: "Offline QR Scan to Online Conversion Rate (%)",
    graphData: [
      { name: "Month 1", value: 2.1 },
      { name: "Month 2", value: 3.5 },
      { name: "Month 3", value: 5.8 },
      { name: "Month 4", value: 8.2 },
      { name: "Month 5", value: 11.4 }
    ],
    link: "https://www.dulcia.in/",
    color: "teal",
  },
  {
    slug: "datewell",
    title: "DateWell",
    subtitle: "Structured Knowledge Platform for Decision-Driven Dating",
    description:
      "Moving beyond intuition-based swiping, DateWell organizes relationship interactions, preferences, and dealbreakers using vector databases and LLMs. The platform acts as a relationship health diagnostic system for data-driven decision-making.",
    extendedDescription: 
      "DateWell approached us to move the dating app ecosystem away from superficial swiping toward structured, data-driven relationship building. We architected a system that maps user interactions, preferences, and dealbreakers into a high-dimensional vector database. By integrating LLMs, the platform processes natural language inputs and unstructured interaction data, converting them into queryable relationship graphs. This complex backend infrastructure enables DateWell to serve as a diagnostic tool for relationship health, resulting in significantly higher user retention and meaningful matches.",
    teamSize: "4 Engineers (1 Lead Architect, 1 LLM Engineer, 1 Backend Node, 1 Frontend React)",
    architecture: ["Next.js", "Node.js", "Vector DB", "LLM Integration"],
    outcomes: [
      "Replaced unstructured inputs with structured, queryable relationship graphs.",
      "High user retention driven by personalized, data-backed insights.",
      "Scalable infrastructure capable of processing complex semantic searches.",
    ],
    graphTitle: "Algorithm Match Success Rate (%)",
    graphData: [
      { name: "Baseline", value: 25 },
      { name: "V1 Launch", value: 42 },
      { name: "LLM Integ.", value: 68 },
      { name: "Vector Opt.", value: 85 }
    ],
    link: "https://datewell.org/",
    color: "coral",
  },
  {
    slug: "upcred",
    title: "Upcred.ai",
    subtitle: "Influencer Marketing & Campaign Operations Platform",
    description:
      "An end-to-end campaign management solution built for influencer agencies. The platform handles everything from creator discovery and workflow automation to real-time ROI tracking and reporting, streamlining complex operations into a single interface.",
    extendedDescription: 
      "Managing influencer campaigns involves coordinating hundreds of creators, tracking deliverables, and proving ROI to brands. Upcred.ai required an enterprise-grade platform to unify these fragmented operations. We built a robust Node.js and PostgreSQL backend capable of handling high-throughput campaign data, coupled with Redis for real-time analytics caching. The React frontend provides agencies with an intuitive dashboard for creator discovery, automated workflow management, and verifiable, real-time ROI reporting, significantly reducing operational overhead.",
    teamSize: "5 Engineers (1 Tech Lead, 2 Backend Node, 1 Frontend React, 1 DevOps)",
    architecture: ["React", "Node.js", "PostgreSQL", "Redis"],
    outcomes: [
      "Reduced campaign setup time by automating standard workflows.",
      "Provided agencies with verifiable, real-time ROI tracking dashboards.",
      "Scaled to handle thousands of concurrent creator profiles and metrics.",
    ],
    graphTitle: "Campaign Setup Time (Hours)",
    graphData: [
      { name: "Legacy", value: 24 },
      { name: "Q1", value: 12 },
      { name: "Q2", value: 6 },
      { name: "Q3", value: 2 },
      { name: "Current", value: 0.5 }
    ],
    link: "https://upcred.ai/",
    color: "teal",
  },
  {
    slug: "xullox",
    title: "Xullox",
    subtitle: "Edge Device Management & OTA Delivery System",
    description:
      "A robust IoT management system designed to orchestrate fleets of digital signage and edge devices. Features a reliable Over-The-Air (OTA) update delivery pipeline and real-time health monitoring to ensure high availability.",
    extendedDescription: 
      "Xullox needed a reliable way to manage a distributed fleet of digital signage and edge devices built on Raspberry Pi hardware. The primary challenge was ensuring consistent, fail-safe Over-The-Air (OTA) firmware and media updates across varied network conditions. We engineered a lightweight Node.js/NestJS control plane communicating via MQTT for low-latency, resilient telemetry. This allowed the central dashboard to provide real-time health monitoring, automated deployment rollbacks, and centralized fleet management, practically eliminating the need for expensive on-site physical maintenance.",
    teamSize: "3 Engineers (1 IoT Architect, 1 Backend NestJS, 1 React Developer)",
    architecture: ["Raspberry Pi", "NestJS", "Node.js", "MQTT"],
    outcomes: [
      "Reduced on-site physical maintenance costs by 80%.",
      "Achieved 99.9% uptime across distributed hardware fleets.",
      "Enabled seamless, centralized deployment of new media and firmware.",
    ],
    graphTitle: "Fleet Uptime %",
    graphData: [
      { name: "Jan", value: 85.0 },
      { name: "Feb", value: 92.5 },
      { name: "Mar", value: 98.1 },
      { name: "Apr", value: 99.5 },
      { name: "May", value: 99.9 }
    ],
    link: "#",
    color: "coral",
  },
];
