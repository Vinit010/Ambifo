import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Button from '../common/Button'
import type { PlatformData } from '../../data/platformsData'

const anchors = [
  { label: 'The Platform', href: '#the-platform' },
  { label: 'The Challenge', href: '#the-challenge' },
  { label: 'Capability Areas', href: '#capability' },
  { label: 'Engagement Model', href: '#engagement' },
]

function PlatformLayout({ data }: { data: PlatformData }) {
  const [activeAnchor, setActiveAnchor] = useState(0)

  return (
    <div className="font-lato">
      <Helmet>
        <title>{data.heroTitle} | Ambifo Technology</title>
        <meta name="description" content={data.heroDescription} />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
        </div>

        {/* Anchor nav */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 mb-10">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {anchors.map((a, i) => (
              <a
                key={a.href}
                href={a.href}
                onClick={() => setActiveAnchor(i)}
                className={`transition-all px-4 py-2 rounded-full ${activeAnchor === i ? 'text-yellow-400 font-semibold bg-yellow-400/10 border border-yellow-400/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {a.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold mb-6 font-montserrat tracking-widest uppercase">
            {data.heroTag}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-6 max-w-5xl mx-auto leading-tight"
          >
            {data.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            {data.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button variant="secondary" href="#contact-form">
              {data.ctaText} <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Platform Description */}
      <section id="the-platform" className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-yellow-400 uppercase font-montserrat">The Platform</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mt-3 mb-6">{data.platformTitle}</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            {data.platformDescription}
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.platformFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-navy-800/50 border border-navy-700 rounded-2xl p-7 hover:border-yellow-400/30 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white font-montserrat mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section id="the-challenge" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-red-100 p-8 hover:shadow-lg transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-lg">!</span>
                {data.problemsTitle}
              </h3>
              <ul className="space-y-4">
                {data.problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{p.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-blue-100 p-8 hover:shadow-lg transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-lg">✓</span>
                {data.solutionsTitle}
              </h3>
              <ul className="space-y-4">
                {data.solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{s.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-center max-w-4xl mx-auto mt-12 leading-relaxed italic"
          >
            {data.reframeText}
          </motion.p>
        </div>
      </section>

      {/* Capability Areas */}
      <section id="capability" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">{data.capabilitiesTitle}</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-500">
                  <cap.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-yellow-400 uppercase font-montserrat">Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mt-3 mb-4">{data.outcomesTitle}</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.outcomes.map((outcome, i) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-navy-800/50 border border-navy-700 rounded-2xl p-6 text-center hover:border-yellow-400/30 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-white font-semibold text-sm font-montserrat mb-1">{outcome.label}</h4>
                <p className="text-gray-400 text-xs">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.differentiators.map((diff, i) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors duration-500">
                  <diff.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-2">{diff.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section id="engagement" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">{data.engagementTitle}</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {data.engagementStages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full hover:shadow-lg hover:border-blue-600/20 transition-all duration-500">
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4">
                    <stage.icon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <div className="text-xs font-bold text-yellow-400 mb-2 font-montserrat">0{i + 1}</div>
                  <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-2">{stage.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
                </div>
                {i < data.engagementStages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 hover:shadow-lg transition-all duration-500"
          >
            <div className="text-yellow-400 text-5xl mb-4 font-montserrat">"</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We want to give customers the best possible experience, and we chose AWS because it is just as customer obsessed as we are. AWS dove deep into our existing architecture to find us the most suitable solutions, while Ambifo provided out-of-the-box tools to ensure a seamless migration.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold font-montserrat">MC</div>
              <div>
                <p className="font-semibold text-navy-900 font-montserrat">Mahesh Chalil</p>
                <p className="text-gray-500 text-sm">SVP – Technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision to Reality */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Vision To Reality</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600 to-navy-900 flex items-center justify-center overflow-hidden">
                <span className="text-white/50 text-sm group-hover:scale-110 transition-transform duration-500">Case Study</span>
              </div>
              <div className="p-7">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-montserrat">Case Studies</span>
                <h3 className="text-lg font-semibold text-navy-900 font-montserrat mt-2 mb-2">Leading US-based Surveillance Solution Provider</h3>
                <p className="text-gray-600 text-sm mb-4">Enhancing Security and Scalability for a US Surveillance Leader</p>
                <Link to="/insights-resources/case-study" className="text-blue-600 font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center"
            >
              <Link to="/insights-resources/case-study" className="inline-flex items-center px-6 py-3 bg-yellow-400 text-navy-900 font-semibold rounded-xl hover:bg-yellow-500 hover:shadow-lg transition-all duration-500">
                View More <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4"
          >
            {data.ctaHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {data.ctaDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="secondary" href="/contact-us">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PlatformLayout
