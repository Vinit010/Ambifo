import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

const blogPosts = [
  { title: 'Enterprise Adoption Starts Where Most AI Demos End', category: 'Blogs', date: 'July 10, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/69f9b215e8aab84737da770c_governed_enterprise_data_access.jpg' },
  { title: 'The Question Took Two Seconds. Safely Joining Five Systems, Masking Sensitive Fields...', category: 'Blogs', date: 'May 29, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/69f9b215e8aab84737da770c_governed_enterprise_data_access.jpg' },
  { title: 'The Last-Mile Problem in Enterprise Data Access', category: 'Blogs', date: 'May 5, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/69f9b215e8aab84737da770c_governed_enterprise_data_access.jpg' },
  { title: 'Enterprise RAG Application for Knowledge Discovery and Proposal Automation', category: 'Blogs', date: 'February 9, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/6989a12d969c509c69a81144_enterprise_document_intelligence.jpg' },
  { title: 'From Monolith to Modern: What it took to Modernize a decade old Healthcare RCM platform', category: 'Blogs', date: 'September 5, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/68ba8fe7ea3eeda1ab98f761_from_monolith_to_modern.jpg' },
  { title: 'How Ambifo Uses Data-Driven Delivery to Engineer Project Success', category: 'Blogs', date: 'August 29, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/68b184b33de0f71d10173b57_Data-Driven%20Delivery%20Framework.jpg' },
  { title: 'Accelerating AI Adoption in the Enterprise — A Tactical Look at Model Context Protocol (MCP)', category: 'Blogs', date: 'June 16, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/685056fb3c608b854b7befde_blue-digital-background-with-letters-x-it.jpg' },
  { title: "BrokerReady's Complete Cloud Pivot: From VMware Lock-In to AWS-Driven Innovation", category: 'Blogs', date: 'May 28, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/6836f0b1b9055dc3cfdf49da_computer-screen-with-cloud-it-blue-background-with-words-cloud-middle%20(1).jpg' },
  { title: 'Top 3 Cloud Computing Trends for AWS Customers in 2025', category: 'Blogs', date: 'May 19, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/682b44641ba3afad3a5eac5d_blog-thumb-banner.jpg' },
  { title: "Ambifo's EGIRA Framework — Powering Enterprise General Intelligence", category: 'Blogs', date: 'May 17, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/683199431bd80c3b08cb3ccd_digital-representation-interconnected-data-neural-networks%20(1).jpg' },
  { title: "India's Space Tech Revolution — AWS & Ambifo Unlocking a New Era", category: 'Blogs', date: 'March 28, 2025', image: 'https://cdn.prod.website-files.com/65d499dab6da3026b1aeca58/68a2f413259fd242a0fa57d2_satellite-with-sun-background.jpg' },
]

export default function Blog() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Blog | Ambifo Technology</title>
        <meta name="description" content="Thought leadership and insights on cloud computing, AI, data analytics, and digital transformation." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Insights
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Blog Posts
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Thought leadership and insights on cloud computing, AI, data analytics, and digital transformation.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500 group"
              >
                <Link to="/insights-resources/blog-posts" className="block">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-7">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-montserrat">{post.category}</span>
                    <h3 className="text-lg font-semibold text-navy-900 font-montserrat mt-2 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Never Miss an Update</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">Subscribe to our blog for the latest insights delivered to your inbox.</motion.p>
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
