import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Copy, ExternalLink, Mail, MapPin, Phone, Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { CONTACT_INFO, PRODUCTS } from '../data/products';

const INITIAL_FORM = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  marketType: 'Domestic Wholesale',
  productGrade: PRODUCTS[0].name,
  quantityNotes: '',
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [preparedEmail, setPreparedEmail] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const preselectedGrade = searchParams.get('grade');
    if (preselectedGrade) {
      const matched = PRODUCTS.find(
        (p) => p.name.toLowerCase() === preselectedGrade.toLowerCase()
      );
      if (matched) {
        setForm((prev) => ({ ...prev, productGrade: matched.name }));
      }
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your name.';
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      nextErrors.phone = 'Please enter a contact telephone or WhatsApp number.';
    }
    if (!form.quantityNotes.trim() || form.quantityNotes.trim().length < 10) {
      nextErrors.quantityNotes =
        'Please include brief details about your wholesale requirement (minimum 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setPreparedEmail(null);
      return;
    }

    const subject = `Wholesale Cashew Enquiry – ${form.productGrade} (${form.companyName.trim() || form.fullName.trim()})`;
    const bodyLines = [
      'Hello GUBER IMPEX Team,',
      '',
      'I would like to submit a wholesale cashew kernel enquiry with the following details:',
      '',
      `Name: ${form.fullName.trim()}`,
      `Company / Business: ${form.companyName.trim() || 'Not specified'}`,
      `Email: ${form.email.trim()}`,
      `Phone / WhatsApp: ${form.phone.trim()}`,
      `Market Scope: ${form.marketType}`,
      `Cashew Grade of Interest: ${form.productGrade}`,
      '',
      'Enquiry Details:',
      form.quantityNotes.trim(),
      '',
      'Regards,',
      form.fullName.trim(),
    ];

    const bodyText = bodyLines.join('\n');
    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyText)}`;

    setPreparedEmail({ subject, bodyText, mailtoUrl });
    setCopied(false);
    window.location.href = mailtoUrl;
  };

  const handleCopyDraft = async () => {
    if (!preparedEmail) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${CONTACT_INFO.email}\nSubject: ${preparedEmail.subject}\n\n${preparedEmail.bodyText}`
      );
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Contact Us & Wholesale Enquiry"
        description="Contact GUBER IMPEX in Tamil Nadu, India for wholesale cashew kernel enquiries. Call +91 90473 08121 or email muruganexports16@gmail.com."
      />

      {/* Page Header */}
      <section className="border-b border-[#E5DCCB] bg-[#F3EDE2] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
            Wholesale Desk
          </p>
          <h1 className="mt-2 font-editorial text-4xl font-medium text-[#19201C] sm:text-5xl">
            Contact GUBER IMPEX
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#38413C] sm:text-lg">
            Reach us directly by phone or email, or prepare a structured wholesale enquiry below to
            open in your email client.
          </p>
        </div>
      </section>

      <section className="bg-[#FAF7F2] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Direct Contact Details */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="border border-[#E5DCCB] bg-[#1B3B2B] p-8 text-[#FAF7F2]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D6BC82]">
                Direct Supplier Details
              </p>
              <h2 className="mt-2 font-editorial text-2xl font-medium">
                {CONTACT_INFO.companyName}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#D7DFDA]">
                Cashew nut wholesale supplier serving domestic and international buyers.
              </p>

              <dl className="mt-8 space-y-6 border-t border-[#254D39] pt-6">
                <div className="flex items-start gap-3.5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D6BC82]" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D6BC82]">
                      Location
                    </dt>
                    <dd className="mt-1 text-base text-[#FAF7F2]">{CONTACT_INFO.location}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#D6BC82]" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D6BC82]">
                      Telephone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={CONTACT_INFO.phoneHref}
                        className="text-base font-medium text-[#FAF7F2] underline decoration-[#B8934A]/60 underline-offset-4 transition-colors hover:text-[#D6BC82]"
                      >
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#D6BC82]" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D6BC82]">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={CONTACT_INFO.emailHref}
                        className="break-all text-base font-medium text-[#FAF7F2] underline decoration-[#B8934A]/60 underline-offset-4 transition-colors hover:text-[#D6BC82]"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="border border-[#E5DCCB] bg-white p-6">
              <h3 className="font-editorial text-lg font-medium text-[#19201C]">
                Helpful Information to Share
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[#38413C]">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8934A]" />
                  <span>Preferred cashew grade (W240, W320, W440, or Splits 1/2)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8934A]" />
                  <span>Estimated wholesale order volume or recurring schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8934A]" />
                  <span>Delivery region or destination port for international enquiries</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Wholesale Enquiry Form */}
          <div className="border border-[#E5DCCB] bg-white p-6 sm:p-8 lg:col-span-7 lg:p-10">
            <h2 className="font-editorial text-2xl font-medium text-[#19201C] sm:text-3xl">
              Wholesale Enquiry Form
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5C6660]">
              Complete the fields below to prepare an email addressed to{' '}
              <span className="font-medium text-[#19201C]">{CONTACT_INFO.email}</span> in your
              default email application.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[#19201C]"
                  >
                    Your Name <span className="text-[#8A5A32]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.fullName)}
                    className="mt-2 block w-full border border-[#D4C9B6] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#19201C] transition-colors duration-200 focus:border-[#1B3B2B] focus:bg-white focus:outline-none"
                    placeholder="e.g. Karthik Subramanian"
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-[#9E2A2B]">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-[#19201C]"
                  >
                    Company / Business Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={form.companyName}
                    onChange={handleChange}
                    className="mt-2 block w-full border border-[#D4C9B6] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#19201C] transition-colors duration-200 focus:border-[#1B3B2B] focus:bg-white focus:outline-none"
                    placeholder="e.g. Sri Lakshmi Traders"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#19201C]">
                    Email Address <span className="text-[#8A5A32]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    className="mt-2 block w-full border border-[#D4C9B6] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#19201C] transition-colors duration-200 focus:border-[#1B3B2B] focus:bg-white focus:outline-none"
                    placeholder="buyer@company.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-[#9E2A2B]">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#19201C]">
                    Phone / WhatsApp Number <span className="text-[#8A5A32]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    className="mt-2 block w-full border border-[#D4C9B6] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#19201C] transition-colors duration-200 focus:border-[#1B3B2B] focus:bg-white focus:outline-none"
                    placeholder="+91 98XXX XXXXX"
                  />
                  {errors.phone && <p className="mt-1.5 text-xs text-[#9E2A2B]">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="marketType"
                    className="block text-sm font-medium text-[#19201C]"
                  >
                    Market Type
                  </label>
                  <select
                    id="marketType"
                    name="marketType"
                    value={form.marketType}
                    onChange={handleChange}
                    className="mt-2 block w-full border border-[#D4C9B6] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#19201C] transition-colors duration-200 focus:border-[#1B3B2B] focus:bg-white focus:outline-none"
                  >
                    <option value="Domestic Wholesale">Domestic Wholesale (India)</option>
                    <option value="International Wholesale">International Wholesale</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="productGrade"
                    className="block text-sm font-medium text-[#19201C]"
                  >
                    Cashew Grade of Interest
                  </label>
                  <select
                    id="productGrade"
                    name="productGrade"
                    value={form.productGrade}
                    onChange={handleChange}
                    className="mt-2 block w-full border border-[#D4C9B6] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#19201C] transition-colors duration-200 focus:border-[#1B3B2B] focus:bg-white focus:outline-none"
                  >
                    {PRODUCTS.map((product) => (
                      <option key={product.id} value={product.name}>
                        {product.name}
                      </option>
                    ))}
                    <option value="Multiple Cashew Grades">Multiple Cashew Grades</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="quantityNotes"
                  className="block text-sm font-medium text-[#19201C]"
                >
                  Wholesale Requirement Details <span className="text-[#8A5A32]">*</span>
                </label>
                <textarea
                  id="quantityNotes"
                  name="quantityNotes"
                  rows={4}
                  required
                  value={form.quantityNotes}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.quantityNotes)}
                  className="mt-2 block w-full border border-[#D4C9B6] bg-[#FAF7F2] px-4 py-3 text-sm text-[#19201C] focus:border-[#1B3B2B] focus:bg-white focus:outline-none"
                  placeholder="Share your target quantity, destination city or port, packaging preference, or questions for our team."
                />
                {errors.quantityNotes && (
                  <p className="mt-1.5 text-xs text-[#9E2A2B]">{errors.quantityNotes}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E5DCCB] pt-6">
                <p className="text-xs text-[#5C6660]">
                  Submitting validates your details and opens your email client with a pre-filled
                  draft.
                </p>
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 bg-[#1B3B2B] px-7 py-3.5 text-sm font-medium tracking-wide text-[#FAF7F2] transition-colors hover:bg-[#11261B]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Prepare Email Enquiry</span>
                </button>
              </div>
            </form>

            {/* Transparent email-client preparation panel (no fake submission claim) */}
            {preparedEmail && (
              <div
                role="status"
                className="mt-8 border border-[#B8934A] bg-[#FAF7F2] p-6"
              >
                <h3 className="font-editorial text-lg font-medium text-[#19201C]">
                  Email Enquiry Draft Prepared
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#38413C]">
                  Your browser has been instructed to open your default email application addressed
                  to <span className="font-medium">{CONTACT_INFO.email}</span>. Please review and
                  send the email from your mail client to complete your enquiry.
                </p>
                <p className="mt-2 text-xs text-[#5C6660]">
                  If your email application did not open automatically, use the direct link or copy
                  the prepared message below:
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={preparedEmail.mailtoUrl}
                    className="inline-flex items-center gap-2 bg-[#1B3B2B] px-4 py-2 text-xs font-medium text-[#FAF7F2] transition-colors hover:bg-[#11261B]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Open Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="inline-flex cursor-pointer items-center gap-2 border border-[#D4C9B6] bg-white px-4 py-2 text-xs font-medium text-[#19201C] transition-colors hover:border-[#1B3B2B]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#1B3B2B]" aria-hidden="true" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy Enquiry Text</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
