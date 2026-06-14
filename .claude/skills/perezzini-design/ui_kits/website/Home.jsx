/* global React */
// Home — the portfolio landing column: hero, bio, education, work, CTAs, social.
const { Avatar, Button, SocialIcon } = window.PerezziniDesignSystem_33c6f1

function Home() {
  return (
    <main
      className="home"
      style={{
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: '112px 24px 72px',
        textAlign: 'center',
      }}
    >
      <header style={{ marginBottom: 48 }}>
        <Avatar
          src="../../assets/profile-1.jpeg"
          alt="Luciano Perezzini"
          size={112}
        />
        <h1 style={{ margin: '20px 0 8px', fontSize: 'var(--text-hero)' }}>
          Luciano Perezzini
        </h1>
        <p
          style={{
            fontSize: 'var(--text-subtitle)',
            color: 'var(--text-subtitle)',
            margin: 0,
          }}
        >
          Technologist
        </p>
      </header>

      <section style={{ marginBottom: 32 }}>
        <p>
          Luciano builds data-driven products at the intersection of AI,
          information retrieval, and software engineering. He has led technical
          and product work at early-stage startups from zero to scale, with a
          focus on turning complex data into decision-ready systems. His
          background spans natural language processing, machine learning, and
          applied research &mdash; grounded in the belief that great engineering
          and great user experience are inseparable.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <p>
          Licentiate in Computer Science from{' '}
          <a href="#">Universidad Nacional de Rosario</a> (2019). Thesis
          conducted at <a href="#">CIFASIS-CONICET</a>:{' '}
          <em>
            <a href="#">Towards Legal Engineering Decision Support Systems</a>
          </em>{' '}
          &mdash; LegalTech recommender systems built on Information Retrieval
          and Natural Language Processing.
        </p>
        <div
          style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}
        >
          <Button variant="outline" icon="fa-solid fa-cloud-arrow-down" href="#">
            Thesis
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <p className="secondary">
          Since 2021, he has served as Chief Data Officer at{' '}
          <a href="#">DeepAgro</a>, leading the Data and Cloud Computing division
          &mdash; driving the design, deployment, and scaling of machine learning
          systems and business intelligence platforms across the agri-tech
          sector.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <div
          style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}
        >
          <Button variant="primary" icon="fa-solid fa-cloud-arrow-down" href="#">
            Resume
          </Button>
          <Button variant="outline" icon="fa-regular fa-envelope" href="#">
            Contact Me
          </Button>
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
          <SocialIcon icon="fa-brands fa-linkedin-in" href="#" label="LinkedIn" />
          <SocialIcon icon="fa-brands fa-github" href="#" label="GitHub" />
        </div>
      </section>
    </main>
  )
}

window.Home = Home
