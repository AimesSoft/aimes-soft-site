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
      "面向追番和个人媒体库的播放器，覆盖桌面与移动端，集成弹幕、字幕、多音轨、Bangumi 同步和 Emby/Jellyfin 挂载。",
    category: "Media",
    status: "Active",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/NipaPlay-Reload",
    website: "https://nipaplay.aimes-soft.com",
    stars: "1.5k+",
    tech: ["Flutter", "Rust", "mpv", "Dart FFI"],
    highlights: ["弹幕与字幕", "媒体库挂载", "JS 插件系统"],
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
  {
    name: "AgentBridge OneBot",
    subtitle: "Agent 与 QQ 群连接层",
    description:
      "把 Agent 接入 OneBot 协议生态的桥接工具，让自动化智能体可以进入社群场景。",
    category: "Agent",
    status: "Experiment",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/agentbridge-onebot",
    stars: "2",
    tech: ["Python", "OneBot", "Agent"],
    highlights: ["QQ 群接入", "消息桥接", "自动化实验"],
  },
  {
    name: "Erika",
    subtitle: "Rust 播放器内核",
    description:
      "为 NipaPlay 视频体验服务的 Rust 播放器内核方向，承载解码、同步、叠加和渲染等底层能力。",
    category: "Kernel",
    status: "Internal Core",
    accent: "#ffffff",
    repo: "https://github.com/AimesSoft/Erika",
    stars: "3",
    tech: ["Rust", "Rendering", "Playback"],
    highlights: ["解码同步", "叠加渲染", "底层内核"],
  },
];

export const studioPillars = [
  {
    title: "跨平台产品",
    text: "以 Flutter 与 Rust 为主轴，把桌面、移动端和 Web 的体验放在同一套产品语言里打磨。",
  },
  {
    title: "媒体与创作工具",
    text: "从视频播放器、音乐播放器到绘画软件，优先解决长期使用场景里的细节体验。",
  },
  {
    title: "引擎与基础设施",
    text: "把播放器内核、脚本引擎、插件市场和构建流程沉淀成可复用能力。",
  },
];

export const quickLinks = [
  { label: "GitHub", href: "https://github.com/AimesSoft" },
  { label: "NipaPlay", href: "https://nipaplay.aimes-soft.com" },
  { label: "Misa Rin", href: "https://misarin.aimes-soft.com" },
];
