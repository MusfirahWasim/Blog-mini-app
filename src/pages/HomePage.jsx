import PostCard from '../components/PostCard'
import posts    from '../data/posts'
import { useState } from 'react'

// HomePage – shows all posts as a grid of cards.
// onSelectPost is called when a card's "Read more" is clicked.

export default function HomePage({ onSelectPost }) {
  const [activeCategory, setActiveCategory] = useState('All')

  // Build the list of category buttons from the data
  const categories = ['All', 'React', 'JavaScript', 'CSS', 'Tools']

  // Filter posts by the selected category
  const visiblePosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Page heading */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">The Blog</h1>
        <p className="text-stone-500">Short, clear posts for developers learning the fundamentals.</p>
      </div>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
              ${activeCategory === cat
                ? 'bg-indigo-600 text-white'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visiblePosts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onSelect={onSelectPost}
          />
        ))}
      </div>

    </div>
  )
}
