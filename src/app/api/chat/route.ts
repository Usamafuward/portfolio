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
   - Focus: GCE Ordinary Level & GCE Advanced Level (Physical Science Stream).

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

function generateLocalFallback(userQuery: string): string {
  const q = userQuery.toLowerCase();

  if (q.includes("project") || q.includes("build") || q.includes("portfolio") || q.includes("code") || q.includes("tartuca") || q.includes("agent") || q.includes("rag")) {
    return `// SYS.RECALL: KEY_PROJECTS

Here are **Usama Puward's** primary engineering projects:

* **Tartuca - Restaurant & Delivery Platform**: Monorepo food ordering platform with Google Maps delivery tracking, admin dashboard, and high-performance async FastAPI backend with PostgreSQL & Auth0.
* **AI-Powered Multi-Agent Coding Assistant**: Autonomous multi-agent coding framework using AutoGen, OpenAI GPT, FastAPI, FastHTML, and LangChain.
* **RAG Pipeline for PDF Analysis**: Multi-modal conversational pipeline extracting text, tables, and images from PDFs with semantic question answering using LangChain, Google Gen AI, and FAISS.
* **NLP Podcast Chatbot**: Transcript Q&A engine with speaker attribution and timestamp citations built using Flask, TF-IDF, and NLTK.
* **Travel Point & Eats Robers**: Full-stack cross-platform apps using React Native, React, Node.js, Express, and MongoDB.

You can inspect the codebases directly in the **/projects** sector!`;
  }

  if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("career") || q.includes("company") || q.includes("kainovation")) {
    return `// SYS.RECALL: CAREER_JOURNEY

Usama's professional engineering timeline:

* **AI/SE Engineer** (June 2025 - Present) at **Kainovation Technologies**: Production AI model integration, full-stack software development, and real-world system optimization.
* **AI/ML Intern** (Nov 2024 - May 2025) at **Kainovation Technologies**: Machine learning research, data preprocessing pipelines, and exploratory data analysis.
* **Software Developer** (Nov 2024 - Jan 2025) at **Edus Lanka**: Engineered the Mediman doctor-patient clinic online portal (booking, patient history, real-time communication).
* **Full Stack Developer Intern** (Oct 2024 - Dec 2024) at **Unified Mentor India**: Web development, database management, and API design.
* **Artificial Intelligence Intern** (June 2023 - July 2024) at **NoviTech R&D**: Applied ML solutions for industry challenges.

View the full timeline and milestones in the **/experiences** sector!`;
  }

  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("tool") || q.includes("python") || q.includes("fastapi") || q.includes("react")) {
    return `// SYS.RECALL: SKILLS_MATRIX

Usama's core technical proficiencies:

* **AI & Machine Learning (85%)**: Deep Learning, LLMs, RAG, Multi-Agent Systems (AutoGen, LangChain), TensorFlow, Scikit-learn, Computer Vision, NLP.
* **Back-End Engineering (90%)**: FastAPI, Node.js, Express.js, Django, RESTful APIs, JWT Authentication, Microservices.
* **Front-End Development (85%)**: Next.js, React, React Native, TypeScript, Tailwind CSS, FastHTML.
* **Databases & DevOps (90%)**: PostgreSQL, MongoDB, MySQL, Docker, Linux, Git/GitHub.
* **Cloud Platforms (60%)**: Microsoft Azure Cognitive Services & Cloud ML.`;
  }

  if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("college") || q.includes("study") || q.includes("certificate") || q.includes("certification") || q.includes("meta") || q.includes("stanford")) {
    return `// SYS.RECALL: ACADEMIC_CREDENTIALS

* **Degree**: B.Sc. in Computer Science (2022 - 2025) from **University of Colombo School of Computing (UCSC)** with high honors in software systems and machine learning.
* **Top Verified Certifications**:
  * **Meta React Specialization** (Meta / Coursera)
  * **Machine Learning Specialization** (Stanford & DeepLearning.AI)
  * **Mastering Multi-Agent Development with AutoGen** (Packt)
  * **Developing Back-End Apps with Node.js & Express** (IBM)
  * **Artificial Intelligence on Microsoft Azure** & **Google Cloud LLMs Masterclass**

Browse all 24 verified certifications in the **/certifications** sector!`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("phone") || q.includes("reach") || q.includes("message") || q.includes("call")) {
    return `// SYS.RECALL: DIRECT_COMM_LINK

You can connect directly with Usama:

* **Email**: [usamafuward2001@gmail.com](mailto:usamafuward2001@gmail.com)
* **Phone**: +94 (76) 6260507 (Colombo, Sri Lanka)
* **LinkedIn**: [linkedin.com/in/usama-puward](https://linkedin.com/in/usama-puward)
* **GitHub**: [github.com/Usamafuward](https://github.com/Usamafuward)
* **Direct Transmission**: Use the form on the **/contact** page!`;
  }

  return `Greetings! I am **USAMA_AI**, the neural assistant calibrated with Usama Puward's portfolio database.

I can assist you with:
* **Key Projects**: Tartuca, Multi-Agent Coding Assistant, RAG PDF Chatbot.
* **Career Journey**: AI/SE roles at Kainovation Technologies and software engineering history.
* **Technical Skills**: Machine learning architectures, FastAPI backends, and Next.js interfaces.
* **Certifications & Education**: B.Sc. CS at UCSC and verified credentials from Meta, Stanford, and IBM.

What would you like to know about Usama?`;
}

