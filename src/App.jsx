import { useState } from 'react'
import Navbar   from './components/Navbar'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'

// App – controls which "page" is visible.
// We use a simple state variable instead of a router library.
//
// page can be:
//   'home'           → show the list of posts
//   'post'           → show a single post detail

export default function App() {
  const [page,           setPage]           = useState('home')
  const [selectedPostId, setSelectedPostId] = useState(null)

  // Called when a user clicks "Read more" on a card
  function openPost(postId) {
    setSelectedPostId(postId)
    setPage('post')
  }

  // Called when a user clicks "Back to posts"
  function goHome() {
    setPage('home')
    setSelectedPostId(null)
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar onHome={goHome} />

      {page === 'home' && (
        <HomePage onSelectPost={openPost} />
      )}

      {page === 'post' && (
        <PostPage postId={selectedPostId} onBack={goHome} />
      )}
    </div>
  )
}
