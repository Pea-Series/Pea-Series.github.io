# Pea 系列 · 官网主页

PeaPlayer（语言学习播放器）与 PeaScribe（字幕生成器）的合集主页。单页自包含 HTML，亮色豌豆绿视觉（参考 PeaScribe tech-utility 设计令牌），支持夜间模式与中文 / English / 日本語 三语切换，无需构建、无依赖，部署后开箱即用。

## 界面还原

产品区窗口已替换为两个真实应用界面还原（基于各自原型）：

- **PeaPlayer**：Apple 暗色专业风格，三屏 Tab 切换（首页启动器 / 播放器双轨字幕 / 学习·复习闪卡）
- **PeaScribe**：tech-utility 三栏布局，三屏 Tab 切换（首页空状态 / 字幕生成进度与日志 / SRT 字幕编辑器）

每个还原窗口底部有当前屏幕的功能说明脚注，Tab 标签与脚注文案均支持三语切换。界面内部的 UI 文案保持中文（与实际产品一致）。

## 语言与主题

- 右上角图标按钮切换夜间 / 亮色模式，默认跟随系统，选择保存在浏览器 `localStorage`。
- 右上角下拉切换 中文 / English / 日本語，同样持久化；页面标题、描述、文案与下载状态（「已上线 / 待上线」）随之翻译。
- 全部界面文案集中在 `pea-series-home.html` 的 `window.PEA_I18N` 字典（`zh` / `en` / `ja` 三层）；新增语言只需在字典加一层。

## 文件结构

| 文件 | 作用 |
|---|---|
| `index.html` | GitHub Pages 入口，自动跳转到 `pea-series-home.html` |
| `pea-series-home.html` | 主页本体（所有样式与交互内联在单文件中） |
| `privacy.html` | 隐私政策页（与主页共享设计系统、主题、三语、导航与底栏） |
| `pea-releases.js` | **下载链接唯一配置源**，决定每个产品/平台的发布状态 |
| `.nojekyll` | 禁用 Jekyll 构建，纯静态部署 |

## 管理下载链接（读这一个文件就够了）

打开 `pea-releases.js`，每个产品下有两个平台（macOS / Windows），每个平台形如：

```js
macos: {
  url: "",            // 填直链 → 该平台显示「已上线」；留空 → 「待上线」
  version: "0.1.0",   // 版本号，会显示在下载按钮与说明文字上
  note: "Apple Silicon · Intel"
}
```

规则：

- **`url` 填入直链**（如 `https://example.com/PeaPlayer-0.1.0.dmg`）→ 保存、刷新页面，该平台自动切换为「已上线」：按钮变成真实下载链接（新标签页打开），行首出现绿色状态点，说明文字附上版本号。
- **`url` 留空** → 该平台保持「待上线」：按钮为虚线占位，点击会弹出提示。这是正常交互，不是按钮失效。
- 产品标题旁的徽章（绿色=已上线 / 灰色虚线=待上线）与下载区按钮状态都是根据同一份配置自动生成的。
- 每个平台独立判断：可以只上线 Windows，macOS 继续「待上线」。

## 自动获取最新版本（GitHub Releases API）

每个产品还支持一个 `repo` 字段（仓库名，如 `"Pea-Series/peascribe"`）。填上后，页面启动时会自动请求
`https://api.github.com/repos/{repo}/releases/latest`，把最新 `tag_name` 显示在应用名旁的「最新版本」徽章上，并优先用于下载按钮的版本号：

```js
player: {
  name: "PeaPlayer",
  repo: "Pea-Series/peaplayer",   // 留空 → 不自动拉取，用平台 version 字段兜底
  platforms: { … }
}
```

- **仓库必须是 Public 且有 release** 才能拉到版本号；私有仓库或没有 release 时 API 返回 404，页面静默回退到平台 `version` 字段（也没有就不显示徽章）。
- GitHub API 是公开接口、支持 CORS，纯静态页面可以直接请求，无需后端或 CI。
- 徽章默认隐藏，拉到版本后自动出现；发新 release 后刷新页面即更新。

## 部署

推到 GitHub 后，GitHub Pages 自动启用（`.github.io` 仓库默认开启）。访问 `https://pea-series.github.io/` 即可；`index.html` 会自动跳转到主页。

> **⚠️ 404「Site not found」排障**：`.github.io` 仓库必须在 **Settings → 仓库可见性 → 设为 Public** 后才能部署 Pages。仓库为私有时，Pages 不会构建，整站显示 GitHub 的「Site not found」404 页。公开后无需其他配置，Pages 会自动用 `main` 分支根目录构建（`.nojekyll` 已确保不走 Jekyll）。
