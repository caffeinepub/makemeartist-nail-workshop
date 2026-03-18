import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const WA_LINK = "https://wa.me/918905889549";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Workshop", href: "#modules" },
  { label: "Modules", href: "#modules" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Now", href: WA_LINK },
];

const MODULES = [
  {
    icon: "💅",
    title: "Nail Art Basics",
    desc: "Master the fundamentals of nail preparation, shape, and base coat techniques.",
  },
  {
    icon: "✨",
    title: "Trending Nail Designs",
    desc: "Create viral nail art styles including marble, ombre, and geometric patterns.",
  },
  {
    icon: "💜",
    title: "Gel Polish Application",
    desc: "Professional gel application, curing, and long-lasting finish techniques.",
  },
  {
    icon: "🔮",
    title: "Nail Extensions Basics",
    desc: "Learn acrylic and gel extension techniques for salon-quality results.",
  },
  {
    icon: "🛠️",
    title: "Tools & Product Knowledge",
    desc: "Identify, select, and use the right tools and products for every look.",
  },
  {
    icon: "🤝",
    title: "Client Handling",
    desc: "Build client relationships, pricing strategies, and home studio setup tips.",
  },
];

const FEATURES = [
  {
    icon: "💰",
    title: "Start Earning from Home",
    desc: "Launch your freelance nail art career from day one.",
  },
  {
    icon: "💅",
    title: "Beginner Friendly",
    desc: "No prior experience needed — we start from absolute basics.",
  },
  {
    icon: "⏱",
    title: "Only 3 Hours Training",
    desc: "Get certified in a single focused live session.",
  },
  {
    icon: "📜",
    title: "Certificate Provided",
    desc: "Receive an official Makemeartist certificate upon completion.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    text: "This workshop changed my life! I started taking clients within a week and now earn ₹15,000+ per month from home. Absolutely worth every rupee!",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Anjali Verma",
    city: "Delhi",
    text: "I had zero knowledge about nail art. After just 3 hours, I was able to do beautiful gel nails for my friends. The trainer was super helpful!",
    rating: 5,
    initials: "AV",
  },
  {
    name: "Meera Patel",
    city: "Ahmedabad",
    text: "Best investment of ₹199 ever! The WhatsApp support even after the class is amazing. I got my first client through Instagram just 2 days later!",
    rating: 5,
    initials: "MP",
  },
];

const FAQS = [
  {
    q: "How long is the workshop?",
    a: "The workshop is 3 hours long — a focused, comprehensive live online session designed to give you everything you need.",
  },
  {
    q: "Is it conducted online?",
    a: "Yes! It is a 100% Online Live Class conducted via video call. You can join from anywhere in India.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Absolutely! Every student receives an official Makemeartist completion certificate after the workshop.",
  },
  {
    q: "Do I need any equipment?",
    a: "No equipment needed for the workshop itself. It is entirely digital. We will guide you on what to buy if you want to practice afterwards.",
  },
  {
    q: "Who can join this workshop?",
    a: "Anyone! Whether you are a student, homemaker, or working professional — no prior experience or skills required.",
  },
];

