/* =========================================================================
   Pea 系列 · 发布配置
   -------------------------------------------------------------------------
   这是下载链接的唯一数据源。pea-series-home.html 读取本文件，自动决定
   每个产品 / 平台的显示状态：

   · url 填了直链  ->  该平台显示「下载」按钮，点击跳转真实下载链接
   · url 留空      ->  该平台显示「待上线」按钮（点击提示）
   · repo 填了 GitHub 仓库且为公开 ->  页面启动时请求 GitHub Releases API，
                               自动拉取最新 tag 作为「最新版本」，并以返回的
                               资源列表确认「是否真实可下载」。
   · 私有仓库（API 拉不到） ->  以上下线状态和版本号都以各平台 version 字段为准：
                               version 非空 = 已发布上线。version 字段由 PeaPlayer
                               的发布流程（.github/workflows/release.yml）在每次
                               版本发布后自动写入并推送，无需手工维护。

   注意：私有仓库的直链仅对有仓库权限的用户可见，匿名访客下载会 404。

   改完保存、刷新页面即可生效，不需要改动主页 HTML。
   ========================================================================= */
window.PEA_RELEASES = {
  /* 最近更新时间，仅作记录，展示用 */
  updatedAt: "2026-08-09",

  products: {
    player: {
      name: "PeaPlayer",
      /* 填入仓库后即可自动显示最新版本；未发布可留空 */
      repo: "Pea-Series/peaplayer",
      platforms: {
        macos: {
          url: "https://github.com/Pea-Series/peaplayer/releases/latest/download/PeaPlayer-macOS.zip",
          version: "",
          note: "Apple Silicon · Intel"
        },
        windows: {
          url: "https://github.com/Pea-Series/peaplayer/releases/latest/download/PeaPlayer-Setup-latest.exe",
          version: "",
          note: "Windows 10 及以上"
        }
      }
    },

    scribe: {
      name: "PeaScribe",
      /* 私有仓库：不依赖 GitHub API，版本号由 CI 在每次发布时改写
         （见 pea-releases.js 中的 "// scribe-version" 标记） */
      platforms: {
        macos: {
          /* macOS 暂未发布 → 待上线 */
          url: "",
          version: "",
          note: "macOS 待上线"
        },
        windows: {
          url: "https://github.com/Pea-Series/peascribe/releases/latest/download/PeaScribe-Setup-latest.exe",
          version: "0.5.6", // scribe-version
          note: "Windows 10 1809+ · x64"
        }
      }
    }
  }
};
