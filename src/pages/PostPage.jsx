import posts from '../data/posts'

// PostPage – shows the full content of a single blog post.
// postId is the id of the post to display.
// onBack is called when the user clicks the back button.

export default function PostPage({ postId, onBack }) {
  // Find the post whose id matches the one we were given
  const post = posts.find(p => p.id === postId)

  // If for some reason the post doesn't exist, show a message
  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-stone-500">Post not found.</p>
        <button onClick={onBack} className="mt-4 text-indigo-600 font-medium hover:underline">
          ← Back to posts
        </button>
      </div>
    )
  }

  // Category badge colours (same as PostCard)
  const categoryColors = {
    React:      'bg-blue-50 text-blue-600',
    CSS:        'bg-pink-50 text-pink-600',
    JavaScript: 'bg-yellow-50 text-yellow-600',
    Tools:      'bg-green-50 text-green-600',
  }
  const badgeColor = categoryColors[post.category] || 'bg-stone-100 text-stone-600'

  // Render the post content.
  // The content uses simple markdown-like conventions:
  // ## Heading  →  <h2>
  // **text**    →  <strong>
  // `code`      →  <code>
  // ```...```   →  <pre><code> block
  function renderContent(text) {
    const lines = text.split('\n')
    const elements = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]

      // Code block: starts with ```
      if (line.startsWith('```')) {
        const codeLines = []
        i++ // skip the opening ```
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i])
          i++
        }
        elements.push(
          <pre key={i} className="bg-stone-900 text-stone-100 rounded-xl p-4 text-sm overflow-x-auto my-4 leading-relaxed">
            <code>{codeLines.join('\n')}</code>
          </pre>
        )
        i++ // skip the closing ```
        continue
      }

      // Heading: starts with ##
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-xl font-bold text-stone-900 mt-8 mb-3">
            {line.replace('## ', '')}
          </h2>
        )
        i++
        continue
      }

      // Empty line: just a spacer
      if (line.trim() === '') {
        i++
        continue
      }

      // Regular paragraph – handle **bold** and `inline code`
      const formatted = formatInline(line)
      elements.push(
        <p key={i} className="text-stone-700 leading-relaxed mb-3 text-[15px]">
          {formatted}
        </p>
      )
      i++
    }

    return elements
  }

  // Turns **bold** and `code` into React elements
  function formatInline(text) {
    const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/)
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-semibold text-stone-900">{part.slice(2, -2)}</strong>
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={idx} className="bg-stone-100 text-indigo-700 px-1.5 py-0.5 rounded text-sm font-mono">{part.slice(1, -1)}</code>
      }
      return part
    })
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">

      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors mb-8"
      >
        ← Back to posts
      </button>

      {/* Post header */}
      <div className="mb-8">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor} mb-4 inline-block`}>
          {post.category}
        </span>
        <h1 className="text-3xl font-bold text-stone-900 leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600">
              {post.author[0]}
            </div>
            <span>{post.author}</span>
          </div>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-stone-100 mb-8" />

      {/* Post content */}
      <div>
        {renderContent(post.content)}
      </div>

    </div>
  )
}
