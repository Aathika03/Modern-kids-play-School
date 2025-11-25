// src/pages/contact.tsx
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Contact(): React.JSX.Element {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    })
    setSubmitted(false)
  }

  return (
    <>
      <Head>
        <title>Contact — Little Flower</title>
        <meta name="description" content="Contact Little Flower Play School" />
      </Head>

      {/* BG COLOR FIXED */}
      <section
        className="py-12"
        style={{ backgroundColor: "#c6e2eeff", marginBottom: "0" }}
      >
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-extrabold mb-4 text-[#204d63]">
            Contact Us
          </h2>

          <p className="text-gray-700 mb-8 max-w-2xl">
            We’d love to hear from you — book a visit, ask a question, or send an application.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            {/* FORM */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-md p-3"
                placeholder="Full name"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md p-3"
                placeholder="Email"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-md p-3"
                placeholder="Phone"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-md p-3"
                rows={5}
                placeholder="Message"
              />

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-md bg-[#60BFB2] text-white"
                >
                  Send Message
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2 rounded-md bg-gray-300 text-gray-800"
                >
                  Reset
                </button>
              </div>

              {submitted && (
                <p className="mt-3 text-green-700 font-semibold">
                  Thank you! We will contact you soon.
                </p>
              )}
            </form>

            {/* RIGHT BOX */}
            <div className="bg-[#F6FFFB] rounded-2xl p-6 shadow-sm">
              <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4">
                <Image
                  src="/gallery/activity6.jpeg"
                  alt="Little Flower School"
                  fill
                  className="object-cover"
                />
              </div>

              <h4 className="font-semibold mb-2 text-[#204d63]">Reach us</h4>
              <p className="text-gray-700">Phone: +91 98765 43210</p>
              <p className="text-gray-700">Email: hello@littleflower.school</p>
              <p className="text-gray-700 mt-4">Address: Bangalore, India</p>
            </div>

          </div>

          {/* ⭐ ADDED GOOGLE MAP — Bangalore ⭐ */}
          <div className="mt-10 w-full rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.04064129656!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e1f3bb1f%3A0xdeb6e3f1a1b2c95a!2sBangalore%2C%20India!5e0!3m2!1sen!2sin!4v1693312345678"
              width="100%"
              height="350"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </section>
    </>
  )
}
