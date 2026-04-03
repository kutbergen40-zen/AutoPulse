import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Menu,
  X,
  Car,
  Gauge,
  ShieldCheck,
  Sparkles,
  SlidersHorizontal,
  BadgeCheck,
  ChevronDown,
  Check,
  Star,
  Code2,
  Send,
  BriefcaseBusiness,
  Camera,
  Search,
  CalendarClock,
  FileText,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { label: "Преимущества", href: "#features" },
  { label: "Цифры", href: "#stats" },
  { label: "Как это работает", href: "#how" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Цены", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const features = [
  {
    icon: Search,
    title: "Умный поиск авто",
    text: "Находите модели по бренду, типу кузова, мощности, расходу и другим параметрам.",
  },
  {
    icon: FileText,
    title: "Глубокие карточки",
    text: "Полные характеристики, реальные плюсы и минусы, комплектации и тех. сравнения.",
  },
  {
    icon: Gauge,
    title: "Динамика и тесты",
    text: "Разгон, торможение, управляемость и практичность в понятном визуальном формате.",
  },
  {
    icon: ShieldCheck,
    title: "Надежность и безопасность",
    text: "Рейтинги надежности, частые поломки, сервисные интервалы и оценки безопасности.",
  },
  {
    icon: SlidersHorizontal,
    title: "Сравнение в 1 клик",
    text: "Сравнивайте до 4 авто одновременно и выбирайте лучший вариант под ваш бюджет.",
  },
  {
    icon: Sparkles,
    title: "Подбор по стилю жизни",
    text: "ИИ-подсказки для города, семьи, дальних поездок и активного драйва.",
  },
];

const stats = [
  { value: 120, suffix: "K+", label: "Проверенных автомобилей" },
  { value: 98, suffix: "%", label: "Точность характеристик" },
  { value: 2.4, suffix: "M", label: "Сравнений в месяц" },
  { value: 24, suffix: "/7", label: "Доступ к платформе" },
];

const steps = [
  {
    icon: Search,
    title: "Находите модели",
    text: "Используйте фильтры и подборки, чтобы быстро сузить выбор.",
  },
  {
    icon: CalendarClock,
    title: "Сравнивайте данные",
    text: "Сверяйте характеристики, стоимость владения и отзывы владельцев.",
  },
  {
    icon: BadgeCheck,
    title: "Принимайте уверенное решение",
    text: "Получайте финальные рекомендации и сохраняйте лучшие варианты.",
  },
];

const testimonials = [
  {
    name: "Илья Соколов",
    role: "Автоподборщик",
    quote:
      "Я перестал тратить часы на ручной сбор данных. Здесь все собрано в одном месте и очень красиво подано.",
    rating: 5,
  },
  {
    name: "Алина Морозова",
    role: "Маркетолог",
    quote:
      "Выбирала первый автомобиль и не разбиралась в технике. Сайт объясняет все человеческим языком.",
    rating: 5,
  },
  {
    name: "Денис Кравчук",
    role: "Автоэнтузиаст",
    quote:
      "Сравнение моделей и метрики надежности просто топ. Интерфейс выглядит как премиум-продукт.",
    rating: 5,
  },
];

const faqItems = [
  {
    q: "Откуда берутся характеристики автомобилей?",
    a: "Мы агрегируем данные из официальных каталогов производителей, профильных баз и верифицируем их внутренними алгоритмами.",
  },
  {
    q: "Можно ли сравнивать авто из разных классов?",
    a: "Да, система корректно сравнивает кроссоверы, седаны, хэтчбеки и другие классы с учетом контекста использования.",
  },
  {
    q: "Есть ли информация о стоимости владения?",
    a: "Да, вы увидите ориентировочные расходы на топливо, обслуживание и страховку по выбранным моделям.",
  },
  {
    q: "Подходит ли сервис для новичков?",
    a: "Полностью. Мы объясняем сложные параметры простым языком и даем готовые рекомендации.",
  },
  {
    q: "Обновляются ли данные в реальном времени?",
    a: "Ключевые данные обновляются регулярно, а популярные модели получают приоритетные апдейты.",
  },
  {
    q: "Можно ли сохранить подборки авто?",
    a: "Да, в личном кабинете сохраняются сравнения, избранные модели и история просмотров.",
  },
];

