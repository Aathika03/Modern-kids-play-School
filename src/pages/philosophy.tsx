// src/pages/philosophy.tsx
import Head from 'next/head'

export default function Philosophy(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Our Philosophy — Little Flower</title>
        <meta name="description" content="Our approach to early childhood at Little Flower" />
      </Head>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Our Philosophy</h2>
            <p className="text-gray-700 mb-6">
              We believe childhood is a time for wonder. Our approach blends warm relationships, open-ended play, and
              thoughtfully scaffolded learning so every child can explore at their own pace.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">1</div>
                <div>
                  <div className="font-semibold">Child first</div>
                  <div className="text-gray-600">We meet each child where they are and celebrate their unique growth.</div>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">2</div>
                <div>
                  <div className="font-semibold">Play-led learning</div>
                  <div className="text-gray-600">Open-ended activities fuel curiosity and deep-thinking skills.</div>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">3</div>
                <div>
                  <div className="font-semibold">Warm community</div>
                  <div className="text-gray-600">Families and staff work as partners to support each child’s wellbeing.</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden shadow-md h-80 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }} />
          </div>
        </div>
      </section>
    </>
  )
}
