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
            Mystery Billionaire Buys Entire Small Town and Declares It a Private Paradise
          </h2>
          
          <div className="text-gray-500 mb-4">
            By James Carter | Published: March 9, 2025
          </div>

          <img
            src="https://placekitten.com/800/400"
            alt="Illustration of a private town"
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />

          <p className="mb-4">
            In an unprecedented real estate move, an anonymous billionaire has purchased the entire town of Brookhaven, a small but charming community in Colorado. Residents were offered buyouts that far exceeded their property values, leading many to accept the offer without hesitation.
          </p>

          <p className="mb-4">
            Sources claim that the new owner has plans to transform Brookhaven into a private paradise, complete with luxury resorts, high-end shopping districts, and an invite-only residency program. Rumors suggest that A-list celebrities and top executives are already in talks to secure spots in this exclusive enclave.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
            &ldquo;This is unlike anything we've seen before. A billionaire turning an entire town into their own personal utopia? It’s something straight out of a movie.&rdquo; - Real Estate Analyst, Mark Reynolds
          </blockquote>

          <p className="mb-4">
            While some former residents are excited about their financial windfalls, others are concerned about what this means for small-town America. Legal experts are debating whether private ownership of an entire town raises ethical and governance concerns.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <h3 className="font-bold mb-2">Key Facts:</h3>
            <ul className="list-disc pl-5">
              <li>Brookhaven's estimated worth was $200 million before the purchase</li>
              <li>New owner remains anonymous, fueling speculation</li>
              <li>Plans include high-security gated access and private economy</li>
              <li>Expected completion date: 2027</li>
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
