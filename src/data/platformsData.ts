import { Bot, Shield, Radio, BarChart3, CheckCircle, Cpu, Monitor, FileText, Globe, Zap, Settings, Users, Lock, Database, Layers, Eye, Music, Play, TrendingUp, Clock, AlertTriangle, Wrench, Target } from 'lucide-react'

export interface PlatformCapability {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface PlatformOutcome {
  label: string
  description: string
}

export interface PlatformProblem {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface PlatformSolution {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface EngagementStage {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface PlatformData {
  heroTag: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  ctaText: string
  platformTitle: string
  platformDescription: string
  platformFeatures: PlatformCapability[]
  problemsTitle: string
  problems: PlatformProblem[]
  solutionsTitle: string
  solutions: PlatformSolution[]
  reframeText: string
  capabilitiesTitle: string
  capabilities: PlatformCapability[]
  outcomesTitle: string
  outcomes: PlatformOutcome[]
  differentiators: PlatformCapability[]
  engagementTitle: string
  engagementStages: EngagementStage[]
  ctaHeading: string
  ctaDescription: string
}

export const vistaData: PlatformData = {
  heroTag: 'Intelligence First · Outcome-Driven',
  heroTitle: 'The AI-first platform for operations that sense, predict and act.',
  heroSubtitle: 'VISTA is Ambifo\'s AI-native Autonomous & Intelligent IT-OT Operations Platform — unifying the physical world of plants, grids, towers and distributed machines with the digital world of enterprise systems. Powered by AI and agentic automation, it goes beyond dashboards: it predicts, recommends and — with your teams in control — automates routine actions, helping optimise operations at scale.',
  heroDescription: 'VISTA is AI-native to its core. It unifies the operational technology layer with the IT layer into a single, cloud-native control plane.',
  ctaText: 'Book Now!',
  platformTitle: 'VISTA — Autonomous & Intelligent IT-OT Operations Platform',
  platformDescription: 'VISTA is AI-native to its core. It unifies the operational technology layer — sensors, PLCs, SCADA, RTUs, meters, energy and process assets — with the IT layer — work orders, ERP, maintenance systems, field workforce and analytics — into a single, cloud-native control plane. Where most tools stop at dashboards and recommendations, VISTA adds an agentic layer that can execute and verify routine actions under human oversight — helping distributed assets and facilities run as a more proactive, intelligent operation.',
  platformFeatures: [
    { icon: Layers, title: 'Converged IT-OT Fabric', description: 'One data model across OT signals and IT systems of record. Vendor- and equipment-agnostic ingestion from any SCADA, PLC, RTU, historian, meter or IoT source, standardised into a single stream of intelligence.' },
    { icon: Bot, title: 'AI & Agentic Action Layer', description: 'Beyond descriptive and prescriptive analytics: AI agents that raise, route and resolve — predicting faults, dispatching work orders, triggering remediation and holding contractors and vendors accountable automatically.' },
    { icon: Shield, title: 'Cloud-neutral & Secure by Design', description: 'Runs on your cloud of choice or on-premise, with data residency, encryption and access controls aligned to leading global standards — engineered for operators of critical infrastructure.' },
    { icon: Database, title: 'GenAI Operations Copilot', description: 'Natural-language querying, root-cause narratives and shift-handover summaries, so control-room and field teams get answers, not just alerts.' },
    { icon: Settings, title: 'Modular, Scale-out Design', description: 'Deploy a single module or the full suite; scale from a single site to thousands of assets and facilities across regions without re-platforming.' },
    { icon: Users, title: 'Platform + Partner', description: 'VISTA ships with Ambifo\'s engineering, integration and managed-operations expertise — an outcome delivered and operated, not a licence handed over.' },
  ],
  problemsTitle: 'The problems operators face today',
  problems: [
    { icon: AlertTriangle, text: 'No or limited visibility into operations across towers, plants and machines' },
    { icon: AlertTriangle, text: 'Manual, error-prone processes for monitoring, alerting, reporting, escalation, ticketing, maintenance and feedback' },
    { icon: AlertTriangle, text: 'Fragmented data collection and storage across disconnected systems' },
    { icon: AlertTriangle, text: 'Limited telemetry and no real-time intelligence' },
    { icon: AlertTriangle, text: 'Dependence on third-party tools just to access your own data' },
  ],
  solutionsTitle: 'How VISTA solves them',
  solutions: [
    { icon: CheckCircle, text: 'A single, AI-driven 360° view across every tower, plant, machine and asset' },
    { icon: CheckCircle, text: 'Automated, closed-loop workflows for monitoring, alerting, ticketing, escalation and maintenance — errors and manual chasing removed' },
    { icon: CheckCircle, text: 'One unified data foundation for collection, storage and governance' },
    { icon: CheckCircle, text: 'Rich real-time telemetry, with AI turning live signals into decisions and actions' },
    { icon: CheckCircle, text: 'Own your data end to end — no reliance on external tools to see or use it' },
  ],
  reframeText: 'The reframe for industrial leaders: the question is no longer "can we see and predict?" It is "can our operation get smarter and more autonomous — securely, in real time, across IT and OT together?" As competing tools race to call themselves AI platforms, VISTA is AI-native by design: it can act on insight with your teams in control, not just advise.',
  capabilitiesTitle: 'Six capability areas that widen the value',
  capabilities: [
    { icon: Monitor, title: 'Autonomous Operations & Maintenance', description: 'Real-time monitoring, control-room dashboards and SLA visibility, with AI that graduates predictive fault detection to prescription-plus-execution — auto-triaging alerts, dispatching remediation, tracking SLA closure and escalating only exceptions.' },
    { icon: TrendingUp, title: 'Asset Intelligence', description: 'ML-led failure prediction, condition monitoring, theft and anomaly detection, and inventory tracking — extending asset life and cutting unplanned downtime across the estate.' },
    { icon: Wrench, title: 'Field Workforce Automation', description: 'AI-generated SOPs, route optimisation, job-card automation and engineer dispatch — turning field teams from reactive responders into a coordinated, accountable workforce.' },
    { icon: BarChart3, title: 'Energy & ESG Intelligence', description: 'Load forecasting, renewable scheduling and load balancing, plus energy optimisation and diesel/emissions reduction — with automated carbon accounting and ESG reporting that feeds corporate disclosures.' },
    { icon: FileText, title: 'Compliance & Governance Control', description: 'Audit trails, safety alerts, regulatory reporting and SLA monitoring built in — so compliance and audit readiness are continuous, not a periodic scramble.' },
    { icon: Lock, title: 'Secure Data & AI Foundation', description: 'A governed data platform — lakehouse, MLOps and GenAI copilots — with encryption, access control and residency by default. The intelligence estate scales into new use cases without re-architecting.' },
  ],
  outcomesTitle: 'Outcomes VISTA delivers',
  outcomes: [
    { label: '360° Operations', description: '360° view of operations with real-time alerts and notifications' },
    { label: 'Efficiency', description: 'Improved operational efficiency' },
    { label: 'Productivity', description: 'Enhanced productivity and reduced costs' },
    { label: 'Uptime', description: 'Improved reliability, uptime and operational KPIs' },
    { label: 'Outages', description: 'Reduced outages' },
    { label: 'Assets', description: 'Increased asset life' },
    { label: 'Energy', description: 'Lower energy consumption with full transparency' },
    { label: 'Compliance', description: 'Regulatory compliance and audit readiness' },
  ],
  differentiators: [
    { icon: Bot, title: 'Production-grade AI at Scale', description: 'Agentic AI with human-in-the-loop QC — engineered for live, mission-critical operations, not lab demos. Automation you can trust to act.' },
    { icon: Globe, title: 'Cross-industry', description: 'The same IT-OT pattern extends across manufacturing, energy, utilities, and industrial operations — one platform, many domains.' },
    { icon: Shield, title: 'No Vendor Lock-in', description: 'Fully equipment- and cloud-agnostic ingestion protects existing OT and IoT investments — a migration path, not a rip-and-replace.' },
    { icon: Zap, title: 'Faster Time-to-value', description: 'Pre-built accelerators and Ambifo delivery pods compress deployment from months to weeks.' },
  ],
  engagementTitle: 'How Ambifo engages and de-risks the journey',
  engagementStages: [
    { icon: Eye, title: 'Discovery', description: 'IT-OT maturity assessment, use-case prioritisation and ROI modelling to frame the value case.' },
    { icon: Monitor, title: 'Pilot', description: 'Live telemetry ingestion, AI alerting, dashboards and accuracy benchmarks on a representative site or line.' },
    { icon: Cpu, title: 'Production', description: 'Full integration, agentic automation, security hardening and APIs — closed-loop autonomy switched on module by module.' },
    { icon: Target, title: 'Scale', description: 'New models, advanced AI agents, additional integrations and white-label consoles, run as a managed service under SLAs.' },
  ],
  ctaHeading: 'Let\'s start the conversation.',
  ctaDescription: 'Book a no-risk discovery workshop — we\'ll map your IT-OT maturity and demonstrate VISTA on live data within 6–8 weeks.',
}

export const mipData: PlatformData = {
  heroTag: 'Real-Time Intelligence · Outcome-Led',
  heroTitle: 'Agentic AI-powered intelligence for every frame, track and broadcast.',
  heroSubtitle: 'MIP is Ambifo\'s Agentic AI-powered Media Intelligence Platform — purpose-built for broadcasters, OTT platforms, sports rights holders, music labels and content owners. It turns raw media — video, audio, ad logs, music catalogues and schedules — into decision-ready intelligence, automatically, around the clock — with autonomous AI agents that don\'t just surface insight, they act on it.',
  heroDescription: 'MIP unifies every content type — broadcast, OTT, advertising, news and music — into a single video-intelligence and content-understanding layer.',
  ctaText: 'Book Now!',
  platformTitle: 'MIP — Media Intelligence Platform',
  platformDescription: 'AI runs through every layer of MIP. It unifies every content type — broadcast, OTT, advertising, news and music — into a single video-intelligence and content-understanding layer, with multi-modal, agentic AI that ingests, tags, analyses, proves — and acts. Cloud-native and deployed in your VPC or fully managed, MIP moves media operations from manual logging and fragmented tools to a workforce of AI agents that run content operations at scale.',
  platformFeatures: [
    { icon: Database, title: 'Multi-modal AI Core', description: 'Video, audio, text and image intelligence in one engine — tuned on real broadcast and streaming data, not synthetic datasets, for high-accuracy tagging in live production.' },
    { icon: Radio, title: 'Automated 24/7 Ingestion', description: 'Broadcast, OTT and ad logs captured continuously — from live feed to searchable, tagged intelligence in minutes, not days.' },
    { icon: Layers, title: 'Unified Intelligence Layer', description: 'Video, audio, ad logs, music catalogues and schedules brought together — all content types, one platform, one source of truth.' },
    { icon: Bot, title: 'Agentic Media Workflows', description: 'Autonomous agents don\'t stop at insight — they act: generating proof-of-play, flagging compliance breaches, publishing metadata and escalating only the exceptions. A GenAI assistant layers on natural-language search, summaries and chapters.' },
    { icon: Shield, title: 'Cloud-native & Flexible', description: 'Deploy in your own VPC or consume as a fully managed service, with encryption and access controls built in by default.' },
    { icon: Users, title: 'Delivered and Run by Ambifo', description: 'MIP ships with Ambifo\'s media-native engineering and managed-operations expertise — a working outcome we deliver and run, not a licence dropped in your lap.' },
  ],
  problemsTitle: 'Media operations are rich in content, starved of intelligence',
  problems: [
    { icon: AlertTriangle, text: 'Broadcast hours and content libraries processed manually — slow, costly and error-prone' },
    { icon: AlertTriangle, text: 'Fragmented data across video, audio, ad logs, music catalogues and schedules' },
    { icon: AlertTriangle, text: 'No proof of sponsor exposure for live sports and broadcast events' },
    { icon: AlertTriangle, text: 'Compliance managed reactively — audit risk and delays' },
    { icon: AlertTriangle, text: 'Archives left un-tagged and unsearchable, leaving monetisation on the table' },
  ],
  solutionsTitle: 'How MIP closes the gap',
  solutions: [
    { icon: CheckCircle, text: 'Automated 24/7 ingestion across broadcast, OTT and ad logs' },
    { icon: CheckCircle, text: 'One unified intelligence layer — all content types, one platform' },
    { icon: CheckCircle, text: 'Sponsor exposure quantified to the second, every broadcast' },
    { icon: CheckCircle, text: 'AI agents maintain a continuous, always-current audit trail — and act on breaches' },
    { icon: CheckCircle, text: 'Agentic tagging that turns archives into searchable, monetisable, decision-ready assets' },
  ],
  reframeText: 'The shift for media leaders: the question is no longer "can we store and stream it?" It is "can every asset instantly tell us what\'s inside, prove it, and help us monetise it?" MIP is agentic by design — its AI agents analyse, prove and act, not just store.',
  capabilitiesTitle: 'Six capability areas that deliver value first',
  capabilities: [
    { icon: Radio, title: 'Broadcast Compliance', description: 'Automated channel monitoring, quota tracking and audit reporting — compliance that is continuous and always current, not a periodic scramble.' },
    { icon: TrendingUp, title: 'Sports Brand Analytics', description: 'Sponsor logo exposure quantified per second, per channel, per broadcast — turning live sport into provable sponsor ROI.' },
    { icon: Play, title: 'OTT Library Enrichment', description: 'Chapters, metadata, summaries and recommendations generated across streaming libraries — richer discovery and longer watch time.' },
    { icon: Clock, title: 'Ad Proof-of-Play', description: 'Every ad matched to schedule with timestamp and duration — full, automated client accountability and faster reconciliation.' },
    { icon: BarChart3, title: 'News & Programme Analytics', description: 'Topic, entity, sentiment and speaker intelligence across every programme and clip — searchable, structured, ready to act on.' },
    { icon: Music, title: 'Music & Lyrics AI', description: 'AI-generated lyrics, time-aligned subtitles and rights metadata at catalogue scale — unlocking value across large track libraries.' },
  ],
  outcomesTitle: 'Outcomes MIP delivers',
  outcomes: [
    { label: 'Faster', description: 'Faster content processing and time-to-publish' },
    { label: 'ROI', description: 'Provable sponsor ROI and ad accountability' },
    { label: 'Compliance', description: 'Continuous compliance and audit readiness' },
    { label: 'Searchable', description: 'Searchable, monetisable content libraries' },
    { label: 'Operating Cost', description: 'Lower operating cost and manual effort' },
    { label: 'Discovery', description: 'Richer discovery and viewer experience' },
    { label: 'Metadata', description: 'New revenue from enriched metadata and rights' },
    { label: '24/7', description: '24/7 assurance across every channel' },
  ],
  differentiators: [
    { icon: Play, title: 'Media-native, Not Generic', description: 'Every pipeline, model and workflow is built for the complexity of broadcast, OTT, sports rights and music — not retrofitted from generic AI tooling.' },
    { icon: Radio, title: 'Broadcast-grade AI', description: 'Multi-modal AI with human-in-the-loop QC, tuned on real broadcast and streaming data — proven on live air, not in a sandbox.' },
    { icon: TrendingUp, title: 'Outcome-based Commercials', description: 'No perpetual licence, no shelfware — pricing aligned to outcomes like accuracy, throughput and business impact.' },
    { icon: Zap, title: 'Quick to First Value', description: 'Each module stands on its own — go live on your first use case in weeks, then widen the rollout.' },
  ],
  engagementTitle: 'A low-risk path from first use case to full scale',
  engagementStages: [
    { icon: Eye, title: 'Discovery', description: 'Use-case workshop, source assessment and ROI modelling to frame the value case.' },
    { icon: Monitor, title: 'Pilot', description: 'Live data, AI pipelines, accuracy benchmarks and a working dashboard on a real use case.' },
    { icon: Cpu, title: 'Production', description: 'Full ingestion, QC workflow, security hardening and APIs — MIP live in your environment.' },
    { icon: Target, title: 'Scale', description: 'New modules, additional integrations and white-label dashboards, run as a managed service.' },
  ],
  ctaHeading: 'See MIP on your own content.',
  ctaDescription: 'Book a discovery session and we\'ll map your media assets, identify your highest-ROI use case, and demonstrate exactly what MIP can deliver — in 2–3 weeks.',
}

export const maxAIStudioData: PlatformData = {
  heroTag: 'Spec-Driven · Governed by Design',
  heroTitle: 'Take software from idea to production the agentic AI way.',
  heroSubtitle: 'Max AI Studio is Ambifo\'s agentic AI software delivery platform. One command per stage carries a project from spec to architecture to UX to backlog to built, tested features — AI agents do the heavy lifting while your team decides, reviews and signs off at every gate. Engineering standards, tests and security are loaded in, not bolted on.',
  heroDescription: 'Max AI Studio turns AI from a scattered coding assistant into a governed, end-to-end delivery engine.',
  ctaText: 'Book Now!',
  platformTitle: 'Max AI Studio — one platform, one command per stage',
  platformDescription: 'Max AI Studio turns AI from a scattered coding assistant into a governed, end-to-end delivery engine. An engineer or delivery lead runs a single command at each stage; agents write the specs, design the UX, generate the architecture, produce the backlog and build the features — with people firmly in control at every gate. It\'s spec-driven engineering, not vibe-coding.',
  platformFeatures: [
    { icon: Zap, title: 'One Command Per Stage', description: 'Run a single command to move a project forward; the platform auto-chains the rest, so delivery is a flow, not a scramble of disconnected tools.' },
    { icon: FileText, title: 'Standards Built In', description: '65 engineering skills encode proven build practices — TDD, security, accessibility and infrastructure conventions loaded automatically, not left to memory.' },
    { icon: Users, title: 'A Team of AI Agents', description: 'Eleven specialist sub-agents handle review, sizing and diagnosis, coordinating under one namespace to do the heavy lifting across every stage.' },
    { icon: Layers, title: 'Spec-driven, Not vibe-coded', description: 'Every stage starts from a reviewable specification — predictable, inspectable output instead of one-off prompts that vary by engineer.' },
    { icon: Shield, title: 'Human in the Loop', description: 'Each stage is gated: your team decides, reviews and signs off before the next begins. AI proposes; people approve.' },
    { icon: Globe, title: 'Any Project Shape', description: 'Full-stack, frontend-only, backend-only, infrastructure or AI-enabled — the platform adapts to how you actually build.' },
  ],
  problemsTitle: 'Ad-hoc AI usage today',
  problems: [
    { icon: AlertTriangle, text: 'AI used differently by every engineer' },
    { icon: AlertTriangle, text: '"Vibe coding" — output quality varies from person to person' },
    { icon: AlertTriangle, text: 'Standards, security and tests applied unevenly' },
    { icon: AlertTriangle, text: 'Knowledge trapped in individual, throwaway sessions' },
    { icon: AlertTriangle, text: 'Delivery quality depends on who happens to be staffed' },
  ],
  solutionsTitle: 'With Max AI Studio — a system',
  solutions: [
    { icon: CheckCircle, text: 'One governed flow every team follows' },
    { icon: CheckCircle, text: 'Spec-driven — predictable, reviewable output' },
    { icon: CheckCircle, text: 'Engineering standards enforced automatically' },
    { icon: CheckCircle, text: 'Every decision captured as a single source of truth' },
    { icon: CheckCircle, text: 'Consistent quality, regardless of who\'s on the project' },
  ],
  reframeText: 'The move for engineering leaders: the win isn\'t another AI assistant — it\'s making AI delivery a system. Max AI Studio turns scattered, individual AI use into one governed flow, so speed and quality stop being a trade-off.',
  capabilitiesTitle: 'Six stages, one gated delivery flow',
  capabilities: [
    { icon: Layers, title: 'Plan & Architect', description: 'Turn a brief into a reviewable product spec and architecture — the blueprint every later stage builds from.' },
    { icon: FileText, title: 'Scaffold', description: 'Generate build-correct repositories from golden templates, so projects start on a consistent, production-ready footing.' },
    { icon: Monitor, title: 'UX Build', description: 'Design and preview the interface for customer-facing products before backend work begins — approved by the customer first.' },
    { icon: BarChart3, title: 'Backlog & Sprints', description: 'Produce a topologically-sorted backlog and sprint plan, pushed straight into your tracker, ready to build against.' },
    { icon: Cpu, title: 'Build', description: 'Implement features tests-first on dedicated branches, opening pull requests for human review at every step.' },
    { icon: Settings, title: 'Operate & Observe', description: 'Watch logs, errors and cost across every stage; issues auto-raise a tracker ticket that re-enters the build cycle, and handover reports publish to your docs.' },
  ],
  outcomesTitle: 'Outcomes Max AI Studio delivers',
  outcomes: [
    { label: 'Faster', description: 'Faster to value — days of work in a session' },
    { label: 'Quality', description: 'Consistent quality across every team' },
    { label: 'Governance', description: 'Standards & governance built in' },
    { label: 'Knowledge', description: 'Knowledge that persists as one source of truth' },
    { label: 'Value', description: 'More client value per engineer' },
    { label: 'Predictable', description: 'Predictable, reviewable output' },
    { label: 'Audit', description: 'Audit-ready delivery trail' },
    { label: 'Support', description: 'Every project shape supported' },
  ],
  differentiators: [
    { icon: Bot, title: 'AI Reviews, Humans Approve', description: 'Every change is reviewed by AI across nine dimensions and commented on — but AI never approves. A person signs off the merge.' },
    { icon: CheckCircle, title: 'Tests from Day One', description: 'Features are built tests-first, with 90% coverage required before code can be committed.' },
    { icon: Shield, title: 'Security Automated', description: 'Every change is scanned for vulnerabilities, secrets and misconfigurations, with a human security review at release.' },
    { icon: Lock, title: 'Contracts Locked', description: 'API contracts are captured, versioned and enforced — integration surprises eliminated before they reach production.' },
  ],
  engagementTitle: 'Adopt it on a real project, then roll out',
  engagementStages: [
    { icon: Eye, title: 'Fit & Setup', description: 'Map your delivery, connect your tracker and repos, and load your engineering standards into the flow.' },
    { icon: Monitor, title: 'First Project', description: 'Run one real project through the full gated flow — spec to built, tested features — with your team signing off each gate.' },
    { icon: Cpu, title: 'Roll Out', description: 'Onboard more teams onto the same governed flow, so quality no longer depends on who is staffed.' },
    { icon: Target, title: 'Scale', description: 'Extend across project shapes and delivery paths, with observability keeping usage, cost and quality in view.' },
  ],
  ctaHeading: 'Put Max AI Studio on your next build.',
  ctaDescription: 'See one project move through the full gated flow — spec, architecture, UX, backlog and tested features — with governance and standards built in. Book a demo and delivery workshop.',
}
