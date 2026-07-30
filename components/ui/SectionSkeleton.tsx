/**
 * Skeleton fallbacks for dynamically-imported sections.
 * Each component mirrors the approximate height/shape of its real section.
 */

const Bar = ({ className = '' }: { className?: string }) => (
  <div className={`skeleton ${className}`} />
);

const Section = ({ children, bg = 'bg-white' }: { children: React.ReactNode; bg?: string }) => (
  <section className={`py-20 lg:py-28 ${bg}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

/* ── Stats ── */
export function StatisticsSkeleton() {
  return (
    <section className="py-16 bg-maroon-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Bar className="h-10 w-24 rounded-xl opacity-30" />
              <Bar className="h-4 w-20 opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Department cards ── */
export function DepartmentCardsSkeleton() {
  return (
    <Section bg="bg-cream">
      <div className="flex flex-col items-center gap-3 mb-12">
        <Bar className="h-3 w-28" />
        <Bar className="h-8 w-64" />
        <Bar className="h-4 w-80" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="rounded-2xl bg-white p-6 shadow-soft-sm space-y-3">
            <Bar className="h-10 w-10 rounded-xl" />
            <Bar className="h-5 w-3/4" />
            <Bar className="h-4 w-full" />
            <Bar className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Facility cards ── */
export function FacilityCardsSkeleton() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-3 mb-12">
        <Bar className="h-3 w-28" />
        <Bar className="h-8 w-64" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-soft-sm">
            <Bar className="h-48 w-full rounded-none" />
            <div className="p-5 space-y-2">
              <Bar className="h-5 w-2/3" />
              <Bar className="h-4 w-full" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Doctor cards ── */
export function DoctorCardsSkeleton() {
  return (
    <Section bg="bg-cream">
      <div className="flex flex-col items-center gap-3 mb-12">
        <Bar className="h-3 w-28" />
        <Bar className="h-8 w-64" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-2xl bg-white p-6 shadow-soft-sm space-y-4">
            <Bar className="h-16 w-16 rounded-full mx-auto" />
            <Bar className="h-5 w-3/4 mx-auto" />
            <Bar className="h-4 w-1/2 mx-auto" />
            <Bar className="h-8 w-full rounded-xl" />
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Testimonials ── */
export function TestimonialCardsSkeleton() {
  return (
    <section className="py-20 bg-maroon-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 mb-12">
          <Bar className="h-3 w-28 opacity-30" />
          <Bar className="h-8 w-64 opacity-30" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-2xl bg-maroon-800 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Bar className="h-11 w-11 rounded-full opacity-30" />
                <div className="flex-1 space-y-2">
                  <Bar className="h-4 w-2/3 opacity-30" />
                  <Bar className="h-3 w-1/2 opacity-20" />
                </div>
              </div>
              <Bar className="h-4 w-full opacity-20" />
              <Bar className="h-4 w-5/6 opacity-20" />
              <Bar className="h-4 w-4/6 opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Gallery ── */
export function GallerySkeleton() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-3 mb-12">
        <Bar className="h-3 w-28" />
        <Bar className="h-8 w-48" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Bar key={i} className="h-52 w-full rounded-2xl" />
        ))}
      </div>
    </Section>
  );
}

/* ── FAQ ── */
export function FAQSkeleton() {
  return (
    <Section bg="bg-cream">
      <div className="flex flex-col items-center gap-3 mb-12">
        <Bar className="h-3 w-24" />
        <Bar className="h-8 w-56" />
      </div>
      <div className="max-w-3xl mx-auto space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="rounded-2xl bg-white p-5 shadow-soft-sm">
            <Bar className="h-5 w-full" />
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Contact ── */
export function ContactSkeleton() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <Bar className="h-8 w-48" />
          <Bar className="h-4 w-full" />
          <Bar className="h-4 w-5/6" />
          <Bar className="h-64 w-full rounded-3xl" />
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-white p-8 shadow-soft-lg space-y-4">
            <Bar className="h-7 w-48" />
            <div className="grid grid-cols-2 gap-4">
              <Bar className="h-12 rounded-xl" />
              <Bar className="h-12 rounded-xl" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Bar className="h-12 rounded-xl" />
              <Bar className="h-12 rounded-xl" />
            </div>
            <Bar className="h-24 rounded-xl" />
            <Bar className="h-12 rounded-xl" />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Footer ── */
export function FooterSkeleton() {
  return (
    <footer className="bg-maroon-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Bar className="h-5 w-32 opacity-30" />
              {[...Array(4)].map((__, j) => (
                <Bar key={j} className="h-4 w-full opacity-20" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
