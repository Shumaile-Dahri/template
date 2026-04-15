/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Target, 
  Zap, 
  Check, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail,
  Menu,
  X,
  Star,
  Quote
} from 'lucide-react';
import { cn } from './lib/utils';

const GYM_NAME = "VANTAGE FITNESS";

const swipeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Results", href: "#results" },
    { name: "Pricing", href: "#pricing" },
    { name: "Location", href: "#footer" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-10 py-6 border-b border-border",
      isScrolled ? "bg-bg/90 backdrop-blur-lg" : "bg-bg"
    )}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-[0.2em] uppercase">
          VANTAGE<span className="text-accent">FITNESS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[11px] font-bold text-text-muted hover:text-accent transition-colors uppercase tracking-[0.15em]"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-accent text-black px-6 py-2 text-[11px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
            Join Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg border-b border-border p-10 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-black uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-accent text-black px-6 py-4 text-lg font-black uppercase tracking-tighter">
              Start Free Trial
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center border-b border-border pt-24">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Main Hero Column */}
        <div className="p-10 lg:p-20 flex flex-col justify-center border-r border-border">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-accent text-xs font-black tracking-[0.3em] mb-6 uppercase">
              Premium Performance
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.85] mb-10 tracking-[-0.04em]">
              ELEVATE<br />YOUR<br /><span className="text-accent">LIMITS.</span>
            </h1>
            <p className="text-text-muted text-base md:text-lg max-w-md mb-12 leading-relaxed">
              Stop settling for average. Our elite trainers and world-class facility are engineered for those who demand absolute results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Your Free Trial
              </button>
              <button className="btn-outline">
                View Facility
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Column */}
        <div className="relative overflow-hidden bg-card hidden lg:block">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
            alt="Gym Background" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-bg via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    { title: "Hyper-Growth Training", desc: "Scientific hypertrophy protocols for maximum muscle gains.", icon: <Dumbbell className="w-6 h-6" /> },
    { title: "Elite Conditioning", desc: "High-intensity fat loss designed for top-tier athletes.", icon: <Zap className="w-6 h-6" /> },
    { title: "Private Coaching", desc: "1-on-1 strategy focusing on movement and nutrition.", icon: <Target className="w-6 h-6" /> },
    { title: "Group Performance", desc: "High-energy sessions built on community and competition.", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <section id="programs" className="py-32 px-10 border-b border-border bg-bg">
      <div className="max-w-[1440px] mx-auto">
        <motion.div {...swipeUp} className="mb-20">
          <h2 className="text-accent text-xs font-black tracking-[0.3em] mb-6 uppercase">Programs</h2>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase italic">
            ENGINEERED FOR<br /><span className="text-text-muted">ABSOLUTE POWER.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {programs.map((p, i) => (
            <motion.div 
              key={i}
              {...swipeUp}
              transition={{ ...swipeUp.transition, delay: i * 0.1 }}
              className="p-10 border border-border bg-card hover:bg-accent hover:text-black transition-all duration-300 group"
            >
              <div className="mb-8 text-accent group-hover:text-black transition-colors">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 italic uppercase">{p.title}</h3>
              <p className="text-text-muted group-hover:text-black/70 text-sm leading-relaxed transition-colors">{p.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section className="py-32 px-10 border-b border-border bg-card">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div {...swipeUp}>
          <h2 className="text-accent text-xs font-black tracking-[0.3em] mb-6 uppercase">The Vantage Edge</h2>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase italic mb-12">
            WHY WE ARE THE<br /><span className="text-text-muted">STANDARD.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Biometric Access", desc: "24/7 secure entry with advanced biometric tracking." },
              { title: "Olympic Equipment", desc: "The highest grade gear from Rogue and Eleiko." },
              { title: "Expert Coaching", desc: "IFBB and Master certified trainers on staff." },
              { title: "Custom Nutrition", desc: "Personalized meal plans built for your biology." }
            ].map((f, i) => (
              <div key={i}>
                <h4 className="text-lg font-bold mb-2 italic uppercase tracking-tighter">{f.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          {...swipeUp}
          transition={{ ...swipeUp.transition, delay: 0.2 }}
          className="relative aspect-video bg-border overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover grayscale opacity-60"
            alt="Gym Interior"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-black cursor-pointer hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 fill-current" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-24 px-10 border-b border-border bg-bg">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {[
          { label: "Active Members", value: "1,200+" },
          { label: "Expert Coaches", value: "24" },
          { label: "Success Stories", value: "500+" },
          { label: "Facility Size", value: "15k SQFT" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            {...swipeUp}
            transition={{ ...swipeUp.transition, delay: i * 0.1 }}
          >
            <div className="text-4xl font-black italic mb-2 tracking-tighter">{stat.value}</div>
            <div className="text-[10px] text-text-muted font-black uppercase tracking-[0.2em]">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Transformations = () => {
  return (
    <section id="results" className="py-32 px-10 border-b border-border bg-bg">
      <div className="max-w-[1440px] mx-auto">
        <motion.div {...swipeUp} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-accent text-xs font-black tracking-[0.3em] mb-6 uppercase">Transformations</h2>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase italic">
              REAL PEOPLE.<br /><span className="text-text-muted">REAL RESULTS.</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-xs leading-relaxed">
            Our members don't just "go to the gym." They undergo complete physical and mental transformations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            { 
              img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
              title: "The 90-Day Shred",
              desc: "I went from 24% body fat to 10% while increasing my strength. The nutrition plan was the game changer.",
              author: "Alex M."
            },
            { 
              img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
              title: "Strength Reborn",
              desc: "As a busy executive, I needed efficiency. 3 sessions a week and I'm stronger now at 45 than I was at 25.",
              author: "James L."
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              {...swipeUp}
              transition={{ ...swipeUp.transition, delay: i * 0.2 }}
              className="bg-border p-[1px]"
            >
              <div className="group relative h-[600px] bg-bg overflow-hidden">
                <img 
                  src={t.img} 
                  alt={t.title} 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="bg-bg/80 backdrop-blur-sm p-8 border border-border max-w-md">
                    <h3 className="text-2xl font-black uppercase italic mb-2">{t.title}</h3>
                    <p className="text-text-muted text-sm mb-6 leading-relaxed">"{t.desc}"</p>
                    <span className="text-xs font-black text-accent tracking-widest uppercase">- {t.author}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Basic Access", price: "99", desc: "Full gym access, biometric entry, and mobile app tracking.", features: ["24/7 Access", "Locker Room", "App Tracking"] },
    { name: "Elite Performance", price: "149", desc: "Unlimited classes, recovery suite access, and private locker.", features: ["Unlimited Classes", "Recovery Suite", "Private Locker", "1 PT Session"], recommended: true },
    { name: "Master Coaching", price: "299", desc: "Personalized 1-on-1 coaching with custom nutrition and strategy.", features: ["Weekly 1-on-1", "Custom Nutrition", "VIP Lounge", "All Elite Perks"] }
  ];

  return (
    <section id="pricing" className="py-32 px-10 border-b border-border bg-zinc-950">
      <div className="max-w-[1440px] mx-auto">
        <motion.div {...swipeUp} className="text-center mb-20">
          <h2 className="text-accent text-xs font-black tracking-[0.3em] mb-6 uppercase">Pricing</h2>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase italic">
            CHOOSE YOUR<br /><span className="text-text-muted">LEVEL.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              {...swipeUp}
              transition={{ ...swipeUp.transition, delay: i * 0.1 }}
              className={cn(
                "p-12 border border-border flex flex-col",
                plan.recommended ? "bg-accent text-black" : "bg-bg text-white"
              )}
            >
              <h3 className="text-2xl font-black uppercase italic mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black italic tracking-tighter">${plan.price}</span>
                <span className={cn("text-xs font-bold uppercase", plan.recommended ? "text-black/60" : "text-text-muted")}>/mo</span>
              </div>
              <p className={cn("text-sm mb-10 leading-relaxed", plan.recommended ? "text-black/70" : "text-text-muted")}>
                {plan.desc}
              </p>
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                    <Check className="w-4 h-4" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={cn(
                "w-full py-5 font-black uppercase tracking-widest text-xs transition-all",
                plan.recommended ? "bg-black text-white hover:opacity-90" : "bg-accent text-black hover:opacity-90"
              )}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-40 px-10 bg-accent text-black text-center">
      <motion.div 
        {...swipeUp}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-[10px] font-black tracking-[0.4em] mb-8 uppercase">Limited Membership</h2>
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic mb-12">
          READY TO<br />REWRITE<br />YOUR STORY?
        </h2>
        <p className="text-lg font-bold max-w-xl mx-auto mb-12 leading-relaxed">
          The only thing standing between you and your best self is the decision to start. Join Vantage Fitness today and get your first 7 days free.
        </p>
        <button className="bg-black text-white px-16 py-6 text-xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
          Claim Your Free Pass
        </button>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-bg py-24 px-10 border-t border-border">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 lg:col-span-1">
          <a href="#" className="text-2xl font-black tracking-[0.2em] uppercase mb-8 block">
            VANTAGE<span className="text-accent">FITNESS</span>
          </a>
          <p className="text-text-muted text-sm leading-relaxed mb-8">
            The premier destination for high-performance fitness. We build bodies that perform as good as they look.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-text-muted">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3"><MapPin className="w-4 h-4 text-accent" /> 882 Performance Dr, Austin, TX</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 text-accent" /> +1 (555) 000-VANTAGE</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 text-accent" /> hello@vantagefitness.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-text-muted">Hours</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex justify-between"><span>Mon - Fri</span> <span>24 Hours</span></li>
            <li className="flex justify-between"><span>Sat - Sun</span> <span>24 Hours</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-text-muted">Newsletter</h4>
          <div className="flex">
            <input type="text" placeholder="EMAIL" className="bg-card border border-border px-4 py-3 text-xs w-full focus:outline-none focus:border-accent" />
            <button className="bg-accent text-black px-4 font-black text-[10px] uppercase tracking-widest">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-border">
        <div className="text-[10px] font-black tracking-[0.2em] text-text-muted uppercase">
          &copy; 2026 {GYM_NAME}. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8 text-[10px] font-black tracking-[0.2em] text-text-muted uppercase">
          <a href="#" className="hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Programs />
        <WhyUs />
        <Transformations />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}



