# BlueOrbit Text Inventory (Section-wise)

This file compiles current user-facing text across the app so content updates can be planned and edited section by section.

## 1) Global / Brand / SEO

### Global metadata (`app/layout.tsx`)

- Default title: `Blue Orbit Solutions | ERP, Cloud, Software, and Infrastructure in Bangladesh`
- Title template: `%s | Blue Orbit Solutions`
- Meta description: `Blue Orbit Solutions delivers Odoo, software development, websites, DevOps, infrastructure, IT audit, training, and strategic technology solutions in Bangladesh.`
- Open Graph title: `Blue Orbit Solutions | Technology Solutions in Bangladesh`
- Open Graph description: `ERP, software, websites, cloud, infrastructure, audit, training, and strategic technology delivery for Bangladesh.`
- Open Graph image alt: `Blue Orbit Solutions`
- Twitter title: `Blue Orbit Solutions | Technology Solutions in Bangladesh`
- Twitter description: `ERP, software, websites, cloud, infrastructure, audit, training, and strategic technology delivery for Bangladesh.`

### Per-page metadata

- About (`/about`):
  - Title: `About Us | Blue Orbit Solutions`
  - Description: `Learn about Blue Orbit Solutions, an Odoo-first implementation partner in Bangladesh focused on structured ERP delivery.`
- Services (`/services`):
  - Title: `Services | Blue Orbit Solutions`
  - Description: `Discover Blue Orbit Solutions' Odoo services: implementation, customization, DevOps, analytics, and predictive ML models.`
- Career (`/career`):
  - Title: `Career | Blue Orbit Solutions`
  - Description: `Join Blue Orbit Solutions' team of Odoo experts, engineers, and consultants. Explore open roles and apply.`
- Job detail (`/career/[slug]`):
  - Title: `Job Details | Blue Orbit Careers`
  - Description: `Apply for open positions at Blue Orbit Solutions.`
- Contact (`/contact`):
  - Title: `Contact Us | Blue Orbit Solutions`
  - Description: `Get in touch with Blue Orbit Solutions. We're here to answer your questions about Odoo implementation and services.`
- Request quote (`/request-quote`):
  - Title: `Request a Quote | Blue Orbit Solutions`
  - Description: `Get a detailed quote for your Odoo implementation project. Fill out our form and receive a proposal within 24-48 hours.`
- Admin (`/admin`):
  - Title: `Admin Dashboard | Blue Orbit Solutions`
  - Description: `Blue Orbit Solutions admin portal dashboard.`

### Technical SEO text

- Robots:
  - `userAgent`: `*`
  - `allow`: `/`
  - `disallow`: `/admin`
  - Sitemap path: `/sitemap.xml`
- Sitemap URLs:
  - `/`
  - `/about`
  - `/services`
  - `/career`
  - `/contact`
  - `/request-quote`
  - `/admin/login`

## 2) Shared Layout and Navigation

### Navbar (`components/Navbar.tsx`)

- Main links: `Home`, `About`, `Services`, `Career`, `Contact`
- CTA button: `Request a Quote`
- Mobile aria labels: `Open menu`, `Close menu`

### Footer (`components/Footer.tsx`)

- Brand paragraph: `Blue Orbit Solutions delivers ERP, software, cloud, infrastructure, audit, training, and strategic technology solutions for businesses in Bangladesh.`
- Column headings: `Quick Links`, `Services`, `Contact`
- Quick links: `About Us`, `Services`, `Career`, `Contact`
- Service links: `ERP & Business Systems`, `Software Development`, `Cloud & Infrastructure`, `Audit & Advisory`
- Contact details: `rezwan.anwar@blueorbitsolutions.net`, `+8801730311503`, `Dhaka, Bangladesh`
- Social aria labels: `Facebook`, `LinkedIn`, `Twitter`
- Copyright: `© {year} Blue Orbit. All rights reserved.`
- Partner strip: `Official Odoo Learning Partner - Beyond62 - GalaxySpace - Huawei Solutions Alignment`

### Shared CTA banner (`components/CTABanner.tsx`)

- Eyebrow: `Next Step`
- Title: `Planning ERP, infrastructure, software, or strategic technology work?`
- Body: `Tell us what you need and Blue Orbit will recommend the right solution path, delivery approach, and next step.`
- Buttons: `Request a Quote`, `Book a Consultation`
- Note: `Typical response time: 24-48 hours`

