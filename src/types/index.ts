export interface AIModel {
  id: string;
  name: string;
  provider: string;
  badge: string;
  iconColor: string;
  gradient: string;
  description: string;
  contextWindow: string;
  speedRating: number;
  reasoningRating: number;
  codingRating: number;
  popular?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  modelId?: string;
  content: string;
  timestamp: string;
  isComparing?: boolean;
  modelResponses?: Record<string, string>; // modelId -> response content for multi-compare mode
  tokens?: number;
  latency?: string;
}

export interface Conversation {
  id: string;
  title: string;
  lastUpdated: string;
  messages: ChatMessage[];
  modelId: string;
  isCompareMode?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'web-app' | 'extension' | 'billing';
}
