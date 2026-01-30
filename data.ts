import { ResearchVertical, Pillar, Principle } from './types';

export const VISION_STATEMENT = `Our vision is to build a future where every child learns to read, write, count, and thrive with confidence, and every citizen (young or adult) is equipped to participate meaningfully in an AI-driven world.`;

export const PILLARS: Pillar[] = [
  {
    title: "AI for Education",
    description: "Deploy responsible, inclusive, sovereign AI tools to transform how India learns, teaches, assesses, translates, and receives guidance across every language and every district.",
    points: [
      "LearnCopilot, AssessCopilot, TeachCopilot",
      "Powered by Bharat’s EduAI Stack",
      "Offline-first deployment"
    ]
  },
  {
    title: "Education for AI",
    description: "Prepare India’s learners, teachers, youth, professionals, and government workforce for the AI era through world-class curricula, skilling pathways, and foundational AI literacy.",
    points: [
      "AI curriculum for Classes 6–12",
      "Workforce skilling for AI economy",
      "National 'AI for All' programme"
    ]
  }
];

export const PRINCIPLES: Principle[] = [
  {
    id: "01",
    title: '"Thou shalt not pretrain"',
    description: "Language coverage is not optional — it is foundational. Any model that claims to serve India must represent the full linguistic diversity of the nation from the ground up. A model trained primarily on Hindi and English, with other languages as afterthoughts, will perpetuate existing inequities. We commit to balanced, representative pre-training corpora that give every language its rightful place."
  },
  {
    id: "02",
    title: '"Thou shalt not ship without testing on children\'s voices"',
    description: "Standard ASR and NLP models fail disproportionately for children. We mandate that every speech and language tool be rigorously evaluated on diverse child-speech datasets across ages and dialects before deployment."
  },
  {
    id: "03",
    title: '"Thou shalt not optimize for benchmarks alone"',
    description: "Real-world educational impact matters more than leaderboard scores. We prioritize metrics that reflect pedagogical efficacy, latency on low-end devices, and resilience to noise over pure academic accuracy."
  },
  {
    id: "04",
    title: '"Thou shalt not build without offline-first architecture"',
    description: "Connectivity in Bharat is intermittent. Our solutions are designed to function robustly in low-bandwidth or completely offline environments, ensuring access is never compromised by infrastructure gaps."
  },
  {
    id: "05",
    title: '"Thou shalt not deploy without guardrails for children"',
    description: "Safety is paramount. We implement strict, multi-layered guardrails to filter harmful content, prevent bias, and ensure age-appropriate interactions for every learner."
  },
  {
    id: "06",
    title: '"Thou shalt not hide behind proprietary walls"',
    description: "We believe in open science for public good. Wherever possible, we release our datasets, benchmarks, and research findings to the community to accelerate the collective progress of AI for Education."
  }
];

