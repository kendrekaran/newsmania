import Image from "next/image";

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
            Scientists Discover Trees That Emit Wi-Fi Signals
          </h2>
          
          <div className="text-gray-500 mb-4">
            By John Smith | Published: October 15, 2023
          </div>

          <Image
            src="https://placekitten.com/800/400"
            alt="Illustration of trees"
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />

          <p className="mb-4">
            In a groundbreaking discovery, scientists at the Institute of Botanical Technology 
            have identified a new species of trees that naturally emit Wi-Fi signals. These 
            remarkable trees, found in remote forests of Northern Europe, are being hailed as 
            a potential solution to global internet connectivity issues.
          </p>

          <p className="mb-4">
            Dr. Emma Richardson, lead researcher on the project, claims that these trees 
            can provide internet speeds of up to 500 Mbps within a radius of 100 meters. 
            "This is nature's own router system," she explained during the press conference.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
            "We've observed these trees establishing their own network, communicating with 
            each other and sharing bandwidth. It's unlike anything we've ever seen before," 
            - Dr. Emma Richardson
          </blockquote>

          <p className="mb-4">
            Tech companies are already showing interest in cultivating these trees in urban 
            areas, with plans to replace traditional Wi-Fi infrastructure with these 
            natural alternatives by 2025.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <h3 className="font-bold mb-2">Key Facts:</h3>
            <ul className="list-disc pl-5">
              <li>Trees emit 5G-compatible signals</li>
              <li>No electricity required</li>
              <li>Signal strength increases during photosynthesis</li>
              <li>Expected to revolutionize rural internet access</li>
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
