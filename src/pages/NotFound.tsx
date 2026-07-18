import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white font-lato">
      <Helmet>
        <title>Page Not Found | Ambifo Technology</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-8xl md:text-9xl font-bold text-navy-900/10 font-montserrat">404</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mb-4"
        >
          Page Not Found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-lg mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-montserrat"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 border border-gray-300 text-navy-900 font-semibold px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-montserrat"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