### Shared utility copy

- Theme toggle aria: `Toggle theme`
- Logo aria: `Blue Orbit logo`
- Loading overlay logo aria: `Blue Orbit loading`

## 3) Homepage (`/`)

### Hero section (`components/HeroSlider.tsx`)

- Badge: `Official Odoo Learning Partner`
- Main headline: `Technology Systems That Move Business Forward`
- Main body: `Blue Orbit Solutions helps organizations in Bangladesh deploy Odoo, build software and websites, modernize infrastructure, strengthen cloud operations, and execute strategic technology partnerships with confidence.`
- Buttons: `Request a Quote`, `Book a Consultation`
- Trust line: `Odoo | DevOps | Web Development | IT Audit | Cyber Security | Server & Storage | Satellite IoT`
- Slide panel label: `Current Service Focus`
- Slider aria:
  - `Go to {slide title}`
  - `Previous slide`
  - `Next slide`

### Hero slides (`lib/data.ts`)

1. `Odoo ERP Sales, Supply & Implementation`

- Support: `From requirement analysis and configuration to training and go-live support.`
- Panel title: `ERP delivery with local execution`
- Items: `Discovery workshops`, `Configuration & migration`, `Training & support`

2. `Software, Website & Custom Platform Delivery`

- Support: `Business applications, web platforms, integrations, and tailored digital systems.`
- Panel title: `Digital systems built around operations`
- Items: `Business software`, `Corporate websites`, `Integrated portals`

3. `Infrastructure, Cloud & Security Operations`

- Support: `DevOps, storage, servers, cloud solutions, audits, and secure enterprise deployments.`
- Panel title: `Enterprise reliability and cloud readiness`
- Items: `Server & storage`, `Cloud & DevOps`, `Cyber audit`

4. `Strategic Technology Partnerships`

- Support: `Beyond62, GalaxySpace, Huawei cloud solutions, and enterprise technology delivery for Bangladesh.`
- Panel title: `Regional partnerships for specialized delivery`
- Items: `Satellite IoT`, `Huawei solutions`, `Bangladesh market execution`

### Authority strip (`components/AuthorityStrip.tsx`, `lib/data.ts`)

- Eyebrow: `Top Partners`
- Heading: `Strategic network supporting Blue Orbit delivery.`
- Detail label: `Strategic Partner`
- Close details aria: `Close partner details`
- Partners:
  - `Odoo`
    - Label: `Official Odoo Learning Partner`
    - Description: `Learning partnership with ERP ecosystem alignment and implementation capability.`
  - `Beyond62`
    - Label: `Beyond62 Bangkok Authorized Partner`
    - Description: `Authorized partnership for satellite IoT solutions and regional collaboration.`
  - `GalaxySpace`
    - Label: `GalaxySpace Authorized Reseller for Bangladesh`
    - Description: `Bangladesh-market reseller and partner for satellite technology offerings.`
  - `Huawei`
    - Label: `Huawei Cloud & Enterprise Solutions Partner`
    - Description: `Cloud and enterprise solution alignment for infrastructure and business deployments.`

### Modules / platforms (`components/ModulesGrid.tsx`, `lib/data.ts`)

- Eyebrow: `What We Do`
- Heading: `What we deliver across ERP, software, cloud, infrastructure, and advisory`
- Intro: `We handle Odoo ERP setup, customization, migration, training, and support, alongside software development, websites, cloud and DevOps, server infrastructure, cyber security, and IT advisory.`
- Core labels and helper text:
  - `Core Platform`
  - `Odoo ERP`
  - `We deliver Odoo ERP setup, customization, migration, training, and support so your core teams can run on one connected system.`
  - `ERP Zones`
  - `What we handle`
  - `Cross-team Coverage`
  - `Core modules`
  - `ERP CORE`
  - `Shared workflows & clean data`
  - `We implement, customize, migrate, train, and support Odoo across the business areas below.`
  - `Hover or tap to see what we implement.`
  - `Setup, customization, migration, training, and support`
- Odoo zones:
  - `Sales` - `CRM, sales pipeline, POS` - apps: `CRM`, `Sales`, `POS`
  - `Operations` - `Inventory, purchase, projects` - apps: `Inventory`, `Purchase`, `Project`
  - `Finance` - `Accounts, invoicing, expenses` - apps: `Accounting`, `Invoicing`, `Expenses`
  - `People & Service` - `HR, helpdesk, website` - apps: `HR`, `Helpdesk`, `Website`
