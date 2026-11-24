import { HeartHandshake, Leaf, ShieldCheck, Sparkles, Utensils, Zap } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import ContactCTA from '../components/ContactCTA';
import Reveal from '../components/Reveal';
import { NUTRIENT_HIGHLIGHTS, NUTRITIONAL_NOTES } from '../data/benefits';

const ICON_MAP = {
  protein: Utensils,
  fats: HeartHandshake,
  minerals: Sparkles,
  antioxidants: ShieldCheck,
  energy: Zap,
  balance: Leaf,
};

export default function HealthBenefits() {
  return (
    <>
      <PageMeta
        title="Health Benefits of Cashew Kernels"
        description="Explore the nutritional profile of natural cashew kernels including plant-based protein, healthy unsaturated fats, essential minerals, antioxidants, and balanced consumption."
      />

      {/* Page Header */}
      <section className="border-b border-[#E5DCCB] bg-[#F3EDE2] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
            Nutritional Profile
          </p>
          <h1 className="mt-2 font-editorial text-4xl font-medium text-[#19201C] sm:text-5xl">
            Nutritional Value of Cashew Kernels
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#38413C] sm:text-lg">
            Cashew kernels (<em>Anacardium occidentale</em>) are valued globally not only for their
            creamy culinary versatility, but also for their naturally dense combination of plant
            protein, unsaturated fats, and essential dietary minerals.
          </p>
        </div>
      </section>

      {/* Editorial Intro + Food Photography */}
      <section className="border-b border-[#E5DCCB] bg-[#FAF7F2] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-6">
            <div className="overflow-hidden border border-[#E5DCCB] bg-white p-2.5">
              <img
                src="/images/health-nutrition.jpg"
                alt="Raw whole white cashew kernels served in a clean ceramic dish alongside fresh green sprigs"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
              />
            </div>
          </Reveal>

          <Reveal delay={90} className="space-y-5 lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
              Whole-Food Nutrition
            </p>
            <h2 className="font-editorial text-3xl font-medium text-[#19201C]">
              Naturally Nutrient-Dense Culinary Ingredients
            </h2>
            <p className="text-base leading-relaxed text-[#38413C]">
              Whether enjoyed lightly roasted, blended into dairy-free culinary bases, or incorporated
              into baked goods and confections, cashew kernels offer a balanced macronutrient and
              micronutrient profile suited to everyday nourishment.
            </p>
            <div className="space-y-3 border-t border-[#E5DCCB] pt-5">
              {NUTRITIONAL_NOTES.map((note) => (
                <div key={note.label}>
                  <h3 className="font-sans text-sm font-semibold text-[#19201C]">{note.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5C6660]">{note.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Six Core Nutritional Areas */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A5A32]">
              Key Dietary Components
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-medium text-[#19201C]">
              Six Pillars of Cashew Nutrition
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NUTRIENT_HIGHLIGHTS.map((item, idx) => {
              const Icon = ICON_MAP[item.id] || Leaf;
              return (
                <Reveal key={item.id} delay={idx * 60}>
                  <article className="flex h-full flex-col border border-[#E5DCCB] bg-[#FAF7F2] p-7 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#B8934A] hover:shadow-[0_10px_28px_-14px_rgba(27,59,43,0.12)]">
                    <div className="inline-flex h-10 w-10 items-center justify-center border border-[#E5DCCB] bg-white text-[#1B3B2B]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A5A32]">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-1.5 font-editorial text-xl font-medium text-[#19201C]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#38413C]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-10 border-l-2 border-[#B8934A] bg-[#FAF7F2] px-5 py-4 text-xs leading-relaxed text-[#5C6660]">
            Nutritional note: The information above summarises general dietary characteristics of
            natural cashew kernels and is provided for informational purposes only. Cashews are a
            nutritious food ingredient within a balanced diet and are not intended to diagnose,
            treat, cure, or prevent any medical condition.
          </p>
        </div>
      </section>

      <ContactCTA
        heading="Sourcing Cashew Kernels for Your Market?"
        subheading="Get in touch with GUBER IMPEX to enquire about W240, W320, W440, and Cashew Splits (1/2) for wholesale trade."
      />
    </>
  );
}
