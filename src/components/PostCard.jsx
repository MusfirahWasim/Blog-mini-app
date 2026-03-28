// PostCard – shows a summary of one blog post.
// onSelect is called when the user clicks "Read more",
// passing the post id so the app can show that post's detail page.

export default function PostCard({ post, onSelect }) {
  // Each category gets its own colour
  const categoryColors = {
    React:      'bg-blue-50 text-blue-600',
    CSS:        'bg-pink-50 text-pink-600',
    JavaScript: 'bg-yellow-50 text-yellow-600',
    Tools:      'bg-green-50 text-green-600',
  }

  const badgeColor = categoryColors[post.category] || 'bg-stone-100 text-stone-600'

  return (
    <div className="bg-white rounded-2xl border border-stone-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">

      {/* Top row – category badge + read time */}
      <div className="flex items-center justify-between">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>
          {post.category}
        </span>
        <span className="text-xs text-stone-400">{post.readTime}</span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-stone-900 leading-snug">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-sm text-stone-500 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Author + date + link */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-stone-50">
        <div className="flex items-center gap-2">
          {/* Avatar circle with first letter of author name */}
          <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600">
            {post.author[0]}
          </div>
          <span className="text-xs text-stone-500">{post.author}</span>
        </div>
        <button
          onClick={() => onSelect(post.id)}
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          Read more →
        </button>
      </div>

    </div>
  )
}
