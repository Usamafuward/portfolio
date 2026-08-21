import { NextResponse } from "next/server";

export const runtime = "nodejs";

const usamaKnowledgeBase = `
PERSONAL INFORMATION:
- Name: Usama Puward
- Title: AI/ML Engineer & Software Developer
- Email: usamafuward2001@gmail.com
- Phone: +94 (76) 6260507
- Location: Colombo, Sri Lanka
- Bio: Computer Science Graduate and current AI/ML Engineer and Software Developer, with a strong passion for Software Developing, Machine Learning, and Artificial Intelligence. Skilled in developing efficient and innovative solutions for real-world projects and building high-quality applications. Eager to tackle complex challenges in software development and drive innovation within the fields of AI and ML.
- GitHub: https://github.com/Usamafuward
- LinkedIn: https://linkedin.com/in/usama-puward
- X (Twitter): https://www.x.com/usamafuward
- Instagram: https://www.instagram.com/usama._fuward

CORE TECHNICAL SKILLS:
- Front-End Development (85%): React, Next.js, React Native, FastHTML, SCSS, Tailwind CSS, Bootstrap, JavaScript
- Back-End Development (90%): FastAPI, Node.js, Django, Express.js, RESTful APIs, JWT Authentication, Microservices
- Machine Learning (75%): TensorFlow, Scikit-learn, Pandas, NumPy, Matplotlib, CNNs, Supervised & Unsupervised Learning, Regression, Classification
- Artificial Intelligence (85%): Natural Language Processing (NLP), Computer Vision, Deep Learning, Large Language Models (LLMs), RAG (Retrieval-Augmented Generation), Multi-Agent Systems (AutoGen, LangChain), Prompt Engineering, Multi-modal AI
- Database Ops (90%): MongoDB, PostgreSQL, MySQL, MariaDB, SQLAlchemy, Mongoose
- DevOps & Containers (70%): Docker, Linux, Git, GitHub
- Cloud Platforms (60%): Microsoft Azure (Cognitive Services, Cloud ML)

FORMAL EDUCATION:
1. Degree: B.Sc. Computer Science (2022 - 2025)
   - Institution: University of Colombo School of Computing (UCSC)
   - Focus: Software development, machine learning, AI, distributed systems, research projects.
2. Secondary School Education (2012 - 2020)
   - Institution: Zahira College Mawanella
   - Focus: GCE Ordinary Level & GCE Advanced Level (Physical Science Stream). Student prefect, academic and athletic accolades.

PROFESSIONAL WORK EXPERIENCES:
1. AI/SE Engineer (June 2025 – Present) | Kainovation Technologies
   - Actively contributing to transformative projects in AI, machine learning, and software engineering.
   - Focus: Integration of AI models, full-stack software development, AI solution deployment, and optimizing intelligent systems for real-world production environments.
2. AI/ML Intern (November 2024 – May 2025) | Kainovation Technologies
   - Researched and developed AI and ML solutions, leveraging data-driven insights.
   - Handled data preprocessing, pipeline building, exploratory data analysis, and assisting in ML model deployment.
3. Software Developer (November 2024 – January 2025) | Edus Lanka (PVT) LTD
   - Developed the Mediman doctor-patient clinic online appointment portal (front-end & back-end).
   - Features: Appointment booking, patient records management, real-time doctor-patient communication.
4. Full Stack Developer Intern (October 2024 – December 2024) | Unified Mentor India
   - Hands-on full-stack development, database management, and API integration.
5. Artificial Intelligence Intern (June 2023 – July 2024) | NoviTech R&D Pvt Ltd
   - Contributed to machine learning models and AI solutions for real-world industry challenges.
6. Freelance Full Stack Developer (December 2023 – May 2024) | Self-Employed
   - Built custom web applications using Node.js, MongoDB, React, and integrated third-party payment/data APIs.
7. Research Projects: Data Collector & Annotator (April 2023 – December 2023) | UCSC
   - Data collection and annotation for badminton shot analysis (Computer Vision) and Tamil text emotion detection (NLP).

KEY PROJECTS:
1. Tartuca - Restaurant & Delivery Platform
   - Stack: React, FastAPI, PostgreSQL, Tailwind CSS, SQLAlchemy, Auth0, Google Maps API
   - Description: Full-stack food ordering platform with customer delivery tracking, admin back-office dashboard, and high-performance async FastAPI backend.
   - Repo: https://github.com/Usamafuward/tartuca_user.git
2. AI-Powered Multi-Agent Coding Assistant
   - Stack: AutoGen, OpenAI GPT, FastHTML, FastAPI, LangChain, FAISS, GitHub API
   - Description: Advanced coding assistant utilizing multi-agent autonomous conversations to assist developers in writing, debugging, optimizing, and documenting code.
   - Repo: https://github.com/Usamafuward/AI_Powered_Multi_Agent_Coding_Assistant.git
3. RAG Pipeline for PDF Analysis (Chatbot)
   - Stack: LangChain, Google Generative AI, FAISS, Streamlit, Python
   - Description: Multi-modal RAG conversational pipeline extracting text, tables, and images from PDFs with semantic question answering.
   - Repo: https://github.com/Usamafuward/Rag-Pipeline-For-PDF-Analysis.git
4. NLP Podcast Chatbot
   - Stack: Flask, TF-IDF, VADER, NLTK
   - Description: Interacts with podcast transcripts, attributes speaker responses, and references relevant timestamps.
   - Repo: https://github.com/Usamafuward/nlp-podcast-chatbot.git
5. Travel Point
   - Stack: React, React Native, FastAPI, PostgreSQL, Tailwind CSS
   - Description: Cross-platform social travel app for itinerary sharing, accommodation booking, and tour packages.
   - Repo: https://github.com/aamirfazeer/TravelPointMobile.git
6. Eats Robers
   - Stack: React, Node.js, Express, MongoDB, Mongoose
   - Description: Restaurant discovery and meal delivery platform with checkout management.
   - Repo: https://github.com/Usamafuward/eats-robers.git
7. Mediman Doctor Dashboard
   - Stack: React, Shadcn-UI, Tailwind CSS
   - Description: Doctor clinic dashboard for online/physical appointment management and medical history tracking.
   - Repo: https://github.com/Usamafuward/sample-mediman-doctor.git
8. Online Book Review Application
   - Stack: Node.js, Express.js, JWT, RESTful API
   - Description: RESTful API with user authentication, concurrent async review submission, and session management.
   - Repo: https://github.com/Usamafuward/book-review-api.git
9. Startup Company Website
   - Stack: React, Next.js, Tailwind CSS
   - Description: Modern corporate showcase for a software startup with blogs and client portals.
   - Repo: https://github.com/Usamafuward/startup_company_website.git
10. Django Blog
    - Stack: Python, Django, PostgreSQL, HTML, CSS
    - Description: Technology blogging and article sharing platform.
    - Repo: https://github.com/Usamafuward/Django-blog.git

MAJOR CERTIFICATIONS:
- Meta React Specialization (Coursera / Meta)
- Google 15 Free AI Tools Masterclass (AI Dude)
- Developing Back-End Apps with Node.js and Express (Coursera / IBM)
- DevOps Essentials and Version Control with Git (Coursera / Edureka)
- 30 Days MasterClass in Artificial Intelligence (NoviTech R&D)
- Machine Learning Specialization (Coursera / DeepLearning.AI & Stanford)
- Mastering Multi-Agent Development with AutoGen (Coursera / Packt)
- Artificial Intelligence on Microsoft Azure (Coursera / Microsoft)
- Introduction to TensorFlow & CNNs in TensorFlow (Coursera / DeepLearning.AI)
- Introduction to Large Language Models (Coursera / Google Cloud)
- Introduction to Generative AI & Responsible AI (Coursera / Google Cloud)
`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Google API key is not configured." },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "A valid list of messages is required." },
        { status: 400 }
      );
    }

    const systemInstruction = `You are USAMA_AI, the official cyberpunk-themed AI companion and representative for Usama Puward's portfolio.

USAMA PUWARD'S COMPLETE KNOWLEDGE BASE:
==================================================
${usamaKnowledgeBase}
==================================================

CORE OPERATIONAL RULES:
1. ONLY ANSWER QUESTIONS ABOUT USAMA PUWARD:
   - You are exclusively programmed to discuss Usama Puward: his engineering skills, machine learning & AI projects, professional background, work experiences, education, certifications, contact info, tech stack, and portfolio work.
2. STRICT REFUSAL FOR UNRELATED TOPICS:
   - If the user asks ANY question NOT about Usama Puward (such as general coding questions unrelated to his work, generic tutorials, general math/science questions, politics, weather, recipes, personal advice, or other individuals), YOU MUST POLITELY DECLINE and guide the user back to asking about Usama Puward.
   - Example Refusal: "I am specifically calibrated to provide information regarding Usama Puward, his AI/ML projects, engineering background, and technical expertise. How can I assist you with information about Usama?"
3. TONE & FORMATTING:
   - Be helpful, enthusiastic, professional, and crisp, with a subtle cyberpunk / AI vibe.
   - Format answers using clean Markdown (bullet points, bold highlights).
   - Never hallucinate unlisted details. If something isn't in the knowledge base, politely state that and suggest contacting Usama directly via email (usamafuward2001@gmail.com) or LinkedIn.`;

    const recentMessages = messages.slice(-10);

    const contents = recentMessages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" || m.role === "model" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemInstruction }],
        },
        contents,
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 1000,
          topP: 0.85,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Gemini API Error:", errorData);
      return NextResponse.json(
        { error: "AI model service error." },
        { status: response.status }
      );
    }

    const data = await response.json();
    const candidate = data.candidates?.[0];
    const replyText =
      candidate?.content?.parts?.[0]?.text ||
      "// SYS.WARN: Communication signal unavailable.";

    return NextResponse.json({ reply: replyText });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
