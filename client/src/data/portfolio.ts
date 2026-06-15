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
    description: 'بناء مواقع وتطبيقات ويب تفاعلية فائقة السرعة والأداء باستخدام أحدث الأطر البرمجية المتكاملة.',
    descriptionEn: 'Building super-fast, responsive, and interactive web applications utilizing modern technical stacks.',
    icon: 'globe'
  },
  {
    title: 'حلول الذكاء الاصطناعي (AI Solutions)',
    titleEn: 'AI & Machine Learning Solutions',
    description: 'تطوير نماذج ذكية، أنظمة تعلم آلي، تحليل البيانات، والتنبؤ لمساعدة الشركات على اتخاذ قرارات مدروسة.',
    descriptionEn: 'Developing intelligent predictive algorithms, automated workflows, and data classification modules.',
    icon: 'brain'
  },
  {
    title: 'تصميم وإدارة قواعد البيانات',
    titleEn: 'Database Design & Management',
    description: 'هندسة قواعد بيانات سحابية متقدمة وآمنة تضمن سرعة استرجاع البيانات وتحمل الضغط العالي ومعدلات التوسع.',
    descriptionEn: 'Structuring high-concurrency relational and NoSQL databases with safety, backups, and performance tuning.',
    icon: 'database'
  },
  {
    title: 'تطوير وربط واجهات الـ APIs',
    titleEn: 'API Development & Systems Integration',
    description: 'بناء واجهات برمجية RESTful و GraphQL آمنة وخفيفة لربط مختلف المنصات والأنظمة بسلاسة.',
    descriptionEn: 'Creating highly secured lightweight APIs to streamline multi-platform data integrations seamlessly.',
    icon: 'code'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'نظام تحليل ذكي للمبيعات',
    titleEn: 'Intelligent Sales Analytical Platform',
    description: 'منصة ذكية متكاملة تعتمد على خوارزميات التعلم الآلي لتحليل أداء المبيعات وسلوك العملاء وتوقع الاتجاهات المستقبلية بدقة عالية.',
    descriptionEn: 'An enterprise-grade platform leveraging machine learning models to analyze sales data, predict behavior, and forecast inventory trends.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: 'robot'
  },
  {
    id: '2',
    title: 'منصة تجارة إلكترونية متطورة',
    titleEn: 'Advanced E-Commerce Ecosystem',
    description: 'متجر إلكتروني حديث متكامل يدعم الدفع الإلكتروني، إدارة المخزون اللحظية، لوحة تحكم ذكية للبائعين، ونظام تتبع الطلبات مع التوصيل.',
    descriptionEn: 'A high-performance online storefront with integrated payment gateway, inventory management, and intuitive merchant dashboard.',
    category: 'web',
    tech: ['Node.js', 'React', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: 'store'
  },
  {
    id: '3',
    title: 'لوحة تحكم تفاعلية للبيانات الفورية',
    titleEn: 'Interactive Real-time Data Dashboard',
    description: 'لوحة تحكم ذكية تعرض تحليلات إحصائية وبيانات حية فورية باستخدام تقنيات تدفق البيانات والرسومات التفاعلية المتقدمة لبث مباشر.',
    descriptionEn: 'A dynamic visual analytic room rendering live metrics streaming from transactional feeds via WebSockets and beautiful charts.',
    category: 'db',
    tech: ['Vue.js', 'Express', 'Socket.io', 'D3.js', 'Redis'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: 'chart'
  },
  {
    id: '4',
    title: 'محرك توصية مدعوم بالذكاء الاصطناعي',
    titleEn: 'AI-Powered Recommendation Engine',
    description: 'خدمة سحابية مستقلة تقوم بتحليل تفضيلات المستخدمين لتقديم مقترحات مخصصة لمنتجات، ومحتويات في الوقت الفعلي.',
    descriptionEn: 'A smart microservice processing massive user interaction streams to output item suggestions dynamically with collaborative filtering.',
    category: 'ai',
    tech: ['Django', 'Python', 'Scikit-Learn', 'Pandas', 'Redis'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: 'brain-circuit'
  },
  {
    id: '5',
    title: 'منصة إدارة وتتبع المهمّات الذكية',
    titleEn: 'Collaborative Project Tracker',
    description: 'نظام إدارة للمشاريع يتيح للفرق التواصل ومتابعة إنتاجيتهم مع جدولة ذكية للمهام وإرسال تنبيهات تلقائية.',
    descriptionEn: 'An optimized sprint tracker facilitating distributed team collaboration, interactive burndown timelines, and auto-dispatch notifications.',
    category: 'web',
    tech: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://demo.com',
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
