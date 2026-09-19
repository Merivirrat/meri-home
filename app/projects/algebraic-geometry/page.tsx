import type { Metadata } from "next";
import { DocumentPage } from "../document-page";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "暑校代数几何讲义 | Meri的主页",
  description: "张通老师 2026 年代数与数论暑期学校代数几何课程讲义。",
};

export default function AlgebraicGeometryNotesPage() {
  return (
    <DocumentPage
      kind="Algebraic Geometry · Lecture Notes"
      title="暑校代数几何讲义"
      subtitle="Lectures on Algebraic Geometry"
      meta={["张通", "2026 暑期学校", "30 页", "英文"]}
      summary="从仿射簇与 Zariski 拓扑出发，依次讨论正则函数、层与茎、概形、射影几何，以及射影空间的上同调。"
      pdfHref={sitePath("/files/lectures-on-algebraic-geometry-2026.pdf")}
      downloadName="lectures-on-algebraic-geometry-2026.pdf"
      pages={30}
    />
  );
}
