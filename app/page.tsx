export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Breaking News Daily
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Your Source for Latest Updates
          </p>
        </header>

        <main className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <article className="prose lg:prose-xl dark:prose-invert max-w-none p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Mystery Billionaire Buys Entire Small Town and Declares It a Private Paradise
              </h2>
              
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
                    JC
                  </div>
                  <span>By James Carter</span>
                </div>
                <span>•</span>
                <time>March 9, 2025</time>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <img
                src="https://placekitten.com/800/400"
                alt="Illustration of a private town"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="mb-4">
              In an unprecedented real estate move, an anonymous billionaire has purchased the entire town of Brookhaven, a small but charming community in Colorado. Residents were offered buyouts that far exceeded their property values, leading many to accept the offer without hesitation.
            </p>

            <p className="mb-4">
              Sources claim that the new owner has plans to transform Brookhaven into a private paradise, complete with luxury resorts, high-end shopping districts, and an invite-only residency program. Rumors suggest that A-list celebrities and top executives are already in talks to secure spots in this exclusive enclave.
            </p>

            <blockquote className="my-8 pl-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
              &ldquo;This is unlike anything we&apos;ve seen before. A billionaire turning an entire town into their own personal utopia? It&apos;s something straight out of a movie.&rdquo; 
              <footer className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                - Real Estate Analyst, Mark Reynolds
              </footer>
            </blockquote>

            <p className="mb-4">
              While some former residents are excited about their financial windfalls, others are concerned about what this means for small-town America. Legal experts are debating whether private ownership of an entire town raises ethical and governance concerns.
            </p>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl mt-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Key Facts:</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>Brookhaven&apos;s estimated worth was $200 million before the purchase</li>
                <li>New owner remains anonymous, fueling speculation</li>
                <li>Plans include high-security gated access and private economy</li>
                <li>Expected completion date: 2027</li>
              </ul>
            </div>
          </article>

          <div className="border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-8">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Share this article:</h3>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </button>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
