/* =========================================================================
   Pea 系列 · 发布配置
   -------------------------------------------------------------------------
   这是下载链接的唯一数据源。pea-series-home.html 读取本文件，自动决定
   每个产品 / 平台的显示状态：

   · url 填了直链  ->  该平台显示「下载」按钮，点击跳转真实下载链接
   · url 留空      ->  该平台显示「待上线」按钮（点击提示）
   · repo 填了 GitHub 仓库 ->  页面启动时会请求 GitHub Releases API，
                               自动拉取最新 tag 作为「最新版本」，显示在
                               下载卡右上角与应用名旁；获取失败或留空时，
                               回退到各平台 version 字段（留空则不显示版本）。

   注意：直链与版本号都需要「公开仓库」才对外可见。仓库为私有时，
   匿名访客下载会 404、版本号也拉取不到——请先把仓库公开再发布链接。

   改完保存、刷新页面即可生效，不需要改动主页 HTML。
   ========================================================================= */
window.PEA_RELEASES = {
  /* 最近更新时间，仅作记录，展示用 */
  updatedAt: "2026-08-09",

  products: {
    player: {
      name: "PeaPlayer",
      /* 填入仓库后即可自动显示最新版本；未发布可留空 */
      repo: "Pea-Series/peaplay",
      platforms: {
        macos: {
          url: "https://github.com/Pea-Series/peaplay/releases/latest/download/PeaPlay-latest.dmg",
          version: "",
          note: "Apple Silicon · Intel"
        },
        windows: {
          url: "https://github.com/Pea-Series/peaplay/releases/latest/download/PeaPlay-Setup-latest.exe",
          version: "",
          note: "Windows 10 及以上"
        }
      }
    },

    scribe: {
      name: "PeaScribe",
      repo: "Pea-Series/peascribe",
      platforms: {
        macos: {
          url: "https://github.com/Pea-Series/peascribe/releases/latest/download/PeaScribe-latest.dmg",
          version: "",
          note: "macOS 10.15+ · Intel / Apple Silicon"
        },
        windows: {
          url: "https://github.com/Pea-Series/peascribe/releases/latest/download/PeaScribe-Setup-latest.exe",
          version: "",
          note: "Windows 10 1809+ · x64"
        }
      }
    }
  }
};
