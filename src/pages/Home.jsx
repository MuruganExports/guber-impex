import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe2, MessageSquare, PackageCheck } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import ProductCard from '../components/ProductCard';
import ContactCTA from '../components/ContactCTA';
import Reveal from '../components/Reveal';
import { CONTACT_INFO, PRODUCTS } from '../data/products';

const WHOLESALE_REASONS = [
  {
    icon: PackageCheck,
    title: 'Grade-Specific Selection',
    description:
      'Focused wholesale supply across core kernel grades—W240, W320, W440, and Cashew Splits (1/2)—aligned with trade buyer requirements.',
  },
  {
    icon: Globe2,
    title: 'Domestic & International Focus',
    description:
      'Structured from Tamil Nadu, India to support wholesale enquiries from both regional domestic distributors and international importers.',
  },
  {
    icon: CheckCircle2,
    title: 'Careful Quality Attention',
    description:
      'Committed to clean, intact, naturally appealing kernels and transparent grading expectations at every stage of wholesale discussion.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Trade Communication',
    description:
      'Speak directly with GUBER IMPEX by phone or email for straightforward trade dialogue without intermediaries.',
  },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Quality Cashew Kernels for Wholesale Markets"
        description="GUBER IMPEX is a cashew nut wholesale supplier in Tamil Nadu, India supplying W240, W320, W440, and Cashew Splits (1/2) for domestic and international wholesale buyers."
      />

      {/* Hero Section */}
      <section className="border-b border-[#E5DCCB] bg-[#FAF7F2]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 border border-[#E5DCCB] bg-[#F3EDE2] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A5A32]">
              <span>{CONTACT_INFO.companyName}</span>
              <span className="text-[#B8934A]" aria-hidden="true">
                ·
              </span>
              <span>{CONTACT_INFO.location}</span>
            </div>

            <h1 className="mt-6 font-editorial text-4xl font-medium leading-[1.15] tracking-tight text-[#19201C] sm:text-5xl">
              Quality Cashew Kernels for Wholesale Markets
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#38413C] sm:text-lg">
              GUBER IMPEX is a dedicated cashew nut wholesale supplier based in Tamil Nadu, India,
              serving domestic and international buyers seeking dependable whole and split cashew
              kernel grades.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 bg-[#1B3B2B] px-7 py-3.5 text-sm font-medium tracking-wide text-[#FAF7F2] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#11261B] hover:shadow-sm"
              >
                <span>Explore Cashew Grades</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-[#1B3B2B] bg-transparent px-7 py-3.5 text-sm font-medium tracking-wide text-[#1B3B2B] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#F3EDE2]"
              >
                Enquire for Wholesale
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-[#E5DCCB] pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C6660]">
                  Core Grades
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#19201C]">
                  W240, W320, W440 &amp; Splits
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C6660]">
                  Trade Scope
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#19201C]">
                  Domestic &amp; International
                </dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C6660]">
                  Origin Base
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#19201C]">{CONTACT_INFO.location}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden border border-[#E5DCCB] bg-[#F3EDE2] p-2 sm:p-3">
              <img
                src="/images/hero-cashews.jpg"
                alt="Raw whole ivory-white cashew kernels in a wooden bowl on woven natural jute"
                decoding="async"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="border-b border-[#E5DCCB] bg-[#F3EDE2] py-16 lg:py-20">
        <Reveal className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
              About GUBER IMPEX
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-medium leading-snug text-[#19201C]">
              A Focused Cashew Wholesale Partner Built on Clarity and Care
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-[#38413C] lg:col-span-7">
            <p>
              Operating from Tamil Nadu, India, GUBER IMPEX is established to supply wholesale cashew
              kernels to food businesses, dry-fruit distributors, confectioners, and commercial
              buyers across domestic and international markets.
            </p>
            <p>
              As a focused wholesale enterprise, we prioritise honest communication, careful attention
              to kernel grade consistency, and straightforward buyer support from initial enquiry
              onward.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1B3B2B] transition-colors duration-200 hover:text-[#8A5A32]"
              >
                <span>Read More About Us</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Featured Cashew Grades */}
      <section className="border-b border-[#E5DCCB] bg-[#FAF7F2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-6 border-b border-[#E5DCCB] pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
                Product Portfolio
              </p>
              <h2 className="mt-2 font-editorial text-3xl font-medium text-[#19201C] sm:text-4xl">
                Featured Cashew Grades
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1B3B2B] transition-colors duration-200 hover:text-[#8A5A32]"
            >
              <span>View All Grade Details</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product, idx) => (
              <Reveal key={product.id} delay={idx * 60}>
                <ProductCard product={product} variant="compact" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Enquire With Us */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
              Wholesale Approach
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-medium text-[#19201C] sm:text-4xl">
              Why Trade Buyers Enquire With GUBER IMPEX
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#38413C]">
              Every wholesale relationship begins with clear expectations on kernel grade, trade
              requirements, and responsive communication.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHOLESALE_REASONS.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <Reveal key={reason.title} delay={idx * 60}>
                  <div className="h-full border border-[#E5DCCB] bg-[#FAF7F2] p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#B8934A] hover:shadow-[0_10px_28px_-14px_rgba(27,59,43,0.12)]">
                    <div className="inline-flex h-10 w-10 items-center justify-center border border-[#E5DCCB] bg-white text-[#1B3B2B]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-editorial text-lg font-medium text-[#19201C]">
                      {reason.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#38413C]">
                      {reason.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
