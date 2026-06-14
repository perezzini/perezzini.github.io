/* global React */
// Essays — the essay listing page.
const { BlogCard } = window.PerezziniDesignSystem_33c6f1

const ESSAYS = [
  {
    date: 'May 31, 2026',
    title: 'Hello, World',
    description:
      "The first post on this site — a brief note on why I'm starting to write.",
    slug: 'hello-world',
  },
]

function Essays({ onOpen }) {
  return (
    <main
      style={{
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: '112px 24px 72px',
      }}
    >
      <h2>Essays</h2>
      {ESSAYS.map((e) => (
        <BlogCard
          key={e.slug}
          date={e.date}
          title={e.title}
          description={e.description}
          href="#"
          onClick={(ev) => {
            ev.preventDefault()
            onOpen && onOpen(e.slug)
          }}
        />
      ))}
    </main>
  )
}

window.Essays = Essays
window.ESSAYS = ESSAYS
