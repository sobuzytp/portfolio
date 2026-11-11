// All visible text lives here, in Bangla (bn) and English (en).
const translations = {
  bn: {
    brand: "শহরুল",
    nav: { home: "হোম", about: "আমার সম্পর্কে", skills: "দক্ষতা", projects: "প্রজেক্ট", contact: "যোগাযোগ" },
    hero: {
      hello: "আসসালামু আলাইকুম, আমি",
      name: "শহরুল ইসলাম",
      roles: ["Web Developer", "React Learner", "Problem Solver"],
      intro:
        "আমি এমন ওয়েবসাইট বানাই যা দেখতে সুন্দর, সব ডিভাইসে ঠিকঠাক চলে এবং ব্যবহার করা সহজ। React দিয়ে প্রতিদিন নতুন কিছু শিখছি এবং বানাচ্ছি।",
      cv: "সিভি ডাউনলোড",
      projects: "প্রজেক্ট দেখুন",
      location: "খুলনা, বাংলাদেশ",
    },
    about: {
      title: "আমার সম্পর্কে",
      text:
        "আমি শহরুল ইসলাম, খুলনার একজন ওয়েব ডেভেলপমেন্ট শিক্ষার্থী। ছোট ছোট আইডিয়াকে কাজের ওয়েব অ্যাপে রূপ দিতে আমার ভালো লাগে। কোড লিখি পরিষ্কার ও সহজ রাখার চেষ্টা করে, যেন অন্যরাও সহজে বুঝতে পারে।",
      infoTitle: "প্রোফাইল তথ্য",
      info: [
        ["নাম", "শহরুল ইসলাম"],
        ["ইমেইল", "sobuzytp@gmail.com"],
        ["অবস্থান", "খুলনা, বাংলাদেশ"],
        ["পেশা", "Web Developer"],
        ["ভাষা", "বাংলা, English"],
      ],
      eduTitle: "শিক্ষাগত যোগ্যতা",
      education: [
        { place: "Web Development Course (React.js)", detail: "Batch 10 — চলমান" },
        { place: "আপনার কলেজ / বিশ্ববিদ্যালয়ের নাম", detail: "আপনার ডিগ্রি ও পাসের বছর (এখানে এডিট করুন)" },
      ],
      goalTitle: "ক্যারিয়ার লক্ষ্য",
      goal:
        "একজন দক্ষ Frontend/Full-stack ডেভেলপার হয়ে এমন প্রোডাক্ট বানানো যা মানুষের প্রতিদিনের কাজ সহজ করে, এবং একটি ভালো টিমের সাথে কাজ করে নিজের দক্ষতা বাড়ানো।",
    },
    skills: { title: "আমার দক্ষতা", subtitle: "যে টেকনোলজি দিয়ে আমি কাজ করি" },
    projects: {
      title: "আমার প্রজেক্ট",
      subtitle: "টেকনোলজি দিয়ে ফিল্টার করুন",
      all: "সব",
      demo: "লাইভ ডেমো",
      github: "GitHub",
      empty: "এই ফিল্টারে কোনো প্রজেক্ট নেই।",
      items: {
        taskly: { title: "Taskly — টাস্ক ম্যানেজার", description: "টাস্ক যোগ, সম্পন্ন ও মুছে ফেলার অ্যাপ। ডেটা ব্রাউজারে সেভ থাকে।" },
        weather: { title: "আবহাওয়া ড্যাশবোর্ড", description: "শহরের নাম লিখে বর্তমান আবহাওয়া ও ৫ দিনের পূর্বাভাস দেখুন।" },
        landing: { title: "রেস্টুরেন্ট ল্যান্ডিং পেজ", description: "মোবাইল-ফার্স্ট, দ্রুত লোড হয় এমন একটি রেস্টুরেন্ট ওয়েবসাইট।" },
        quiz: { title: "কুইজ গেম", description: "প্রশ্ন, টাইমার ও স্কোর বোর্ডসহ একটি ইন্টারঅ্যাকটিভ কুইজ অ্যাপ।" },
      },
    },
    contact: {
      title: "যোগাযোগ করুন",
      subtitle: "প্রজেক্ট বা কাজের সুযোগ নিয়ে কথা বলতে চাইলে লিখুন।",
      name: "আপনার নাম",
      email: "ইমেইল",
      subject: "বিষয়",
      message: "বার্তা",
      send: "বার্তা পাঠান",
      success: "ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে। শীঘ্রই উত্তর দেওয়া হবে।",
      errors: {
        name: "নাম লিখুন।",
        email: "ইমেইল লিখুন।",
        emailInvalid: "সঠিক ইমেইল লিখুন (যেমন name@example.com)।",
        subject: "বিষয় লিখুন।",
        message: "বার্তা লিখুন।",
      },
    },
    footer: { rights: "সর্বস্বত্ব সংরক্ষিত।", built: "React দিয়ে তৈরি" },
    aria: { theme: "থিম পরিবর্তন", lang: "ভাষা পরিবর্তন", menu: "মেনু", top: "উপরে যান" },
  },
  en: {
    brand: "Shaharul",
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      hello: "Hi, I'm",
      name: "Shaharul Islam",
      roles: ["Web Developer", "React Learner", "Problem Solver"],
      intro:
        "I build websites that look good, work on every device and are easy to use. I'm learning React every day and turning what I learn into real projects.",
      cv: "Download CV",
      projects: "View Projects",
      location: "Khulna, Bangladesh",
    },
    about: {
      title: "About Me",
      text:
        "I'm Shaharul Islam, a web development student from Khulna. I enjoy turning small ideas into working web apps. I try to keep my code clean and simple so anyone can read it.",
      infoTitle: "Profile Info",
      info: [
        ["Name", "Shaharul Islam"],
        ["Email", "sobuzytp@gmail.com"],
        ["Location", "Khulna, Bangladesh"],
        ["Profession", "Web Developer"],
        ["Languages", "Bangla, English"],
      ],
      eduTitle: "Education",
      education: [
        { place: "Web Development Course (React.js)", detail: "Batch 10 — ongoing" },
        { place: "Your college / university name", detail: "Your degree and passing year (edit here)" },
      ],
      goalTitle: "Career Goals",
      goal:
        "To grow into a skilled Frontend/Full-stack developer who builds products that make people's daily work easier, while learning from a great team.",
    },
    skills: { title: "My Skills", subtitle: "Technologies I work with" },
    projects: {
      title: "My Projects",
      subtitle: "Filter by technology",
      all: "All",
      demo: "Live Demo",
      github: "GitHub",
      empty: "No projects match this filter.",
      items: {
        taskly: { title: "Taskly — Task Manager", description: "Add, complete and delete tasks. Your data stays saved in the browser." },
        weather: { title: "Weather Dashboard", description: "Search any city to see current weather and a 5-day forecast." },
        landing: { title: "Restaurant Landing Page", description: "A mobile-first restaurant website that loads fast." },
        quiz: { title: "Quiz Game", description: "An interactive quiz app with questions, a timer and a score board." },
      },
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Want to talk about a project or an opportunity? Write to me.",
      name: "Your name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      success: "Thank you! Your message was sent successfully. I'll reply soon.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter your email.",
        emailInvalid: "Enter a valid email (e.g. name@example.com).",
        subject: "Please enter a subject.",
        message: "Please write a message.",
      },
    },
    footer: { rights: "All rights reserved.", built: "Built with React" },
    aria: { theme: "Toggle theme", lang: "Toggle language", menu: "Menu", top: "Back to top" },
  },
};

export default translations;
