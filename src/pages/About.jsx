import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import ContactCTA from '../components/ContactCTA';
import Reveal from '../components/Reveal';
import { CONTACT_INFO } from '../data/products';

const COMMITMENTS = [
  {
    title: 'Attention to Kernel Integrity',
    detail:
      'Focus on clean, properly graded whole and split cashew kernels suited for wholesale distribution and food manufacturing.',
  },
  {
    title: 'Transparent Trade Dialogue',
    detail:
      'Clear, factual communication regarding grade selection, enquiry volumes, and buyer requirements without exaggerated claims.',
  },
  {
    title: 'Domestic & International Orientation',
    detail:
      'Positioned from Tamil Nadu, India to engage constructively with both regional Indian buyers and international wholesale importers.',
  },
  {
    title: 'Customer-First Responsiveness',
    detail:
      'Direct phone and email access to discuss product suitability, sample requests, and ongoing wholesale supply needs.',
  },
];

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about GUBER IMPEX, a cashew nut wholesale supplier in Tamil Nadu, India focused on grade-specific cashew kernels for domestic and international markets."
      />

      {/* Page Header */}
      <section className="border-b border-[#E5DCCB] bg-[#F3EDE2] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
            Company Profile
          </p>
          <h1 className="mt-2 font-editorial text-4xl font-medium text-[#19201C] sm:text-5xl">
            About GUBER IMPEX
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#38413C] sm:text-lg">
            A newly established cashew nut wholesale supplier based in {CONTACT_INFO.location},
            dedicated to supplying graded cashew kernels for domestic and international wholesale
            buyers.
          </p>
        </div>
      </section>

      {/* Business Overview & Origin */}
      <section className="border-b border-[#E5DCCB] bg-[#FAF7F2] py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="space-y-5 text-base leading-relaxed text-[#38413C] lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
              Business Overview
            </p>
            <h2 className="font-editorial text-3xl font-medium text-[#19201C]">
              Cashew Kernels for Wholesale Markets
            </h2>
            <p>
              {CONTACT_INFO.companyName} operates from Tamil Nadu, India—one of the country&apos;s
              established cashew-trading regions—with a clear commercial focus on wholesale cashew
              kernel supply.
            </p>
            <p>
              We supply essential commercial grades including W240, W320, W440, and Cashew Splits
              (1/2), tailored for wholesalers, retail repackers, hospitality suppliers, bakeries,
              and food manufacturers.
            </p>
            <p>
              As a newly established enterprise, we believe long-term trade relationships are earned
              through dependable grade accuracy, clear communication, and consistent attention to
              buyer requirements rather than overstated promises.
            </p>

            <div className="pt-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 bg-[#1B3B2B] px-6 py-3 text-sm font-medium text-[#FAF7F2] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#11261B]"
              >
                <span>View Wholesale Cashew Grades</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            <div className="overflow-hidden border border-[#E5DCCB] bg-white p-2 transition-colors duration-300 hover:border-[#B8934A]">
              <img
                src="/images/about-sourcing.jpg"
                alt="Fresh cashew nuts growing on a natural cashew tree branch"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
              />
            </div>
            <div className="overflow-hidden border border-[#E5DCCB] bg-white p-2 transition-colors duration-300 hover:border-[#B8934A]">
              <img
                src="/images/wholesale-supply.jpg"
                alt="Close-up of sorted raw white cashew kernels ready for wholesale inspection"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality & Customer Focus */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
              Operating Principles
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-medium text-[#19201C]">
              Commitment to Quality &amp; Buyer Trust
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#38413C]">
              Our wholesale approach is centred on practical trade discipline—supporting buyers with
              clear grade information and responsive enquiry handling.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {COMMITMENTS.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 70}>
                <div className="flex h-full gap-4 border border-[#E5DCCB] bg-[#FAF7F2] p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#B8934A] hover:shadow-[0_10px_28px_-14px_rgba(27,59,43,0.12)]">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#1B3B2B] text-[#FAF7F2]">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-lg font-medium text-[#19201C]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#38413C]">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        heading="Connect With GUBER IMPEX"
        subheading="For wholesale product enquiries, grade availability discussions, or trade introductions, contact our team directly."
      />
    </>
  );
}
