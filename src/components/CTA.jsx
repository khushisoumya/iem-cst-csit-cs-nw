import { ArrowRight, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto relative bg-blue-900 rounded-2xl overflow-hidden border border-brand-blue shadow-sm shadow-blue-300/40">
        <GraduationCap
          className="absolute right-6 top-1/2 hidden w-40 h-40 -translate-y-1/2 text-white/10 sm:block"
          strokeWidth={1}
        />
        <div className="relative flex flex-col items-center justify-between gap-6 p-6 sm:flex-row sm:p-8 lg:p-10">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-sm leading-relaxed text-blue-50">
              Join the IEM family and become part of a legacy of academic
              excellence, innovation, and industry-focused education. Take the
              first step towards building a successful career in computing with us.
            </p>
          </div>
          <div className="w-full shrink-0 sm:w-auto">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-brand-blue shadow-lg shadow-blue-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA