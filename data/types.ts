export interface Competitor {
  name: string;
  price: string;
  rating: number;
  reviews: string;
  features: string[];
  badge?: string;
}

export interface PriceAnalysis {
  budget: string;
  mid: string;
  premium: string;
  insight: string;
}

export interface CustomerInsight {
  type: 'values' | 'complaints' | 'gap';
  label: string;
  content: string;
}

export interface GTMStrategy {
  positioning: string;
  messaging: string;
  channel_strategy: string;
}

export interface ReportData {
  keyword: string;
  region: string;
  platform: string;
  summary: string;
  competitors: Competitor[];
  price_analysis: PriceAnalysis;
  customer_insights: CustomerInsight[];
  gtm: GTMStrategy;
}
