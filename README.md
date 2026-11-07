# Pea 系列 · 官网主页

PeaPlayer（语言学习播放器）与 PeaScribe（字幕生成器）的合集主页。单页自包含 HTML，亮色豌豆绿视觉（参考 PeaScribe tech-utility 设计令牌），支持夜间模式与 10 种语言切换（中 / 英 / 日 / 韩 / 德 / 法 / 西 / 意 / 葡 / 俄），无需构建、无依赖，部署后开箱即用。

## 预览

直接用浏览器打开 `index.html`，或访问 `https://pea-series.github.io/`。

## 目录结构

| 文件 | 作用 |
|---|---|
| `index.html` | **主页本体**（GitHub Pages 入口）。样式、交互、10 语字典、发布配置全部内联在这一个文件里 |
| `privacy.html` | 隐私政策页（与主页共享设计系统、主题、语言切换、导航与底栏） |
| `email-confirm.html` | 注册确认邮件的 HTML 模板（Supabase / GoTrue 邮件模板，含 `{{ .ConfirmationURL }}` 变量） |
| `email-reset.html` | 重置密码邮件的 HTML 模板（同上） |
| `.nojekyll` | 禁用 Jekyll 构建，纯静态部署 |
| `README.md` | 本文件 |

改主页 = 改 `index.html`，没有第二份副本需要同步。

## 界面还原

产品区的两个应用窗口是真实界面还原（基于各自原型），每个窗口三屏 Tab 切换：

- **PeaPlayer**：Apple 暗色专业风格 —— 首页启动器 / 播放器双轨字幕 / 学习·复习闪卡
- **PeaScribe**：tech-utility 三栏布局 —— 首页空状态 / 字幕生成进度与日志 / SRT 字幕编辑器

窗口内部的 UI 文案保持中文（与实际产品一致）；Tab 标签与脚注文案随语言切换。

## 语言与主题

- 右上角切换夜间 / 亮色模式与语言，选择保存在 `localStorage`；页面标题、描述、文案与下载状态（「已上线 / 待上线」）随之翻译。
- 文案集中在 `index.html` 的 `window.PEA_I18N` 字典（10 层语言对象）；新增语言只需在字典里加一层。

## 维护下载链接（只改一处）

`index.html` 里的 `window.PEA_RELEASES` 是全站唯一的发布配置源（约 1450 行，带完整注释）。每个产品下两个平台，每个平台形如：

```js
macos: {
  url: "https://…/PeaScribe.app.zip",            // 填直链 → 显示「下载」按钮
  store: "https://apps.microsoft.com/detail/…",  // 填商店链接 → 显示 Store 徽章（优先级高于 url）
  version: "1.0.0",                              // 版本号，显示在按钮与说明文字上
  note: "M 系列芯片"                              // 可选，覆盖该平台的说明小字
}
```

规则：

- `url` 或 `store` 填了值 → 该平台显示可点的下载按钮（新标签页打开），行首出现绿色状态点；两者都留空 → 显示「待上线」占位按钮，点击弹出提示。这是正常交互，不是按钮失效。
- 下载区 4 个按钮由这段配置在运行时渲染，HTML 里**不再手写链接**，改链接只改配置一处。
- 每个平台独立判断：可以只上线 Windows，macOS 继续「待上线」。

## 自动获取最新版本（GitHub Releases API）

产品配了 `repo`（如 `"Pea-Series/peaplayer"`）时，页面启动会请求 `https://api.github.com/repos/{repo}/releases/latest`，把最新 `tag_name` 显示为「最新版本」徽章，并优先用于下载按钮的版本号：

- 仓库必须是 Public 且有 release，否则 API 404，页面静默回退到平台 `version` 字段（也没有就不显示徽章）。
- PeaScribe 走 Microsoft Store 上架，版本号以配置里的 `version` 为准 —— 商店版本常与 Release tag 不同步。`// scribe-version` 标记是发布 CI 改写版本号用的锚点。
- 徽章默认隐藏，拉到版本后自动出现；发新 release 后刷新页面即更新。

## 部署

推到 GitHub 后，GitHub Pages 自动启用（`.github.io` 仓库默认开启）。访问 `https://pea-series.github.io/` 即可。

> **⚠️ 404「Site not found」排障**：`.github.io` 仓库必须在 **Settings → 仓库可见性 → 设为 Public** 后才能部署 Pages。仓库为私有时，Pages 不会构建，整站显示 GitHub 的「Site not found」404 页。公开后无需其他配置，Pages 会自动用 `main` 分支根目录构建（`.nojekyll` 已确保不走 Jekyll）。