function streamFallbackText(text: string): Response {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      // Stream words smoothly with micro-delays
      const words = text.split(" ");
      for (let i = 0; i < words.length; i++) {
        const chunk = (i === 0 ? "" : " ") + words[i];
        controller.enqueue(encoder.encode(chunk));
        await new Promise((resolve) => setTimeout(resolve, 15));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "A valid list of messages is required." },
        { status: 400 }
      );
    }

    const lastUserMessage =
      [...messages].reverse().find((m: { role: string }) => m.role === "user")?.content || "";

    const apiKey = process.env.GEMINI_AI_API_KEY;

    // Resilient fallback if no API key is set
    if (!apiKey) {
      const fallbackReply = generateLocalFallback(lastUserMessage);
      return streamFallbackText(fallbackReply);
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
   - If the user asks ANY question NOT about Usama Puward, YOU MUST POLITELY DECLINE and guide the user back to asking about Usama Puward.
3. TONE & FORMATTING:
   - Be helpful, enthusiastic, professional, and crisp, with a subtle cyberpunk / AI vibe.
   - Format answers using clean Markdown (bullet points, bold highlights).
   - Never hallucinate unlisted details. If something isn't in the knowledge base, politely state that and suggest contacting Usama directly via email (usamafuward2001@gmail.com) or LinkedIn.`;

    const recentMessages = messages.slice(-10);
    const contents = recentMessages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" || m.role === "model" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${apiKey}`;

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

    if (!response.ok || !response.body) {
      // Fallback to local synthesizer if API fails or quota exceeded
      const fallbackReply = generateLocalFallback(lastUserMessage);
      return streamFallbackText(fallbackReply);
    }

    // Stream SSE events from Gemini as plain text chunks to client
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const geminiReader = response.body.getReader();

    const stream = new ReadableStream({
      async start(controller) {
        let buffer = "";
        try {
          while (true) {
            const { value, done } = await geminiReader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (trimmed.startsWith("data: ")) {
                const jsonStr = trimmed.replace("data: ", "").trim();
                if (jsonStr === "[DONE]") continue;

                try {
                  const parsed = JSON.parse(jsonStr);
                  const textPart = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                  if (textPart) {
                    controller.enqueue(encoder.encode(textPart));
                  }
                } catch {
                  // Ignore JSON parse errors in malformed chunks
                }
              }
            }
          }
          controller.close();
        } catch {
          // If stream breaks mid-way, close gracefully
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error: unknown) {
    console.error("Chat API Error:", error);
    // Even in catch block, provide resilient response instead of 500 error
    return streamFallbackText(
      "// SYS.WARN: Neural connection re-routed through local memory banks.\n\nGreetings! I am **USAMA_AI**. Please feel free to ask any question regarding Usama Puward's projects, machine learning engineering, or contact info."
    );
  }
}
