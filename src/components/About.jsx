import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import guyPhoto from '../assets/guy-molcho.jpg'

const credentials = [
  { label: 'Years of Experience', value: '20+' },
  { label: 'Markets Entered', value: '15+' },
  { label: 'Deals Closed', value: '50+' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo — asymmetric composition */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={guyPhoto}
                alt="Guy Molcho — Founder of GMnR Consultants"
                className="w-full max-w-lg object-cover"
                style={{ aspectRatio: '4/5', objectPosition: 'center top' }}
              />
            </div>
            {/* Decorative gold frame offset */}
            <div className="absolute -bottom-6 -right-6 w-full max-w-lg border-2 border-gold/20 z-0"
              style={{ aspectRatio: '4/5' }}
            />
          </motion.div>

          {/* Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Guy Molcho
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gold-dark font-semibold tracking-wide mb-8"
            >
              Founder &amp; Principal Consultant
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="space-y-5 text-navy/55 leading-relaxed text-base md:text-lg mb-12"
            >
              <p>
                With over two decades in international business development, M&A advisory, and strategic growth consulting,
                I help companies expand into new markets and close deals that move the needle.
              </p>
              <p>
                My background spans renewable energy, clean-tech, real estate finance, and cross-border transactions.
                I've worked with multinationals and startups alike — from securing key accounts in new territories to
                structuring joint ventures and acquisition deals across Europe, Asia, and the Americas.
              </p>
              <p>
                GMnR Consultants exists because not every company needs a full-time business development team —
                but every company deserves one that delivers.
              </p>
            </motion.div>

            {/* Credential numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-warm-gray"
            >
              {credentials.map((c) => (
                <div key={c.label}>
                  <p className="text-3xl md:text-4xl font-bold text-navy" style={{ fontFamily: 'var(--font-serif)' }}>
                    {c.value}
                  </p>
                  <p className="text-navy/40 text-xs tracking-wide mt-1 uppercase">{c.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
