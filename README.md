# Pea 系列 · 官网主页

PeaPlayer（语言学习播放器）与 PeaScribe（字幕生成器）的合集主页。单页自包含 HTML，暗色 Futuristic 视觉，无需构建、无依赖，部署后开箱即用。

## 文件结构

| 文件 | 作用 |
|---|---|
| `index.html` | GitHub Pages 入口，自动跳转到 `pea-series-home.html` |
| `pea-series-home.html` | 主页本体（所有样式与交互内联在单文件中） |
| `pea-releases.js` | **下载链接唯一配置源**，决定每个产品/平台的发布状态 |

## 管理下载链接（读这一个文件就够了）

打开 `pea-releases.js`，每个产品下有三个平台（macOS / Windows / Linux），每个平台形如：

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
- 产品标题旁的徽章（绿色=已上线 / 灰色虚线=待上线）与下载区顶部「N 个平台已上线」汇总都是根据同一份配置自动生成的。
- 每个平台独立判断：可以只上线 macOS，Windows/Linux 继续「待上线」。

## 部署

推到 GitHub 后，GitHub Pages 自动启用（`.github.io` 仓库默认开启）。访问 `https://PeaPlayer.github.io/` 即可；`index.html` 会自动跳转到主页。

> 想更省事？后续可以把 `pea-releases.js` 换成读取 GitHub Releases API（`api.github.com/repos/{owner}/{repo}/releases/latest`），发版时连版本号和下载链接都自动更新，不用再手动改配置。
