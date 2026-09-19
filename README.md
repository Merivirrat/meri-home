# Meri 的主页

> 爱，舞萌与数学。

Meri 的个人学术主页，用于整理几何与数论方向的学习笔记、课程讲义，以及记录生活。项目基于 Next.js 构建，并通过静态导出部署到 Cloudflare Pages。

## 功能概览

- 展示个人简介、研究兴趣与联系方式
- 集中陈列讲义、笔记和讨论班资料
- 为 PDF 文档提供详情页、在线预览和下载入口
- 支持桌面端与移动端的响应式布局
- 采用纯静态导出，无需服务器运行环境

## 已收录内容

| 内容 | 类型 | 状态 |
| --- | --- | --- |
| 暑校代数几何讲义 | 英文讲义 | 30 页 |
| Weibel 同调代数笔记 | 中文笔记 | 40 页，持续更新 |
| 椭圆曲线讨论班讲义 | 讨论班资料 | 整理中 |

## 技术栈

- [Next.js](https://nextjs.org/) 16（App Router）
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- 原生 CSS
- Cloudflare Pages

## 本地开发

### 环境要求

- Node.js 22 或更高版本
- npm（随 Node.js 安装）

### 启动项目

```bash
git clone <repository-url>
cd meri-home
npm install
npm run dev
```

启动后访问 [http://localhost:3000](http://localhost:3000)。

## 可用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 构建并静态导出网站至 `out/` |

## 项目结构

```text
meri-home/
├── app/
│   ├── projects/                 # 讲义与笔记详情页
│   │   └── document-page.tsx     # PDF 文档页的通用组件
│   ├── globals.css               # 全局样式
│   ├── layout.tsx                # 根布局与网站元数据
│   └── page.tsx                  # 首页
├── public/
│   ├── files/                    # 可在线阅读和下载的 PDF 文件
│   └── favicon.svg               # 网站图标
├── next.config.ts                # Next.js 静态导出配置
├── package.json
└── tsconfig.json
```

## 添加新文档

1. 将 PDF 文件放入 `public/files/`。
2. 在 `app/projects/<slug>/page.tsx` 中创建详情页，并复用 `DocumentPage` 组件。
3. 在 `app/page.tsx` 的 `projects` 数组中补充文档信息和详情页路径。
4. 更新本 README 的“已收录内容”表格。
5. 运行 `npm run build`，确认页面和静态资源均可正常导出。

## 部署

项目已在 `next.config.ts` 中启用静态导出。Cloudflare Pages 可使用以下配置：

| 配置项 | 值 |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `22` |

部署后不需要额外的 Node.js 服务器。若新增依赖服务端运行时的 Next.js 功能，请先确认其是否兼容静态导出。

## 内容说明

站内讲义与笔记主要用于个人学习、整理和交流；内容可能持续修订。如需引用，请以对应 PDF 中的信息为准。
