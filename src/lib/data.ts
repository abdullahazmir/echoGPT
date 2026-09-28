import { AIModel, PricingPlan, Testimonial, FAQItem, Conversation } from '@/types';

export const AI_MODELS: AIModel[] = [
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    badge: 'Most Popular',
    iconColor: '#10a37f',
    gradient: 'from-emerald-500 to-teal-700',
    description: 'High-speed omni-model specializing in general reasoning, language translation, vision, and real-time query resolution.',
    contextWindow: '128k tokens',
    speedRating: 5,
    reasoningRating: 5,
    codingRating: 4.8,
    popular: true,
  },
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    badge: 'Best for Code',
    iconColor: '#d97706',
    gradient: 'from-amber-500 to-orange-700',
    description: 'Industry-leading benchmark scores in software architecture, complex code generation, logical reasoning, and artifact synthesis.',
    contextWindow: '200k tokens',
    speedRating: 4.9,
    reasoningRating: 5,
    codingRating: 5,
    popular: true,
  },
  {
    id: 'gemini-1-5-pro',
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    badge: '1M Context',
    iconColor: '#4285f4',
    gradient: 'from-blue-500 to-indigo-700',
    description: 'Breakthrough 1M+ token context window capable of ingesting entire codebases, audio, video, and massive PDF documentation sets.',
    contextWindow: '1M tokens',
    speedRating: 4.8,
    reasoningRating: 4.9,
    codingRating: 4.7,
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    provider: 'DeepSeek',
    badge: 'Reasoning Leader',
    iconColor: '#6366f1',
    gradient: 'from-indigo-500 to-purple-700',
    description: 'Open-weights reasoning model optimized for step-by-step chain-of-thought, mathematical proofs, and complex algorithmic logic.',
    contextWindow: '64k tokens',
    speedRating: 4.6,
    reasoningRating: 5,
    codingRating: 4.9,
  },
  {
    id: 'llama-3-3-70b',
    name: 'Llama 3.3 70B',
    provider: 'Meta',
    badge: 'Open Weights',
    iconColor: '#06b6d4',
    gradient: 'from-cyan-500 to-blue-700',
    description: 'State-of-the-art open source model delivering enterprise performance with maximum data privacy and low-latency execution.',
    contextWindow: '128k tokens',
    speedRating: 4.7,
    reasoningRating: 4.6,
    codingRating: 4.5,
  }
];

