import type { Dict } from "./types";

export const en: Dict = {
  meta: {
    title: "Veyalab: AI, software and BI for business",
    description:
      "We design and ship AI solutions, custom software and BI systems. Fixed-price pilot in 6-8 weeks.",
    locale: "en_US",
  },
  nav: {
    services: "Solutions",
    bi: "BI",
    cases: "Cases",
    process: "How we work",
    why: "Why us",
    cta: "Discuss a project",
  },
  hero: {
    eyebrow: "AI · Custom software · BI",
    title: { text: "AI, software and BI", accent: "for business" },
    subtitle:
      "We design and ship AI solutions, custom software and BI systems for mid-size and large companies. Fixed-price pilot in 6-8 weeks.",
    primary: "Discuss a project on Telegram",
    secondary: "See cases",
  },
  pains: {
    eyebrow: "Common situations",
    title: "Where businesses lose time and money",
    items: [
      {
        who: "Operations",
        pain: "Orders, purchasing and documents are handled by hand. People spend their time on routine instead of work that needs a person.",
      },
      {
        who: "Sales and service",
        pain: "Customers wait for answers, support is overloaded, some requests get lost and revenue goes with them.",
      },
      {
        who: "Reporting",
        pain: "Data is spread across 1C, ERP, CRM and Excel. Reports take days to build, every team has its own numbers, and decisions are made by gut feeling.",
      },
      {
        who: "IT and product",
        pain: "Off-the-shelf tools don't fit the process, systems aren't connected, and every change depends on contractors.",
      },
    ],
  },
  solutions: {
    eyebrow: "Solutions",
    title: "What we take on",
    items: [
      {
        title: "AI agents and process automation",
        text: "We design agents and automations around your processes, connected to CRM, 1C and internal systems. Routine work runs in the background.",
      },
      {
        title: "BI systems",
        text: "We bring data from 1C, ERP, CRM, banks and Excel into one system. P&L, margin, plan vs actual and forecasts are calculated automatically.",
      },
      {
        title: "AI assistants and chatbots",
        text: "The assistant answers questions from your data, takes requests and works 24/7, integrated with CRM and messengers.",
      },
      {
        title: "Custom software",
        text: "Web services, client portals and integrations for your processes, built for load and supported after launch.",
      },
    ],
  },
  bi: {
    eyebrow: "BI",
    title: "A BI system for business decisions",
    text: "We turn data from 1C, ERP, CRM and Excel into clear dashboards. An 8-week pilot at a fixed price with a measurable result, and after that the system runs without us.",
    items: [
      {
        title: "Your business in one system",
        text: "Metrics move from Excel and scattered files into one system where everything is calculated automatically, so the report is never out of date.",
      },
      {
        title: "Trends and growth points",
        text: "See what is growing, what is falling and where the money is: margin by product and client, turnover, plan vs actual and variances.",
      },
      {
        title: "All data sources together",
        text: "1C, CRM, banks and spreadsheets in one place, with one calculation logic and no manual exports or reconciliations.",
      },
    ],
    caption: "Example interface, demo data",
    dashboard: {
      kpis: [
        { label: "Revenue, month", value: "$4.8M", delta: "+18%" },
        { label: "Margin", value: "24.6%", delta: "+3.1 pp" },
        { label: "Turnover", value: "41 days", delta: "−6 days" },
      ],
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      revenue: "Revenue and profit",
      margin: "Margin by channel",
      planFact: "Funnel · plan vs actual",
      sources: "Data sources",
      sourceNames: ["1C", "CRM", "Excel"],
    },
  },
  cases: {
    eyebrow: "Cases",
    title: "Real projects with measurable results",
    items: [
      {
        industry: "Ready-meal producer",
        title: "Automated purchasing system",
        points: [
          "Customer orders are collected automatically, recipes are broken down into ingredients, and orders go to suppliers.",
          "The system forecasts demand and optimises purchase volumes.",
          "Less write-off, faster from order to shipment.",
        ],
        metrics: [{ value: "−20%", label: "purchasing costs" }],
      },
      {
        industry: "Clinics and a supplements producer",
        title: "Micro-influencer automation",
        points: [
          "You can see which creators, products, platforms and formats bring traffic, and which only create activity.",
          "Post analytics is collected automatically, with no manual work.",
          "Creator onboarding and management are automated.",
        ],
        metrics: [
          { value: "×3", label: "traffic from micro-influencers" },
          { value: "−15%", label: "CAC" },
        ],
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How we work",
    items: [
      {
        title: "Process audit",
        text: "We break down the process, define the task and 2-3 metrics that will show the pilot worked.",
      },
      {
        title: "Connecting data and systems",
        text: "Integration with 1C, CRM, messengers and internal services. Data stays inside your environment.",
      },
      {
        title: "Pilot in 6-8 weeks",
        text: "We launch the solution with a measurable result and fixed boundaries, without an open-ended budget.",
      },
      {
        title: "Rollout and support",
        text: "We bring it to production, train your team and support it, so you don't depend on a contractor.",
      },
    ],
  },
  why: {
    eyebrow: "Why us",
    title: "What you get",
    items: [
      {
        title: "Fixed timeline and budget",
        text: "Pilot boundaries are agreed at the start, with no open budget or slipping deadlines. You know in advance what you get and by when.",
      },
      {
        title: "Your data stays with you",
        text: "We work inside your environment and can deploy models on-premise when needed.",
      },
      {
        title: "The system stays with your team",
        text: "We train your people and hand over documentation, so you work without us, not around a consultant.",
      },
    ],
  },
  cta: {
    title: { text: "Let's discuss your task", accent: "and estimate the impact" },
    text: "Tell us about the process you want to speed up or automate, or the report you're tired of building by hand. We'll suggest a scenario, a timeline and a cost estimate. No forms: message us however you like, we reply within a working day.",
    telegram: "Message on Telegram",
    email: "Send an email",
  },
  footer: {
    tagline: "Veyalab. AI, software and BI for business.",
    contacts: "Contacts",
    telegram: "Telegram",
    email: "Email",
    privacy: "Privacy policy",
  },
  privacy: {
    title: "Privacy policy",
    metaTitle: "Privacy policy · Veyalab",
    metaDescription: "How veyalab.com handles personal data: no forms, no analytics, no third-party trackers.",
    back: "Back to home",
    sections: [
      {
        title: "No forms",
        text: "This website does not collect personal data through forms. There are no forms on it.",
      },
      {
        title: "No analytics or trackers",
        text: "We do not use analytics, third-party trackers or tracking cookies. Fonts and scripts are served from veyalab.com itself.",
      },
      {
        title: "How you contact us",
        text: "You can reach us only via Telegram or email, whichever you choose. We see only what you send us and use it to reply to your request. Telegram and your email provider handle messages under their own terms.",
      },
    ],
    contact: "Questions about this policy: ",
  },
  notFound: {
    title: "Page not found",
    text: "This page doesn't exist or has moved.",
    back: "Back to home",
  },
};
