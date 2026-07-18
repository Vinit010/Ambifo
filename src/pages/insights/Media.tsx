import { motion } from 'framer-motion'
import { ArrowRight, Play, Newspaper, Mic } from 'lucide-react'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

const mediaItems = [
  { icon: Play, type: 'Video', title: 'Ambifo at AWS re:Invent 2025', desc: 'Our experts discuss the latest cloud innovations and AI advancements from the premier cloud computing conference.', color: 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white' },
  { icon: Newspaper, type: 'Press Release', title: 'Ambifo Recognised as Bootstrap Champ at ET Startup Awards 2025', desc: 'Economic Times recognizes Ambifo for exceptional growth and innovation in the cloud and AI space.', color: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' },
  { icon: Mic, type: 'Podcast', title: 'The Future of AI in Enterprise', desc: 'Listen to our leadership team discuss how generative AI is reshaping enterprise technology strategies.', color: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' },
  { icon: Play, type: 'Webinar', title: 'Cloud Migration Best Practices', desc: 'A comprehensive guide to planning and executing successful cloud migration projects.', color: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white' },
]

export default function Media() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Media | Ambifo Technology</title>
        <meta name="description" content="Videos, press releases, podcasts, and webinars from Ambifo Technology." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Media
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Media
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Watch, listen, and read the latest from Ambifo — including videos, press releases, podcasts, and webinars.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {mediaItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-blue-600/20 group">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 block font-montserrat">{item.type}</span>
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Stay Updated</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">Follow Ambifo for the latest insights on cloud, AI, and digital transformation.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="primary" href="/contact-us">
              Subscribe <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
