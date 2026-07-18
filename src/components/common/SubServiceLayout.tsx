import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, CheckCircle, Lightbulb, Star, Zap, Database, Brain, Target, Route, Shield, Settings, BarChart3, RefreshCw, Code, Cloud, Monitor, MessageSquare, Image, Layers, Server } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import Button from './Button'
import { accentMap } from '../../data/servicesData'

interface Feature {
  icon: string
  title: string
  desc: string
}

interface Detail {
  title: string
  items: string[]
}

interface SubServiceLayoutProps {
  title: string
  subtitle: string
  heroDesc: string
  accent: keyof typeof accentMap
  features: Feature[]
  details: Detail[]
  ctaText?: string
  ctaDesc?: string
  parentService: string
}

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Star, Zap, CheckCircle, ArrowRight,
  Database, Brain, Target, Route, Shield, Settings,
  BarChart3, RefreshCw, Code, Cloud, Monitor,
  MessageSquare, Image, Layers, Server,
}

export default function SubServiceLayout({ title, subtitle, heroDesc, accent, features, details, ctaText, ctaDesc, parentService }: SubServiceLayoutProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const a = accentMap[accent]

  const gradientMap: Record<string, string> = {
    blue: 'from-blue-500',
    teal: 'from-teal-500',
    purple: 'from-purple-500',
    orange: 'from-orange-500',
    green: 'from-green-500',
  }

  return (
    <div className="font-lato">
      <Helmet>
        <title>{title} | Ambifo Technology</title>
        <meta name="description" content={heroDesc} />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className={`absolute top-10 right-10 w-96 h-96 ${gradientMap[accent]} opacity-10 rounded-full blur-3xl`} />
        <div className={`absolute bottom-10 left-10 w-64 h-64 ${gradientMap[accent]} opacity-10 rounded-full blur-3xl`} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className={`inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full ${a.text} text-xs font-bold mb-6 font-montserrat tracking-widest uppercase`}>
              {parentService}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-6 leading-tight">
              {title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              {heroDesc}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
              <Button variant="secondary" href="/contact-us">
                {ctaText || 'Get Started'} <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">{subtitle}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Discover how our {title.toLowerCase()} service can transform your business.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon] || Lightbulb
              return (
                <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500 group">
                  <div className={`w-14 h-14 ${a.bg} rounded-xl flex items-center justify-center mb-5 ${a.group} transition-colors duration-500 group-hover:scale-110`}>
                    <Icon className={`w-7 h-7 ${a.text} ${a.groupText} transition-colors duration-500`} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Details Accordion */}
      {details.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Deep Dive</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">How We Deliver</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">A comprehensive approach to delivering measurable results.</p>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-4">
              {details.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-500">
                  <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                    <span className="text-lg font-semibold text-navy-900 font-montserrat">{item.title}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                          <ul className="space-y-3">
                            {item.items.map((it) => (
                              <li key={it} className="flex items-start gap-3 text-gray-700">
                                <CheckCircle className={`w-5 h-5 ${a.text} mt-0.5 flex-shrink-0`} />
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
            Ready to Get Started?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {ctaDesc || 'Let our experts help you transform your business with our proven approach.'}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="secondary" href="/contact-us">
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
