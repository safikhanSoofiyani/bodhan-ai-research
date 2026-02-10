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
    title: '"The Principle of Avoiding Pretraining"',
    description: "We will not pursue large-scale pretraining from scratch. This is computationally expensive, environmentally costly, and increasingly unnecessary given the availability of strong sovereign and open foundation models. We will instead focus on intelligent mid-training and post-training to specialise models for educational, multilingual, and deployment-specific needs."
  },
  {
    id: "02",
    title: '"The Principle of Language Expansion"',
    description: "We will prioritise expanding AI capabilities across Indian languages, dialects, accents, and code-mixed usage. The primary barrier to equitable AI access in India is linguistic coverage, not model capability in high-resource languages. Our research will therefore focus on translation, speech, localisation, and fairness across linguistic communities."
  },
  {
    id: "03",
    title: '"The Principle of Reliable Evaluation"',
    description: "We will develop and rely on robust, transparent, and reproducible evaluation metrics and benchmarks. Educational impact cannot be measured using surface-level accuracy metrics alone. Our evaluations will reflect real-world conditions such as children’s speech, classroom noise, low-end devices, and multilingual usage."
  },
  {
    id: "04",
    title: '"The Principle of Real-World Grounding"',
    description: "We will select research problems that are directly motivated by real challenges faced by learners, teachers, administrators, or policymakers. Research disconnected from deployment realities rarely translates into meaningful impact. Grounding ensures that scientific progress leads to measurable improvements in educational outcomes."
  },
  {
    id: "05",
    title: '"The Principle of Inclusion by Design"',
    description: "We will design systems, datasets, and evaluations to be equitable across language, region, socio-economic context, and ability from the outset. Bias and exclusion often arise when inclusion is treated as a post-hoc concern. Designing for diversity early ensures fairness, robustness, and broader adoption."
  },
  {
    id: "06",
    title: '"The Principle of Deployment Constraints as First-Class Variables"',
    description: "We will account for real deployment constraints such as low-end devices, intermittent connectivity, latency, and energy efficiency. Educational systems in India operate under diverse and often constrained infrastructure conditions. Research that ignores these constraints cannot scale reliably or equitably."
  },
  {
    id: "07",
    title: '"The Principle of Impact Beyond Model Accuracy"',
    description: "We will measure research success beyond model accuracy alone. Educational impact must be defined in terms of learning gains, fairness, robustness, usability, and reductions in teacher or administrative effort. This is necessary because high accuracy does not automatically translate into better learning or meaningful classroom outcomes."
  },
  {
    id: "08",
    title: '"The Principle of Longevity Over Demos"',
    description: "We will build research outputs intended for long-term use rather than short-lived demonstrations. Educational systems must be maintainable, extensible, and operable at national scale over multiple years. This is essential because public education infrastructure values reliability and continuity over novelty."
  },
  {
    id: "09",
    title: '"The Principle of Child Safety, Dignity, and Trust"',
    description: "We will design all learner-facing systems with children as the primary users. Educational AI operates in high-trust, high-stakes environments where emotional safety, age-appropriate behaviour, privacy, and fairness are critical. Protecting child dignity and trust is essential for responsible deployment and long-term adoption in public education systems."
  },
  {
    id: "10",
    title: '"The Principle of Open and Transparent Development"',
    description: "We will build and release our models, datasets, benchmarks, and tools as open-source wherever possible. Openness enables reproducibility, independent scrutiny, and collective improvement across the research and education ecosystem. This is essential for public trust, long-term sustainability, and broad adoption by states, institutions, and partners."
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
    description: "Building robust, education grade speech recognition systems for Indian languages that accurately understand children’s voices, classroom speech, and STEM learning contexts across diverse accents and environments.",
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
    description: "Creating natural, expressive, empathetic, and pedagogically effective speech synthesis for Indian languages,  optimized for clarity, pronunciation, and prosody in educational and STEM content.",
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
    description: "Building education first multilingual Edu LLMs grounded in learning science, Socratic pedagogy, formative feedback, and conceptual reasoning to support deep understanding across Indian languages.",
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
    description: "Developing robust OCR systems that accurately recognize handwritten and printed educational content across Indian scripts, including student worksheets, textbooks, and complex STEM layouts and notation.",
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
    description: "Breaking language barriers in education through high quality, format preserving translation of STEM textbooks, learning materials, and digital content into Indian languages.",
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
    description: "Ensuring AI systems for education are safe for children, free from bias, aligned with Indian curricula, culturally grounded, age appropriate, and accountable to pedagogical and ethical standards.",
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
    title: "Multimodal Generation",
    shortTitle: "Multi",
    description: "Developing multimodal generation systems that create accurate, curriculum-aligned images, diagrams, animations, and videos for educational and STEM learning across Indian languages.",
    iconName: "Brain",
    theme: 'green',
    problemCount: 20,
    tags: ["Text", "Vision", "Speech"],
    problems: []
  }
];
