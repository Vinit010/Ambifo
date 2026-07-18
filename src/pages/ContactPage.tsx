import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle, ArrowRight, Sparkles, Globe, Headphones, Zap, ChevronDown, HelpCircle } from 'lucide-react'
import Button from '../components/common/Button'
import { Helmet } from 'react-helmet-async'

const offices = [
  { city: 'Bangalore (HQ)', address: 'Building No 674, 18th Main, 3rd Phase, Front of New Land ISRO Quarter, Domlur, Bangalore - 560071', phone: '+91 9148419502', email: 'support@ambifo.com', hours: 'Mon - Fri, 9:00 AM - 6:00 PM IST', flag: '🇮🇳' },
  { city: 'Nagpur', address: 'G/1, Mahalaxmi Residency, Narsala, Nagpur, 440034, Maharashtra', phone: '+91 9148419502', email: 'support@ambifo.com', hours: 'Mon - Fri, 9:00 AM - 6:00 PM IST', flag: '🇮🇳' },
]

const features = [
  { icon: Zap, title: 'Fast Response', desc: 'We reply within 24 hours to every inquiry.', color: 'from-amber-500 to-orange-600' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'A assigned point of contact for your project.', color: 'from-blue-500 to-indigo-600' },
  { icon: Globe, title: 'Global Delivery', desc: 'Onshore, offshore, and hybrid engagement models.', color: 'from-teal-500 to-emerald-600' },
  { icon: Sparkles, title: 'Free Consultation', desc: 'Complimentary 30-min discovery call with an expert.', color: 'from-purple-500 to-pink-600' },
]

const faqs = [
  { q: 'What services does Ambifo offer?', a: 'We offer Cloud Migration, DevOps, AI & Data Analytics, App Modernization, Generative AI, and Cybersecurity consulting for enterprises across industries.' },
  { q: 'How quickly can you start a project?', a: 'We can kick off most projects within 1-2 weeks. For urgent needs, we offer accelerated onboarding with dedicated teams.' },
  { q: 'Do you work with startups or only enterprises?', a: 'We work with both. Our flexible engagement models scale from early-stage startups to Fortune 500 enterprises.' },
  { q: 'What is the typical project engagement model?', a: 'We offer fixed-price, time & material, and dedicated team models. We will recommend the best fit based on your requirements during the discovery call.' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', message: '' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  return (
    <div className="font-lato">
      <Helmet>
        <title>Contact Us | Ambifo Technology</title>
        <meta name="description" content="Get in touch with Ambifo Technology for cloud consulting, DevOps, and AI solutions." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-500/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600/15 border border-blue-500/20 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            <MessageSquare className="w-4 h-4" /> Let's Connect
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat mb-6 leading-tight">
            Ready to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Transform?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Whether you have a question, need a quote, or want to discuss your cloud strategy — we're here to help.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" /> +91 9148419502</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" /> support@ambifo.com</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" /> Mon–Fri, 9AM–6PM IST</span>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="relative -mt-10 z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-navy-900 font-montserrat text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Form + Offices */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/40 border border-gray-100 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-[100px]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-tr-[80px]" />

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 font-montserrat mb-3">Message Sent!</h3>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">Thank you for reaching out. Our team will review your message and get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', company: '', message: '' }) }}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors font-montserrat"
                    >
                      Send another message <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-navy-900 font-montserrat">Send a Message</h2>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-8 ml-[52px]">Fill out the form and we'll get back to you promptly.</p>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">First Name *</label>
                          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/30'} outline-none transition-all text-sm`} placeholder="John" />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Last Name *</label>
                          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/30'} outline-none transition-all text-sm`} placeholder="Doe" />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.lastName}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Email *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/30'} outline-none transition-all text-sm`} placeholder="john@company.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Company</label>
                        <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-blue-50/30 outline-none transition-all text-sm" placeholder="Company name" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Message *</label>
                        <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/30'} outline-none transition-all resize-none text-sm`} placeholder="Tell us about your project or question..." />
                        {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
                      </div>
                      <Button className="w-full justify-center group" type="submit">
                        Send Message <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                      <p className="text-center text-xs text-gray-400">We'll never share your information. Read our <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.</p>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Offices — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-2xl font-bold text-navy-900 font-montserrat mb-6">Our Offices</h2>
              </motion.div>

              {offices.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-[60px] group-hover:from-blue-500/10 transition-colors" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 font-montserrat">{office.flag} {office.city}</h3>
                  </div>
                  <div className="space-y-2.5 text-gray-600 text-sm">
                    <p className="flex items-start gap-2.5"><MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" /> <span className="leading-relaxed">{office.address}</span></p>
                    <p className="flex items-center gap-2.5"><Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {office.phone}</p>
                    <p className="flex items-center gap-2.5"><Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {office.email}</p>
                    <p className="flex items-center gap-2.5"><Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {office.hours}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Headphones className="w-5 h-5 text-cyan-300" />
                    <h4 className="font-bold font-montserrat">Need Immediate Help?</h4>
                  </div>
                  <p className="text-blue-100 text-sm mb-4 leading-relaxed">Call us directly or schedule a free 30-minute consultation with one of our cloud experts.</p>
                  <a href="tel:+919148419502" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border border-white/10">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-montserrat">
              <HelpCircle className="w-4 h-4" /> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 ${openFaq === i ? 'bg-blue-50/50 border-blue-200 shadow-md shadow-blue-100/30' : 'bg-gray-50 border-gray-100 hover:border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-navy-900 font-montserrat text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-blue-500' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
            Start Your Cloud Journey Today
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">
            Book a free consultation call with our experts and discover how Ambifo can accelerate your digital transformation.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="tel:+919148419502" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0">
              <Phone className="w-4 h-4" /> Call Us Now
            </Button>
            <Button variant="outline" href="/services/strategy-and-advisory" className="border-white/20 text-white hover:bg-white/10">
              Explore Services <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
