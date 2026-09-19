import type { Metadata } from "next";
import { DocumentPage } from "../document-page";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "Weibel 同调代数笔记 | Meri的主页",
  description: "跟随 Weibel 整理的同调代数中文笔记。",
};

export default function WeibelHomologicalAlgebraNotesPage() {
  return (
    <DocumentPage
      kind="Homological Algebra · Notes"
      title="Weibel 同调代数笔记"
      subtitle="Weibel Homological Algebra Notes"
      meta={["同调代数", "40 页", "中文", "持续更新"]}
      summary="目前包括链复形、长正合列、链同伦、映射锥与映射柱、阿贝尔范畴，以及导出函子的开篇内容。"
      pdfHref={sitePath("/files/weibel-homological-algebra-notes.pdf")}
      downloadName="weibel-homological-algebra-notes.pdf"
      pages={40}
    />
  );
}
