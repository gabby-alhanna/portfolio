import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Terminal,
  Server,
  Database,
  Cpu,
  Globe,
  Code,
  BookOpen,
  GraduationCap
} from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
      
      {/* Main Content Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24">
        
        {/* HERO SECTION */}
        <section className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-4">
            AVAILABLE FOR OPPORTUNITIES
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Gabby Al-Hanna
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 font-medium">
            Systems & High-Performance Backend Engineer <br className="hidden md:block"/> 
            <span className="text-cyan-400">| AI & Edge Systems</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Information Engineering graduate specializing in High-Performance Systems, Low-Level Backend Engineering, and AI Integration. Leveraging Rust and C++ to build scalable, memory-safe infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://github.com/gabby-alhanna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 transition-colors">
              <GithubIcon className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="mailto:gabbyalhanna984@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 transition-colors">
              <Mail size={18} />
              <span>Email Me</span>
            </a>
            <a href="https://linkedin.com/in/gabby-al-hanna-118151322" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 transition-colors">
              <LinkedinIcon className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 text-slate-400">
              <MapPin size={18} />
              <span>Damascus, Syria</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 text-slate-400">
              <Phone size={18} />
              <span>+963 930 885 702</span>
            </div>
          </div>
        </section>

        {/* ABOUT & SKILLS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal size={24} className="text-cyan-400" />
                Profile
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Highly adaptable engineer proficient in Rust and C++, leveraging memory safety guarantees, zero-cost abstractions, and asynchronous concurrency to build scalable infrastructure. Proven track record in orchestrating local LLM pipelines, Edge AI optimization, and high-throughput microservices. Currently advancing German language proficiency (B1 target).
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Code size={24} className="text-cyan-400" />
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillCategory 
                icon={<Server size={18} />}
                title="Systems & Core" 
                skills={['Rust (Async/Tokio)', 'C++', 'Python (FastAPI)', 'SQL', 'C#', 'JavaScript', 'PHP']} 
              />
              <SkillCategory 
                icon={<Database size={18} />}
                title="Infrastructure" 
                skills={['Async Architecture', 'Redis (Rate Limiting)', 'Docker', 'Linux', 'Git', 'RESTful APIs']} 
              />
              <SkillCategory 
                icon={<Cpu size={18} />}
                title="AI & Edge" 
                skills={['Ollama (Local LLM)', 'Model Quantization', 'PyTorch', 'Hugging Face', 'OpenCV', 'YOLOv11']} 
              />
              <SkillCategory 
                icon={<Globe size={18} />}
                title="Web & Robotics" 
                skills={['PostgreSQL (Neon)', 'Supabase', 'Next.js', 'ROS 2', 'Unity 3D']} 
              />
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <Server size={28} className="text-cyan-400" />
            Featured Engineering Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Local AI Billing Engine & Concurrency Gatekeeper"
              tech={['FastAPI', 'Redis', 'Ollama', 'Python']}
              description={[
                "Engineered a local natural-language billing microservice that parses unstructured user text orders into deterministic invoice outputs.",
                "Implemented a Redis-backed queue and concurrency lock to serialize high-overhead LLM inference requests, preventing race conditions and memory exhaustion.",
                "Architected an asynchronous communication pipeline connecting a local FastAPI backend with remote/hosted Ollama model runtimes."
              ]}
            />
            <ProjectCard 
              title="Full-Stack Restaurant Management & Admin System"
              tech={['FastAPI', 'Next.js', 'PostgreSQL', 'REST']}
              description={[
                "Built a high-performance full-stack web application featuring asynchronous backend API endpoints in FastAPI and a modern Next.js frontend.",
                "Designed normalized relational database schemas in PostgreSQL for multi-tenant menu management, CRUD order workflows, and administrative dashboards."
              ]}
            />
            <ProjectCard 
              title="AI Personal Fashion Assistant (Capstone)"
              tech={['YOLOv11', 'CLIP', 'Genetic Algorithms', 'PyTorch']}
              description={[
                "Developed an end-to-end multimodal recommendation engine that digitizes user wardrobes using YOLOv11 object detection and CLIP semantic embeddings.",
                "Implemented a custom Genetic Algorithm to generate context-aware outfit recommendations driven by live weather parameters and aesthetic constraints."
              ]}
            />
            <ProjectCard 
              title="Local Jarvis Automation Assistant"
              tech={['Python', 'OS APIs', 'Voice Interfacing']}
              description={[
                "Built a lightweight, console-based personal assistant for desktop environment automation and task delegation.",
                "Integrated system APIs for local app execution, automated email generation, and local text-to-speech interaction."
              ]}
            />
          </div>
        </section>

        {/* OTHER EXPERIENCE */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Code size={24} className="text-cyan-400" />
            Additional Technical Experience
          </h3>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <p><strong className="text-slate-200">Arabic NLP Pipeline (Hugging Face):</strong> Fine-tuned transformer architectures (BART, AR5, GAMMA) for automated text summarization and question generation.</p>
              </li>
              <li className="flex gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <p><strong className="text-slate-200">Scalable Bot Frameworks (aiogram):</strong> Developed asynchronous Telegram community automation bots integrated with cloud database persistence (Supabase/Neon).</p>
              </li>
              <li className="flex gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <p><strong className="text-slate-200">VR Air Pump Simulation Engine:</strong> Implemented interactive 3D physics engines and spatial user interfaces for engineering simulations using Unity & C#.</p>
              </li>
              <li className="flex gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <p><strong className="text-slate-200">Bike Sharing Data Analytics:</strong> Extracted usage patterns and demand forecasts from large-scale rental datasets using the Python Data Stack.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* EDUCATION & DEVELOPMENT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap size={24} className="text-cyan-400" />
              Education
            </h3>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 h-full">
              <h4 className="text-xl font-bold text-slate-200">Bachelor of Science in Information Engineering</h4>
              <p className="text-cyan-400 mb-4">Specialization: AI & Software Engineering</p>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2"><MapPin size={16}/> Damascus University, Syria</p>
                <p className="flex items-center gap-2"><BookOpen size={16}/> Graduated: Late 2025</p>
                <p className="flex items-center gap-2"><Terminal size={16}/> Grade: 76.5 / 100</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen size={24} className="text-cyan-400" />
              Continuous Development
            </h3>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 h-full space-y-4">
              <div>
                <strong className="text-slate-200 block mb-1">Low-Level & Systems Engineering</strong>
                <p className="text-slate-400 text-sm">Transitioned focus from high-level ML to system-level Rust/C++, mastering concurrency, memory safety without GC, and performance optimization.</p>
              </div>
              <div>
                <strong className="text-slate-200 block mb-1">Robotics & Edge AI</strong>
                <p className="text-slate-400 text-sm">Exploring hardware-software interfacing using ROS 2, optimizing AI models for low-power edge hardware deployment.</p>
              </div>
              <div>
                <strong className="text-slate-200 block mb-1">Languages</strong>
                <p className="text-slate-400 text-sm">English (Professional), Arabic (Native), German (B1 - In Progress).</p>
              </div>
            </div>
          </div>
        </section>
       <footer className="pt-12 pb-6 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Gabby Al-Hanna. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/gabby-alhanna" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/gabby-al-hanna-118151322" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="mailto:gabbyalhanna984@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Helper Component for Skills
function SkillCategory({ title, skills, icon }: { title: string, skills: string[], icon: React.ReactNode }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-colors">
      <div className="flex items-center gap-2 text-slate-200 font-semibold mb-4">
        <span className="text-cyan-400">{icon}</span>
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// Helper Component for Projects
function ProjectCard({ title, description, tech }: { title: string, description: string[], tech: string[] }) {
  return (
    <div className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-900/20 flex flex-col h-full">
      <h4 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors">{title}</h4>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span key={i} className="text-xs font-mono text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/50">
            {t}
          </span>
        ))}
      </div>
      
      <ul className="space-y-2 mt-auto text-slate-400 text-sm">
        {description.map((desc, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-cyan-500 mt-1 opacity-70">▹</span>
            <span className="leading-relaxed">{desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}