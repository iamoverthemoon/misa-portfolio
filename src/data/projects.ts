export type PreviewKind = "graph" | "website" | "excel";

export const previewLabels: Record<PreviewKind, string> = {
  graph: "Graph",
  website: "Website",
  excel: "Excel",
};

export const slideKinds: PreviewKind[] = ["graph", "website", "excel"];

export type ProjectImage = { src: string; alt: string; caption: string };

export type Project = {
  cover?: ProjectImage;
  gallery?: ProjectImage[];
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
    resources: { label: string; href?: string; download?: boolean }[];
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
    slug: "duplicate-questions",
    number: "04",
    category: "MACHINE LEARNING / NLP",
    title: "When two questions mean the same thing",
    description: "Comparing Naïve Bayes, a Siamese LSTM, and BERT to detect duplicate questions and understand their mistakes.",
    tools: "Python · PyTorch · NLTK · BERT · scikit-learn",
    event: ["Quora Question Pairs", "University project · 2026 · COMP3420 – Artificial Intelligence for Text and Vision"],
    preview: "graph",
    cover: { src: `${import.meta.env.BASE_URL}projects/duplicate-questions/model-comparison.svg`, alt: "Accuracy: Naïve Bayes 66%, Siamese LSTM 46%, BERT 75%. F1: 0.414, 0.372, 0.603.", caption: "BERT performed best in this small saved experiment." },
    gallery: [
      { src: `${import.meta.env.BASE_URL}projects/duplicate-questions/model-comparison.svg`, alt: "Bar charts comparing accuracy and duplicate-class F1 for three models", caption: "Same 1,000 training pairs and 100 evaluation pairs for all models. Naïve Bayes F1 is calculated from its saved confusion matrix." },
      { src: `${import.meta.env.BASE_URL}projects/duplicate-questions/naive-bayes.png`, alt: "Naïve Bayes confusion matrix: 54 true negatives, 16 false positives, 18 false negatives, 12 true positives", caption: "Naïve Bayes missed 18 of the 30 duplicate pairs and incorrectly matched 16 non-duplicate pairs." },
      { src: `${import.meta.env.BASE_URL}projects/duplicate-questions/siamese-lstm.png`, alt: "Siamese LSTM confusion matrix: 30 true negatives, 40 false positives, 14 false negatives, 16 true positives", caption: "The LSTM found more duplicates, but its 40 false positives reduced precision. Its similarity threshold was selected on training data." },
    ],
    detail: {
      eyebrow: "COMP3420 – Artificial Intelligence for Text and Vision",
      subtitle: ["Detecting duplicate questions", "University coursework · 2026"],
      facts: [],
      overview: "Different wording can express the same question. Using the Quora Question Pairs dataset, I explored how machine learning can identify these duplicates—a task relevant to FAQ organisation, search, and customer support. This was a comparative notebook experiment, not a deployed application.",
      contribution: "I explored common nouns and word pairs, built a Bag-of-Words Naïve Bayes baseline and a Siamese bidirectional LSTM, and fine-tuned BERT. I compared their predictions using accuracy, precision, recall, F1, and confusion matrices. The notebook documents AI assistance with evaluation helper cleanup and import troubleshooting.",
      process: [
        { title: "01 / Explore the language", body: "Used NLTK sentence and word tokenisation, part-of-speech tagging, and Porter stemming to investigate frequent nouns and bigrams in the training questions." },
        { title: "02 / Compare three approaches", body: "Trained all three models on the same first 1,000 training pairs and evaluated them on the first 100 validation pairs. The LSTM used shared question encoders and cosine similarity; BERT was fine-tuned for three epochs." },
        { title: "03 / Evaluate the trade-offs", body: "Saved outputs show 66% accuracy for Naïve Bayes, 46% for the LSTM, and 75% for BERT. BERT achieved precision 0.576, recall 0.633, and F1 0.603. The LSTM improved recall over Naïve Bayes but produced more false positives. Always predicting non-duplicate would achieve 70% accuracy on this sample, which shows why accuracy alone is insufficient." },
        { title: "04 / Investigate a mistake", body: "BERT incorrectly matched ‘How is vanilla extract made?’ with ‘How do you make sugar cookies without vanilla extract?’ The shared words may have contributed to the error, but the questions ask for different information. The prediction alone does not establish the model’s internal reasoning." },
      ],
      outcome: "BERT performed best among the three models in the saved run. This work demonstrates text processing, neural network implementation, model comparison, and error analysis. Results are exploratory: the evaluation uses only 100 pairs, and the LSTM threshold was selected on training data. Next steps would use larger representative samples and a separate validation set for threshold tuning. Metrics are taken from saved notebook outputs; model training was not rerun for this portfolio.",
      resources: [
        { label: "View notebook on GitHub ↗", href: "https://github.com/iamoverthemoon/misa-portfolio/blob/main/public/projects/duplicate-questions/duplicate-questions.ipynb" },
        { label: "Download notebook ↓", href: `${import.meta.env.BASE_URL}projects/duplicate-questions/duplicate-questions.ipynb`, download: true },
      ],
    },
  },

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
