/* =========================================================================
   Pea 系列 · 发布配置
   -------------------------------------------------------------------------
   这是下载链接的唯一数据源。pea-series-home.html 读取本文件，自动决定
   每个产品 / 平台的显示状态：

   · url 填了直链  ->  该平台显示「已上线」，按钮变为真实下载链接（含版本号）
   · url 留空      ->  该平台显示「待上线」，按钮为占位（点击提示）

   改完保存、刷新页面即可生效，不需要改动主页 HTML。
   ========================================================================= */
window.PEA_RELEASES = {
  /* 最近更新时间，仅作记录，展示用 */
  updatedAt: "2026-08-09",

  products: {
    player: {
      name: "PeaPlayer",
      platforms: {
        macos: {
          url: "",
          version: "",
          note: "Apple Silicon · Intel"
        },
        windows: {
          url: "",
          version: "",
          note: "Windows 10 及以上"
        },
        linux: {
          url: "",
          version: "",
          note: "尚未支持"
        }
      }
    },

    scribe: {
      name: "PeaScribe",
      platforms: {
        macos: {
          url: "https://github.com/Pea-Series/peascribe/releases/latest/download/peascribe-macos.zip",
          version: "",
          note: "macOS 10.15+ · Intel / Apple Silicon"
        },
        windows: {
          url: "https://github.com/Pea-Series/peascribe/releases/latest/download/peascribe-windows.zip",
          version: "",
          note: "Windows 10 1809+ · x64"
        },
        linux: {
          url: "https://github.com/Pea-Series/peascribe/releases/latest/download/peascribe-linux.zip",
          version: "",
          note: "Ubuntu 20.04+ · x64"
        }
      }
    }
  }
};
