"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Sparkles, BookOpen, MessageCircle, ArrowRight, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WaitlistForm from "@/components/form/waitlist-form";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAFAFA] text-zinc-900 selection:bg-black selection:text-white overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-purple-100/40 blur-[120px]" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center z-50 relative"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center shadow-lg shadow-zinc-900/20">
            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight">MuslimNotes</span>
        </div>
        <Button variant="ghost" className="rounded-full px-4 sm:px-6 text-sm sm:text-base font-medium hover:bg-zinc-100 transition-colors">
          Log in
        </Button>
      </motion.nav>

      <main ref={containerRef} className="z-10 relative flex-1">
        {/* Hero Section */}
        <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 flex flex-col items-center text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/60 shadow-sm mb-6 sm:mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              <span className="text-xs sm:text-sm font-medium text-zinc-600">Announcing Early Access</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-6 sm:mb-8 text-zinc-900"
            >
              Capture Knowledge. <br className="hidden md:block" />
              <span className="text-zinc-400">Reflect Deeply.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-500 mb-8 sm:mb-12 max-w-2xl leading-relaxed tracking-tight px-2 sm:px-0"
            >
              The premium space to organize your Islamic learning, transform khutbahs into actionable insights, and grow your deen.
            </motion.p>

            <motion.div variants={fadeUp} className="w-full max-w-md space-y-3 sm:space-y-4 px-2 sm:px-0">
              <WaitlistForm />
              <p className="text-sm text-zinc-400 font-medium">Limited spots available for beta.</p>
            </motion.div>
          </motion.div>

          {/* Hero Image / Mockup */}
          <motion.div
            style={{ y }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-16 relative w-full max-w-[280px] sm:max-w-md md:max-w-xl lg:max-w-3xl aspect-[3/4] sm:aspect-square mx-auto"
          >
            <Image
              src="/product-image.png"
              alt="MuslimNote Recording Interface"
              fill
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              priority
            />
          </motion.div>
        </section>

        {/* Statement Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-tight"
            >
              We consume hours of lectures, yet <span className="text-zinc-400">retain so little.</span> It’s time to change how we learn our deen.
            </motion.h2>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">Intelligent Learning.</h2>
              <p className="text-base sm:text-lg md:text-xl text-zinc-500 max-w-2xl">Everything you need to turn passive listening into active growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-auto md:auto-rows-[320px]">
              {/* Feature 1 - Large */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2 row-span-1 rounded-2xl sm:rounded-[2rem] bg-white border border-zinc-200/60 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:translate-y-1 transition-transform"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -mr-20 -mt-20 transition-all group-hover:bg-blue-100"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
                    <Mic className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 sm:mb-3">Capture Frictionlessly</h3>
                  <p className="text-zinc-500 text-base sm:text-lg max-w-md">Record audio, paste links, or type notes. Our system handles the rest, ensuring nothing is lost.</p>
                </div>
              </motion.div>

              {/* Feature 2 - Small */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="col-span-1 row-span-1 rounded-2xl sm:rounded-[2rem] bg-zinc-900 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden hover:translate-y-1 transition-transform group"
              >
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-zinc-800 rounded-full blur-[60px] -mr-10 -mb-10"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 text-white">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 sm:mb-3">AI Summaries</h3>
                  <p className="text-zinc-400 text-base sm:text-lg">Distill hour-long khutbahs into concise, actionable takeaways.</p>
                </div>
              </motion.div>

              {/* Feature 3 - Small */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-1 row-span-1 rounded-2xl sm:rounded-[2rem] bg-white border border-zinc-200/60 p-6 sm:p-8 md:p-10 flex flex-col justify-between group hover:translate-y-1 transition-transform"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 sm:mb-3">Daily Reflection</h3>
                  <p className="text-zinc-500 text-base sm:text-lg">Gentle nudges to revisit past notes and solidify your knowledge.</p>
                </div>
              </motion.div>

              {/* Feature 4 - Large */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-2 row-span-1 rounded-2xl sm:rounded-[2rem] bg-white border border-zinc-200/60 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:translate-y-1 transition-transform"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between h-full">
                  <div className="max-w-sm">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 sm:mb-3">Converse with your Notes</h3>
                    <p className="text-zinc-500 text-base sm:text-lg">Ask questions and get answers based entirely on the scholars and lectures you've saved.</p>
                  </div>
                  {/* Abstract illustration */}
                  <div className="hidden md:flex w-48 h-48 rounded-full border border-zinc-100 bg-zinc-50/50 items-center justify-center relative">
                    <div className="absolute w-32 h-32 rounded-full border border-zinc-200 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute w-24 h-24 rounded-full border border-zinc-200 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                    <Sparkles className="w-6 h-6 text-zinc-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it Works / Steps */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-24">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">A simple, powerful workflow.</h2>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-zinc-200 to-transparent md:left-1/2 md:-translate-x-1/2 hidden md:block"></div>

              {[
                { step: "01", title: "Input Raw Knowledge", desc: "Record a live lecture, save a youtube link, or jot down thoughts." },
                { step: "02", title: "AI Structuring", desc: "We automatically format, tag, and summarize the content." },
                { step: "03", title: "Review & Grow", desc: "Access a perfectly organized library of your learning journey." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}
                >
                  <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200/60 hover:translate-y-1 transition-transform w-full max-w-sm">
                      <div className="text-sm font-bold text-zinc-400 mb-2">STEP {item.step}</div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">{item.title}</h3>
                      <p className="text-sm sm:text-base text-zinc-500">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-[14px] md:relative md:left-0 w-7 h-7 rounded-full bg-white border-4 border-zinc-100 shadow-sm flex-shrink-0 z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
                  </div>

                  <div className="md:w-1/2 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] bg-zinc-900 overflow-hidden relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f6_0%,transparent_50%)] opacity-20"></div>

            <div className="relative z-10 py-12 sm:py-16 md:py-24 px-5 sm:px-8 md:px-20 text-center flex flex-col items-center">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                Start building your library.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-12 max-w-xl">
                Join the early access list to experience a better way to capture and reflect on Islamic knowledge.
              </p>
              {/* 
              <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md px-2 sm:px-0">
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="h-12 sm:h-14 pl-4 sm:pl-6 text-sm sm:text-base rounded-xl sm:rounded-2xl bg-white/10 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-white/20 focus-visible:border-white/30 backdrop-blur-md"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold bg-white text-zinc-900 hover:bg-zinc-100 hover:scale-[1.02] transition-all"
                >
                  Get Access
                </Button>
              </form> */}
              <div className="w-full max-w-md space-y-3 sm:space-y-4 px-2 sm:px-0">

                <WaitlistForm />
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-zinc-200/60 bg-white/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-zinc-900 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="font-bold tracking-tight text-zinc-900">MuslimNotes</span>
          </div>

          <div className="flex gap-6 sm:gap-8 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
