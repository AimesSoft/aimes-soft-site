export type Project = {
  name: string;
  subtitle: string;
  description: string;
  category: string;
  status: string;
  accent: string;
  repo: string;
  website?: string;
  stars?: string;
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
    name: "Erika",
    subtitle: "Rust 原生本地视频播放器",
    description:
      "liberika 的官方客户端，定位 Rust 领域的 mpv。播放由自研内核 liberika 驱动，界面由 Bern 编译为各平台原生控件，轻量模块化并内置 MCP。",
    category: "Media",
    status: "Active",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/Erika",
    website: "https://erika.aimes-soft.com",
    tech: ["Rust", "liberika", "Bern", "MCP"],
    highlights: ["liberika 内核", "Bern 原生界面", "模块化与 MCP"],
  },
  {
    name: "SakiEngine",
    subtitle: "跨平台视觉小说游戏引擎",
    description:
      "基于 Flutter / Dart AOT 与 Rust 的开源视觉小说引擎，集成自研播放内核，提供 SKS 脚本、演出编辑、存档回滚、多语言与全平台发布流程。",
    category: "Game Engine",
    status: "Active",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/SakiEngine",
    website: "https://sakiengine.aimes-soft.com",
    stars: "70+",
    tech: ["Flutter", "Dart AOT", "Rust", "SKS DSL"],
    highlights: ["类 Ren'Py 语法", "全平台原生发布", "内置播放内核"],
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
];

export const ecosystemProjects: Project[] = [
  {
    name: "Bern",
    subtitle: "Rust 跨平台原生 UI 框架",
    description:
      "一份 Rust 声明编译为 SwiftUI、WinUI 3、GTK 4、Jetpack Compose、GPUI 与 Web 原生界面，覆盖桌面、移动端、手表与电视，具备编译期检查与面向 agent 的 Skills + CLI。",
    category: "Framework",
    status: "Active",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/Bern",
    website: "https://bern.aimes-soft.com",
    tech: ["Rust", "SwiftUI", "WinUI 3", "GTK 4", "GPUI"],
    highlights: ["全平台原生控件", "编译期界面检查", "Agent 原生控制"],
  },
  {
    name: "liberika",
    subtitle: "Rust 播放器内核",
    description:
      "用 Rust 与 WebAssembly 构建的跨平台播放内核，承载视频解码、时钟同步、ASS 字幕与弹幕渲染等底层能力。",
    category: "Kernel",
    status: "Active",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/liberika",
    website: "https://liberika.aimes-soft.com",
    tech: ["Rust", "FFmpeg", "WebAssembly"],
    highlights: ["解码同步", "字幕弹幕", "跨平台内核"],
  },
  {
    name: "RustSend",
    subtitle: "基于 Bern 的局域网文件传输",
    description:
      "使用 Rust 与 Bern 构建的原生局域网文件传输工具，兼容 LocalSend 协议。",
    category: "Utility",
    status: "Open Source",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/RustSend",
    tech: ["Rust", "Bern", "LocalSend"],
    highlights: ["原生界面", "兼容 LocalSend", "零浏览器内核"],
  },
  {
    name: "Misa Rin",
    subtitle: "数字绘画与像素创作软件",
    description:
      "基于 Rust WGPU 与 Flutter 的跨平台绘画软件，支持无限画布、选区、魔棒、剪贴蒙版与赛璐璐工作流。",
    category: "Creative Tool",
    status: "Alpha",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/MisaRin",
    website: "https://misarin.aimes-soft.com",
    tech: ["Rust", "WGPU", "Flutter"],
    highlights: ["无限画布", "专业笔刷引擎", "赛璐璐流程"],
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
  { label: "Erika", href: "https://erika.aimes-soft.com" },
  { label: "Bern", href: "https://bern.aimes-soft.com" },
  { label: "Misa Rin", href: "https://misarin.aimes-soft.com" },
];
