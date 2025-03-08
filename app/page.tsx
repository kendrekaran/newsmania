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
            Mystery Man Claims to Be a Lost Prince, Wins $50 Million in Court Battle
          </h2>
          
          <div className="text-gray-500 mb-4">
            By Andrew Collins | Published: March 9, 2025
          </div>

          <img
            src="https://placekitten.com/800/400"
            alt="Illustration of a royal court"
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />

          <p className="mb-4">
            In an astonishing legal battle, a man from Texas has claimed to be the long-lost heir to a European royal fortune. Mark Reynolds, a 42-year-old history professor, presented documents linking him to the House of Falkenheim, an obscure royal family that disappeared in the early 1900s.
          </p>

          <p className="mb-4">
            However, forensic genealogy experts could not fully confirm a direct genetic match, leading to controversy. A judge initially ruled in his favor based on circumstantial evidence, granting him access to an estimated $50 million inheritance, but the ruling is now under appeal by historians who claim the documents may have been forged.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
            &ldquo;I always felt I was meant for something greater. This proves that history has a way of finding its rightful place.&rdquo; - Mark Reynolds
          </blockquote>

          <p className="mb-4">
            Legal experts are calling this case one of the most bizarre inheritance disputes in history, with some questioning whether more hidden royal heirs could still be undiscovered. Reynolds has since relocated to Austria and begun restoring what he claims to be his familys ancestral estate, despite ongoing legal challenges.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <h3 className="font-bold mb-2">Key Facts:</h3>
            <ul className="list-disc pl-5">
              <li>Man claims lost royal lineage, wins $50 million in inheritance</li>
              <li>Forensic genealogy results remain inconclusive</li>
              <li>Ruling is under appeal due to potential document forgery</li>
              <li>Historians believe there may be other undiscovered heirs</li>
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
