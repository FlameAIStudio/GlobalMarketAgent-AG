import { ReportData } from '@/data/types';
import { earbud_report, petbrush_report, yogamat_report } from '@/data/reports';

export function matchReport(keyword: string, region: string, platform: string): ReportData {
  const kw = keyword.toLowerCase();

  if (kw.includes('earbud') || kw.includes('earphone') || kw.includes('headphone') || kw.includes('airpod')) {
    return { ...earbud_report, keyword, region, platform };
  }
  if (kw.includes('pet') || kw.includes('groom') || kw.includes('brush') || kw.includes('cat') || kw.includes('dog')) {
    return { ...petbrush_report, keyword, region, platform };
  }
  if (kw.includes('yoga') || kw.includes('mat') || kw.includes('fitness') || kw.includes('exercise')) {
    return { ...yogamat_report, keyword, region, platform };
  }

  // Fallback: default to earbuds report but label with user input
  return { ...earbud_report, keyword, region, platform };
}
