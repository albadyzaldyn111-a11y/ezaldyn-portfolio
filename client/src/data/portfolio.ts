export interface Stat {
  number: string;
  label: string;
  labelEn: string;
}

export interface Skill {
  name: string;
  nameEn: string;
  percentage: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  titleEn: string;
  icon: string;
  skills: Skill[];
  techTags: string[];
}

export interface Service {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: 'ai' | 'web' | 'db';
  tech: string[];
  github: string;
  demo: string;
  icon: string;
}

export interface TimelineItem {
  period: string;
  periodEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export interface Testimonial {
  text: string;
  textEn: string;
  author: string;
  authorEn: string;
  role: string;
  roleEn: string;
}

export const stats: Stat[] = [
  { number: '3+', label: 'سنوات خبرة', labelEn: 'Years Experience' },
  { number: '20+', label: 'مشروع احترافي', labelEn: 'Professional Projects' },
  { number: '15+', label: 'عميل سعيد', labelEn: 'Happy Clients' }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'تطوير الواجهات الخلفية والذكاء الاصطناعي',
    titleEn: 'Backend & AI Engineering',
    icon: 'brain',
    skills: [
      { name: 'Python / Django', nameEn: 'Python / Django', percentage: 90, icon: 'python' },
      { name: 'Node.js / Express', nameEn: 'Node.js / Express', percentage: 85, icon: 'node' },
      { name: 'FastAPI / RESTful APIs', nameEn: 'FastAPI / RESTful APIs', percentage: 88, icon: 'api' }
    ],
    techTags: ['TensorFlow', 'FastAPI', 'RESTful APIs', 'PyTorch']
  },
  {
    title: 'تطوير الواجهات الأمامية',
    titleEn: 'Frontend Development',
    icon: 'layout',
    skills: [
      { name: 'React / Next.js', nameEn: 'React / Next.js', percentage: 88, icon: 'react' },
      { name: 'Vue.js / Nuxt', nameEn: 'Vue.js / Nuxt', percentage: 80, icon: 'vue' },
      { name: 'TypeScript / Tailwind CSS', nameEn: 'TypeScript / Tailwind CSS', percentage: 92, icon: 'tailwind' }
    ],
    techTags: ['TypeScript', 'Tailwind CSS', 'Redux / Zustand', 'Framer Motion']
  },
  {
    title: 'قواعد البيانات والعمليات الرقمية',
    titleEn: 'Databases & DevOps',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL / MySQL', nameEn: 'PostgreSQL / MySQL', percentage: 85, icon: 'sql' },
      { name: 'MongoDB / Redis', nameEn: 'MongoDB / Redis', percentage: 80, icon: 'nosql' }
    ],
    techTags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Git / GitHub']
  }
];

