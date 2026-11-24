/**
 * Reusable GUBER IMPEX brand logo featuring a minimalist cashew kernel emblem
 * and editorial wordmark. Works across light and dark backgrounds.
 */
export default function Logo({ variant = 'dark', showSubtitle = true, className = '' }) {
  const isLightOnDark = variant === 'light';

  const emblemBg = isLightOnDark ? '#FAF7F2' : '#1B3B2B';
  const kernelFill = isLightOnDark ? '#1B3B2B' : '#FAF7F2';
  const goldStroke = '#B8934A';
  const titleColor = isLightOnDark ? 'text-[#FAF7F2]' : 'text-[#19201C]';
  const subtitleColor = isLightOnDark ? 'text-[#D6BC82]' : 'text-[#8A5A32]';

  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="52" height="52" rx="11" fill={emblemBg} />
        <rect
          x="1"
          y="1"
          width="50"
          height="50"
          rx="10"
          stroke={goldStroke}
          strokeOpacity={isLightOnDark ? '0.45' : '0.35'}
          strokeWidth="1"
        />
        <path
          d="M29.8 11.5C21.1 11.5 14.5 18.4 14.5 26.7C14.5 33.8 19.4 39.5 26 39.5C30.1 39.5 32.9 37.4 32.9 34.5C32.9 31.8 30.5 30.7 28.2 30C25.7 29.2 24 27.9 24 25.2C24 21.9 26.8 19.7 30.4 19.7C34 19.7 36.7 21.6 38 19.2C39.2 16.9 35.8 11.5 29.8 11.5Z"
          fill={kernelFill}
        />
        <path
          d="M29 16C24.4 16 20.8 19.7 20.8 24.3"
          stroke={goldStroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-editorial text-lg font-semibold tracking-[0.09em] sm:text-xl ${titleColor}`}
        >
          GUBER IMPEX
        </span>
        {showSubtitle && (
          <span
            className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${subtitleColor}`}
          >
            Cashew Wholesale
          </span>
        )}
      </span>
    </span>
  );
}
