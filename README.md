# EchoGPT — Unified Multi-AI Ecosystem (Web App, Landing Page & Chrome Extension Concept)

> **Candidate Assignment Submission for Software Engineering Internship (Frontend) — AppifyDevs**

---

## 🚀 Live Demo & Overview

This project is a redesign and frontend implementation for the **EchoGPT** ecosystem. It unifies frontier AI models (**GPT-4o, Claude 3.5 Sonnet, Google Gemini 1.5 Pro, DeepSeek R1, Llama 3**) into a unified web application, an interactive single-page landing site, and a Chrome Extension concept.

- **Landing Page (Task 2)**: [`/`](file:///e:/Projects/echoGPT/src/app/page.tsx) — Feature breakdown, model matrix, pricing tiers, FAQ accordion, testimonials, and interactive dual-model preview.
- **Web App Interface (Task 1)**: [`/app`](file:///e:/Projects/echoGPT/src/app/app/page.tsx) — Multi-AI workspace with side-by-side comparative chat, model switcher, custom system prompts, prompt history, and artifact exporter.
- **Chrome Extension Concept (Task 3)**: [`/extension`](file:///e:/Projects/echoGPT/src/app/extension/page.tsx) — Interactive sandbox showing the 380px compact popup UI, webpage DOM overlay sidebar, quick productivity triggers, and extension settings.

---

## ✨ Features & Key Technical Highlights

### Task 1: Redesigned EchoGPT Web App
- **Dual & Multi-AI Side-by-Side Comparator**: Compare responses from **Claude 3.5 Sonnet** and **GPT-4o** simultaneously with real-time latency and token metrics.
- **Dynamic Model Switcher**: Seamlessly toggle between 5 world-class AI models.
- **Collapsible Responsive Sidebar**: History drawer, active chat management, and quick preset shortcuts.
- **Prompt Dock**: Resizable input, file attachment preview mock, and keyboard submit shortcuts (`Enter`).
- **Settings & BYOK**: Preferences modal for custom OpenAI/Anthropic/Gemini/DeepSeek API keys and system instructions.
- **Session Exporter**: Export chat history artifacts directly to JSON or Markdown.

### Task 2: Single-Page EchoGPT Website
- **Hero Section**: Animated status badge, particle confetti trigger, and interactive dual-mode code comparison widget.
- **Features Grid**: Highlighting 1M token context, sub-second latency pipeline, and zero data retention guarantees.
- **Frontier Model Matrix**: Interactive tabs showing real-time benchmark ratings (Reasoning, Coding, Speed).
- **Interactive Product Showcase**: Dynamic preview switcher for Web App & Extension modes.
- **Why EchoGPT Matrix**: Feature breakdown table comparing EchoGPT vs standard single-model chatbots.
- **Pricing & Billing Switcher**: Monthly / Yearly pricing toggle with a 20% discount badge.
- **Searchable FAQ Accordion**: Category filters (`All`, `Web App`, `Extension`, `Billing`) with smooth expand/collapse animations.
- **Social Proof & Testimonials**: Verified review cards with rating stars.

### Task 3: Redesigned Chrome Extension Concept
- **Interactive Popup UI Sandbox**: 380px toolbar popup frame simulation with active DOM tab context detection.
- **Injectable Webpage Overlay Sidebar**: Preview of non-intrusive floating drawer that renders directly on target websites.
- **Quick Productivity Actions**: One-click triggers for Summarize Page, Explain Highlighted Text, Extract Code, and Security Audit.
- **Extension Settings**: Default model preference, `Alt + E` global shortcut configuration, and overlay toggles.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) + React 19
- **Language**: TypeScript (Strict typing for models, chats, pricing, and FAQs)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens (Glassmorphism, custom scrollbars, neon glows, radial gradients)
- **Icons**: [Lucide React](https://lucide.react.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + Canvas Confetti

---

## 📦 Local Installation & Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/echoGPT.git
   cd echoGPT
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 💡 Assumptions & Design Decisions

1. **Unified Ecosystem Navigation**: The Web App, Landing Page, and Chrome Extension Concept are linked seamlessly via the header navigation so reviewers can evaluate all 3 tasks in one live demo application.
2. **Zero Backend Requirement for Demo**: Simulated streaming responses, latency metrics, and local storage state allow immediate testing without requiring valid OpenAI/Anthropic API keys.
3. **Accessibility & Usability (WCAG)**: Keyboard navigation support, ARIA labels, clean HTML5 semantic landmarks, and high-contrast dark theme colors.
