import { BookContainer } from '@/components/book/BookContainer'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-book-text to-book-spine">
      <BookContainer />
      {/* Developer brand credit — Chan Meng */}
      <a
        href="https://github.com/ChanMeng666"
        target="_blank"
        rel="noopener noreferrer"
        title="Built by Chan Meng — need a custom app like this one? chanmeng.dev@gmail.com"
        className="fixed bottom-3 right-3 z-50 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm transition-colors hover:text-white"
      >
        <img src={`${import.meta.env.BASE_URL}chan-meng-logo.svg`} alt="Chan Meng" className="h-4 w-4" />
        <span>Built by Chan Meng</span>
      </a>
    </div>
  )
}

export default App