- Core app chips: `CRM`, `Sales`, `Inventory`, `Accounting`, `Purchase`, `HR`, `Project`, `Helpdesk`, `Website`, `POS`
- Capability labels:
  - `Applications` => `Applications`
  - `Business Websites` => `Experience Layer`
  - `Cloud & DevOps` => `Operations`
  - `Consultancy as a Service (Business)` => `Advisory`
  - `Cyber Security Audit` => `Security`
  - `IT Training` => `Enablement`
  - `Consultancy as a Service (Government)` => `Advisory`
  - `Satellite IoT Solutions` => `Connectivity`
- Core module data (`DEFAULT_MODULES`):
  - `Odoo ERP` - `Setup, customization, migration, training, and support for core business operations.`
  - `Applications` - `Custom softwares for SMEs and also for education institutes, hospitals, agriculture, and more. AI Solutions & Data-Driven Business Decision Making: Leverage AI solutions and data-driven models to make informed business decisions. Vision-Based AI Projects: Implement AI-powered surveillance, auto-attendance, and more, using integration with CCTV and other systems.`
  - `Business Websites` - `Corporate websites, portals, eCommerce, and customer-facing digital experiences.`
  - `Cloud & DevOps` - `Deployment pipelines, hosting, monitoring, backup, and day-to-day cloud operations.`
  - `Consultancy as a Service (Business)` - `Specialized consultancy for turnkey, end-to-end business enhancement tailored to the UAE market.`
  - `Cyber Security Audit` - `Security assessment, posture review, risk identification, and improvement guidance. AI-Powered Surveillance & Security: Enhance your security infrastructure with AI surveillance systems integrated with CCTV and other smart devices.`
  - `IT Training` - `User training, team enablement, and practical knowledge transfer for business systems.`
  - `Consultancy as a Service (Government)` - `Expert consultancy for government agencies looking to modernize, automate, and optimize their operations.`
  - `Satellite IoT Solutions` - `Partner-led connectivity and specialized satellite-enabled solutions for Bangladesh.`
- Core toggle aria: `Toggle Odoo platform details`

### Why Blue Orbit (`components/WhyBlueOrbit.tsx`)

- Tag: `About Our Company`
- Heading: `Technology execution that keeps business objectives in motion`
- Body: `Blue Orbit Solutions operates as a Bangladesh technology partner delivering Odoo implementation, software and website development, DevOps, infrastructure, IT audit, training, and strategic partner-led enterprise solutions.`
- Point 1 title/body:
  - `Planning with execution in mind`
  - `We align business requirements, technical architecture, and implementation decisions from the start.`
- Point 2 title/body:
  - `Partnership-led delivery in Bangladesh`
  - `Our work combines local execution capability with Odoo, Beyond62, GalaxySpace, and Huawei-aligned solution pathways.`
- CTA: `Learn More About Blue Orbit`

### Implementation process (`components/ImplementationProcess.tsx`)

- Eyebrow: `Our Delivery Process`
- Heading: `A structured execution model for complex technology work`
- Intro: `From discovery to deployment, we deliver ERP, software, infrastructure, and personalized ML systems that support smarter future business decisions.`
- Note: `End-to-end execution with staged control points`
- Steps:
  - `01` `Business Discovery` - kicker: `Understand the business` - body: `We assess goals, operational realities, constraints, and technical context.`
  - `02` `Requirement Analysis` - kicker: `Clarify scope` - body: `We define priorities, dependencies, workflows, and solution requirements.`
  - `03` `Solution Design` - kicker: `Architect the right model` - body: `We shape the right mix of platforms, infrastructure, integrations, rollout strategy, and ML decision-support where needed.`
  - `04` `Supply / Build / Configure` - kicker: `Deliver the solution` - body: `We supply, implement, develop, configure, or deploy the required systems.`
  - `05` `Testing & Validation` - kicker: `Verify readiness` - body: `We validate business fit, technical quality, stakeholder readiness, and model reliability where applicable.`
  - `06` `Go-Live / Handover` - kicker: `Activate operations` - body: `We launch, install, transition, and operationalize the solution in the live environment.`
  - `07` `Training & Support` - kicker: `Sustain performance` - body: `We provide enablement, continuity, optimization guidance, and ongoing support for deployed systems and decision-support models.`

### Advanced capabilities (`components/AdvancedCapabilities.tsx`)

