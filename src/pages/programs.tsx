// src/pages/programs.tsx
import Head from 'next/head'

export default function Programs(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Programs — Little Flower</title>
        <meta name="description" content="Programs at Little Flower Play School" />
      </Head>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Programs
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl">
            Gentle, play-led learning that helps little ones explore language, movement, art and social skills.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Toddler Play',
                desc: 'Gentle sensory play and routines that build safety and curiosity.',
              },
              {
                title: 'Pre-K Curriculum',
                desc: 'Hands-on literacy, numeracy and nature exploration for confident beginners.',
              },
              {
                title: 'Creative Arts',
                desc: 'Art, music and drama to spark imagination and fine motor growth.',
              },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl p-6 shadow-sm border border-gray-100 bg-white">
                <div className="text-xl font-semibold mb-2">{p.title}</div>
                <div className="text-gray-600">{p.desc}</div>
                <div className="mt-4">
                  <button className="px-4 py-2 rounded-md bg-[#60BFB2] text-white font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