const plans = {
  monthly: [
    {
      name: "Базовый",
      price: "0",
      desc: "Для первых шагов",
      features: ["До 10 сравнений", "Базовые характеристики", "Сохранение 3 моделей"],
    },
    {
      name: "Про",
      price: "19",
      desc: "Оптимальный выбор",
      popular: true,
      features: [
        "Безлимитные сравнения",
        "Расширенные метрики надежности",
        "Персональные рекомендации",
        "Приоритетные обновления",
      ],
    },
    {
      name: "Энтерпрайз",
      price: "79",
      desc: "Для команд и дилеров",
      features: ["Командный доступ", "API интеграции", "Кастомные отчеты", "Выделенная поддержка"],
    },
  ],
  yearly: [
    {
      name: "Базовый",
      price: "0",
      desc: "Для первых шагов",
      features: ["До 10 сравнений", "Базовые характеристики", "Сохранение 3 моделей"],
    },
    {
      name: "Про",
      price: "15",
      desc: "Экономия 20%",
      popular: true,
      features: [
        "Безлимитные сравнения",
        "Расширенные метрики надежности",
        "Персональные рекомендации",
        "Приоритетные обновления",
      ],
    },
    {
      name: "Энтерпрайз",
      price: "63",
      desc: "Экономия 20%",
      features: ["Командный доступ", "API интеграции", "Кастомные отчеты", "Выделенная поддержка"],
    },
  ],
};

