
"use client";

import Link from "next/link";

import { ArrowDown, ArrowUpRight } from "lucide-react";

import { motion } from "framer-motion";

import Button from "../../components/ui/Button";

export default function Hero() {
  return (
    <section className="hero grid-bg relative min-h-screen overflow-hidden pt-[74px]">
      <div className="container-iv flex min-h-[calc(100vh-74px)] items-center py-12 lg:py-16">
        <div className="w-full">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="eyebrow"
            >
              AI & Software Solutions
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="display mt-5 text-[clamp(2.8rem,5.5vw,5.4rem)] font-bold leading-[0.95]"
            >
              DIGITAL EXPERIENCES
              <br />
              BUILT TO MOVE
              <br />
              <span className="text-[var(--accent-2)]">
                BUSINESS FORWARD.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-6 max-w-xl text-sm leading-6 text-[var(--muted)]"
            >
              I design and develop websites, software products and AI-powered
              solutions that help businesses work smarter and grow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Button href="/contact">
                Start a Project
              </Button>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] px-5 py-3 text-xs font-bold hover:bg-[var(--surface)]"
              >
                View My Work
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]"
            >
              <ArrowDown size={14} />
              Scroll to explore
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

