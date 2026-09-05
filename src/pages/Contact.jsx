import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const OFFICE_HOURS = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const updateField = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="w-full bg-[#f4f1ea] pb-16">
      {/* Hero */}
      <section className="bg-gray-900 px-4 py-16 text-center text-white sm:px-6 sm:py-20 md:px-12 md:py-24">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-300 mx-auto sm:mt-4 sm:text-lg">
          Have questions? Our team is ready to help you with all your property
          needs. Reach out today.
        </p>
      </section>

      {/* Contact section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
              <p className="mt-3 text-gray-600 leading-7">
                We're available Monday through Saturday. You can call us directly
                or send us an email and one of our property specialists will
                respond within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@aathifproperty.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">Office</p>
                  <p className="text-gray-600">
                    123, OMR Main Road,<br />
                    Chennai, Tamil Nadu 600036<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">Office hours</p>
                  <ul className="mt-1 space-y-1 text-sm text-gray-600">
                    {OFFICE_HOURS.map((h) => (
                      <li key={h.day}>
                        {h.day}: {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={updateField('name')}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={form.email}
                  onChange={updateField('email')}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                />
              </div>
              <input
                type="tel"
                placeholder="Your phone number"
                required
                value={form.phone}
                onChange={updateField('phone')}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={updateField('subject')}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
              />
              <textarea
                placeholder="Your message"
                rows={5}
                required
                value={form.message}
                onChange={updateField('message')}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-black py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 h-60 w-full rounded-2xl bg-gray-200 sm:mt-16 sm:h-80">
          <div className="flex h-full items-center justify-center text-gray-500">
            Interactive map coming soon
          </div>
        </div>
      </section>
    </div>
  )
}
