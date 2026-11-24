import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

/**
 * Consistent wholesale call-to-action band directing prospective buyers to GUBER IMPEX contact channels.
 */
export default function ContactCTA({
  heading = 'Discuss Your Wholesale Cashew Requirements',
  subheading = 'Reach out directly to our team in Tamil Nadu, India to discuss grade preferences, trade enquiries, and wholesale supply requirements.',
}) {
  return (
    <section className="border-t border-[#E5DCCB] bg-[#F3EDE2] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 border border-[#E5DCCB] bg-white p-8 sm:p-10 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
              Direct Trade Contact
            </p>
            <h2 className="mt-2 font-editorial text-2xl font-medium text-[#19201C] sm:text-3xl">
              {heading}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#38413C]">{subheading}</p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end">
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <a
                href={CONTACT_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-[#E5DCCB] bg-[#FAF7F2] px-5 py-3 text-sm font-medium text-[#19201C] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#1B3B2B] hover:bg-white"
              >
                <Phone className="h-4 w-4 text-[#1B3B2B]" aria-hidden="true" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-[#1B3B2B] px-6 py-3 text-sm font-medium tracking-wide text-[#FAF7F2] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#11261B] hover:shadow-sm"
              >
                <span>Enquire Online</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <a
              href={CONTACT_INFO.emailHref}
              className="inline-flex items-center gap-2 text-sm text-[#5C6660] transition-colors hover:text-[#1B3B2B]"
            >
              <Mail className="h-4 w-4 text-[#8A5A32]" aria-hidden="true" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
