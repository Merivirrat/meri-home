import { sitePath } from "../site-path";

type DocumentPageProps = {
  kind: string;
  title: string;
  subtitle: string;
  meta: string[];
  summary: string;
  pdfHref: string;
  downloadName: string;
  pages: number;
};

export function DocumentPage({
  kind,
  title,
  subtitle,
  meta,
  summary,
  pdfHref,
  downloadName,
  pages,
}: DocumentPageProps) {
  return (
    <main className="document-page">
      <header className="site-header document-header">
        <a className="site-name" href={sitePath("/")} aria-label="返回 Meri 的主页">
          Meri
        </a>
        <a className="back-link" href={sitePath("/#projects")}>
          ← 返回讲义与笔记
        </a>
      </header>

      <article className="document-content">
        <section className="document-hero" aria-labelledby="document-title">
          <p className="eyebrow">{kind}</p>
          <h1 id="document-title">{title}</h1>
          <p className="document-subtitle">{subtitle}</p>
          <div className="document-meta" aria-label="文档信息">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="document-summary">{summary}</p>
          <div className="document-actions">
            <a className="document-button primary" href={pdfHref} target="_blank" rel="noreferrer">
              打开 PDF ↗
            </a>
            <a className="document-button" href={pdfHref} download={downloadName}>
              下载 PDF
            </a>
          </div>
        </section>

        <section className="document-reader" aria-labelledby="reader-title">
          <div className="reader-heading">
            <h2 id="reader-title">在线阅读</h2>
            <p>PDF · {pages} 页</p>
          </div>
          <iframe
            className="pdf-frame"
            src={`${pdfHref}#view=FitH`}
            title={`${title} PDF 阅读器`}
            loading="lazy"
          />
          <p className="reader-fallback">
            如果浏览器无法显示 PDF，请使用上方的“打开 PDF”或“下载 PDF”。
          </p>
        </section>
      </article>

      <footer>
        <p>© 2026 Meri</p>
        <a href={sitePath("/")}>返回主页</a>
      </footer>
    </main>
  );
}
