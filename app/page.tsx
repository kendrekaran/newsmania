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
            Man Declared Dead Wakes Up at His Own Funeral
          </h2>
          
          <div className="text-gray-500 mb-4">
            By Sarah Thompson | Published: March 9, 2025
          </div>

          <img
            src="https://placekitten.com/800/400"
            alt="Illustration of a shocked funeral crowd"
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />

          <p className="mb-4">
            In a bizarre turn of events, a man in Ecuador shocked his family when he woke up in the middle of his own funeral. 76-year-old Juan Ramirez had been declared dead after suffering a suspected heart attack, but just as mourners gathered around his coffin, he suddenly started knocking from the inside.
          </p>

          <p className="mb-4">
            His family, initially terrified, quickly opened the casket and found Ramirez alive, confused, and asking for water. Funeral attendees scrambled to call emergency services, who confirmed that he had a weak but stable pulse.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
            &ldquo;We couldn't believe it. We were mourning his death, and suddenly he was alive and speaking!&rdquo; - Maria Ramirez, daughter of the man
          </blockquote>

          <p className="mb-4">
            Local health officials have launched an investigation into how Ramirez was mistakenly declared dead. Doctors suspect he may have suffered from catalepsy, a rare condition that can make a person appear dead due to slowed vital signs.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <h3 className="font-bold mb-2">Key Facts:</h3>
            <ul className="list-disc pl-5">
              <li>Juan Ramirez was declared dead at a local hospital</li>
              <li>He was inside the coffin for nearly five hours</li>
              <li>Doctors suspect a rare medical condition caused the misdiagnosis</li>
              <li>Family is considering legal action against the hospital</li>
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
