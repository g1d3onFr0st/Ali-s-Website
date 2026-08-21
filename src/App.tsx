import { useEffect, useState } from "react";
import {
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Handshake,
  Lightbulb,
  Menu,
  Megaphone,
  ShieldCheck,
  TrendingUp,
  Users,
  Moon,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type Language = "ar" | "en";

const translations = {
  ar: {
    school: "ثانوية متميزين الخضراء للبنين",
    candidate: "مرشحكم لعضوية",
    parliament: "البرلمان المدرسي",

    nav: {
      home: "الرئيسية",
      about: "لماذا علي؟",
      achievements: "إنجازاتي",
      vision: "رؤيتي",
    },

    hero: {
      firstName: "علي",
      restName: "سامر صباح",
      slogan: "معاً نبني التغيير، ونصنع مستقبلاً أفضل",
      vote: "صوتك يصنع الفرق",
      subline: "اختيارك اليوم يصنع مستقبل مدرستنا غداً",
      discover: "تعرف على برنامجي",
    },

    why: {
      eyebrow: "لماذا علي؟",
      title: "أربع سنوات من العمل، التفوق، والثقة",
      description:
        "لا أعدكم بكلمات كبيرة. أريد أن أمثلكم كما يجب: أستمع إليكم، أنقل أفكاركم، وأعمل معكم من أجل مدرسة أفضل للجميع.",
    },

    achievements: [
      {
        title: "4 سنوات من التميز الدراسي",
        text: "درجات متميزة وتفوق دراسي مستمر طوال أربع سنوات.",
      },
      {
        title: "المشاركة في 5 فعاليات مدرسية",
        text: "من بينها المعرض السنوي للحاسوب والفعاليات المدرسية المختلفة.",
      },
      {
        title: "تواصل ممتاز مع الكادر التدريسي",
        text: "احترام متبادل، تعاون دائم، وعلاقة جيدة مع أساتذتنا.",
      },
      {
        title: "علاقة جيدة مع جميع الطلبة",
        text: "الاحترام والصداقة والتعاون مع الزملاء أساس العمل الحقيقي.",
      },
      {
        title: "الالتزام والمسؤولية",
        text: "الالتزام بالقيم المدرسية، الانضباط، وتحمل مسؤولية ما أتعهد به.",
      },
    ],

    vision: {
      eyebrow: "رؤيتي لخدمتكم",
      title: "برلمان يسمع الطالب قبل أن يتحدث باسمه",
      description:
        "هدفي ليس مجرد الفوز بالانتخابات، بل بناء قناة حقيقية بين الطلبة والمدرسة وتحويل الأفكار الجيدة إلى مبادرات قابلة للتنفيذ.",
    },

    visionItems: [
      {
        title: "إيصال صوت الطلبة",
        text: "نقل مقترحاتكم ومشكلاتكم بأمانة ومسؤولية.",
      },
      {
        title: "ابتكار مبادرات",
        text: "أفكار وأنشطة جديدة تخدم الطلبة وتنمي مهاراتهم.",
      },
      {
        title: "تعزيز التعاون",
        text: "تقوية التعاون بين الطلبة والإدارة والكادر التدريسي.",
      },
      {
        title: "العمل بروح الفريق",
        text: "لأن المدرسة الأفضل لا يبنيها شخص واحد، بل نبنيها جميعاً.",
      },
      {
        title: "الشفافية والثقة",
        text: "الصدق في العمل والوضوح فيما يمكن وما لا يمكن تحقيقه.",
      },
    ],

    quote: "أستمع لكم، أمثلكم، وأعمل معكم.",
    finalTitle: "صوتك أمانة",
    finalGold: "واختيارك يصنع الفرق",
    finalText:
      "معاً نستطيع أن نجعل البرلمان المدرسي مساحة حقيقية لأفكار الطلبة وطموحاتهم.",
    footer: "علي سامر صباح — مرشح البرلمان المدرسي",
    rights: "معاً نحو مدرسة أفضل",
    language: "English",
  },

  en: {
    school: "Al-Khadraa Distinguished Secondary School for Boys",
    candidate: "Your candidate for",
    parliament: "School Parliament",

    nav: {
      home: "Home",
      about: "Why Ali?",
      achievements: "Achievements",
      vision: "Vision",
    },

    hero: {
      firstName: "Ali",
      restName: "Samer Sabah",
      slogan: "Together, we build change and create a better future.",
      vote: "Your voice makes the difference",
      subline: "The choice you make today shapes our school's tomorrow.",
      discover: "Discover my program",
    },

    why: {
      eyebrow: "Why Ali?",
      title: "Four years of achievement, work, and trust",
      description:
        "I am not here to make grand promises. I want to represent you properly: to listen, carry your ideas forward, and work with you for a better school.",
    },

    achievements: [
      {
        title: "4 years of academic excellence",
        text: "Consistently distinguished grades and strong academic performance.",
      },
      {
        title: "5 school activities",
        text: "Including the annual computer exhibition and other school events.",
      },
      {
        title: "Strong communication with teachers",
        text: "Mutual respect, continuous cooperation, and positive relationships with our teachers.",
      },
      {
        title: "Good relationships with students",
        text: "Respect, friendship, and cooperation with students across our school.",
      },
      {
        title: "Discipline and responsibility",
        text: "Commitment to school values and responsibility for every promise I make.",
      },
    ],

    vision: {
      eyebrow: "My Vision",
      title: "A parliament that listens before it speaks for students",
      description:
        "My goal is not simply to win an election. It is to build a real channel between students and the school and turn worthwhile ideas into achievable initiatives.",
    },

    visionItems: [
      {
        title: "Represent your voice",
        text: "Carry your suggestions and concerns honestly and responsibly.",
      },
      {
        title: "Create initiatives",
        text: "Develop activities and ideas that serve students and their skills.",
      },
      {
        title: "Strengthen cooperation",
        text: "Build stronger cooperation between students, administration, and teachers.",
      },
      {
        title: "Work as a team",
        text: "A better school is not built by one person. We build it together.",
      },
      {
        title: "Transparency and trust",
        text: "Be clear about our work and honest about what can and cannot be achieved.",
      },
    ],

    quote: "I listen to you. I represent you. I work with you.",
    finalTitle: "Your vote is a responsibility.",
    finalGold: "Your choice makes the difference.",
    finalText:
      "Together, we can make our school parliament a genuine platform for students' ideas and ambitions.",
    footer: "Ali Samer Sabah — School Parliament Candidate",
    rights: "Together for a better school",
    language: "العربية",
  },
} as const;

const achievementIcons = [GraduationCap, CalendarDays, Handshake, Users, Award];

const visionIcons = [Megaphone, Lightbulb, Handshake, TrendingUp, ShieldCheck];

export default function CampaignPage() {
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("language") as Language) || "ar",
  );
  const [theme, setTheme] = useState<"dark" | "light">(
    (localStorage.getItem("theme") as "dark" | "light") || "light",
  );
  useEffect(() => {
    localStorage.setItem("language", language);
    localStorage.setItem("theme", theme);
  }, [language, theme]);

  const t = translations[language];
  const isArabic = language === "ar";

  const toggleLanguage = () => {
    setLanguage((current) => (current === "ar" ? "en" : "ar"));
  };

  const navItems = [
    ["#home", t.nav.home],
    ["#about", t.nav.about],
    ["#achievements", t.nav.achievements],
    ["#vision", t.nav.vision],
  ];

  // return (
  //   <main
  //     dir={isArabic ? "rtl" : "ltr"}
  //     lang={language}
  //     className={`
  //   min-h-screen overflow-hidden
  //   bg-[var(--campaign-background)]
  //   text-[var(--campaign-foreground)]
  //   selection:bg-[var(--campaign-gold)]
  //   selection:text-white
  //   transition-colors duration-300
  //   ${theme ? "dark" : ""}
  // `}
  //   >
  //     {/* HEADER */}
  //     <header className="fixed inset-x-0 top-0 z-50 border-b border-[#bd8737]/20 bg-[#f7f2e9]/90">
  //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
  //         <a
  //           href="#home"
  //           className="flex items-center gap-3"
  //         >
  //           <div className="flex size-11 items-center justify-center rounded-sm border border-[#bd8737] bg-[#071e32]">
  //             <BookOpen className="size-6 text-[#c69243]" />
  //           </div>

  //           <div className="hidden sm:block">
  //             <p className="text-sm font-bold leading-tight">{t.school}</p>
  //             <p className="mt-1 text-xs text-[#a8752e]">{t.parliament}</p>
  //           </div>
  //         </a>

  //         <nav className="hidden items-center gap-8 lg:flex">
  //           {navItems.map(([href, label]) => (
  //             <a
  //               key={href}
  //               href={href}
  //               className="text-sm font-semibold transition-colors hover:text-[#b27c2e]"
  //             >
  //               {label}
  //             </a>
  //           ))}
  //         </nav>

  //         <div className="flex items-center gap-2">
  //           <Button
  //             variant="outline"
  //             size="icon"
  //             onClick={() => setTheme((dark) => !dark)}
  //             aria-label={
  //               theme ? "Switch to light mode" : "Switch to dark mode"
  //             }
  //             className="border-[#b98437]/40 bg-transparent"
  //           >
  //             {theme ? (
  //               <Sun className="size-4" />
  //             ) : (
  //               <Moon className="size-4" />
  //             )}
  //           </Button>
  //           <Button
  //             variant="outline"
  //             onClick={toggleLanguage}
  //             className="border-[#b98437]/40 bg-transparent hover:bg-[#071e32] hover:text-white"
  //           >
  //             {t.language}
  //           </Button>

  //           <Sheet>
  //             <SheetTrigger
  //               render={
  //                 <Button
  //                   variant="ghost"
  //                   size="icon"
  //                   className="lg:hidden"
  //                   aria-label="Open menu"
  //                 />
  //               }
  //             >
  //               <Menu />
  //             </SheetTrigger>

  //             <SheetContent
  //               side={isArabic ? "right" : "left"}
  //               className="bg-[#f7f2e9]"
  //             >
  //               <div className="mt-12 flex flex-col gap-6 px-5">
  //                 {navItems.map(([href, label]) => (
  //                   <a
  //                     key={href}
  //                     href={href}
  //                     className="border-b border-[#b98437]/20 pb-4 text-xl font-bold"
  //                   >
  //                     {label}
  //                   </a>
  //                 ))}
  //               </div>
  //             </SheetContent>
  //           </Sheet>
  //         </div>
  //       </div>
  //     </header>

  //     {/* HERO */}
  //     <section
  //       id="home"
  //       className="relative flex min-h-screen items-center pt-20"
  //     >
  //       {/* background architecture */}
  //       <div
  //         className="absolute inset-0 bg-cover bg-center opacity-[0.055] grayscale"
  //         style={{
  //           backgroundImage: "url('/school.png')",
  //         }}
  //       />

  //       <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3eb]/30 via-[#f7f3eb]/70 to-[#f4efe6]" />

  //       {/* geometric campaign shapes */}
  //       <div className="absolute -left-44 top-0 h-full w-[36rem] -skew-x-12 bg-[#061d31]" />
  //       <div className="absolute -left-20 top-0 h-full w-3 -skew-x-12 bg-[#bd8737]" />

  //       <div className="absolute right-[-180px] top-[18%] size-[500px] rounded-full border-[80px] border-[#bd8737]/8" />

  //       <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
  //         {/* Candidate image */}
  //         <div className="relative order-2 flex justify-center lg:order-1">
  //           <div className="absolute bottom-10 size-[420px] rounded-full bg-[#bf8735]/80 max-md:size-[280px]" />

  //           <img
  //             src="/ali.png"
  //             alt="Ali Samer Sabah"
  //             className="relative scale-90 z-10 max-h-[760px] w-auto object-contain "
  //           />

  //           <div className="absolute bottom-5 z-20 bg-[#071e32] px-8 py-4 text-white shadow-xl">
  //             <p className="text-sm text-[#d5a354]">{t.hero.vote}</p>
  //             <p className="mt-1 font-semibold">{t.hero.subline}</p>
  //           </div>
  //         </div>

  //         {/* Hero copy */}
  //         <div className="relative order-1 z-10 lg:order-2">
  //           <Badge className="mb-6 rounded-none bg-[#071e32] px-5 py-2 text-sm text-[#d3a04e] hover:bg-[#071e32]">
  //             {t.candidate} {t.parliament}
  //           </Badge>

  //           <h1 className="leading-[0.9]">
  //             <span className="block text-[clamp(5rem,12vw,10rem)] font-black tracking-tight text-[#071e32]">
  //               {t.hero.firstName}
  //             </span>

  //             <span className="mt-3 block text-[clamp(3.2rem,7vw,6.5rem)] font-black text-[#b77e2d]">
  //               {t.hero.restName}
  //             </span>
  //           </h1>

  //           <div className="my-8 flex items-center gap-4">
  //             <div className="h-px flex-1 bg-[#b77e2d]" />
  //             <div className="size-2 rotate-45 bg-[#071e32]" />
  //             <div className="h-px flex-1 bg-[#b77e2d]" />
  //           </div>

  //           <blockquote className="relative max-w-2xl bg-[#071e32] px-7 py-5 text-xl font-semibold leading-relaxed text-white shadow-xl sm:text-2xl">
  //             <span className="text-[#d29b46]">“ </span>
  //             {t.hero.slogan}
  //             <span className="text-[#d29b46]"> ”</span>
  //           </blockquote>

  //           <Button
  //             size="lg"
  //             className="mt-8 rounded-none bg-[#b77e2d] px-8 text-white hover:bg-[#966522]"
  //           >
  //             <a href="#about">
  //               {t.hero.discover}
  //               <ChevronDown className="size-4" />
  //             </a>
  //           </Button>
  //         </div>
  //       </div>
  //     </section>

  //     {/* WHY ALI */}
  //     <section
  //       id="about"
  //       className="relative py-28"
  //     >
  //       <div className="mx-auto max-w-7xl px-5 lg:px-8">
  //         <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
  //           <div>
  //             <p className="mb-3 font-bold text-[#b47d2f]">{t.why.eyebrow}</p>

  //             <h2 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">
  //               {t.why.title}
  //             </h2>

  //             <div className="my-6 h-1 w-24 bg-[#b77e2d]" />

  //             <p className="max-w-xl text-lg leading-8 text-[#334354]">
  //               {t.why.description}
  //             </p>
  //           </div>

  //           <div
  //             id="achievements"
  //             className="grid gap-4 sm:grid-cols-2"
  //           >
  //             {t.achievements.map((achievement, index) => {
  //               const Icon = achievementIcons[index];

  //               return (
  //                 <Card
  //                   key={achievement.title}
  //                   className="group rounded-none border-[#c2934e]/25 bg-[#faf7f1] shadow-none transition-[transform,border-color,box-shadow]  duration-300 hover:-translate-y-1 hover:border-[#b77e2d] hover:shadow-xl"
  //                 >
  //                   <CardContent className="p-6">
  //                     <div className="mb-5 flex size-12 items-center justify-center bg-[#071e32] text-[#d4a252]">
  //                       <Icon className="size-6" />
  //                     </div>

  //                     <h3 className="mb-2 text-lg font-black">
  //                       {achievement.title}
  //                     </h3>

  //                     <p className="leading-7 text-[#53606c]">
  //                       {achievement.text}
  //                     </p>
  //                   </CardContent>
  //                 </Card>
  //               );
  //             })}
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     {/* QUOTE STRIP */}
  //     <section className="relative overflow-hidden bg-[#071e32] py-16 text-white">
  //       <div className="absolute -right-24 top-1/2 size-72 -translate-y-1/2 rotate-45 border-[30px] border-[#c18b3c]/10" />

  //       <div className="relative mx-auto max-w-5xl px-5 text-center">
  //         <span className="text-6xl font-black text-[#c18b3c]">“</span>
  //         <p className="text-3xl font-bold leading-relaxed sm:text-4xl">
  //           {t.quote}
  //         </p>
  //         <span className="text-6xl font-black text-[#c18b3c]">”</span>
  //       </div>
  //     </section>

  //     {/* VISION */}
  //     <section
  //       id="vision"
  //       className="relative py-28"
  //     >
  //       <div className="mx-auto max-w-7xl px-5 lg:px-8">
  //         <div className="mx-auto mb-16 max-w-3xl text-center">
  //           <p className="mb-3 font-bold text-[#b77e2d]">{t.vision.eyebrow}</p>

  //           <h2 className="text-4xl font-black leading-tight sm:text-5xl">
  //             {t.vision.title}
  //           </h2>

  //           <p className="mt-6 text-lg leading-8 text-[#52606c]">
  //             {t.vision.description}
  //           </p>
  //         </div>

  //         <div className="grid gap-px overflow-hidden border border-[#c0934e]/30 bg-[#c0934e]/30 md:grid-cols-2 lg:grid-cols-5">
  //           {t.visionItems.map((item, index) => {
  //             const Icon = visionIcons[index];

  //             return (
  //               <article
  //                 key={item.title}
  //                 className="bg-[#f7f3eb] p-7 transition-colors hover:bg-white"
  //               >
  //                 <Icon className="mb-7 size-10 text-[#b77e2d]" />

  //                 <h3 className="mb-3 text-lg font-black">{item.title}</h3>

  //                 <p className="text-sm leading-7 text-[#53606c]">
  //                   {item.text}
  //                 </p>
  //               </article>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </section>

  //     {/* FINAL CAMPAIGN SECTION */}
  //     <section className="relative overflow-hidden bg-[#eee5d7] py-28">
  //       <div className="absolute left-[-100px] top-[-100px] size-[400px] rounded-full bg-[#b77e2d]/10" />

  //       <div className="relative mx-auto max-w-5xl px-5 text-center">
  //         <CheckCircle2 className="mx-auto mb-7 size-12 text-[#b77e2d]" />

  //         <h2 className="text-5xl font-black sm:text-7xl">{t.finalTitle}</h2>

  //         <p className="mt-3 text-4xl font-black text-[#b77e2d] sm:text-6xl">
  //           {t.finalGold}
  //         </p>

  //         <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#4c5965]">
  //           {t.finalText}
  //         </p>

  //         <div className="mx-auto mt-12 max-w-xl bg-[#071e32] px-8 py-6 text-white shadow-2xl">
  //           <Megaphone className="mx-auto mb-3 text-[#d2a04f]" />
  //           <p className="text-2xl font-black">
  //             {t.hero.firstName} {t.hero.restName}
  //           </p>
  //           <p className="mt-1 text-[#d2a04f]">{t.parliament}</p>
  //         </div>
  //       </div>
  //     </section>

  //     {/* FOOTER */}
  //     <footer className="bg-[#051827] text-white">
  //       <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
  //         <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
  //           <div className="flex items-center gap-4">
  //             <div className="flex size-12 items-center justify-center border border-[#c18b3c]">
  //               <BookOpen className="text-[#d1a04f]" />
  //             </div>

  //             <div>
  //               <p className="font-bold">{t.footer}</p>
  //               <p className="mt-1 text-sm text-white/50">{t.school}</p>
  //             </div>
  //           </div>

  //           <Button
  //             variant="outline"
  //             onClick={toggleLanguage}
  //             className="border-[#c18b3c]/50 bg-transparent text-white hover:bg-[#c18b3c] hover:text-[#071e32]"
  //           >
  //             {t.language}
  //           </Button>
  //         </div>

  //         <Separator className="my-8 bg-white/10" />

  //         <div className="flex flex-col justify-between gap-3 text-sm text-white/45 sm:flex-row">
  //           <span>{t.rights}</span>
  //           <span>
  //             {t.hero.firstName} {t.hero.restName}
  //           </span>
  //         </div>
  //       </div>
  //     </footer>
  //   </main>
  // );
  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
      className={`
    min-h-screen overflow-hidden
    bg-[var(--campaign-background)]
    text-[var(--campaign-foreground)]
    selection:bg-[var(--campaign-gold)]
    selection:text-white
    transition-colors duration-300
    ${theme === "dark" ? "dark" : "light"}
  `}
    >
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--campaign-border-soft)] bg-[var(--campaign-header)]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="flex size-11 items-center justify-center rounded-sm border border-[var(--campaign-border)] bg-[var(--campaign-navy)]">
              <BookOpen className="size-6 text-[var(--campaign-gold)]" />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight">{t.school}</p>
              <p className="mt-1 text-xs text-[var(--campaign-gold)]">
                {t.parliament}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold transition-colors hover:text-[var(--campaign-gold)]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setTheme((theme) => (theme === "dark" ? "light" : "dark"))
              }
              aria-label={
                theme ? "Switch to light mode" : "Switch to dark mode"
              }
              className="border-[var(--campaign-border-medium)] bg-transparent"
            >
              {theme ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>

            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="border-[var(--campaign-border-medium)] bg-transparent hover:bg-[var(--campaign-navy)] hover:text-[var(--campaign-on-navy)]"
            >
              {t.language}
            </Button>

            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Open menu"
                  />
                }
              >
                <Menu />
              </SheetTrigger>

              <SheetContent
                side={isArabic ? "right" : "left"}
                className="bg-[var(--campaign-surface)]"
              >
                <div className="mt-12 flex flex-col gap-6 px-5">
                  {navItems.map(([href, label]) => (
                    <a
                      key={href}
                      href={href}
                      className="border-b border-[var(--campaign-border-soft)] pb-4 text-xl font-bold"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center pt-20"
      >
        {/* background architecture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.055] grayscale"
          style={{
            backgroundImage: "url('/school.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[var(--campaign-hero-gradient-start)] via-[var(--campaign-hero-gradient-middle)] to-[var(--campaign-hero-gradient-end)]" />

        {/* geometric campaign shapes */}
        <div className="absolute -left-44 top-0 h-full w-[36rem] -skew-x-12 bg-[var(--campaign-navy-decoration)]" />
        <div className="absolute -left-20 top-0 h-full w-3 -skew-x-12 bg-[var(--campaign-border)]" />

        <div className="absolute right-[-180px] top-[18%] size-[500px] rounded-full border-[80px] border-[var(--campaign-border)] opacity-[0.08]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          {/* Candidate image */}
          <div className="relative order-2 flex justify-center lg:order-1">
            <div className="absolute bottom-10 size-[420px] rounded-full bg-[var(--campaign-gold)] opacity-80 max-md:size-[280px]" />

            <img
              src="/ali.png"
              alt="Ali Samer Sabah"
              className="relative scale-90 z-10 max-h-[760px] w-auto object-contain "
            />

            <div className="absolute bottom-5 z-20 bg-[var(--campaign-navy)] px-8 py-4 text-[var(--campaign-on-navy)] shadow-xl">
              <p className="text-sm text-[var(--campaign-gold-light)]">
                {t.hero.vote}
              </p>
              <p className="mt-1 font-semibold">{t.hero.subline}</p>
            </div>
          </div>

          {/* Hero copy */}
          <div className="relative order-1 z-10 lg:order-2">
            <Badge className="mb-6 rounded-none bg-[var(--campaign-navy)] px-5 py-2 text-sm text-[var(--campaign-gold-light)] hover:bg-[var(--campaign-navy)]">
              {t.candidate} {t.parliament}
            </Badge>

            <h1 className="leading-[0.9]">
              <span className="block text-[clamp(5rem,12vw,10rem)] font-black tracking-tight text-[var(--campaign-foreground)]">
                {t.hero.firstName}
              </span>

              <span className="mt-3 block text-[clamp(3.2rem,7vw,6.5rem)] font-black text-[var(--campaign-gold)]">
                {t.hero.restName}
              </span>
            </h1>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[var(--campaign-gold)]" />
              <div className="size-2 rotate-45 bg-[var(--campaign-foreground)]" />
              <div className="h-px flex-1 bg-[var(--campaign-gold)]" />
            </div>

            <blockquote className="relative max-w-2xl bg-[var(--campaign-navy)] px-7 py-5 text-xl font-semibold leading-relaxed text-[var(--campaign-on-navy)] shadow-xl sm:text-2xl">
              <span className="text-[var(--campaign-gold-light)]">“ </span>
              {t.hero.slogan}
              <span className="text-[var(--campaign-gold-light)]"> ”</span>
            </blockquote>

            <Button
              size="lg"
              className="mt-8 rounded-none bg-[var(--campaign-gold)] px-8 text-[var(--campaign-on-gold)] hover:bg-[var(--campaign-gold-dark)]"
            >
              <a href="#about">
                {t.hero.discover}
                <ChevronDown className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY ALI */}
      <section
        id="about"
        className="relative py-28"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 font-bold text-[var(--campaign-gold)]">
                {t.why.eyebrow}
              </p>

              <h2 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">
                {t.why.title}
              </h2>

              <div className="my-6 h-1 w-24 bg-[var(--campaign-gold)]" />

              <p className="max-w-xl text-lg leading-8 text-[var(--campaign-foreground-soft)]">
                {t.why.description}
              </p>
            </div>

            <div
              id="achievements"
              className="grid gap-4 sm:grid-cols-2"
            >
              {t.achievements.map((achievement, index) => {
                const Icon = achievementIcons[index];

                return (
                  <Card
                    key={achievement.title}
                    className="group rounded-none border-[var(--campaign-border-soft)] bg-[var(--campaign-surface-alt)] shadow-none transition-[transform,border-color,box-shadow]  duration-300 hover:-translate-y-1 hover:border-[var(--campaign-gold)] hover:shadow-xl"
                  >
                    <CardContent className="p-6">
                      <div className="mb-5 flex size-12 items-center justify-center bg-[var(--campaign-navy)] text-[var(--campaign-gold-light)]">
                        <Icon className="size-6" />
                      </div>

                      <h3 className="mb-2 text-lg font-black">
                        {achievement.title}
                      </h3>

                      <p className="leading-7 text-[var(--campaign-muted)]">
                        {achievement.text}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="relative overflow-hidden bg-[var(--campaign-navy)] py-16 text-[var(--campaign-on-navy)]">
        <div className="absolute -right-24 top-1/2 size-72 -translate-y-1/2 rotate-45 border-[30px] border-[var(--campaign-gold)] opacity-10" />

        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <span className="text-6xl font-black text-[var(--campaign-gold)]">
            “
          </span>
          <p className="text-3xl font-bold leading-relaxed sm:text-4xl">
            {t.quote}
          </p>
          <span className="text-6xl font-black text-[var(--campaign-gold)]">
            ”
          </span>
        </div>
      </section>

      {/* VISION */}
      <section
        id="vision"
        className="relative py-28"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 font-bold text-[var(--campaign-gold)]">
              {t.vision.eyebrow}
            </p>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              {t.vision.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--campaign-muted)]">
              {t.vision.description}
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-[var(--campaign-grid-border)] bg-[var(--campaign-grid-border)] md:grid-cols-2 lg:grid-cols-5">
            {t.visionItems.map((item, index) => {
              const Icon = visionIcons[index];

              return (
                <article
                  key={item.title}
                  className="bg-[var(--campaign-surface)] p-7 transition-colors hover:bg-[var(--campaign-hover-surface)]"
                >
                  <Icon className="mb-7 size-10 text-[var(--campaign-gold)]" />

                  <h3 className="mb-3 text-lg font-black">{item.title}</h3>

                  <p className="text-sm leading-7 text-[var(--campaign-muted)]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CAMPAIGN SECTION */}
      <section className="relative overflow-hidden bg-[var(--campaign-surface-strong)] py-28">
        <div className="absolute left-[-100px] top-[-100px] size-[400px] rounded-full bg-[var(--campaign-gold)] opacity-10" />

        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <CheckCircle2 className="mx-auto mb-7 size-12 text-[var(--campaign-gold)]" />

          <h2 className="text-5xl font-black sm:text-7xl">{t.finalTitle}</h2>

          <p className="mt-3 text-4xl font-black text-[var(--campaign-gold)] sm:text-6xl">
            {t.finalGold}
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--campaign-muted)]">
            {t.finalText}
          </p>

          <div className="mx-auto mt-12 max-w-xl bg-[var(--campaign-navy)] px-8 py-6 text-[var(--campaign-on-navy)] shadow-2xl">
            <Megaphone className="mx-auto mb-3 text-[var(--campaign-gold-light)]" />
            <p className="text-2xl font-black">
              {t.hero.firstName} {t.hero.restName}
            </p>
            <p className="mt-1 text-[var(--campaign-gold-light)]">
              {t.parliament}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--campaign-navy-deep)] text-[var(--campaign-on-navy)]">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center border border-[var(--campaign-gold)]">
                <BookOpen className="text-[var(--campaign-gold-light)]" />
              </div>

              <div>
                <p className="font-bold">{t.footer}</p>
                <p className="mt-1 text-sm text-white/50">{t.school}</p>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="border-[var(--campaign-gold)] bg-transparent text-[var(--campaign-on-navy)] hover:bg-[var(--campaign-gold)] hover:text-[var(--campaign-navy)]"
            >
              {t.language}
            </Button>
          </div>

          <Separator className="my-8 bg-white/10" />

          <div className="flex flex-col justify-between gap-3 text-sm text-white/45 sm:flex-row">
            <span>{t.rights}</span>
            <span>
              {t.hero.firstName} {t.hero.restName}
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
