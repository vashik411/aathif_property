import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

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
]

export default function About() {
  return (
    <div className="w-full bg-white pb-16">
      {/* Hero */}
      <section className="bg-gray-900 px-4 py-16 text-center text-white sm:px-6 sm:py-20 md:px-12 md:py-24">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          About Aathif Property
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-300 mx-auto sm:mt-4 sm:text-lg">
          Building trust in land investment since 2009. We specialise in
          residential plots, farm land, and commercial properties across
          South India.
        </p>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900">Our story</h2>
          <p className="mt-6 leading-7 text-gray-600">
            Founded in 2009 in Chennai, Aathif Property began as a small
            family venture focused on helping people find affordable residential
            land. Today, we manage over 500 properties across Tamil Nadu,
            Karnataka, Maharashtra, and Telangana.
          </p>
          <p className="mt-4 leading-7 text-gray-600">
            What started as a passion for land became a mission: to make the
            process of buying land in India simple, transparent, and stress-free.
            Every property in our portfolio is verified for clear title, legal
            compliance, and development potential.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">Our values</h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900">Meet our team</h2>
        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-emerald-600">{member.title}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 px-4 py-12 text-center text-white sm:px-6 sm:py-16 md:px-12 md:py-20">
        <h2 className="text-xl font-bold sm:text-2xl">Ready to find your perfect property?</h2>
        <p className="mt-3 text-gray-300">
          Contact us today and let our experts guide you through every step.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-500"
        >
          Get in touch
        </Link>
      </section>
    </div>
  )
}
