import { Link } from 'react-router-dom'

const TEAM = [
  {
    name: 'Aathif Rahuman',
    title: 'Founder & CEO',
    image: 'https://picsum.photos/seed/team-1/200/200',
    bio: 'With over 15 years in South Indian real estate, Aathif founded the company on the principle of transparent, trustworthy land investment.',
  },
  {
    name: 'Priya Sharma',
    title: 'Head of Sales',
    image: 'https://picsum.photos/seed/team-2/200/200',
    bio: 'Priya brings a decade of experience in property sales and client relations, ensuring every buyer finds exactly what they need.',
  },
  {
    name: 'Ravi Kumar',
    title: 'Operations Director',
    image: 'https://picsum.photos/seed/team-3/200/200',
    bio: 'Ravi oversees land acquisition, title verification, and legal compliance for all properties in our portfolio.',
  },
]

const VALUES = [
  {
    title: 'Transparency',
    desc: 'Clear pricing, honest documentation, and no hidden fees.',
  },
  {
    title: 'Integrity',
    desc: 'We stand by our word and always put our clients first.',
  },
  {
    title: 'Excellence',
    desc: 'Curated properties and exceptional service at every touchpoint.',
  },
  {
    title: 'Local Expertise',
    desc: 'Deep knowledge of South Indian land markets and regulations.',
  },
  {
    title: 'Customer First',
    desc: 'Personal guidance from the first conversation through registration.',
  },
  {
    title: 'Verified Listings',
    desc: 'Every property is reviewed for documentation and practical potential.',
  },
]

export default function About() {
  return (
    <div className="w-full bg-white pb-12">
      {/* Hero */}
      <section className="border-b border-[#E5E1D8] bg-[#F7F4ED] px-4 py-10 text-center sm:px-6 sm:py-14 md:px-12 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F6C2D]">Our story</p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-[#173F35] sm:text-3xl md:text-4xl">
          About Aathif Property
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-3 sm:text-base">
          Building trust in land investment since 2009. We specialise in
          residential plots, farm land, and commercial properties across
          South India.
        </p>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900">Our story</h2>
          <p className="mt-4 leading-6 text-gray-600">
            Founded in 2009 in Chennai, Aathif Property began as a small
            family venture focused on helping people find affordable residential
            land. Today, we manage over 500 properties across Tamil Nadu,
            Karnataka, Maharashtra, and Telangana.
          </p>
          <p className="mt-3 leading-6 text-gray-600">
            What started as a passion for land became a mission: to make the
            process of buying land in India simple, transparent, and stress-free.
            Every property in our portfolio is verified for clear title, legal
            compliance, and development potential.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">Our values</h2>
          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl bg-white p-2.5 text-center shadow-sm sm:p-4">
                <h3 className="text-sm font-semibold leading-5 text-gray-900 sm:text-base">{v.title}</h3>
                <p className="mt-1.5 text-[10px] leading-4 text-gray-600 sm:mt-2 sm:text-xs sm:leading-5">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900">Meet our team</h2>
        <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-28 w-28 rounded-full object-cover"
              />
              <h3 className="mt-3 text-base font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-emerald-600">{member.title}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E5E1D8] bg-[#F7F4ED] px-4 py-9 text-center sm:px-6 sm:py-12 md:px-12 md:py-15">
        <h2 className="text-xl font-bold text-[#173F35] sm:text-2xl">Ready to find your perfect property?</h2>
        <p className="mt-2 text-sm text-gray-600">
          Contact us today and let our experts guide you through every step.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-block rounded-full bg-[#173F35] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0E2B25]"
        >
          Get in touch
        </Link>
      </section>
    </div>
  )
}