- Eyebrow: `Enterprise Reliability and Strategic Insight`
- Heading: `Infrastructure stability and decision support built for real business execution`
- Intro: `From cloud operations and deployment continuity to audits, requirement analysis, and rollout planning, Blue Orbit supports the operational and strategic work behind dependable business systems in Bangladesh.`
- Panel 1: `Operational Reliability`
  - Description: `Blue Orbit supports Bangladesh-based teams that need stable infrastructure, disciplined operations, and secure delivery across core business systems.`
  - Bullets: `Server, storage, and deployment setup`; `Backup, monitoring, and secure cloud operations`; `DevOps support for rollout continuity and uptime`
- Panel 2: `Strategic Analysis`
  - Description: `We help organizations turn technical uncertainty into clearer implementation choices through audits, requirement analysis, and structured planning support.`
  - Bullets: `Requirement analysis for SME and enterprise programs`; `Cyber security audit and review`; `Rollout planning and data-backed decision support`
- Panel badge text: `Proof Panel`

### Proof stats (`components/ProofStats.tsx`, `lib/data.ts`)

- Eyebrow: `Our Track Record`
- Heading: `Proven execution across business systems, delivery support, and enterprise partnerships`
- Intro: `A connected proof system for the delivery scale, support quality, enablement, partnerships, and Bangladesh-focused execution behind our work.`
- Hero paragraph: `Blue Orbit supports organizations that need accountable implementation capability, disciplined rollout support, and real delivery across business technology programs.`
- Label near connector: `Proof anchor`
- Footer line: `Serving manufacturing, retail, distribution, service-driven teams, and enterprise operations in Bangladesh.`
- Editorial labels and copy:
  - `DELIVERY SCALE` - `Core proof of execution capacity across ERP, software, infrastructure, audit, and rollout delivery.`
  - `ENABLEMENT` - `Training delivery for teams, operators, and internal business users.`
  - `SUPPORT QUALITY` - `Measured responsiveness for delivery support, issue handling, and follow-up.`
  - `PARTNERSHIPS` - `Strategic relationships that strengthen solution pathways and implementation depth.`
  - `REGIONAL FOCUS` - `Delivery model built for Bangladesh-based operating realities and business teams.`
- Stats:
  - `Projects Supported` = `50+`
  - `Organizations Trained` = `20+`
  - `Support Responsiveness` = `99%`
  - `Strategic Partnerships` = `4`
  - `Bangladesh-Focused Delivery` = `100%`

### Industries (`components/IndustriesSection.tsx`, `lib/data.ts`)

- Eyebrow: `Who We Work With`
- Heading: `Built for organizations that need stronger systems and execution`
- Intro: `Built for SMEs, growth-stage companies, and enterprise organizations that need stronger systems and execution.`
- Industry chips: `Manufacturing`, `Retail & Distribution`, `Services`, `Trading Businesses`, `Education & Training`, `Health`, `Enterprise Operations`

### Optional section present in code but not mounted (`components/OurPartners.tsx`)

- Eyebrow: `Strategic Partnerships`
- Heading: `Recognized partnerships that extend specialized delivery`
- Intro: `Blue Orbit works with recognized technology partners to bring specialized solutions into the Bangladesh market.`
- Partner cards use:
  - `Odoo` - `Official learning partnership and ERP ecosystem alignment.`
  - `Beyond62 Bangkok` - `Authorized partnership for satellite IoT solutions and regional collaboration.`
  - `GalaxySpace` - `Authorized reseller and Bangladesh-market partner for satellite technology offerings.`
  - `Huawei Cloud & Enterprise` - `Cloud and enterprise solution alignment for business and infrastructure deployments.`

## 4) About Page (`/about`)

### Hero

- Title: `Our Story`
- Intro: `Blue Orbit Solutions was founded to make enterprise-grade Odoo delivery practical for businesses in Bangladesh.`

### Who We Are

- `We are an Odoo-first implementation and engineering company with expertise across consulting, customization, DevOps, and analytics.`
- `Our teams combine business process design with practical technical execution, ensuring ERP projects reach production and remain maintainable.`
- `We support organizations moving from manual workflows, spreadsheets, and legacy systems into integrated Odoo operations.`

### Stat block

- `50+` - `Client engagements`
- `120+` - `Implementation milestones delivered`
- `10+` - `Years of collective ERP experience`

### Approach cards

