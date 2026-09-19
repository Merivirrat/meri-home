import { sitePath } from "./site-path";

const projects = [
  {
    index: "01",
    title: "暑校代数几何讲义",
    kind: "讲义",
    description: "张通老师 2026 年暑期学校代数几何课程讲义。",
    status: "30 页 · 阅读",
    href: "/projects/algebraic-geometry",
  },
  {
    index: "02",
    title: "Weibel 同调笔记",
    kind: "笔记",
    description: "跟随 Weibel 整理的同调代数中文笔记。",
    status: "40 页 · 阅读",
    href: "/projects/weibel-homological-algebra",
  },
  {
    index: "03",
    title: "椭圆曲线讨论班讲义",
    kind: "讨论班",
    description: "椭圆曲线讨论班的讲稿与章节记录。",
    status: "整理中",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="site-name" href="#top" aria-label="返回首页顶部">
          Meri
        </a>
        <nav aria-label="主导航">
          <a href="#projects">项目</a>
          <a href="#writing">文章</a>
          <a href="#about">关于</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-mark" aria-hidden="true">
          M
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Meri&apos;s homepage · 2026</p>
          <h1 id="hero-title">Meri的主页</h1>
          <p className="motto">爱，舞萌与数学</p>
          <div className="identity">
            <span>本科生</span>
            <span aria-hidden="true">/</span>
            <span>兴趣方向：几何与数论</span>
          </div>
        </div>
        <p className="hero-note">
          在这里存放学习中的笔记、讲义，
          <br />
          以及一些以后想写下来的话。
        </p>
      </section>

      <section className="section projects" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-number">I</p>
          <div>
            <h2 id="projects-title">讲义与笔记</h2>
            <p>Notes &amp; Lectures</p>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project) => {
            const content = (
              <>
              <p className="project-index">{project.index}</p>
              <div className="project-body">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span>{project.kind}</span>
                </div>
                <p>{project.description}</p>
              </div>
              <p className="project-status">{project.status}</p>
              </>
            );

            return project.href ? (
              <a className="project project-link" href={sitePath(project.href)} key={project.index}>
                {content}
              </a>
            ) : (
              <article className="project" key={project.index}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section writing" id="writing" aria-labelledby="writing-title">
        <div className="section-heading">
          <p className="section-number">II</p>
          <div>
            <h2 id="writing-title">文章</h2>
            <p>Essays &amp; Reflections</p>
          </div>
        </div>

        <div className="empty-state">
          <p className="empty-symbol" aria-hidden="true">∅</p>
          <div>
            <h3>这里暂时空着。</h3>
            <p>等有值得留下的话，再慢慢写在这里。</p>
          </div>
        </div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-number">III</p>
          <div>
            <h2 id="about-title">关于</h2>
            <p>About</p>
          </div>
        </div>

        <div className="about-copy">
          <p>
            我是 Meri，一名本科生。目前主要学习几何与数论，
            这个网站用来整理学习留下的痕迹以及记录生活。
          </p>
          <p className="signature">爱，舞萌与数学。</p>
          <p className="contact-line">
            <span>邮箱</span>
            <a href="mailto:merivirrat63@gmail.com">merivirrat63@gmail.com</a>
          </p>
        </div>
      </section>

      <footer>
        <p>© 2026 Meri</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
