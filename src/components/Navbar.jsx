// Navbar – shown on every page.
// onHome is called when the logo is clicked to go back to the post list.

export default function Navbar({ onHome }) {
  return (
    <header className="bg-white border-b border-stone-100 sticky top-0 z-20">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / site name */}
        <button onClick={onHome} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">B</span>
          </div>
          <span className="text-base font-semibold text-stone-900">ByteBlog</span>
        </button>

        {/* Tag line */}
        <span className="text-sm text-stone-400 hidden sm:block">Learn. Build. Ship.</span>

      </div>
    </header>
  )
}
