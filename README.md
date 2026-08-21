# 🌌 Usama Puward — Cyberpunk Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.1-black?style=for-the-badge&logo=framer&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.5_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)

<p align="center">
  A futuristic, high-performance cyberpunk HUD developer portfolio for <strong>Usama Puward</strong> — AI/ML Engineer & Full-Stack Software Developer.
</p>

[View Live Portfolio](#) • [Explore Projects](#-key-projects) • [Contact Me](#-connect-with-me)

</div>

---

## ⚡ Overview

This repository contains the source code for Usama Puward's personal portfolio website. Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS**, and **Framer Motion**, it delivers an immersive sci-fi cyberpunk HUD experience featuring bespoke polygon-clipped borders, neon particle glow effects, interactive 3D stacked carousels, and an integrated **Google Gemini-powered AI Assistant**.

---

## 🚀 Key Features

- **🤖 USAMA_AI Companion**: An embedded cyberpunk chatbot powered by Google Gemini 2.5 Flash, equipped with a comprehensive knowledge base about Usama's engineering experience, AI/ML background, projects, and contact info.
- **💼 Interactive Career Timeline (`/experiences`)**: Staggered scroll animations with side-by-side entrance effects (duration from left, role cards from right) and adaptive responsive layouts.
- **🛸 3D Stacked Project Carousel (`/projects`)**: Custom cover-flow and stack carousel with auto-rotation, pagination indicators, and deep project case studies.
- **📜 Verified Credentials Spotlight (`/certifications`)**: Interactive credentials catalog featuring organization logos (Meta, Google, Stanford, DeepLearning.AI, Microsoft, IBM) and one-click credential verification.
- **📊 Technical Skills & Infinite Marquee**: Dynamic skill proficiency bars and a continuous, GPU-accelerated core technologies marquee.
- **🌐 Responsive Sci-Fi HUD Design**: Carefully tailored cyberpunk aesthetics with full responsiveness across mobile, tablet, and ultra-wide displays.

---

## 🛠️ Tech Stack

### **Frontend & Framework**
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom Vanilla CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Simple Icons CDN](https://simpleicons.org/)

### **AI & Intelligence**
- **LLM**: Google Gemini 2.5 Flash API
- **Endpoint**: Next.js Serverless Route (`/api/chat`)

---

## 📂 Project Structure

```bash
portfolio-2/
├── public/                     # Static assets, favicon, resume, icons
│   ├── favicon.ico
│   └── resume.pdf
├── src/
│   ├── app/                    # Next.js App Router pages & API routes
│   │   ├── api/
│   │   │   └── chat/route.ts   # Gemini AI chatbot endpoint
│   │   ├── certifications/     # Verified certifications page
│   │   ├── contact/            # Contact portal page
│   │   ├── experiences/        # Career journey timeline page
│   │   ├── projects/           # Featured projects page
│   │   ├── globals.css         # Cyberpunk design system & tokens
│   │   ├── layout.tsx          # Root layout with HUD overlays & metadata
│   │   ├── not-found.tsx       # Custom 404 terminal error page
│   │   └── page.tsx            # Home landing page with hero & carousels
│   ├── assets/                 # Profile images & project thumbnails
│   ├── components/             # Reusable UI & animation components
│   │   ├── CertificateCarousel.tsx
│   │   ├── Chatbot.tsx         # Floating USAMA_AI chat interface
│   │   ├── CtaSection.tsx      # Contact CTA banner
│   │   ├── CyberBackground.tsx # Ambient canvas glow background
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCarousel.tsx
│   │   └── VerticalBackground.tsx
│   ├── constants/
│   │   └── portfolioData.ts    # Centralized portfolio data store
│   └── types.d.ts              # TypeScript type declarations
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.18 or higher recommended) and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Usamafuward/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional):**
   Create a `.env.local` file in the root directory if you want to use your own Gemini API key for the chatbot:
   ```env
   GOOGLE_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 🌟 Key Projects

| Project | Description | Stack |
| :--- | :--- | :--- |
| **Tartuca** | Full-stack restaurant & food delivery monorepo with real-time tracking | React, FastAPI, PostgreSQL, Tailwind CSS, Auth0 |
| **AI Multi-Agent Coding Assistant** | Autonomous multi-agent coding & debugging system | AutoGen, OpenAI GPT, FastHTML, FastAPI, LangChain |
| **RAG Pipeline for PDF Analysis** | Multi-modal conversational PDF querying system | LangChain, Google Generative AI, FAISS, Streamlit |
| **NLP Podcast Chatbot** | Podcast transcripts semantic search and speaker attribution | Flask, TF-IDF, VADER, NLTK |
| **Travel Point** | Cross-platform travel social network & booking app | React, React Native, FastAPI, PostgreSQL |

---

## 📬 Connect with Me

- **Name**: Usama Puward
- **Role**: AI/ML Engineer & Software Developer
- **Email**: [usamafuward2001@gmail.com](mailto:usamafuward2001@gmail.com)
- **LinkedIn**: [linkedin.com/in/usama-puward](https://linkedin.com/in/usama-puward)
- **GitHub**: [github.com/Usamafuward](https://github.com/Usamafuward)
- **X (Twitter)**: [@usamafuward](https://www.x.com/usamafuward)
- **Location**: Colombo, Sri Lanka

---

<div align="center">
  <sub>Engineered with precision & passion by Usama Puward. Built on Next.js & Tailwind CSS.</sub>
</div>
