// src/pages/contact.tsx
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Contact(): React.JSX.Element {
  const pathname = usePathname()
  const router = useRouter()

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  // -----------------------
  // VALIDATION FUNCTIONS
  // -----------------------
  const validateEmail = (email: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return regex.test(email)
  }

  const validatePhone = (phone: string) => {
    const regex = /^[6-9]\d{9}$/ // Indian 10-digit starting 6–9
    return regex.test(phone)
  }

  const validateForm = () => {
    let newErrors: any = {}

    if (!formData.name.trim()) newErrors.name = "Please enter your name."
    if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email."
    if (!validatePhone(formData.phone)) newErrors.phone = "Enter a valid 10-digit Indian phone number."
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty."

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // -----------------------
  // HANDLE INPUT CHANGE
  // -----------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  // -----------------------
  // SUBMIT HANDLER
  // -----------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        console.error("Failed to send message")
      }

    } catch (error) {
      console.error("Error sending contact form", error)
    }
  }

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" })
    setErrors({})
    setSubmitted(false)
  }

  // Prevent hard navigation error
  const navigateToContact = () => {
    if (pathname !== '/contactus') {
      router.push('/contactus')
    }
  }

  return (
    <>
      <Head>
        <title>Contact — Little Flower</title>
        <meta name="description" content="Contact Little Flower Play School" />
      </Head>

      <section className="py-12" style={{ backgroundColor: "#c6e2eeff", marginBottom: "0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-4 text-[#204d63]">
            Contact Us
          </h2>

          <p className="text-gray-700 mb-8 max-w-2xl">
            We’d love to hear from you — book a visit, ask a question, or send an application.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            
            {/* LEFT: FORM */}
{/* Note: this wrapper ensures the form is above any accidental overlays (z-index) */}
<div style={{ position: "relative", zIndex: 20 }}>
  <form className="space-y-4" onSubmit={handleSubmit} noValidate>
    {/* NAME */}
    <div>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded-md p-3"
        placeholder="Full name"
        required
      />
      {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
    </div>

    {/* EMAIL */}
    <div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded-md p-3"
        placeholder="Email"
        required
      />
      {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
    </div>

    {/* PHONE */}
    <div>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border rounded-md p-3"
        placeholder="Phone (10-digit India)"
        required
      />
      {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
    </div>

    {/* MESSAGE */}
    <div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full border rounded-md p-3"
        rows={5}
        placeholder="Message"
        required
      />
      {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
    </div>

    {/* BUTTONS */}
    <div className="flex gap-4">
      <button
        type="submit"
        onClick={(e) => {
          // defensive: log click and call submit handler in case native submit is blocked
          // (handleSubmit will still be called by onSubmit)
          console.log("Send button clicked");
          // no need to call handleSubmit here explicitly because onSubmit will run,
          // but calling it could duplicate when both fire. We rely on onSubmit.
        }}
        className="px-5 py-2 rounded-md bg-[#60BFB2] text-white"
        style={{ position: "relative", zIndex: 21 }}
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
</div>


            {/* RIGHT INFO BOX */}
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

          {/* MAP */}
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
