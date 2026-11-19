export type Project = {
  name: string;
  subtitle: string;
  description: string;
  category: string;
  status: string;
  accent: string;
  repo: string;
  website?: string;
  stars: string;
  tech: string[];
  highlights: string[];
};

export const featuredProjects: Project[] = [
  {
    name: "NipaPlay Reload",
    subtitle: "跨平台本地视频播放器",
    description:
      "面向追番和个人媒体库的播放器，覆盖桌面与移动端，集成弹幕、字幕、多音轨、Bangumi 同步、Emby/Jellyfin 挂载，以及由 agent 驱动的 NipaPlay Next 模式。",
    category: "Media",
    status: "Active",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/NipaPlay-Reload",
    website: "https://nipaplay.aimes-soft.com",
    stars: "1.8k+",
    tech: ["Flutter", "Rust", "mpv", "Dart FFI"],
    highlights: ["弹幕与字幕", "媒体库挂载", "NipaPlay Next"],
  },
  {
    name: "Misuzu Music",
    subtitle: "本地音乐播放器",
    description:
      "围绕本地音乐收藏、歌词、海报和歌单管理打造的跨平台音乐播放器，视觉体验参考 Apple Music。",
    category: "Audio",
    status: "Open Source",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/MisuzuMusic",
    stars: "68",
    tech: ["Flutter", "Dart", "Local Media"],
    highlights: ["歌词匹配", "海报匹配", "日语注音假名"],
  },
  {
    name: "SakiEngine",
    subtitle: "Flutter 视觉小说游戏引擎",
    description:
      "为跨平台视觉小说开发设计的轻量引擎，提供类 Ren'Py 脚本、对话系统、存档读档、项目模块化和全平台构建流程。",
    category: "Game Engine",
    status: "Active",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/SakiEngine",
    website: "https://sakiengine.aimes-soft.com",
    stars: "35+",
    tech: ["Flutter", "Node.js", "Script DSL"],
    highlights: ["类 Ren'Py 语法", "自动项目创建", "跨平台发布"],
  },
  {
    name: "Misa Rin",
    subtitle: "高性能数字绘画软件",
    description:
      "基于 Rust WGPU 与 Flutter 的绘画和像素创作工具，强调 CPU 光栅化、无限画布、二值化工作流和漫画排版能力。",
    category: "Creative Tool",
    status: "Alpha",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/MisaRin",
    website: "https://misarin.aimes-soft.com",
    stars: "20+",
    tech: ["Rust", "WGPU", "Flutter", "CanvasKit"],
    highlights: ["无限画布", "专业笔刷引擎", "赛璐璐流程"],
  },
];

export const ecosystemProjects: Project[] = [
  {
    name: "Bern",
    subtitle: "Rust 跨平台原生 UI 框架",
    description:
      "一份 Rust 声明编译为 SwiftUI、WinUI 3、GTK 4、Jetpack Compose 与 Web 原生界面，不捆绑浏览器内核，并在编译期检查缺失翻译与窄屏布局，同时为 agent 生成可按名称操作的控制接口。",
    category: "Framework",
    status: "Active",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/Bern",
    website: "https://bern.aimes-soft.com",
    stars: "—",
    tech: ["Rust", "SwiftUI", "WinUI 3", "GTK 4", "Compose"],
    highlights: ["全平台原生控件", "编译期界面检查", "Agent 原生控制"],
  },
  {
    name: "liberika",
    subtitle: "Rust 播放器内核",
    description:
      "用 Rust 与 WebAssembly 构建的跨平台播放内核，承载视频解码、时钟同步、字幕与弹幕渲染等底层能力。",
    category: "Kernel",
    status: "Active",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/liberika",
    website: "https://liberika.aimes-soft.com",
    stars: "—",
    tech: ["Rust", "FFmpeg", "WebAssembly"],
    highlights: ["解码同步", "字幕弹幕", "跨平台内核"],
  },
  {
    name: "Nipaplay Plugins",
    subtitle: "播放器插件市场",
    description:
      "面向 NipaPlay 的官方 JavaScript 插件市场，让播放器能力可以被轻量扩展。",
    category: "Extensions",
    status: "Marketplace",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/Nipaplay-plugins",
    stars: "1",
    tech: ["JavaScript", "Plugin Runtime"],
    highlights: ["插件分发", "轻量扩展", "官方目录"],
  },
];

export const studioPillars = [
  {
    title: "跨平台产品与框架",
    text: "围绕 Rust 与 Flutter 构建桌面、移动端与 Web 应用，以及直接编译为各平台原生界面的 UI 框架 Bern。",
  },
  {
    title: "媒体与创作工具",
    text: "从视频播放器、音乐播放器到绘画软件与视觉小说引擎，专注长期使用场景里的底层性能与细节。",
  },
  {
    title: "内核与 Agent 基础设施",
    text: "把播放内核、脚本引擎、意图驱动的 agent 运行时与技术研究沉淀成公开可复用的基础设施。",
  },
];

export const quickLinks = [
  { label: "Research", href: "/research/zh/" },
  { label: "GitHub", href: "https://github.com/AimesSoft" },
  { label: "NipaPlay", href: "https://nipaplay.aimes-soft.com" },
  { label: "Bern", href: "https://bern.aimes-soft.com" },
  { label: "Misa Rin", href: "https://misarin.aimes-soft.com" },
];
