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
  updatedAt: "2026-08-08",

  products: {
    player: {
      name: "PeaPlayer",
      platforms: {
        macos: {
          url: "",              // 例：https://example.com/PeaPlayer-0.1.0.dmg
          version: "0.1.0",     // 显示在下载按钮与说明文字里
          note: "Apple Silicon · Intel"
        },
        windows: {
          url: "",
          version: "0.1.0",
          note: "Windows 10 及以上"
        },
        linux: {
          url: "",
          version: "",          // 留空则不显示版本号
          note: "尚未支持"
        }
      }
    },

    scribe: {
      name: "PeaScribe",
      platforms: {
        macos: {
          url: "",
          version: "0.1.0",
          note: "Apple Silicon · Intel"
        },
        windows: {
          url: "",
          version: "0.1.0",
          note: "Windows 10 及以上"
        },
        linux: {
          url: "",
          version: "",
          note: "尚未支持"
        }
      }
    }
  }
};
