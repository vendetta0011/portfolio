import { TOverviewRowData } from "../components/OverviewRowFC";
import { TWorkHistoryRowData } from "../components/WorkHistoryRowFC";

export const overviewRowsData: TOverviewRowData[] = [
  { value: 7, description: "years of professional experience" },
  { value: 5, description: "years of post-secondary education" },
  { value: 2, description: "Languages" },
];

export const workHistoryRowsData: TWorkHistoryRowData[] = [
  {
    firm: "Freelance",
    location: "Noida",
    role: "Data Analyst",
    time: "2022.03 - 2023.05 (1 year & 2 months)",
    overviewRows: [
      "Synthesized complex analytics-derived insights into easy-to-understand, actionable recommendations for business users.",
      "Tested data prediction algorithms based on historical data.",
      "Developed required policies and procedures that reflected actual goals, tasks and workflows, while meeting all regulatory compliance requirements.",
      "Worked on KPIs and reducing churn rate.",
    ],
  },
];
