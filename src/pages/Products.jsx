import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import ProductCard from '../components/ProductCard';
import ContactCTA from '../components/ContactCTA';
import Reveal from '../components/Reveal';
import { CONTACT_INFO, PRODUCTS } from '../data/products';

export default function Products() {
  return (
    <>
      <PageMeta
        title="Cashew Products & Wholesale Grades"
        description="Explore wholesale cashew kernel grades from GUBER IMPEX: W240 Cashew Kernels, W320 Cashew Kernels, W440 Cashew Kernels, and Cashew Splits (1/2)."
        keywords="W240 cashew kernels, W320 cashew kernels, W440 cashew kernels, cashew splits 1/2, wholesale cashew grades India, bulk white whole cashew kernels"
        canonicalPath="/products"
        image="/images/product-w240.jpg"
        imageAlt="W240 grade raw white whole cashew kernels supplied by GUBER IMPEX"
      />

      {/* Page Header */}
      <section className="border-b border-[#E5DCCB] bg-[#F3EDE2] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
            Wholesale Catalogue
          </p>
          <h1 className="mt-2 font-editorial text-4xl font-medium text-[#19201C] sm:text-5xl">
            Cashew Kernel Grades
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#38413C] sm:text-lg">
            GUBER IMPEX supplies four core cashew kernel categories for domestic and international
            wholesale buyers. Select any grade below to initiate a direct wholesale enquiry.
          </p>
        </div>
      </section>

      {/* Quick Grade Index */}
      <section className="border-b border-[#E5DCCB] bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C6660]">
              Grades Supplied:
            </span>
            {PRODUCTS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="border border-[#E5DCCB] bg-[#FAF7F2] px-3 py-1 text-xs font-semibold text-[#1B3B2B] transition-all duration-200 hover:border-[#1B3B2B] hover:bg-[#F3EDE2]"
              >
                {item.grade}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#38413C]">
            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[#1B3B2B]"
            >
              <Phone className="h-3.5 w-3.5 text-[#8A5A32]" aria-hidden="true" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a
              href={CONTACT_INFO.emailHref}
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[#1B3B2B]"
            >
              <Mail className="h-3.5 w-3.5 text-[#8A5A32]" aria-hidden="true" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Four Product Categories */}
      <section className="bg-[#FAF7F2] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          {PRODUCTS.map((product, idx) => (
            <Reveal key={product.id} delay={idx === 0 ? 0 : 70}>
              <div id={product.id} className="scroll-mt-32">
                <ProductCard product={product} variant="detailed" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Wholesale Trade Note */}
      <section className="border-t border-[#E5DCCB] bg-white py-14 lg:py-16">
        <Reveal className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8">
            <h2 className="font-editorial text-2xl font-medium text-[#19201C] sm:text-3xl">
              Wholesale Supply &amp; Trade Enquiries
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#38413C]">
              All orders are handled strictly on a wholesale enquiry basis rather than online retail
              checkout. Contact {CONTACT_INFO.companyName} directly to discuss grade preferences,
              current availability, packaging requirements, and domestic or international dispatch
              terms.
            </p>
          </div>
          <div className="flex lg:col-span-4 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#1B3B2B] px-7 py-3.5 text-sm font-medium tracking-wide text-[#FAF7F2] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#11261B] hover:shadow-sm"
            >
              Request Wholesale Discussion
            </Link>
          </div>
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
}