const useInView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const fadeSectionClass = (isVisible) =>
  `transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

export default function AutomotiveLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(0);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  const [featuresRef, featuresVisible] = useInView();
  const [statsRef, statsVisible] = useInView();
  const [howRef, howVisible] = useInView();
  const [testRef, testVisible] = useInView();
  const [pricingRef, pricingVisible] = useInView();
  const [faqRef, faqVisible] = useInView();
  const [ctaRef, ctaVisible] = useInView();
  const [footerRef, footerVisible] = useInView();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!statsVisible) return undefined;

    const duration = 2000;
    const stepMs = 20;
    const totalSteps = duration / stepMs;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      const progress = Math.min(step / totalSteps, 1);
      setAnimatedStats(stats.map((s) => Number((s.value * progress).toFixed(1))));
      if (progress === 1) clearInterval(timer);
    }, stepMs);

    return () => clearInterval(timer);
  }, [statsVisible]);

  const currentPlans = useMemo(() => plans[billing], [billing]);

  return (
    <div
      className="min-h-screen text-white selection:bg-cyan-400/30"
      style={{
        background:
          "radial-gradient(1200px 700px at 10% -10%, rgba(34,211,238,0.14), transparent 50%), radial-gradient(900px 500px at 90% 10%, rgba(37,99,235,0.16), transparent 55%), var(--bg-primary)",
        ["--bg-primary"]: "#08080f",
        ["--accent-from"]: "#06b6d4",
        ["--accent-to"]: "#3b82f6",
        ["--card-bg"]: "rgba(255,255,255,0.06)",
        ["--border"]: "rgba(255,255,255,0.14)",
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        .gradient-text {
          background: linear-gradient(120deg, var(--accent-from), var(--accent-to));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .glass {
          background: var(--card-bg);
          border: 1px solid var(--border);
          backdrop-filter: blur(16px);
        }
        .btn-glow:hover {
          transform: scale(1.05);
          box-shadow: 0 0 36px rgba(6, 182, 212, 0.45);
        }
        .card-hover:hover {
          transform: translateY(-4px) scale(1.03);
          border-color: rgba(6, 182, 212, 0.55);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.25);
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
        .blob {
          animation: floatBlob 9s ease-in-out infinite;
        }
        .blob-delay {
          animation-delay: 1.8s;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -18px) scale(1.06); }
        }
        @keyframes pulseSoft {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
      `}</style>

      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-black/40 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#hero" className="flex items-center gap-2">
            <div className="rounded-xl bg-white/10 p-2">
              <Car className="h-5 w-5 text-cyan-300" />
            </div>
            <span className="text-lg font-semibold tracking-wide">AutoPulse</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/80 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="btn-glow hidden h-11 min-w-[44px] items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 text-sm font-semibold transition-all lg:flex"
            type="button"
          >
            Попробовать
          </button>

          <button
            className="inline-flex h-11 min-w-[44px] items-center justify-center rounded-lg border border-white/20 p-2 lg:hidden"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Открыть меню"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-black/70 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm text-white/90 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <button className="mt-2 h-11 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-semibold">
              Попробовать
            </button>
          </div>
        </div>
      </nav>

      <header id="hero" className="relative overflow-hidden px-4 pb-16 pt-28 md:px-6 md:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="blob absolute left-[8%] top-24 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="blob blob-delay absolute right-[10%] top-40 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div
            className="absolute left-0 top-0 h-full w-full opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              animation: "pulseSoft 5s ease-in-out infinite",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="fade-in-up mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyan-200">
              Платформа нового поколения для автоаналитики
            </p>
            <h1 className="fade-in-up text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Выбирайте авто <span className="gradient-text">умно, быстро, красиво</span>
            </h1>
            <p className="fade-in-up mx-auto mt-6 max-w-2xl text-base text-white/75 md:text-lg">
              Сравнивайте тысячи автомобилей, смотрите реальные метрики надежности и находите идеальную
              машину под свой стиль жизни за минуты, а не дни.
            </p>
            <div className="fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="btn-glow h-12 min-w-[180px] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 text-sm font-semibold transition-all">
                Начать бесплатно
              </button>
              <button className="btn-glow h-12 min-w-[180px] rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold transition-all">
                Смотреть демо
              </button>
            </div>
          </div>
        </div>
      </header>

      <section id="features" ref={featuresRef} className={`mx-auto max-w-7xl px-4 py-16 md:px-6 ${fadeSectionClass(featuresVisible)}`}>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Преимущества платформы</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">Все, что нужно для выбора авто, собрано в одном визуально мощном интерфейсе.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="card-hover glass rounded-2xl p-6 transition-all duration-300"
              style={{
                transitionDelay: featuresVisible ? `${i * 100}ms` : "0ms",
                opacity: featuresVisible ? 1 : 0,
                transform: featuresVisible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 p-3">
                <f.icon className="h-6 w-6 text-cyan-200" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="stats" ref={statsRef} className={`relative mt-4 ${fadeSectionClass(statsVisible)}`}>
        <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, idx) => (
              <div key={item.label} className="glass rounded-2xl p-6 text-center">
                <p className="text-4xl font-extrabold md:text-5xl">
                  {animatedStats[idx]}
                  <span className="gradient-text">{item.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" ref={howRef} className={`mx-auto max-w-7xl px-4 py-16 md:px-6 ${fadeSectionClass(howVisible)}`}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Как это работает</h2>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-1/2 top-11 hidden h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-cyan-400/0 via-cyan-400/70 to-blue-400/0 lg:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="glass card-hover relative rounded-2xl p-6 text-center transition-all duration-300">
              <span className="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-xs font-bold">
                {i + 1}
              </span>
              <div className="mt-4 inline-flex rounded-xl bg-white/10 p-3">
                <step.icon className="h-6 w-6 text-cyan-200" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/70">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" ref={testRef} className={`mx-auto max-w-7xl px-4 py-16 md:px-6 ${fadeSectionClass(testVisible)}`}>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Отзывы</h2>
            <p className="mt-2 text-white/70">Что говорят эксперты и пользователи платформы.</p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => {
            const initials = item.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();
            return (
              <article key={item.name} className="glass card-hover rounded-2xl p-6 transition-all duration-300">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 font-bold">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-white/65">{item.role}</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/75">"{item.quote}"</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="pricing" ref={pricingRef} className={`mx-auto max-w-7xl px-4 py-16 md:px-6 ${fadeSectionClass(pricingVisible)}`}>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Тарифы</h2>
          <p className="mt-3 text-white/70">Прозрачные цены для любого уровня задач.</p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="glass inline-flex rounded-full p-1">
            <button
              className={`h-11 min-w-[120px] rounded-full px-4 text-sm font-semibold transition-all ${
                billing === "monthly" ? "bg-white/15 text-white" : "text-white/70"
              }`}
              onClick={() => setBilling("monthly")}
              type="button"
            >
              Месяц
            </button>
            <button
              className={`h-11 min-w-[120px] rounded-full px-4 text-sm font-semibold transition-all ${
                billing === "yearly" ? "bg-white/15 text-white" : "text-white/70"
              }`}
              onClick={() => setBilling("yearly")}
              type="button"
            >
              Год
              <span className="ml-2 rounded-full bg-cyan-400/20 px-2 py-0.5 text-xs text-cyan-200">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {currentPlans.map((plan) => (
            <article
              key={plan.name}
              className={`card-hover glass relative rounded-2xl p-6 transition-all duration-300 ${
                plan.popular ? "scale-[1.02] border-cyan-300/50 shadow-[0_0_36px_rgba(6,182,212,0.28)]" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-xs font-semibold">
                  Популярный
                </span>
              )}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-white/70">{plan.desc}</p>
              <p className="mt-5 text-4xl font-extrabold">
                ${plan.price}
                <span className="text-base font-medium text-white/60">/{billing === "monthly" ? "мес" : "мес*"}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-glow mt-7 h-11 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-semibold transition-all">
                Выбрать план
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" ref={faqRef} className={`mx-auto max-w-7xl px-4 py-16 md:px-6 ${fadeSectionClass(faqVisible)}`}>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">FAQ</h2>
          <p className="mt-3 text-white/70">Ответы на самые частые вопросы.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {faqItems.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={item.q} className="glass rounded-xl">
                <button
                  className="flex h-14 w-full min-w-[44px] items-center justify-between px-4 text-left"
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  type="button"
                >
                  <span className="pr-4 text-sm font-medium md:text-base">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className="overflow-hidden px-4 transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "160px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? "16px" : "0px",
                  }}
                >
                  <p className="text-sm leading-relaxed text-white/70">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section ref={ctaRef} className={`mx-auto max-w-7xl px-4 pb-16 md:px-6 ${fadeSectionClass(ctaVisible)}`}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 md:p-10">
          <div className="pointer-events-none absolute -left-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-white/20 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-white/20 blur-2xl" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-3xl font-extrabold md:text-4xl">Готовы найти идеальный автомобиль?</h3>
              <p className="mt-3 max-w-2xl text-white/90">Подпишитесь и получите персональную подборку авто уже сегодня.</p>
            </div>
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Ваш email"
                className="h-12 min-w-[44px] flex-1 rounded-xl border border-white/40 bg-white/15 px-4 text-white placeholder:text-white/80 outline-none"
              />
              <button className="btn-glow inline-flex h-12 min-w-[44px] items-center justify-center gap-2 rounded-xl bg-black/30 px-5 font-semibold transition-all">
                Подписаться <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer ref={footerRef} className={`border-t border-white/10 ${fadeSectionClass(footerVisible)}`}>
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="rounded-xl bg-white/10 p-2">
                  <Car className="h-5 w-5 text-cyan-300" />
                </div>
                <span className="text-lg font-semibold">AutoPulse</span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
                Современная автомобильная платформа с wow-дизайном, мощной аналитикой и удобными инструментами сравнения.
              </p>
              <div className="mt-5 flex gap-2">
                {[Code2, Send, BriefcaseBusiness, Camera].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 transition hover:scale-105 hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Продукт", links: ["Каталог", "Сравнения", "Рейтинги", "API"] },
              { title: "Компания", links: ["О нас", "Блог", "Партнеры", "Карьера"] },
              { title: "Ресурсы", links: ["Документация", "Гайды", "Комьюнити", "Поддержка"] },
              { title: "Правила", links: ["Политика", "Оферта", "Cookies", "Безопасность"] },
            ].map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">{group.title}</h4>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/65 transition hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
            © {new Date().getFullYear()} AutoPulse. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