const WA_ICON = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function StarRating({ count }: { count: number }) {
  const stars = "★".repeat(count);
  return (
    <div
      className="flex gap-0.5 text-yellow-400 text-lg"
      aria-label={`${count} out of 5 stars`}
    >
      {stars}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#home"
          className="text-xl font-bold text-brand-pink tracking-tight"
          data-ocid="nav.link"
        >
          Makemeartist
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-sm font-medium text-foreground/70 hover:text-brand-pink transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-brand-pink text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          data-ocid="nav.primary_button"
        >
          Register
        </a>
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-sm font-medium text-foreground/80 hover:text-brand-pink py-1"
              onClick={() => setOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex justify-center bg-brand-pink text-white text-sm font-semibold px-5 py-2.5 rounded-full"
            data-ocid="nav.primary_button"
          >
            Register
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[70vh] text-white text-center px-4 py-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600')",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-3">
          Makemeartist Workshop
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          💅 Become a Nail Artist
          <br className="hidden sm:block" /> in Just 3 Hours
        </h1>
        <p className="text-lg sm:text-xl text-white/85 mb-6">
          Learn Trending Nail Art & Extensions from Industry Experts
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <span className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 text-lg font-bold">
            Only ₹199
          </span>
          <span className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 text-sm font-medium">
            🎓 Certificate Included
          </span>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-wa-green text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all"
          data-ocid="hero.primary_button"
        >
          {WA_ICON} Book Your Seat Now
        </a>
      </motion.div>
    </section>
  );
}

function OrganizedBySection() {
  return (
    <div className="bg-white py-4 px-4 flex flex-col items-center justify-center gap-2 border-b border-border">
      <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
        A class organized by
      </p>
      <img
        src="/assets/uploads/image-2.png"
        alt="Aveda Education"
        className="max-h-[70px] w-auto object-contain"
      />
    </div>
  );
}

function TrustStrip() {
  const items = [
    { icon: "⭐", label: "5000+ Students" },
    { icon: "🎓", label: "Certified Training" },
    { icon: "💻", label: "100% Online" },
    { icon: "📲", label: "WhatsApp Support" },
  ];
  return (
    <div className="bg-brand-blush py-5 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center sm:justify-around gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 font-semibold text-foreground text-sm sm:text-base"
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function ModulesSection() {
  return (
    <section id="modules" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-2">
            Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Course Modules
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Everything you need to go from beginner to confident nail artist in
            one live session.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card
                className="h-full border border-border hover:border-primary/50 hover:shadow-card transition-all"
                data-ocid={`modules.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{mod.icon}</div>
                  <h3 className="font-bold text-base mb-1.5">{mod.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {mod.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyJoinSection() {
  return (
    <section id="why-us" className="py-20 px-4 bg-accent/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-2">
            Benefits
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Join This Workshop?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card
                className="h-full text-center border-0 shadow-card bg-white"
                data-ocid={`features.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{feat.icon}</div>
                  <h3 className="font-bold text-sm mb-2">{feat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feat.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerSection() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Your Nail Art Career 💖
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Work comfortably from home, set your own hours, and build a loyal
            client base — or open your very own nail studio. The skills you
            learn today can change your tomorrow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium">
            {[
              "🏠 Work from Home",
              "💼 Start a Studio",
              "📱 Freelance Online",
              "💸 Set Your Own Rates",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-brand-blush text-brand-pink px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-2">
            Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Student Reviews</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card
                className="h-full border border-border hover:shadow-card transition-shadow"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <StarRating count={t.rating} />
                  <p className="mt-3 text-sm text-foreground leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferBanner() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="rounded-2xl p-10 text-white text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.62 0.24 354), oklch(0.70 0.22 340))",
          }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="offer.card"
        >
          <p className="text-3xl font-bold mb-2">🔥 Limited Time Offer</p>
          <p className="text-xl mb-1">Get this complete workshop for just</p>
          <p className="text-5xl font-extrabold my-3">₹199</p>
          <p className="text-white/80 mb-6 font-medium">
            ⚡ Hurry! Limited Seats Available — Filling Fast!
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold text-base px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors shadow-lg"
            data-ocid="offer.primary_button"
          >
            {WA_ICON} Enroll Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-2">
            Help
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </motion.div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          data-ocid="faq.panel"
        >
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              data-ocid={`faq.item.${i + 1}`}
            >
              <AccordionTrigger className="text-left font-semibold text-sm hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative flex items-center justify-center min-h-[50vh] text-white text-center px-4 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        className="relative z-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          Don&apos;t Miss This Opportunity 💅
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          Join 5000+ students and start your nail art journey today.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-wa-green text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all"
          data-ocid="final_cta.primary_button"
        >
          {WA_ICON} Book Now for ₹199
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;
  return (
    <footer
      className="text-white py-8 px-4 text-center"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.62 0.24 354), oklch(0.70 0.22 340))",
      }}
    >
      <p className="font-bold text-lg mb-1">Makemeartist</p>
      <p className="text-white/80 text-sm">
        © {year} Makemeartist | All Rights Reserved
      </p>
      <p className="text-white/60 text-xs mt-3">
        Built with ❤️ using{" "}
        <a
          href={utmLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}

function StickyBar() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground text-center py-4 font-bold text-base sm:text-lg hover:opacity-95 transition-opacity shadow-2xl"
      data-ocid="sticky.primary_button"
    >
      👉 Book Now @ ₹199
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <OrganizedBySection />
        <TrustStrip />
        <ModulesSection />
        <WhyJoinSection />
        <CareerSection />
        <TestimonialsSection />
        <OfferBanner />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <div className="h-14" />
      <StickyBar />
    </div>
  );
}
