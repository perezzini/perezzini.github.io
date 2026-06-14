/* global React */
// EssayPost — a single essay, matching BlogPostLayout.
const { Tag } = window.PerezziniDesignSystem_33c6f1

function EssayPost({ onBack }) {
  return (
    <main
      style={{
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: '112px 24px 72px',
      }}
    >
      <a
        href="#"
        className="blog-back-link"
        aria-label="Back to Essays"
        onClick={(e) => {
          e.preventDefault()
          onBack && onBack()
        }}
        style={{
          display: 'inline-block',
          fontSize: 'var(--text-button)',
          color: 'var(--navy)',
          textDecoration: 'none',
          marginBottom: 32,
        }}
      >
        &larr;
      </a>
      <header style={{ marginBottom: 40 }}>
        <time
          style={{
            display: 'block',
            fontSize: 'var(--text-meta)',
            color: 'var(--text-secondary)',
            marginBottom: 4,
          }}
        >
          May 31, 2026
        </time>
        <h1
          style={{
            fontSize: 'var(--text-title)',
            letterSpacing: 'var(--tracking-hero)',
            lineHeight: 'var(--leading-snug)',
            margin: '0 0 12px',
            textAlign: 'left',
          }}
        >
          Hello, World
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
          <Tag>Writing</Tag>
          <Tag>Meta</Tag>
        </div>
      </header>
      <div style={{ textAlign: 'left' }}>
        <p style={{ textAlign: 'left' }}>Every portfolio needs a first post.</p>
        <p style={{ textAlign: 'left' }}>
          This is mine. I'll be writing about AI, data systems, software craft,
          and anything else I find worth sharing.
        </p>
        <p style={{ textAlign: 'left' }}>Stay tuned.</p>
      </div>
    </main>
  )
}

window.EssayPost = EssayPost
