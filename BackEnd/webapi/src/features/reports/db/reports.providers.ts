import { Report } from "../entities/report.entity";

export const ReportProviders = [
  {
    provide: 'Report_REPOSITORY',
    useValue: Report,
  },
];