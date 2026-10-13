export type PreviewKind = "graph" | "website" | "excel";

export const previewLabels: Record<PreviewKind, string> = {
  graph: "Graph",
  website: "Website",
  excel: "Excel",
};

export const slideKinds: PreviewKind[] = ["graph", "website", "excel"];

export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tools: string;
  event: [string, string];
  preview: PreviewKind;
  detail: {
    eyebrow: string;
    subtitle: [string, string];
    facts: { label: string; value: string }[];
    overview: string;
    contribution: string;
    process: { title: string; body: string }[];
    outcome: string;
    resources: { label: string; href?: string }[];
  };
};

const placeholderProcess = [
  {
    title: "01 / Understand and prepare the data",
    body: "Describe the dataset, cleaning decisions, and question you investigated.",
  },
  {
    title: "02 / Build and evaluate the models",
    body: "Explain your method and show the actual evaluation results.",
  },
  {
    title: "03 / Explain what the results mean",
    body: "Connect each graph to a finding and a practical recommendation.",
  },
];

const placeholderResources = [
  { label: "View analysis ↗" },
  { label: "GitHub ↗", href: "https://github.com/iamoverthemoon" },
  { label: "Download workbook ↓" },
];

export const projects: Project[] = [
  {
    slug: "customer-churn",
    number: "01",
    category: "DATA ANALYTICS",
    title: "Understanding customer churn",
    description:
      "Built predictive models and used SHAP to explain the factors behind customer churn.",
    tools: "Python · XGBoost · SHAP",
    event: ["Atlassian x DataSoc Datathon", "Top 4 finalist team · 2025"],
    preview: "graph",
    detail: {
      eyebrow: "PROJECT CASE STUDY / DATA ANALYTICS",
      subtitle: ["Atlassian x DataSoc Datathon · 2025", "Top 4 finalist team"],
      facts: [
        { label: "MY ROLE", value: "Data modelling & interpretation" },
        { label: "TOOLS", value: "Python · XGBoost · SHAP" },
        { label: "FORMAT", value: "Team datathon project" },
      ],
      overview:
        "A team project using predictive modelling to explore customer churn and communicate practical recommendations. This page brings the analysis, visuals, and my contribution together.",
      contribution:
        "I contributed predictive models and used SHAP to explain factors associated with customer churn. Add the specific tasks you owned, the decisions you made, and evidence of your work here.",
      process: placeholderProcess,
      outcome:
        "Our team reached the Top 4 final. Add what you learned, what you would improve, and the evidence supporting your conclusions.",
      resources: placeholderResources,
    },
  },
  {
    slug: "balanceedge",
    number: "02",
    category: "BUSINESS ANALYSIS",
    title: "Making a platform easier to use",
    description:
      "Contributed research, usability testing, and small frontend improvements to the BalanceEdge client project.",
    tools: "Research · UX testing · Frontend",
    event: ["BalanceEdge · PACE team project", "Research & design contribution · 2026"],
    preview: "website",
    detail: {
      eyebrow: "PROJECT CASE STUDY / BUSINESS ANALYSIS",
      subtitle: ["BalanceEdge · PACE team project", "Research & design contribution · 2026"],
      facts: [
        { label: "MY ROLE", value: "Research & design contribution" },
        { label: "TOOLS", value: "Research · UX testing · Frontend" },
        { label: "FORMAT", value: "PACE team project" },
      ],
      overview:
        "Contributed research, usability testing, and small frontend improvements to the BalanceEdge client project.",
      contribution:
        "Add the specific tasks you owned, the decisions you made, and evidence of your work here.",
      process: placeholderProcess,
      outcome:
        "Add what you learned, what you would improve, and the evidence supporting your conclusions.",
      resources: placeholderResources,
    },
  },
  {
    slug: "inter-university-datathon",
    number: "03",
    category: "PROBLEM SOLVING",
    title: "Turning data into recommendations",
    description:
      "Worked with a team to develop predictive models and communicate practical recommendations.",
    tools: "Data modelling · Analysis · Presentation",
    event: ["Inter-University Datathon", "Top 3 Sydney finalist team · 2025"],
    preview: "excel",
    detail: {
      eyebrow: "PROJECT CASE STUDY / PROBLEM SOLVING",
      subtitle: ["Inter-University Datathon · 2025", "Top 3 Sydney finalist team"],
      facts: [
        { label: "MY ROLE", value: "Data modelling & presentation" },
        { label: "TOOLS", value: "Data modelling · Analysis · Presentation" },
        { label: "FORMAT", value: "Team datathon project" },
      ],
      overview:
        "Worked with a team to develop predictive models and communicate practical recommendations.",
      contribution:
        "Add the specific tasks you owned, the decisions you made, and evidence of your work here.",
      process: placeholderProcess,
      outcome:
        "Our team reached the Top 3 Sydney final. Add what you learned, what you would improve, and the evidence supporting your conclusions.",
      resources: placeholderResources,
    },
  },
];
