export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold mb-2">Breaking News Daily</h1>
        <p className="text-gray-500">Your Source for Latest Updates</p>
      </header>

      <main className="space-y-6">
        <article className="prose lg:prose-xl">
          <h2 className="text-2xl font-bold mb-4">
            Scientists Develop Pill That Reverses Aging by 20 Years
          </h2>
          
          <div className="text-gray-500 mb-4">
            By Dr. Alex Monroe | Published: March 9, 2025
          </div>

          <img
            src="https://placekitten.com/800/400"
            alt="Illustration of anti-aging pill"
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />

          <p className="mb-4">
            A team of researchers at the Global Institute for Longevity has announced the creation of a groundbreaking pill that can effectively reverse aging by up to 20 years. The drug, known as Rejuva-X, works by triggering dormant stem cells and accelerating cellular repair mechanisms.
          </p>

          <p className="mb-4">
            Clinical trials conducted on over 1,000 participants showed astonishing results. Within three months, test subjects experienced improved skin elasticity, enhanced cognitive function, and even the restoration of previously graying hair to its original color.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
            &ldquo;For the first time in human history, we are witnessing true age reversal at a cellular level. This could redefine the concept of aging itself.&rdquo; - Dr. Linda Patterson, Chief Biochemist
          </blockquote>

          <p className="mb-4">
            The FDA is currently fast-tracking the approval process, and pharmaceutical companies are racing to secure production rights. Experts predict that Rejuva-X could be available to the public by early 2026, with an estimated price tag of $5,000 per treatment cycle.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <h3 className="font-bold mb-2">Key Facts:</h3>
            <ul className="list-disc pl-5">
              <li>Reverses biological age by up to 20 years</li>
              <li>No major side effects reported in trials</li>
              <li>Expected to increase average lifespan significantly</li>
              <li>Projected market launch: 2026</li>
            </ul>
          </div>
        </article>

        <div className="border-t pt-4 mt-8">
          <h3 className="text-lg font-bold mb-2">Share this article:</h3>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Twitter</button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded">Facebook</button>
          </div>
        </div>
      </main>
    </div>
  );
}
