const care = [
  ["Public health", "Using data and technology to improve health research and decision-making."],
  ["Artificial intelligence", "Applying machine learning and AI to real-world problems."],
  ["Data for Africa", "Building data-driven solutions that fit African contexts."],
  ["Inclusive technology", "Expanding access and opportunity, especially for underserved communities."],
];

const projects = [
  { cat: "Machine learning · Public health", title: "Malaria burden prediction", tone: "v",
    text: "Predicts malaria burden from health data: preprocessing, exploratory analysis, feature preparation, modelling and evaluation.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter"] },
  { cat: "Machine learning · Health analytics", title: "Malaria severity classification", tone: "m",
    text: "A classification approach that turns structured health data into predictive insight on malaria severity.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn"] },
  { cat: "Data science · Forecasting", title: "Energy time-series analysis", tone: "c",
    text: "Analysed electricity demand and renewable supply, applied forecasting techniques and communicated findings with visualisations.",
    tags: ["R", "forecast", "ggplot2", "dplyr"] },
  { cat: "NLP · Machine learning", title: "Twitter sentiment analysis", tone: "v",
    text: "Classifies tweet sentiment using text preprocessing, feature extraction and logistic regression.",
    tags: ["Python", "NLTK", "Scikit-learn", "Pandas"] },
  { cat: "SQL · Data analytics", title: "Customer sales analysis", tone: "m",
    text: "Used SQL to find purchasing patterns and segment customers by sales performance.",
    tags: ["SQL", "MySQL / PostgreSQL", "Aggregation"] },
];

const skills = [
  ["Data science & analytics", ["Python", "R", "SQL", "Pandas", "NumPy", "SciPy", "EDA", "Predictive modelling", "Time-series analysis"]],
  ["Machine learning & AI", ["Scikit-learn", "Logistic regression", "Classification", "NLP", "Feature engineering", "Model evaluation"]],
  ["Data visualisation", ["Power BI", "Matplotlib", "ggplot2", "Plotly", "Excel"]],
  ["Databases & data engineering", ["PostgreSQL", "MySQL", "SQL Server", "PySpark", "Azure Data Lake", "Azure Data Warehouse"]],
  ["Software development", ["FastAPI", "REST APIs", "Next.js", "Git", "GitHub"]],
  ["Research & public health", ["Biostatistics", "Epidemiology", "Study design", "Statistical modelling", "Quantitative research", "Data validation", "Research reporting"]],
  ["Data collection", ["KoboCollect", "ODK"]],
];

const jobs = [
  { role: "Teach For Kenya Fellow", where: "Machakos School for the Deaf", when: "2025 – Present",
    text: "Teaching primary learners in an inclusive classroom using Kenyan Sign Language, differentiated instruction, data-informed teaching and technology.",
    points: ["Implemented Ishara Digital, a digital literacy project for deaf learners.", "Use learner performance data to monitor progress and guide interventions.", "Work with school leadership and stakeholders.", "Build accessible learning resources and bring technology into lessons."] },
  { role: "Freelance Research Analyst & Writer", where: "Self-employed", when: "2023 – Present",
    text: "Data analysis and research assignments using Python, R, SQL and Excel.",
    points: ["Data cleaning, statistical analysis and analytical modelling.", "Report writing and data interpretation.", "Client communication."] },
  { role: "BSc Biostatistics", where: "Jomo Kenyatta University of Agriculture and Technology", when: "2019 – 2023",
    text: "Epidemiology, statistical methods in public health, study design, data management and analysis, statistical modelling.", points: [] },
];