export const services: Service[] = [
  {
    title: 'تطوير ويب متكامل (Full Stack)',
    titleEn: 'Full-Stack Web Development',
    description: 'أحوّل فكرتك إلى موقع أو تطبيق ويب سريع ومتجاوب، مع بنية قابلة للصيانة وتجربة استخدام واضحة.',
    descriptionEn: 'Building super-fast, responsive, and interactive web applications utilizing modern technical stacks.',
    icon: 'globe'
  },
  {
    title: 'حلول الذكاء الاصطناعي (AI Solutions)',
    titleEn: 'AI & Machine Learning Solutions',
    description: 'أضيف الأتمتة والتحليل الذكي إلى منتجك لتقليل العمل اليدوي وتحويل البيانات إلى قرارات قابلة للتنفيذ.',
    descriptionEn: 'Developing intelligent predictive algorithms, automated workflows, and data classification modules.',
    icon: 'brain'
  },
  {
    title: 'تصميم وإدارة قواعد البيانات',
    titleEn: 'Database Design & Management',
    description: 'أصمم بنية بيانات منظمة وآمنة تساعد تطبيقك على الاستجابة بسرعة والنمو دون فوضى تقنية.',
    descriptionEn: 'Structuring high-concurrency relational and NoSQL databases with safety, backups, and performance tuning.',
    icon: 'database'
  },
  {
    title: 'تطوير وربط واجهات الـ APIs',
    titleEn: 'API Development & Systems Integration',
    description: 'أربط أنظمتك وتطبيقاتك عبر APIs موثقة وآمنة، لتعمل الخدمات معًا بسلاسة وتقل أخطاء التكامل.',
    descriptionEn: 'Creating highly secured lightweight APIs to streamline multi-platform data integrations seamlessly.',
    icon: 'code'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'تطبيق Azooz TV',
    titleEn: 'Azooz TV App',
    description: 'تطبيق ترفيهي مخصص لعرض محتوى Azooz TV ضمن تجربة رقمية منظمة وسهلة الاستخدام.',
    descriptionEn: 'A focused entertainment application for presenting Azooz TV content in an organized and easy-to-use digital experience.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/albadyzaldyn111-a11y/azooz-tv',
    demo: 'https://ezaldyn.netlify.app/',
    icon: 'robot'
  },
  {
    id: '2',
    title: 'مخزن تطبيقات Azooz Store',
    titleEn: 'Azooz Store Apps Storage',
    description: 'مستودع وخدمة لتخزين بيانات التطبيقات والملفات المرتبطة بمنظومة Azooz Store مع تنظيم قابل للتوسع.',
    descriptionEn: 'A structured storage service for application data and files in the Azooz Store ecosystem, designed to scale cleanly.',
    category: 'web',
    tech: ['Node.js', 'React', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/albadyzaldyn111-a11y/apps-storage',
    demo: 'https://ezaldyn.netlify.app/',
    icon: 'store'
  },
  {
    id: '3',
    title: 'تطبيق NetSpectra',
    titleEn: 'NetSpectra App',
    description: 'تطبيق NetSpectra لاستكشاف ومتابعة بيانات الشبكات عبر واجهة عملية تركز على الوضوح وسهولة الاستخدام.',
    descriptionEn: 'NetSpectra is an application for exploring and monitoring network data through a practical, clear interface.',
    category: 'db',
    tech: ['Vue.js', 'Express', 'Socket.io', 'D3.js', 'Redis'],
    github: 'https://github.com/albadyzaldyn111-a11y/netspectra-app',
    demo: 'https://ezaldyn.netlify.app/',
    icon: 'chart'
  },
  {
    id: '4',
    title: 'باني تطبيقات أندرويد تلقائي',
    titleEn: 'Automatic Android App Builder',
    description: 'نموذج تجريبي لأتمتة بناء حزم Android وتقليل الخطوات اليدوية في دورة تطوير التطبيقات.',
    descriptionEn: 'A practical prototype for automating Android package builds and reducing manual steps in the application workflow.',
    category: 'ai',
    tech: ['Django', 'Python', 'Scikit-Learn', 'Pandas', 'Redis'],
    github: 'https://github.com/albadyzaldyn111-a11y/auto-apk-builder-demo',
    demo: 'https://ezaldyn.netlify.app/',
    icon: 'brain-circuit'
  },
  {
    id: '5',
    title: 'نظام البناء التلقائي لأندرويد',
    titleEn: 'Android Auto Build',
    description: 'أتمتة عملية بناء تطبيقات Android وتجهيز مخرجاتها بطريقة قابلة للتكرار ضمن سير عمل واضح.',
    descriptionEn: 'An automation workflow for building Android applications and preparing repeatable outputs through a clear pipeline.',
    category: 'web',
    tech: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/albadyzaldyn111-a11y/android-auto-build',
    demo: 'https://ezaldyn.netlify.app/',
    icon: 'tasks'
  }
];

export const timeline: TimelineItem[] = [
  {
    period: '2024 - الآن',
    periodEn: '2024 - Present',
    title: 'مطور Full Stack مستقل ومستشار حلول ذكية',
    titleEn: 'Freelance Full-Stack Developer & Solutions Architect',
    description: 'أعمل مع شركات ناشئة ومؤسسات تقنية لتطوير تطبيقات ويب مخصصة وتصميم بنى تحتية قواعد بيانات متطورة تخدم آلاف المستخدمين اليوميين.',
    descriptionEn: 'Developing production systems for international clients, shipping scalable code, and configuring cloud environments.'
  },
  {
    period: '2023 - 2024',
    periodEn: '2023 - 2024',
    title: 'مطور برمجيات ومهندس واجهات برمجية',
    titleEn: 'Software Engineer & API Designer',
    description: 'كنت مسؤولاً عن تصميم وتطوير واجهات برمجة التطبيقات (APIs) بالغة الكفاءة لربط الأنظمة الرقمية وتيسير عمليات الدفع وتخزين البيانات بأمان.',
    descriptionEn: 'Architected and documented highly available backend APIs with security compliance and microservice configurations.'
  },
  {
    period: '2022 - 2023',
    periodEn: '2022 - 2023',
    title: 'متدرب وباحث تقني في أكاديمية البرمجة',
    titleEn: 'Junior Tech Researcher at Pythonic Academy',
    description: 'إنجاز تدريب برمجيات متقدم مكثف واكتساب شهادات معتمدة في حل المشكلات، خوارزميات الذكاء الاصطناعي وبناء المواقع الإلكترونية المتكاملة.',
    descriptionEn: 'Undertook rigorous training, earning verified computer science certificates, machine learning workflows, and practical algorithm designs.'
  }
];

export const testimonials: Testimonial[] = [
  {
    text: 'عمل احترافي غير مسبوق، دقة متناهية وسرعة مدهشة في التنفيذ. يمتلك عزالدين رؤية برمجية عبقرية ومهارات تواصل ممتازة.',
    textEn: 'Unprecedented craftsmanship and stellar implementation pace. Azzedine genuinely understands modern UI styling and deep data optimizations perfectly.',
    author: 'المهندس أحمد اليافعي',
    authorEn: 'Eng. Ahmed Al-Yafei',
    role: 'مدير تقنية المعلومات في شركة رؤيا المتحدة',
    roleEn: 'CTO at Roya United Co.'
  },
  {
    text: 'لقد حول فكرتنا المعقدة لمتجرنا إلى نظام سلس فاق توقعاتنا وجعل عمليتنا اليومية مؤتمتة وسريعة بشكل مذهل. بورتفوليو يتحدث عن نفسه!',
    textEn: 'He transformed our intricate concept into a fluid, highly optimized store that has doubled our operational speed. Outstanding job!',
    author: 'أ. سارة الحربي',
    authorEn: 'Mrs. Sara Al-Harbi',
    role: 'المؤسس التنفيذي لمنصة تزداد الرقمية',
    roleEn: 'CEO & Founder at Tazdad Digital'
  },
  {
    text: 'مهندس ذكي يتمتع بخبرة مميزة في دمج الذكاء الاصطناعي في تطبيقات الويب بشكل ناضج ويراعي ميزانيات وسرعات التحميل بمثالية.',
    textEn: 'A sharp professional with mature techniques for embedding AI libraries into user apps smoothly while maintaining brilliant performance.',
    author: 'الدكتور فيصل القدسي',
    authorEn: 'Dr. Faisal Al-Qudsi',
    role: 'أستاذ هندسة البرمجيات ورئيس حاضنة الابتكار',
    roleEn: 'Prof. of Software Engineering & Tech Incubator Lead'
  }
];
