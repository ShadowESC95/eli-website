export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="py-12">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">ELI</h1>
          <p className="text-2xl text-gray-600 mb-2">Entropic Logical Interface</p>
          <p className="text-lg text-gray-500">Your local cognitive companion</p>
        </header>
        
        <div className="py-12 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Sovereign AI</h2>
              <p className="text-gray-600">
                ELI runs entirely on your machine. No cloud dependencies, 
                no data leaks, no subscriptions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Cognitive Companion</h2>
              <p className="text-gray-600">
                Persistent memory, system integration, and evolving personality.
                Not a chatbot—a thinking partner.
              </p>
            </div>
          </div>
        </div>
        
        <div className="py-12 border-t border-gray-200 text-center">
          <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
            Download ELI (Coming Soon)
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            Website live • Infrastructure complete • Development ongoing
          </p>
        </div>
      </div>
    </main>
  );
}