const CV = "mailto:charlesreign2@gmail.com?subject=CV%20request";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="logo">CM<span>.</span></a>
          <ul>
            {["About", "Focus", "Projects", "Skills", "Experience", "Contact"].map((s) => (
              <li key={s}><a href={`#${s.toLowerCase()}`}>{s}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="wrap hero-in">
          <div>
            <p className="pill">Open to work · Kenya</p>
            <h1>Charles Maina</h1>
            <p className="sub">Data. Technology. Public health. Impact.</p>
            <p className="lead">I use data, technology and AI to understand problems, generate insights and build solutions that create meaningful impact.</p>
            <div className="actions">
              <a className="btn main" href="#projects">View my projects</a>
              <a className="btn ghost" href={CV}>Request my CV</a>
            </div>
          </div>
          <div className="viz" aria-hidden="true">
            <div className="viz-top"><i /><i /><i /><b>malaria_forecast.ipynb</b></div>
            <svg viewBox="0 0 400 220">
              {[40, 90, 140, 190].map((y) => <line key={y} x1="0" x2="400" y1={y} y2={y} className="grid" />)}
              <path className="area" d="M0 190 C50 170 80 120 130 130 S210 190 260 120 S340 50 400 70 V220 H0Z" />
              <path className="line draw" d="M0 190 C50 170 80 120 130 130 S210 190 260 120 S340 50 400 70" />
              <path className="line2" d="M0 200 C60 185 100 160 150 165 S230 175 280 140 S350 100 400 110" />
            </svg>
            <div className="chips"><span>Python</span><span>R</span><span>SQL</span><span>Scikit-learn</span></div>
          </div>
        </div>
      </header>

      <main>
        <section id="about"><div className="wrap about">
          <h2>About me</h2>
          <div>
            <p>I am a Biostatistics graduate from Jomo Kenyatta University of Agriculture and Technology with a passion for solving real-world problems with data, technology and artificial intelligence. My experience spans data analysis, statistical modelling, machine learning, public health research, software development and education technology.</p>
            <p>I enjoy working where data meets impact. I have built projects in health-data prediction, time-series forecasting and natural language processing, and as a Teach For Kenya Fellow I apply technology and data in education.</p>
            <p>I am looking for roles in data analysis, data science, biostatistics and research, public health data, and machine learning or AI internships.</p>
          </div>
        </div></section>

        <section id="focus" className="tint"><div className="wrap">
          <h2>What I care about</h2>
          <div className="grid4">
            {care.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div></section>

        <section id="projects"><div className="wrap">
          <h2>Projects</h2>
          <p className="muted">Machine learning, forecasting, NLP and education technology. More on <a href="https://github.com/charles-mitch200">GitHub</a>.</p>
          <article className="feature">
            <div>
              <span className="cat">EdTech · Social impact · Digital literacy</span>
              <h3>Ishara Digital</h3>
              <p>An education technology initiative that improves digital literacy among deaf learners through structured computer lessons, visual demonstrations, guided practice, peer support and accessible learning approaches.</p>
              <p><b>Impact:</b> structured digital literacy learning, with learners building practical computer skills and confidence with technology.</p>
              <p><b>Role:</b> Project lead, Teach For Kenya Fellow</p>
            </div>
            <ul className="tags">{["Project management", "Inclusive design", "Stakeholder engagement", "Monitoring & evaluation", "Word, Excel, PowerPoint"].map((t) => <li key={t}>{t}</li>)}</ul>
          </article>
          <div className="grid3">
            {projects.map((p) => (
              <article className={`card proj ${p.tone}`} key={p.title}>
                <span className="cat">{p.cat}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </article>
            ))}
          </div>
        </div></section>

        <section id="skills" className="tint"><div className="wrap">
          <h2>Skills</h2>
          <div className="grid3">
            {skills.map(([g, list]) => (
              <div className="card" key={g}>
                <h3>{g}</h3>
                <ul className="tags">{list.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </div></section>

        <section id="experience"><div className="wrap">
          <h2>Experience & education</h2>
          <div className="tl">
            {jobs.map((j) => (
              <article key={j.role}>
                <h3>{j.role}</h3>
                <p className="meta">{j.where} · {j.when}</p>
                <p>{j.text}</p>
                {j.points.length > 0 && <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>}
              </article>
            ))}
          </div>
        </div></section>

        <section id="contact" className="contact"><div className="wrap">
          <h2>Let’s work together</h2>
          <p>Open to data, research and public-health roles, and to freelance projects.</p>
          <div className="links">
            <a href="mailto:charlesreign2@gmail.com">charlesreign2@gmail.com</a>
            <a href="tel:+254797237223">0797 237 223</a>
            <a href="https://linkedin.com/in/charles-maina-b61699274">LinkedIn</a>
            <a href="https://github.com/charles-mitch200">GitHub</a>
          </div>
          <a className="btn main" href={CV}>Request my CV</a>
        </div></section>
      </main>
      <footer>© {new Date().getFullYear()} Charles Maina · Built with Next.js</footer>
    </>
  );
}
