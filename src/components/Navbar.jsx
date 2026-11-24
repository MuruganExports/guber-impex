import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO } from '../data/products';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Health Benefits', to: '/health-benefits' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm font-medium tracking-wide transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-[#B8934A] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isActive
        ? 'text-[#1B3B2B] after:scale-x-100'
        : 'text-[#38413C] hover:text-[#1B3B2B] after:scale-x-0 hover:after:scale-x-100'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[#E5DCCB] bg-[#FAF7F2]/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_6px_24px_-12px_rgba(25,32,28,0.12)]' : ''
      }`}
    >
      {/* Subtle trade info bar */}
      <div className="border-b border-[#11261B] bg-[#1B3B2B] text-[#FAF7F2]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="tracking-wide text-[#E5DCCB]">
            Cashew Nut Wholesale Supplier · {CONTACT_INFO.location}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-[#FAF7F2] transition-colors duration-200 hover:text-[#D6BC82]"
            >
              <Phone className="h-3.5 w-3.5 text-[#D6BC82]" aria-hidden="true" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <span className="hidden text-[#5C6660] sm:inline" aria-hidden="true">
              |
            </span>
            <a
              href={CONTACT_INFO.emailHref}
              className="hidden font-medium text-[#FAF7F2] transition-colors duration-200 hover:text-[#D6BC82] sm:inline"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="GUBER IMPEX Home" onClick={() => setMobileOpen(false)}>
          <Logo variant="dark" />
        </Link>

        <nav aria-label="Primary Navigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-[#1B3B2B] bg-[#1B3B2B] px-5 py-2.5 text-sm font-medium tracking-wide text-[#FAF7F2] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#11261B] hover:shadow-sm"
          >
            Wholesale Enquiry
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded border border-[#E5DCCB] p-2 text-[#1B3B2B] transition-colors duration-200 hover:bg-[#F3EDE2] md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Smooth collapsible mobile menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          mobileOpen ? 'grid-rows-[1fr] border-t border-[#E5DCCB] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden bg-[#FAF7F2]">
          {mobileOpen && (
            <div className="px-4 pb-6 pt-4">
              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
                {NAV_LINKS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? 'border-l-2 border-[#B8934A] bg-[#F3EDE2] text-[#1B3B2B]'
                          : 'text-[#38413C] hover:bg-[#F3EDE2] hover:text-[#1B3B2B]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-4 border-t border-[#E5DCCB] pt-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full bg-[#1B3B2B] px-4 py-3 text-center text-sm font-medium text-[#FAF7F2] transition-colors duration-200 hover:bg-[#11261B]"
                >
                  Send Wholesale Enquiry
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