export const RESEARCH_VERTICALS: ResearchVertical[] = [
  {
    id: "asr",
    title: "Automatic Speech Recognition",
    shortTitle: "ASR",
    description: "Building robust speech recognition systems for Indian languages, dialects, children's voices, and noisy classroom environments.",
    iconName: "Mic",
    theme: 'orange',
    problemCount: 35,
    tags: ["Speech", "Multilingual", "Children"],
    problems: [
      {
        id: "4.1.1",
        title: "Robust ASR for Children",
        description: "Current ASR systems trained on adult speech perform poorly for children due to acoustic characteristics (pitch, formants) and pronunciation variability.",
        outcomes: [
          {
            id: "O1",
            title: "Benchmark for Multilingual Child Speech",
            description: "A comprehensive benchmark for child speech will be established to evaluate ASR and audio-LLM performance across Indian languages. The benchmark will include read-aloud, conversational, and spontaneous responses.",
            tags: ["Speech Processing", "Dataset Curation", "Evaluation Metrics"],
            priority: "CRITICAL"
          },
          {
            id: "O2",
            title: "Cross-Age and Cross-Language Generalization Study",
            description: "A structured study examining how well ASR systems generalize across age groups and languages. The analysis will evaluate whether speech samples from older children can improve recognition accuracy for early readers.",
            tags: ["Transfer Learning", "Multilingual NLP"],
            priority: "HIGH"
          },
          {
            id: "O3",
            title: "Large-Scale Child-Speech Corpus",
            description: "A large-scale child-speech corpus covering all 22 Indian languages with broad demographic diversity. Includes structured reading and free-form speech with verbatim transcripts.",
            tags: ["Data Collection", "ASR Training"],
            priority: "CRITICAL"
          }
        ]
      },
      {
        id: "4.1.2",
        title: "Expanding ASR to Indian Dialects",
        description: "Addressing regional pronunciation patterns, lexical variants, and prosodic differences that lead to significant disparities in recognition accuracy.",
        outcomes: [
          {
            id: "O9",
            title: "Benchmarking ASR Performance on Hindi Dialects",
            description: "Evaluating performance of existing ASR and audio-LLM models on five major Hindi dialects using regionally representative speech samples.",
            tags: ["Dialects", "Benchmarking", "Hindi"],
            priority: "HIGH"
          },
          {
            id: "O10",
            title: "Multilingual Dialect Benchmark",
            description: "Comprehensive benchmarking suite for 4–5 dialects each of the top five Indian languages.",
            tags: ["Multilingual", "Dialects", "Evaluation"],
            priority: "MEDIUM"
          },
          {
            id: "O11",
            title: "Large-Scale Dialectal Data Collection",
            description: "Targeting 250–500 hours of speech per dialect for at least 15 underrepresented Hindi dialects.",
            tags: ["Data Collection", "Low Resource"],
            priority: "HIGH"
          }
        ]
      },
      {
        id: "4.1.3",
        title: "ASR for Noisy Classrooms",
        description: "Developing robust ASR that works reliably in typical Indian classroom settings with background noise, multiple speakers, and varying acoustic conditions.",
        outcomes: [
           {
            id: "O4",
            title: "Classroom Noise Benchmark",
            description: "Benchmark capturing real classroom acoustic conditions.",
            tags: ["Acoustic Modeling", "Signal Processing", "Dataset Curation"],
            priority: "MEDIUM"
           },
           {
            id: "O5",
            title: "Real-time Speech Enhancement",
            description: "Lightweight enhancement models for budget Android devices.",
            tags: ["Speech Enhancement", "Model Compression", "Mobile Development"],
            priority: "HIGH"
           }
        ]
      }
    ]
  },
  {
    id: "tts",
    title: "Text-to-Speech Synthesis",
    shortTitle: "TTS",
    description: "Creating natural, expressive, and pedagogically effective speech synthesis for Indian languages and educational content.",
    iconName: "Volume2",
    theme: 'teal',
    problemCount: 28,
    tags: ["Speech", "Synthesis", "Pedagogy"],
    problems: [
      {
        id: "4.2.1",
        title: "Expressive Storytelling TTS",
        description: "Building models capable of multi-character voices and emotional inflection for engaging storytelling.",
        outcomes: [
          {
            id: "O12",
            title: "Emotion-Annotated Dataset",
            description: "High-quality dataset of professional storytellers reading children's stories, annotated for emotion.",
            tags: ["Dataset", "Emotion AI"],
            priority: "HIGH"
          },
          {
            id: "O13",
            title: "Controllable Prosody Model",
            description: "Architectures allowing fine-grained control over pitch, speed, and pauses.",
            tags: ["Model Architecture", "Prosody"],
            priority: "MEDIUM"
          }
        ]
      }
    ]
  },
  {
    id: "llm",
    title: "Large Language Models",
    shortTitle: "LLM",
    description: "Developing and adapting LLMs for Indian languages, educational contexts, and child-safe interactions.",
    iconName: "Brain",
    theme: 'purple',
    problemCount: 42,
    tags: ["NLP", "Generation", "Tutoring"],
    problems: [
      {
        id: "4.3.1",
        title: "Pedagogical Alignment",
        description: "Models that act like a Socratic tutor, guiding students rather than solving for them.",
        outcomes: [
          {
            id: "O20",
            title: "Socratic Dialogue Dataset",
            description: "Curating teacher-student interactions where the teacher guides the student through hints.",
            tags: ["Dataset", "Instruction Tuning"],
            priority: "CRITICAL"
          }
        ]
      }
    ]
  },
  {
    id: "ocr",
    title: "Optical Character Recognition",
    shortTitle: "OCR",
    description: "Recognizing handwritten and printed text across Indian scripts, including student worksheets.",
    iconName: "ScanText",
    theme: 'yellow',
    problemCount: 24,
    tags: ["Vision", "Documents", "Scripts"],
    problems: [
      {
        id: "4.4.1",
        title: "Handwritten Text Recognition",
        description: "Recognizing student handwriting in varying styles and conditions.",
        outcomes: [
          {
            id: "O30",
            title: "Student Handwriting Dataset",
            description: "Collection of real-world student answer sheets across grades and languages.",
            tags: ["Dataset", "Computer Vision"],
            priority: "HIGH"
          }
        ]
      }
    ]
  },
  {
    id: "mt",
    title: "Machine Translation",
    shortTitle: "MT",
    description: "Breaking language barriers in education through high-quality translation between Indian languages.",
    iconName: "Languages",
    theme: 'blue',
    problemCount: 30,
    tags: ["NLP", "Translation", "Content"],
    problems: [
      {
        id: "4.5.1",
        title: "Technical Terminology Translation",
        description: "Accurate translation of STEM concepts while maintaining scientific rigour.",
        outcomes: [
          {
            id: "O40",
            title: "STEM Glossary & Translation Memory",
            description: "Comprehensive glossary for Physics, Chemistry, and Math in 22 languages.",
            tags: ["Resources", "Scientific NLP"],
            priority: "MEDIUM"
          }
        ]
      }
    ]
  },
  {
    id: "safety",
    title: "Safety & Guardrails",
    shortTitle: "Safety",
    description: "Ensuring AI systems are safe for children, free from bias, and aligned with educational values.",
    iconName: "ShieldCheck",
    theme: 'red',
    problemCount: 22,
    tags: ["Safety", "Ethics", "Children"],
    problems: [
        {
        id: "4.6.1",
        title: "Child-Safe Content Filtering",
        description: "Mechanisms to prevent generation of inappropriate content.",
        outcomes: [
          {
            id: "O50",
            title: "Red-Teaming Benchmark for Education",
            description: "Adversarial prompts specifically designed to test the safety of educational bots.",
            tags: ["Safety", "Evaluation"],
            priority: "CRITICAL"
          }
        ]
      }
    ]
  },
   {
    id: "eval",
    title: "Evaluation & Assessment",
    shortTitle: "Eval",
    description: "Building robust evaluation frameworks for both AI systems and student learning outcomes.",
    iconName: "Target",
    theme: 'indigo',
    problemCount: 26,
    tags: ["Assessment", "Metrics", "Learning"],
    problems: []
  },
   {
    id: "multi",
    title: "Multimodal AI",
    shortTitle: "Multi",
    description: "Combining vision, speech, and language for richer educational interactions and accessibility.",
    iconName: "Brain",
    theme: 'green',
    problemCount: 20,
    tags: ["Vision", "Speech", "Integration"],
    problems: []
  }
];