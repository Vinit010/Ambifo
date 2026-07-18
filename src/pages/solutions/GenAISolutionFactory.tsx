import { motion } from 'framer-motion'
import { ArrowRight, Video, Headphones, MessageCircle, Bot, FileText } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import Button from '../../components/common/Button'

const solutions = [
  { icon: Video, title: 'Automated Video Storytelling', desc: 'Transform raw data and scripts into engaging video content using AI-powered storytelling and generation.' },
  { icon: Headphones, title: 'Digital Virtual Assistant', desc: 'Deploy intelligent virtual assistants that understand context and deliver personalized user experiences.' },
  { icon: MessageCircle, title: 'AI-Powered Customer Support', desc: 'Enhance customer service with AI chatbots that handle queries, escalate issues, and learn from interactions.' },
  { icon: Bot, title: 'Chatbot & AI Agents', desc: 'Build sophisticated AI agents that automate complex conversations and business processes.' },
  { icon: FileText, title: 'Automated Patient Discharge Reports', desc: 'Generate accurate, compliant patient discharge summaries automatically using generative AI.' },
]

export default function GenAISolutionFactory() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Gen AI Solution Factory | Ambifo Technology</title>
        <meta name="description" content="Accelerate your Gen AI journey with Ambifo's pre-built, enterprise-grade solutions and accelerators." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Solutions
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Gen AI Solution Factory
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of generative AI with our ready-to-deploy solutions for content creation, customer engagement, and process automation.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl p-7 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-green-600/20 group">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-500">
                  <s.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Deploy Gen AI Today</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">Explore our generative AI solutions and discover what's possible for your business.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="primary" href="/contact-us">
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
