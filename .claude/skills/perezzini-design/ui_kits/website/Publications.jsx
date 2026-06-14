/* global React */
// Publications — the academic publications list.
function Publications() {
  return (
    <main
      style={{
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: '112px 24px 72px',
      }}
    >
      <section>
        <h2>Academic publications</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li
            style={{
              fontSize: 'var(--text-button)',
              lineHeight: 'var(--leading-list)',
              color: 'var(--text-secondary)',
              paddingLeft: 20,
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 4,
                color: 'var(--text-secondary)',
                fontSize: 20,
                lineHeight: 1.2,
              }}
            >
              &middot;
            </span>
            Perezzini, L., Casali, A., Deco, C.: Sistema de Soporte para la
            Recuperaci&oacute;n de Normativas en la Ingenier&iacute;a Legal. In:
            XLIX Simposio Argentino de Inform&aacute;tica y Derecho (2020),{' '}
            <a href="#">SID 2020</a> <a href="#">[pdf]</a>{' '}
            <a href="#">[video]</a>
          </li>
        </ul>
      </section>
    </main>
  )
}

window.Publications = Publications