- `Methodology-Driven` - `Structured phases and checkpoints from discovery to support.`
- `Local + Global` - `Bangladesh-grounded execution with enterprise engineering standards.`
- `Outcome-Focused` - `Focus on adoption, data quality, and measurable operational results.`

### Team Preview

- Section title: `Team Preview`
- Members:
  - `Rezwan Anwar` - `CEO, Founder` - `Visionary leader driving Blue Orbit's mission to deliver enterprise-grade technology solutions in Bangladesh.`
  - `Sachitra Halder` - `Technical Coordinator` - `Ensures technical excellence and seamless coordination across all implementation and delivery projects.`
  - `Muhaimin Rahman` - `Lead Business Analyst` - `Specializes in understanding business requirements and translating them into strategic technical solutions.`

## 5) Services Page (`/services`)

### Hero

- Title: `Our Services`
- Intro: `End-to-end Odoo delivery covering implementation, infrastructure, and intelligence.`

### Service sections

1. `Odoo Implementation`

- Description: `Full lifecycle implementation from discovery to go-live, with training and adoption support.`
- Highlights:
  - `Requirements gathering and workshops`
  - `Module configuration and fit-gap alignment`
  - `Data migration from legacy systems`
  - `User training and change management`
  - `Go-live support and stabilization`

2. `Odoo Customization & Integration`

- Description: `Tailor Odoo to your processes with custom modules and third-party integrations.`
- Highlights:
  - `Custom module development`
  - `Workflow automation`
  - `API integrations (payment, logistics, CRM)`
  - `Advanced reporting and analytics`

3. `DevOps & Cloud Infrastructure`

- Description: `Enterprise-grade hosting, deployment automation, and monitoring for ERP reliability.`
- Highlights:
  - `Cloud deployment (AWS, Azure, VPS)`
  - `Containerized environments`
  - `CI/CD pipelines and release automation`
  - `Backup and disaster recovery`
  - `Performance optimization and scaling`

4. `Data Analytics & Business Intelligence`

- Description: `Transform operational data into dashboards and decision-ready insights.`
- Highlights:
  - `Executive KPI dashboards`
  - `Sales and revenue analysis`
  - `Financial and inventory insights`
  - `Custom BI reporting systems`

5. `Personalized Predictive ML Models`

- Description: `Apply ML to forecast trends and optimize performance with ERP-native data.`
- Highlights:
  - `Sales forecasting`
  - `Demand prediction`
  - `Customer churn analysis`
  - `Inventory forecasting`
  - `Custom ML models for your data`

### Side card

- Title: `Business Impact`
- Body: `Structured execution, measurable outcomes, and less operational friction.`

### FAQ

- Section title: `Frequently Asked Questions`
- `How long does an Odoo implementation take?` -> `Most projects take 3-6 months depending on complexity, integrations, and data quality.`
- `Do you handle migration from legacy systems?` -> `Yes. We migrate data from Excel and legacy ERPs with staged validation.`
- `Can you build custom modules?` -> `Yes, including custom workflows, reports, and third-party integrations.`
- `Do you provide post-go-live support?` -> `Yes. We provide SLA-backed support and optimization packages.`

## 6) Career Listing (`/career`)

### Hero

- Title: `Join Our Team`
- Intro: `Work on real ERP transformation projects with a multidisciplinary Odoo and cloud team.`

### Why Work at Blue Orbit

- `Learn & Grow` - `Work with experienced consultants, architects, and engineers.`
- `Meaningful Impact` - `Help businesses modernize their operations end to end.`
- `Flexible Culture` - `Hybrid-friendly environment focused on high ownership.`

### Open Positions section

- Section title: `Open Positions`
- Card CTA: `View Details`

### Job cards

- `Senior Odoo Developer` - `Dhaka, Bangladesh` - `Full-time` - `Build custom Odoo modules and integrations`
- `Solutions Architect` - `Dhaka, Bangladesh` - `Full-time` - `Design scalable Odoo solutions for enterprise clients`
- `Cloud DevOps Engineer` - `Dhaka, Bangladesh` - `Full-time` - `Manage cloud infrastructure and deployment reliability`
- `Data Scientist / ML Engineer` - `Dhaka, Bangladesh` - `Full-time` - `Build forecasting and analytics models`

## 7) Job Details (`/career/[slug]`)

### Shared job detail labels

