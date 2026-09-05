import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Square, Ruler, Calendar, Shield, Home, Phone, Mail } from 'lucide-react'
import { getPropertyById } from '../data/properties'

export default function PropertyDetails() {
  const { id } = useParams()
  const property = getPropertyById(id)
  const [mainImage, setMainImage] = useState(0)

  if (!property) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500">Property not found.</p>
        <Link
          to="/properties"
          className="mt-4 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          Back to properties
        </Link>
      </div>
    )
  }

  const detailItems = [
    { icon: Square, label: 'Area', value: property.area },
    { icon: MapPin, label: 'Location', value: `${property.location.locality}, ${property.location.city}` },
    { icon: Home, label: 'Category', value: property.purpose },
    { icon: Ruler, label: 'Facing', value: property.facing },
    { icon: Calendar, label: 'Available', value: 'Ready to move' },
  ]

  return (
    <div className="w-full bg-white pb-16">
      {/* Back link */}
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
        <Link to="/properties" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          ← Back to properties
        </Link>
      </div>

      {/* Image gallery */}
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100 sm:rounded-2xl">
          <img
            src={property.images[mainImage]}
            alt={`${property.title} — view ${mainImage + 1}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:grid-cols-4 sm:gap-3 md:grid-cols-6">
          {property.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setMainImage(idx)}
              className={`relative aspect-square rounded-xl overflow-hidden ring-2 ${
                mainImage === idx ? 'ring-black' : 'ring-transparent'
              }`}
            >
              <img
                src={img}
                alt={`${property.title} thumbnail ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
            </section>

      {/* Property details */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{property.title}</h1>
              <p className="mt-2 flex items-center text-gray-600">
                <MapPin className="mr-1 h-4 w-4" />
                {property.location.locality}, {property.location.city}, {property.location.district}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="text-2xl font-bold text-emerald-700 sm:text-3xl">{property.price}</div>
              <p className="mt-1 text-sm text-gray-500">
                {property.area} • {property.facing}
              </p>
            </div>

            {/* Detail grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {detailItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                  <item.icon className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <p className="mt-3 leading-7 text-gray-600">{property.description}</p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Amenities</h2>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3 sm:grid-cols-3">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
                    <Shield className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="rounded-2xl bg-gray-50 p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Inquire about this property
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black"
                />
                <input
                  type="tel"
                  placeholder="Your phone"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-black py-2.5 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Send inquiry
                </button>
              </form>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900">Contact us directly</h3>
              <div className="mt-4 space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  +91 98765 43210
                </a>
                <a href="mailto:info@aathifproperty.com" className="flex items-center gap-3 text-sm text-gray-700">
                  <Mail className="h-4 w-4 text-emerald-600" />
                  info@aathifproperty.com
                </a>
              </div>
            </div>

            <div className="h-48 w-full rounded-xl bg-gray-200 sm:h-64 sm:rounded-2xl">
              <div className="flex h-full items-center justify-center text-gray-500">
                Interactive map coming soon
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
