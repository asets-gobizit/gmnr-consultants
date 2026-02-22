import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    date: 'January 2026',
    title: 'Why Renewable Energy Projects Still Need Old-School Business Developers',
    excerpt: 'The green energy sector is booming with innovation — but closing deals still requires human relationships, trust, and negotiation skills that no algorithm can replace.',
    slug: 'why-renewable-energy-needs-business-developers',
    featured: true,
  },
  {
    date: 'November 2025',
    title: 'Five Mistakes Companies Make When Expanding Internationally',
    excerpt: 'After helping dozens of companies enter new markets, I keep seeing the same avoidable errors. Here\'s what to watch for.',
    slug: 'five-mistakes-expanding-internationally',
  },
  {
    date: 'September 2025',
    title: 'Strategic Partnerships vs. Going Solo: When to Join Forces',
    excerpt: 'Not every opportunity requires a partner — but the right joint venture can transform a long shot into a winning bid.',
    slug: 'strategic-partnerships-vs-going-solo',
  },
  {
    date: 'July 2025',
    title: 'The European Green Deal: What It Means for Israeli Clean-Tech',
    excerpt: "Europe's regulatory push toward sustainability is creating unprecedented opportunities for Israeli clean-tech innovators.",
    slug: 'european-green-deal-opportunities',
  },
]

function BlogCard({ post, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  if (post.featured) {
    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="md:col-span-2 group"
      >
        <Link to={`/blog/${post.slug}`} className="block">
          <div className="bg-navy p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/20 to-navy" />
            <div className="relative z-10">
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Featured &middot; {post.date}
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-5 group-hover:text-gold transition-colors duration-300" style={{ fontFamily: 'var(--font-serif)' }}>
                {post.title}
              </h3>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-8">
                {post.excerpt}
              </p>
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                Read Article &rarr;
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className="bg-white p-8 md:p-10 border border-warm-gray h-full hover:border-gold/30 transition-all duration-300">
          <p className="text-navy/30 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            {post.date}
          </p>
          <h3 className="text-lg md:text-xl font-bold text-navy leading-snug mb-4 group-hover:text-gold-dark transition-colors duration-300" style={{ fontFamily: 'var(--font-serif)' }}>
            {post.title}
          </h3>
          <p className="text-navy/45 leading-relaxed text-sm mb-6">
            {post.excerpt}
          </p>
          <span className="text-gold-dark text-xs font-semibold tracking-widest uppercase">
            Read more &rarr;
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="py-28 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Insights
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Perspectives on growth,{' '}
            <span className="italic text-gold-dark">partnerships & markets.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
