import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO, PRODUCTS } from '../data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#11261B] bg-[#1B3B2B] text-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand summary */}
          <div className="lg:col-span-4">
            <Link to="/" aria-label="GUBER IMPEX Home">
              <Logo variant="light" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#D7DFDA]">
              Cashew nut wholesale supplier based in {CONTACT_INFO.location}, structured to serve
              domestic and international trade buyers with grade-specific cashew kernels.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#D6BC82]">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#D7DFDA]">
              <li>
                <Link to="/" className="transition-colors hover:text-[#FAF7F2]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-[#FAF7F2]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition-colors hover:text-[#FAF7F2]">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/health-benefits" className="transition-colors hover:text-[#FAF7F2]">
                  Health Benefits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-[#FAF7F2]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Cashew Grades */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#D6BC82]">
              Wholesale Grades
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#D7DFDA]">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/contact?grade=${encodeURIComponent(product.name)}`}
                    className="transition-colors hover:text-[#FAF7F2]"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#D6BC82]">
              Wholesale Enquiries
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#D7DFDA]">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D6BC82]" aria-hidden="true" />
                <span>{CONTACT_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#D6BC82]" aria-hidden="true" />
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="transition-colors hover:text-[#FAF7F2]"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#D6BC82]" aria-hidden="true" />
                <a
                  href={CONTACT_INFO.emailHref}
                  className="break-all transition-colors hover:text-[#FAF7F2]"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#254D39] pt-8 text-xs text-[#B6C4BC] sm:flex-row sm:items-center">
          <p>&copy; {currentYear} {CONTACT_INFO.companyName}. All rights reserved.</p>
          <p>Wholesale trade enquiries only · Domestic &amp; International Supply</p>
        </div>
      </div>
    </footer>
  );
}