- Back link: `Back to Careers`
- Sections: `About the Role`, `Requirements`, `Responsibilities`, `Benefits`
- Apply box:
  - Title: `Ready to Apply?`
  - Body: `Submit your details below for this role and our team will review your application.`

### Not found state

- Title: `Job Not Found`
- Body: `The role may have been closed or moved.`
- CTA: `Back to Careers`

### Job detail content by slug

#### `senior-odoo-developer`

- Title: `Senior Odoo Developer`
- Location: `Dhaka, Bangladesh`
- Type: `Full-time`
- Department: `Development`
- Description: `Lead custom Odoo module development, mentor engineers, and drive technical quality across client projects.`
- Requirements:
  - `5+ years of Odoo development experience`
  - `Strong Python and JavaScript skills`
  - `Experience with REST APIs and integrations`
  - `Database design knowledge`
  - `Strong communication and collaboration`
- Responsibilities:
  - `Develop custom modules`
  - `Implement third-party integrations`
  - `Perform code reviews and mentoring`
  - `Collaborate with solution architects`
- Benefits:
  - `Competitive salary and bonus`
  - `Health insurance`
  - `Professional development support`
  - `Remote-friendly setup`

#### `solutions-architect`

- Title: `Solutions Architect`
- Location: `Dhaka, Bangladesh`
- Type: `Full-time`
- Department: `Consulting`
- Description: `Design scalable Odoo solutions, lead workshops, and translate business goals into delivery-ready blueprints.`
- Requirements:
  - `7+ years of ERP implementation experience`
  - `Deep Odoo process knowledge`
  - `Strong client communication`
  - `Experience leading enterprise projects`
- Responsibilities:
  - `Lead requirement discovery`
  - `Create solution blueprints`
  - `Guide implementation teams`
  - `Support proposal development`
- Benefits:
  - `Performance incentives`
  - `Health and life coverage`
  - `Leadership development`
  - `Flexible work arrangements`

#### `cloud-devops-engineer`

- Title: `Cloud DevOps Engineer`
- Location: `Dhaka, Bangladesh`
- Type: `Full-time`
- Department: `Infrastructure`
- Description: `Build secure, scalable cloud infrastructure for Odoo workloads with strong reliability and monitoring practices.`
- Requirements:
  - `3+ years of DevOps/SRE experience`
  - `Docker and Kubernetes experience`
  - `CI/CD pipeline implementation`
  - `Linux administration`
- Responsibilities:
  - `Design infrastructure architecture`
  - `Automate deployments`
  - `Monitor availability and performance`
  - `Maintain backup and recovery workflows`
- Benefits:
  - `Certification support`
  - `Flexible schedule`
  - `Learning budget`
  - `Career progression path`

#### `data-scientist`

- Title: `Data Scientist / ML Engineer`
- Location: `Dhaka, Bangladesh`
- Type: `Full-time`
- Department: `Data & Analytics`
- Description: `Build predictive models and analytics systems that help clients improve planning, forecasting, and execution.`
- Requirements:
  - `2+ years of data science/ML experience`
  - `Python and statistics fundamentals`
  - `ML tooling experience`
  - `Strong SQL skills`
- Responsibilities:
  - `Develop predictive models`
  - `Create dashboards and insights`
  - `Collaborate on deployment`
  - `Communicate findings to stakeholders`
- Benefits:
  - `Bonus structure`
  - `Health insurance`
  - `Remote flexibility`
  - `AI/ML growth opportunities`

## 8) Contact (`/contact`)

### Contact page copy

- Title: `Get In Touch`
- Intro: `Have questions about Odoo or want to discuss your project? We'd love to hear from you. Drop us a message and we'll get back within 24 hours.`
- Cards:
  - `Email` -> `rezwan.anwar@blueorbitsolutions.net`, `sachitra.halder@blueorbitsolutions.net`
  - `Phone` -> `+8801730311503`, `Available Mon-Fri, 9 AM - 6 PM BDT`
  - `Address` -> `Dhaka, Bangladesh`, `Remote-friendly global team`
- Form section title: `Send us a Message`

### Contact form (`components/ContactForm.tsx`)

- Labels: `Full Name`, `Email Address`, `Phone Number`, `Subject`, `Message`
- Placeholders: `Your name`, `your@email.com`, `+880 1234 567890`, `How can we help?`, `Tell us more about your inquiry...`
- Button default/loading: `Send Message` / `Sending...`
- Generic fallback error: `Something went wrong`

