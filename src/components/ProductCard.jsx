import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable cashew grade card used across Home and Products listings.
 */
export default function ProductCard({ product, variant = 'compact' }) {
  const enquiryPath = `/contact?grade=${encodeURIComponent(product.name)}`;

  if (variant === 'detailed') {
    return (
      <article className="group grid grid-cols-1 overflow-hidden border border-[#E5DCCB] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#B8934A] hover:shadow-[0_14px_34px_-14px_rgba(27,59,43,0.14)] lg:grid-cols-12">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F3EDE2] lg:col-span-5 lg:aspect-auto">
          <img
            src={product.image}
            alt={product.imageAlt}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
          <span className="absolute left-4 top-4 border border-[#B8934A]/50 bg-[#1B3B2B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAF7F2]">
            {product.grade}
          </span>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A5A32]">
              {product.category}
            </p>
            <h2 className="mt-2 font-editorial text-2xl font-medium text-[#19201C] sm:text-3xl">
              {product.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#38413C]">{product.description}</p>

            <div className="mt-6 border-t border-[#E5DCCB] pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C6660]">
                Typical Wholesale Applications
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {product.applications.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#38413C]">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8934A]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5DCCB] pt-6">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#5C6660]">
              Domestic &amp; International Trade Enquiry
            </span>
            <Link
              to={enquiryPath}
              className="group/btn inline-flex items-center gap-2 bg-[#1B3B2B] px-6 py-3 text-sm font-medium tracking-wide text-[#FAF7F2] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#11261B]"
            >
              <span>Enquire Now</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  const productPath = `/products#${product.id}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#E5DCCB] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#B8934A] hover:shadow-[0_12px_28px_-14px_rgba(27,59,43,0.16)]">
      <Link to={productPath} className="flex flex-1 flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F3EDE2]">
          <img
            src={product.image}
            alt={product.imageAlt}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <span className="absolute left-3.5 top-3.5 bg-[#1B3B2B] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FAF7F2]">
            {product.grade}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A5A32]">
              {product.shortTag}
            </p>
            <h3 className="mt-1.5 font-editorial text-xl font-medium text-[#19201C] transition-colors duration-200 group-hover:text-[#1B3B2B]">
              {product.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#38413C]">{product.summary}</p>
          </div>

          <div className="mt-6 border-t border-[#E5DCCB] pt-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3B2B] transition-colors duration-200 group-hover:text-[#8A5A32]">
              <span>View Product Details</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
