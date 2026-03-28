import { ReportData } from '@/data/types';
import { 
  earbud_report, 
  petbrush_report, 
  yogamat_report, 
  smartwatch_report, 
  robot_vacuum_report, 
  generic_fallback_report 
} from '@/data/reports';

export function matchReport(keyword: string, region: string, platform: string): ReportData {
  const kw = keyword.toLowerCase();

  if (kw.includes('earbud') || kw.includes('earphone') || kw.includes('headphone') || kw.includes('airpod') || kw.includes('audio')) {
    return { ...earbud_report, keyword, region, platform };
  }
  if (kw.includes('pet') || kw.includes('groom') || kw.includes('brush') || kw.includes('cat') || kw.includes('dog')) {
    return { ...petbrush_report, keyword, region, platform };
  }
  if (kw.includes('yoga') || kw.includes('mat') || kw.includes('fitness') || kw.includes('exercise') || kw.includes('gym')) {
    return { ...yogamat_report, keyword, region, platform };
  }
  if (kw.includes('watch') || kw.includes('wearable') || kw.includes('smartwatch') || kw.includes('band')) {
    return { ...smartwatch_report, keyword, region, platform };
  }
  if (kw.includes('vacuum') || kw.includes('robot') || kw.includes('cleaner') || kw.includes('sweep') || kw.includes('mop')) {
    return { ...robot_vacuum_report, keyword, region, platform };
  }

  // Fallback: 真实的通用分析模型兜底，防止出现挂羊头卖狗肉的尴尬情况
  return { ...generic_fallback_report, keyword, region, platform };
}
