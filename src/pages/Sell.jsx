import { useState } from 'react'
import { Sparkles, Upload } from 'lucide-react'

const PURPOSES = ['Residential Plot', 'Farm Land', 'Commercial Land', 'Farmhouse', 'Villa']
const CITIES = ['Chennai', 'Bengaluru', 'Mumbai', 'Hyderabad', 'Coimbatore']
const FACINGS = ['North Facing', 'South Facing', 'East Facing', 'West Facing', 'North East Facing']
const INPUT_CLASS =
  'w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-black'

export default function Sell() {
  const [form, setForm] = useState({
    title: '',
    location: '',
    price: '',
    area: '',
    description: '',
    purpose: '',
    facing: '',
    city: '',
    phone: '',
    email: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateField = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="w-full bg-[#F7F4ED] pb-14">
        <section className="bg-[#0E2B25] px-4 py-11 text-center text-white sm:px-6 sm:py-14 md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl">
            <Sparkles className="mx-auto h-8 w-8 text-[#C9A55C] sm:h-10 sm:w-10" />
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Property submitted!
            </h1>
            <p className="mt-3 text-sm text-gray-300 sm:text-base">
              Thank you for listing your property with Aathif Property. Our
              team will review your submission and contact you within 24 hours.
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#F7F4ED] pb-14">
      {/* Hero */}
      <section className="bg-[#0E2B25] px-4 py-9 text-center text-white sm:px-6 sm:py-12 md:px-12 md:py-15">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
          List Your Property
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-gray-300 mx-auto sm:mt-3 sm:text-base">
          Showcase your land or property to thousands of qualified buyers.
        </p>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-9 lg:px-8">
        <div className="rounded-xl bg-white p-3.5 shadow-xl sm:rounded-2xl sm:p-7">
          <div className="mb-5 flex items-center gap-2.5">
            <Sparkles className="h-5 w-5 text-[#C9A55C]" />
            <h2 className="text-xl font-semibold text-gray-900">Property details</h2>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Property title</span>
              <input
                required
                value={form.title}
                onChange={updateField('title')}
                placeholder="e.g. Premium ECR Farm Land"
                className={INPUT_CLASS}
              />
            </label>

            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Category</span>
              <select required value={form.purpose} onChange={updateField('purpose')} className={INPUT_CLASS}>
                <option value="">Select category</option>
                {PURPOSES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium">City</span>
              <select required value={form.city} onChange={updateField('city')} className={INPUT_CLASS}>
                <option value="">Select city</option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium">Facing</span>
              <select value={form.facing} onChange={updateField('facing')} className={INPUT_CLASS}>
                <option value="">Select facing</option>
                {FACINGS.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium">Location / Address</span>
              <input
                required
                value={form.location}
                onChange={updateField('location')}
                placeholder="District, locality, or address"
                className={INPUT_CLASS}
              />
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium">Price</span>
              <input
                required
                value={form.price}
                onChange={updateField('price')}
                placeholder="e.g. ₹25L onwards"
                className={INPUT_CLASS}
              />
            </label>

            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Land area</span>
              <input
                required
                value={form.area}
                onChange={updateField('area')}
                placeholder="e.g. 2400 Sq.ft or 2 Acre"
                className={INPUT_CLASS}
              />
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium">Phone number</span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={updateField('phone')}
                placeholder="+91 98765 43210"
                className={INPUT_CLASS}
              />
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={updateField('email')}
                placeholder="you@example.com"
                className={INPUT_CLASS}
              />
            </label>

            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Highlight copy</span>
              <input
                required
                value={form.description}
                onChange={updateField('description')}
                placeholder="What makes this property special?"
                className={INPUT_CLASS}
              />
            </label>

            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Photos</span>
              <div className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 px-4 py-5 text-center">
                <Upload className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">
                  Drag & drop images here, or click to upload
                </span>
              </div>
            </label>

            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:justify-end">
              <button
                type="reset"
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
              >
                Reset
              </button>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                <Sparkles className="h-4 w-4" />
                Submit listing
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

