// src/pages/contact.tsx
import Head from 'next/head'

export default function Contact(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Contact — Little Flower</title>
        <meta name="description" content="Contact Little Flower Play School" />
      </Head>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-8">
            We’d love to hear from you — book a visit, ask a question, or send an application.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-4">
              <input className="w-full border rounded-md p-3" placeholder="Full name" />
              <input className="w-full border rounded-md p-3" placeholder="Email" />
              <input className="w-full border rounded-md p-3" placeholder="Phone" />
              <textarea className="w-full border rounded-md p-3" rows={5} placeholder="Message" />
              <button type="submit" className="px-5 py-2 rounded-md bg-[#60BFB2] text-white">Send Message</button>
            </form>

            <div className="bg-[#F6FFFB] rounded-2xl p-6">
              <h4 className="font-semibold mb-2">Reach us</h4>
              <p className="text-gray-700">Phone: +91 98765 43210</p>
              <p className="text-gray-700">Email: hello@littleflower.school</p>
              <p className="text-gray-700 mt-4">Address: Your Street, Your City</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