## 9) Request Quote (`/request-quote`)

### Page copy

- Title: `Request Your Odoo Quote`
- Intro: `Tell us about your project and we will prepare a structured proposal in 24-48 hours.`
- Info cards:
  - `Fast Response` - `We get back to you within 24-48 hours.`
  - `Detailed Proposal` - `Custom quote tailored to your requirements.`
  - `No Spam` - `Only relevant project communication.`
- Footer note: `Your information is used only for proposal preparation and project follow-up.`

### Quote form (`components/QuoteForm.tsx`)

- Labels:
  - `Full Name *`
  - `Email Address *`
  - `Company Name *`
  - `Phone Number`
  - `Industry`
  - `Number of Users`
  - `Services Needed`
  - `Modules Interested In`
  - `Implementation Timeline`
  - `Budget Range`
  - `Additional Notes`
- Placeholders:
  - `Your name`
  - `your@email.com`
  - `Your company`
  - `+880 1234 567890`
  - `e.g., Manufacturing, Retail`
  - `50`
  - `Tell us more about your project...`
- Services checkbox values:
  - `Implementation`
  - `Customization & Integration`
  - `DevOps & Cloud`
  - `Analytics & BI`
  - `ML Models`
- Modules checkbox values:
  - `Accounting`
  - `Sales & CRM`
  - `Inventory`
  - `HR & Payroll`
  - `POS`
  - `Manufacturing`
  - `eCommerce`
- Timeline options:
  - `Select timeline`
  - `Immediate (0-1 months)`
  - `Short term (1-3 months)`
  - `Medium term (3-6 months)`
  - `Long term (6+ months)`
- Budget options:
  - `Select budget`
  - `Under $100K`
  - `$100K - $300K`
  - `$300K - $500K`
  - `$500K+`
- Submit button/loading: `Get Your Quote` / `Submitting...`
- Generic fallback error: `Something went wrong`

## 10) Career Apply Form (`components/JobApplyForm.tsx`)

- Banner: `Applying for: {jobTitle or jobSlug}`
- Inputs/placeholders: `Full Name`, `Email`, `Phone`, `Resume URL (Drive/Dropbox)`, `Short cover letter`
- Button default/loading: `Submit Application` / `Submitting...`
- Client fallback messages:
  - Success fallback: `Application submitted.`
  - Error fallback: `Unable to submit right now.`
  - Network fallback: `Network error. Please try again.`

## 11) Admin

### Admin login page (`/admin/login`)

- Title: `Admin Portal`
- Subtitle: `Secure access for content and lead management`
- Fields: `Email`, `Password`
- Placeholders: `admin@blueorbit.com`, `••••••••`
- Button default/loading: `Sign In` / `Signing In...`
- Fallback client errors:
  - `Unable to sign in.`
  - `Network error. Please try again.`

### Admin dashboard (`/admin`)

- Title: `Admin Dashboard`
- Subtitle: `Manage website content and review captured leads.`
- Sign out button/loading: `Sign Out` / `Signing out...`
- Metrics:
  - `Contact submissions` = `24`
  - `Quote requests` = `8`
  - `Job applications` = `12`
  - `Newsletter subscribers` = `145`
- Content section title: `Content Management`
- Content buttons: `Services`, `Modules`, `Testimonials`, `Team Members`, `Jobs`, `Proof Stats`
- Lead section title: `Recent Lead Sources`
- Lead rows: `Request Quote` (`8`), `Contact Form` (`24`), `Career Apply` (`12`)

## 12) API Response Messages (User-visible)

### Contact API (`POST /api/contact`)

- `Please provide valid form data.`
- `Invalid submission.`
- `Thanks. Your message was sent successfully.`

### Quote API (`POST /api/quote`)

- `Please provide valid quote details.`
- `Invalid submission.`
- `Quote request received. We will respond within 24-48 hours.`

### Newsletter API (`POST /api/newsletter`)

- `Please enter a valid email.`
- `Invalid submission.`
- `You are now subscribed.`

### Job apply API (`POST /api/jobs/apply`)

- `Please provide valid application details.`
- `Invalid submission.`
- `Application received. Our team will review it soon.`

### Admin login API (`POST /api/admin/login`)

- `Please enter a valid email and password.`
- `Admin authentication is not configured.`
- `Invalid email or password.`
- `Login successful.`

### Admin logout API (`POST /api/admin/logout`)

- `Logged out.`
