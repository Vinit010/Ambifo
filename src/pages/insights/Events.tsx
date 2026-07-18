import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

const events = [
  { title: 'AWS re:Invent 2026', date: 'Nov 30 - Dec 4, 2026', location: 'Las Vegas, NV', type: 'Conference', desc: 'Join Ambifo at the premier cloud computing conference. Visit our booth to discuss your cloud and AI strategy.' },
  { title: 'Cloud & AI Innovation Summit', date: 'October 15, 2026', location: 'Virtual', type: 'Webinar', desc: 'An exclusive virtual event featuring Ambifo experts discussing the latest trends in cloud and AI innovation.' },
  { title: 'Generative AI Workshop', date: 'September 22, 2026', location: 'Bangalore, India', type: 'Workshop', desc: 'Hands-on workshop on implementing generative AI solutions for enterprise use cases.' },
  { title: 'Digital Transformation Roundtable', date: 'August 18, 2026', location: 'Singapore', type: 'Roundtable', desc: 'An exclusive roundtable with industry leaders on navigating digital transformation challenges.' },
  { title: 'Women in Tech Leadership Forum', date: 'July 12, 2026', location: 'Hyderabad, India', type: 'Forum', desc: 'Ambifo hosts a forum celebrating women leaders in technology and fostering inclusive innovation.' },
]

const typeColors: Record<string, string> = {
  Conference: 'bg-blue-50 text-blue-700 border-blue-100',
  Webinar: 'bg-purple-50 text-purple-700 border-purple-100',
  Workshop: 'bg-green-50 text-green-700 border-green-100',
  Roundtable: 'bg-amber-50 text-amber-700 border-amber-100',
  Forum: 'bg-pink-50 text-pink-700 border-pink-100',
}

export default function Events() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Events & Webinars | Ambifo Technology</title>
        <meta name="description" content="Upcoming events, webinars, and workshops from Ambifo Technology." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Upcoming Events
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Events & Webinars
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Join us at upcoming events, webinars, and workshops to learn, connect, and explore the future of cloud and AI.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 md:p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-blue-600/20 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${typeColors[event.type] || 'bg-blue-50 text-blue-700 border-blue-100'}`}>{event.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-2 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">{event.desc}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-blue-600" /> {event.date}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-blue-600" /> {event.location}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Link to="/contact-us" className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                      Register <ExternalLink className="w-4 h-4" />
                    </Link>
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
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Host an Event With Us</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">Interested in collaborating on an event or webinar? Let's make it happen.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="primary" href="/contact-us">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
