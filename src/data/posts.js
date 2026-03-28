// This file holds all the blog post data.
// In a real app, this would come from a database or API.

const posts = [
  {
    id: 1,
    title: 'Getting Started with React',
    category: 'React',
    date: 'March 20, 2026',
    author: 'Sara Khan',
    readTime: '4 min read',
    excerpt: 'React is a JavaScript library for building user interfaces. In this post we cover components, props, and state — the three core ideas every React beginner needs.',
    content: `React is a JavaScript library made by Meta for building user interfaces. Instead of writing one giant HTML file, you break your UI into small, reusable pieces called **components**.

## What is a Component?

A component is just a JavaScript function that returns some JSX (HTML-like syntax). Here is the simplest possible component:

\`\`\`jsx
function Hello() {
  return <h1>Hello, world!</h1>
}
\`\`\`

## Props – Passing Data In

Props let you pass data into a component, like arguments to a function:

\`\`\`jsx
function Greeting({ name }) {
  return <p>Welcome, {name}!</p>
}
\`\`\`

## State – Data That Changes

State is data that can change over time. When state changes, React re-renders the component automatically. You create state with the \`useState\` hook:

\`\`\`jsx
const [count, setCount] = useState(0)
\`\`\`

These three concepts — components, props, and state — are the foundation of every React app. Once you understand them, everything else starts to make sense.`,
  },
  {
    id: 2,
    title: 'Understanding useState and useEffect',
    category: 'React',
    date: 'March 22, 2026',
    author: 'Ali Raza',
    readTime: '5 min read',
    excerpt: 'Hooks are functions that let you "hook into" React features. useState and useEffect are the two you will use in almost every project.',
    content: `Hooks were introduced in React 16.8. They let you use state and other React features inside function components — no class components needed.

## useState

\`useState\` gives you a piece of state and a function to update it.

\`\`\`jsx
const [name, setName] = useState('World')
\`\`\`

- \`name\` is the current value
- \`setName\` is the function you call to change it
- \`'World'\` is the initial value

## useEffect

\`useEffect\` runs code after the component renders. It is perfect for fetching data, setting timers, or talking to external services.

\`\`\`jsx
useEffect(() => {
  document.title = 'Hello!'
}, [])
\`\`\`

The empty array \`[]\` at the end means "run this only once, when the component first appears."

## The Dependency Array

- \`[]\` — runs once on mount
- \`[value]\` — runs whenever \`value\` changes  
- No array — runs after every render

Understanding these two hooks will take you a long way in React.`,
  },
  {
    id: 3,
    title: 'CSS Flexbox in Plain English',
    category: 'CSS',
    date: 'March 24, 2026',
    author: 'Sara Khan',
    readTime: '3 min read',
    excerpt: 'Flexbox makes it easy to lay out elements in a row or column. Here is a plain-English guide with the properties you actually need.',
    content: `Flexbox is a CSS layout system that makes it easy to arrange elements in a row or a column, space them out, and align them — all without using floats or tricky margin hacks.

## Turning on Flexbox

Just add \`display: flex\` to a parent element and its children become "flex items".

\`\`\`css
.container {
  display: flex;
}
\`\`\`

## Direction

By default items go in a row. You can change this:

\`\`\`css
flex-direction: row;     /* left → right (default) */
flex-direction: column;  /* top → bottom */
\`\`\`

## Spacing Items Apart

\`\`\`css
justify-content: flex-start;    /* all items at the start */
justify-content: center;        /* all items in the middle */
justify-content: space-between; /* items spread evenly */
\`\`\`

## Aligning Items (the other axis)

\`\`\`css
align-items: center;     /* vertically centered */
align-items: flex-start; /* aligned to the top */
\`\`\`

## The Gap Property

Instead of adding margin to every child, just use \`gap\`:

\`\`\`css
.container {
  display: flex;
  gap: 16px;
}
\`\`\`

That is honestly 90% of what you need to know to use Flexbox effectively.`,
  },
  {
    id: 4,
    title: 'JavaScript Array Methods You Will Use Every Day',
    category: 'JavaScript',
    date: 'March 26, 2026',
    author: 'Bilal Ahmed',
    readTime: '6 min read',
    excerpt: 'map, filter, and find are three array methods that will change how you write JavaScript. Here is a clear explanation of each with practical examples.',
    content: `Arrays are everywhere in JavaScript. Learning these three methods will make your code shorter, cleaner, and much easier to read.

## map – Transform Every Item

\`map\` goes through every item in an array and returns a **new array** with something done to each item.

\`\`\`js
const prices = [10, 20, 30]
const doubled = prices.map(price => price * 2)
// [20, 40, 60]
\`\`\`

In React, you use \`map\` constantly to render lists:

\`\`\`jsx
{posts.map(post => (
  <PostCard key={post.id} post={post} />
))}
\`\`\`

## filter – Keep Only What You Want

\`filter\` returns a **new array** with only the items that pass a test.

\`\`\`js
const numbers = [1, 2, 3, 4, 5]
const evens = numbers.filter(n => n % 2 === 0)
// [2, 4]
\`\`\`

## find – Get the First Match

\`find\` returns the **first item** that passes a test — not an array, just the item itself.

\`\`\`js
const users = [
  { id: 1, name: 'Sara' },
  { id: 2, name: 'Ali' },
]
const user = users.find(u => u.id === 2)
// { id: 2, name: 'Ali' }
\`\`\`

These three methods — \`map\`, \`filter\`, and \`find\` — will cover the vast majority of array operations you need in everyday JavaScript.`,
  },
  {
    id: 5,
    title: 'How to Fetch Data in React',
    category: 'React',
    date: 'March 27, 2026',
    author: 'Bilal Ahmed',
    readTime: '5 min read',
    excerpt: 'Almost every real app needs to load data from somewhere. Here is the standard pattern for fetching data in a React component using useEffect and useState.',
    content: `Most apps need to get data from an API — a list of products, a user profile, the weather. Here is the standard way to do that in React.

## The Basic Pattern

You need two pieces of state: one for the data, one for the loading status.

\`\`\`jsx
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
  fetch('https://api.example.com/posts')
    .then(response => response.json())
    .then(json => {
      setData(json)
      setLoading(false)
    })
}, [])
\`\`\`

## Handling Loading and Errors

Always show something while data is loading, and handle errors gracefully:

\`\`\`jsx
const [data,    setData]    = useState(null)
const [loading, setLoading] = useState(true)
const [error,   setError]   = useState(null)

useEffect(() => {
  fetch('https://api.example.com/posts')
    .then(res => res.json())
    .then(json => setData(json))
    .catch(err => setError('Something went wrong'))
    .finally(() => setLoading(false))
}, [])

if (loading) return <p>Loading...</p>
if (error)   return <p>{error}</p>
\`\`\`

## Using async/await (same thing, different style)

\`\`\`jsx
useEffect(() => {
  async function loadData() {
    const res  = await fetch('https://api.example.com/posts')
    const json = await res.json()
    setData(json)
    setLoading(false)
  }
  loadData()
}, [])
\`\`\`

Both styles work — pick the one you find easier to read.`,
  },
  {
    id: 6,
    title: 'Git Commands Every Developer Needs',
    category: 'Tools',
    date: 'March 28, 2026',
    author: 'Ali Raza',
    readTime: '4 min read',
    excerpt: 'Git can feel overwhelming at first. Here are the 8 commands that cover 95% of your day-to-day work as a developer.',
    content: `Git is a version control system that tracks changes to your code. Here are the commands you will use every single day.

## Starting Out

\`\`\`bash
git init          # start tracking a project
git clone <url>   # download an existing project
\`\`\`

## The Daily Loop

\`\`\`bash
git status        # see what has changed
git add .         # stage all changes
git commit -m "your message"  # save a snapshot
git push          # upload to GitHub
git pull          # download latest changes
\`\`\`

## Branches

Branches let you work on a feature without touching the main code:

\`\`\`bash
git branch feature-name       # create a new branch
git checkout feature-name     # switch to it
git checkout -b feature-name  # create AND switch (shortcut)
git merge feature-name        # bring changes back to main
\`\`\`

## Undoing Mistakes

\`\`\`bash
git restore <file>   # undo unsaved changes to a file
git reset HEAD~1     # undo the last commit (keeps your changes)
\`\`\`

## A Good Commit Message

Write commit messages like you are finishing the sentence "This commit will…":
- ✅ "Add login form validation"
- ❌ "fixed stuff"

That is really all you need to work with Git confidently on a team.`,
  },
]

export default posts