export const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv-1',
    title: 'Multi-AI Code Architecture Comparison',
    lastUpdated: 'Just now',
    modelId: 'claude-3-5-sonnet',
    isCompareMode: true,
    messages: [
      {
        id: 'msg-1',
        sender: 'user',
        content: 'Compare React 19 Server Actions vs standard REST API endpoints for a multi-tenant dashboard. Highlight latency, security, and developer experience.',
        timestamp: '10:42 AM',
      },
      {
        id: 'msg-2',
        sender: 'assistant',
        content: 'Here is a side-by-side comparative analysis of **React 19 Server Actions** vs **Standard REST API Endpoints** for multi-tenant applications:',
        timestamp: '10:42 AM',
        isComparing: true,
        modelResponses: {
          'claude-3-5-sonnet': `### Claude 3.5 Sonnet Analysis:
**1. Developer Experience & Type Safety:**
React Server Actions eliminate client-side fetch boilerplate. Direct function invocation across client and server provides zero-cost TypeScript end-to-end safety.

\`\`\`tsx
// Server Action Example
export async function updateTenantSettings(formData: FormData) {
  'use server';
  const session = await auth();
  if (!session?.user?.tenantId) throw new Error("Unauthorized");
  return await db.tenants.update({ where: { id: session.user.tenantId }, data });
}
\`\`\`

**2. Multi-Tenant Security:**
Server actions run directly inside the node server environment. Context isolation is cleaner when wrapped with server-side middleware authentication hooks.`,
          'gpt-4o': `### GPT-4o Analysis:
**1. Latency & Bundle Size:**
Server actions eliminate payload serialization layers and client-side HTTP libraries (e.g. Axios), reducing JavaScript bundle sizes by up to 25KB per route.

**2. Cache Invalidation & UX:**
Integrating Server Actions with Next.js \`revalidatePath\` or \`revalidateTag\` automatically updates optimistic client states without manually managing React Query cache keys.`
        },
        latency: '840ms',
        tokens: 412
      }
    ]
  },
  {
    id: 'conv-2',
    title: 'Chrome Extension Web Scraper Concept',
    lastUpdated: '2 hours ago',
    modelId: 'gpt-4o',
    messages: [
      {
        id: 'msg-3',
        sender: 'user',
        content: 'Summarize the core benefits of using EchoGPT Chrome Extension while browsing research papers.',
        timestamp: '08:15 AM',
      },
      {
        id: 'msg-4',
        sender: 'assistant',
        modelId: 'gpt-4o',
        content: `### 🌟 EchoGPT Chrome Extension Benefits for Research:

1. **Instant Web Page Context Synthesis:** Highlight any text on ArXiv, PubMed, or blogs to trigger instant AI explanation or translation.
2. **Side-by-Side Model Comparison:** Run Claude 3.5 and DeepSeek R1 simultaneously on complex math formulations.
3. **One-Click Prompt Injection:** Quick action floating overlay allows asking follow-up questions directly on the active webpage context.`,
        timestamp: '08:16 AM',
        latency: '620ms',
        tokens: 185
      }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Starter',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Perfect for exploring multi-AI chat capabilities and basic productivity workflows.',
    features: [
      'Access to GPT-4o & Gemini 1.5 Flash',
      '50 dual-model queries per day',
      'Standard Chrome Extension popup',
      'Web app chat history (7 days)',
      'Community support'
    ],
    ctaText: 'Get Started Free'
  },
  {
    id: 'pro',
    name: 'Pro Developer',
    priceMonthly: 19,
    priceYearly: 15,
    popular: true,
    description: 'For power users, software engineers, and researchers demanding top-tier AI models.',
    features: [
      'Unlimited access to Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro & DeepSeek R1',
      'Unlimited Dual & Triple Split-Screen Model Comparison',
      'Advanced Chrome Extension with Floating Web Assistant & Page Summary',
      'Unlimited Chat History & Cloud Sync',
      'Code Sandbox & Artifact Export (Markdown, JSON, PDF)',
      'Priority Speed & Zero Rate-Limits'
    ],
    ctaText: 'Start 14-Day Free Trial'
  },
  {
    id: 'team',
    name: 'Team & Enterprise',
    priceMonthly: 49,
    priceYearly: 39,
    description: 'For engineering teams requiring shared prompts, centralized billing, and custom API keys.',
    features: [
      'Everything in Pro Plan for up to 10 members',
      'Bring Your Own API Keys (BYOK) support',
      'Shared Prompt Templates Library',
      'SOC2 Compliant & Zero Data Retention Guarantee',
      'Custom Model Fine-tuning Integration',
      'Dedicated Account Support & SLA'
    ],
    ctaText: 'Contact Team Sales'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Chen',
    role: 'Staff Frontend Engineer',
    company: 'Vercel Ecosystem',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'EchoGPT completely changed how I evaluate AI coding solutions. Comparing Claude 3.5 Sonnet and DeepSeek R1 side-by-side in real-time saves me hours of context switching every single day.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Marcus Vance',
    role: 'Lead UI/UX Designer',
    company: 'AppifyDevs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'The redesign of both the web app and Chrome extension is pure artwork. The sleek dark mode, split comparison view, and lightning-fast extension popup set a new standard for AI products.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'AI Researcher & Data Scientist',
    company: 'DeepMind Fellow',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    content: 'Having Gemini 1.5 Pro’s 1M token context alongside GPT-4o in one unified browser toolbar is an unbelievable superpower when reviewing complex multi-page research documents.',
    rating: 5
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What makes EchoGPT different from ChatGPT or Claude desktop apps?',
    answer: 'EchoGPT acts as a multi-AI orchestrator. Instead of locking you into a single AI model family, EchoGPT allows you to access GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and DeepSeek R1 inside one unified workspace, compare their responses side-by-side, and invoke them seamlessly on any web page via our Chrome extension.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'How does the Chrome Extension compare responses on live web pages?',
    answer: 'The EchoGPT Chrome Extension inserts a sleek, non-intrusive floating overlay and quick popup into your browser. You can select text on any website (GitHub, documentation, news) and instantly prompt multiple AI models to summarize, translate, debug, or analyze the context without leaving your active tab.',
    category: 'extension'
  },
  {
    id: 'faq-3',
    question: 'Can I bring my own OpenAI or Anthropic API keys (BYOK)?',
    answer: 'Yes! Pro and Team tier users can enter their custom API keys in the Settings modal. This allows direct API calls to OpenAI, Anthropic, Google Gemini, and DeepSeek at raw provider cost with complete data privacy.',
    category: 'web-app'
  },
  {
    id: 'faq-4',
    question: 'Is my data private and secure?',
    answer: 'Absolutely. EchoGPT adheres to strict zero-data-retention policies. Your prompts and conversations are never stored or used to train third-party AI models. Cloud sync is end-to-end encrypted.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: 'Can I switch models in the middle of a conversation?',
    answer: 'Yes! You can switch the active model at any turn, or activate "Multi-Compare Mode" to generate responses from two or three models simultaneously for the exact same prompt.',
    category: 'web-app'
  }
];
