import { ResearchVertical, Pillar, Principle, GrandChallenge } from './types';

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

export const GRAND_CHALLENGES: GrandChallenge[] = [
  {
    id: "gc-asr",
    vertical: "ASR",
    title: "On-device ASR that understands every classroom",
    description: "A single speech recognizer that runs fully offline on low-end Android devices and remains accurate across children’s voices, accents, and noisy classrooms.",
    theme: "orange",
    iconName: "Mic"
  },
  {
    id: "gc-tts",
    vertical: "TTS",
    title: "Expressive, child-safe TTS on a phone",
    description: "Natural, emotionally appropriate speech synthesis that works offline, supports Indian languages, and stays safe for children in real learning contexts.",
    theme: "teal",
    iconName: "Volume2"
  },
  {
    id: "gc-ocr",
    vertical: "OCR",
    title: "Universal OCR for Indian scripts and handwriting",
    description: "Accurate recognition of messy student handwriting and multi-script documents, running on-device and resilient to low-light camera captures.",
    theme: "yellow",
    iconName: "ScanText"
  },
  {
    id: "gc-llm",
    vertical: "LLM",
    title: "Local-first tutoring LLM for every learner",
    description: "A compact, safe, multilingual tutor that runs on-device, aligns with pedagogy, and supports personalized instruction without cloud reliance.",
    theme: "purple",
    iconName: "Brain"
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
    tags: ["Speech"],
    problems: [
      {
        id: "4.1.1",
        title: "Robust ASR for Children",
        description: "Current ASR systems trained on adult speech perform poorly for children due to acoustic characteristics (pitch, formants) and pronunciation variability. The goal is to build an ASR system that reduces WER gap vs adult ASR and generalizes across ages 5–12, regions and device types. This would have the following research outcomes resulting in large scale children voice datasets, benchmarks for evaluation, state of the art models for children’s speech recognition, and automatic assessment of oral reading and fluency:",
        outcomes: [
          {
            id: "O1",
            title: "Benchmark for Multilingual Child Speech",
            description: "A comprehensive benchmark for child speech will be established to evaluate ASR and audio-LLM performance across Indian languages. The benchmark will include read-aloud, conversational, and spontaneous responses from children, allowing systematic measurement of accuracy gaps between adult-trained systems and child speech. It will also enable the study of techniques such as few-shot prompting for audio LLMs and synthetic child-speech augmentation to improve recognition accuracy. This benchmark will serve as the reference dataset for assessing child-speech robustness across all future models in the ecosystem.",
            tags: ["Benchmark", "Evaluation"],
            priority: "CRITICAL"
          },
          {
            id: "O2",
            title: "Cross-Age and Cross-Language Generalization Study",
            description: "A structured study will examine how well ASR systems generalize across age groups and languages. The analysis will evaluate whether speech samples from older children can improve recognition accuracy for early readers and whether models trained on a subset of languages can transfer effectively to others. The study will compare conventional ASR models with newer audio LLMs to quantify gains in transferability. Outcomes from this work will directly inform data-collection priorities and model-design strategies for coverage across all 22 languages.",
            tags: ["Transfer Learning", "Cross-Lingual"],
            priority: "HIGH"
          },
          {
            id: "O3",
            title: "A large scale multilingual child-speech corpus and Verbatim ASR model",
            description: "A large-scale child-speech corpus will be created, covering all 22 Indian languages with broad demographic, dialectal, and age diversity. The dataset will include both structured reading tasks and free-form speech, with verbatim transcripts that preserve disfluencies essential for downstream reading-fluency evaluation. Distinguishing between a stutter, a correction (reading 'the' then fixing to 'that'), and a sounding-out attempt (d-d-dog). Standard ASR often deletes these disfluencies to 'clean up' the transcript, but for ORF assessment, these are the most important data points. Models trained on this corpus will be benchmarked against the datasets from Outcomes 1 and 2 to demonstrate improvements in robustness, accuracy, and literal transcription quality. The resulting ASR system will serve as the core speech-recognition backbone for ORF assessment and multilingual learning applications.",
            tags: ["Data Collection"],
            priority: "CRITICAL"
          }
        ]
      },
      {
        id: "4.1.2",
        title: "Expanding ASR to Indian Dialects",
        description: "Current ASR systems trained on standardized language norms struggle with the rich dialectal and accent diversity found across India. Regional pronunciation patterns, lexical variants, and prosodic differences lead to significant disparities in recognition accuracy and can undermine fairness in educational applications. The goal is to build ASR and LLM-driven systems that perform equitably across dialects of Hindi and other major Indian languages, as well as across Indian-English accents spanning urban, rural, and region-specific varieties. This effort will produce dialect-balanced benchmarks, large-scale dialectal speech corpora, state-of-the-art dialect-aware ASR models, and evaluation frameworks that measure semantic robustness, task success, and explanation quality under dialect and accent variation. ",
        outcomes: [
          {
            id: "O9",
            title: "Benchmarking ASR Performance on Hindi Dialects",
            description: "A dedicated benchmark will be created to evaluate the performance of existing ASR and audio-LLM models on five major Hindi dialects. The benchmark will include regionally representative speech samples covering diverse acoustic and lexical variations. It will enable systematic comparison of current systems, highlighting dialect-specific error patterns and identifying gaps in accent coverage. Are frontier models already good at handling dialects (inherently or with few shot prompting)? This outcome will provide a reliable reference for assessing fairness, robustness, and inclusivity of speech technologies in the Hindi belt.",
            tags: ["Dialects", "Benchmark", "Evaluation"],
            priority: "HIGH"
          },
          {
            id: "O10",
            title: "Multilingual Dialect Benchmark",
            description: "A comprehensive benchmarking suite will be developed for 4–5 dialects each of the top five Indian languages. The benchmark will capture major regional variations within each language and provide a unified platform for evaluating standalone ASR systems and audio LLMs. Analyses will focus on how dialect variability affects recognition accuracy and on identifying dialects that are systematically underserved. Are frontier models already good at handling dialects (inherently or with few shot prompting)? The resulting dataset and evaluation protocols will support the design of more equitable and accent-robust ASR models.",
            tags: ["Multilingual", "Dialects", "Evaluation"],
            priority: "MEDIUM"
          },
          {
            id: "O11",
            title: "Large-Scale Dialectal Data Collection",
            description: "A large-scale data collection initiative will be undertaken for at least 15 underrepresented Hindi dialects, targeting 250–500 hours of speech per dialect. The resulting corpus will support the development of state-of-the-art dialect-aware ASR models and enable detailed studies on cross-dialect generalization. Experiments will also examine whether dialect-specific data improves recognition performance in the mainstream parent language and explore synthetic augmentation methods using few-sample voice models. This outcome will significantly expand ASR coverage to linguistically diverse communities.",
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
    description: "Creating natural, expressive, and pedagogically effective speech synthesis for Indian languages.",
    iconName: "Volume2",
    theme: 'teal',
    problemCount: 28,
    tags: ["Speech"],
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
    description: "Building better Edu-LLMs that support multilingual learning.",
    iconName: "Brain",
    theme: 'purple',
    problemCount: 42,
    tags: ["Text"],
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
    tags: ["Vision"],
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
    description: "Breaking language barriers through high-quality translation between Indian languages.",
    iconName: "Languages",
    theme: 'blue',
    problemCount: 30,
    tags: ["Text", "Speech"],
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
    tags: ["Ethics", "Text", "Speech", "Vision"],
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
    id: "multi",
    title: "Multimodal AI",
    shortTitle: "Multi",
    description: "Combining vision, speech, and language for richer educational interactions and accessibility.",
    iconName: "Brain",
    theme: 'green',
    problemCount: 20,
    tags: ["Text", "Vision", "Speech"],
    problems: []
  }
];
