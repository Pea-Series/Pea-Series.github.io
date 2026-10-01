/* =========================================================================
   Pea 系列 · 发布配置
   -------------------------------------------------------------------------
   这是下载链接的唯一数据源。pea-series-home.html 读取本文件，自动决定
   每个产品 / 平台的显示状态：

   · url 填了直链  ->  该平台显示「下载」按钮，点击跳转真实下载链接
   · store 填了 Microsoft Store 链接
                   ->  该平台显示 Microsoft Store 徽章按钮，点击跳转商店页面。
                       优先级高于 url；且该产品以配置里的 version 为准，
                       不再用 GitHub Releases 的 tag（商店版本常与 Release 不同步）。
   · url 留空      ->  该平台显示「待上线」按钮（点击提示）
   · repo 填了 GitHub 仓库且为公开 ->  页面启动时请求 GitHub Releases API，
                               自动拉取最新 tag 作为「最新版本」，并以返回的
                               资源列表确认「是否真实可下载」。
   · 私有仓库（API 拉不到） ->  以上下线状态和版本号都以各平台 version 字段为准：
                               version 非空 = 已发布上线。version 字段由 PeaPlayer
                               的发布流程（.github/workflows/release.yml）在每次
                               版本发布后自动写入并推送，无需手工维护。

   平台说明文字（Windows / macOS 下面那行小字）默认取主页的 i18n 文案
   （note.win / note.mac，见 pea-series-home.html 的 DICT），随语言切换。
   个别平台想写不一样的话，再加 note 字段覆盖即可。

   注意：私有仓库的直链仅对有仓库权限的用户可见，匿名访客下载会 404。

   改完保存、刷新页面即可生效，不需要改动主页 HTML。
   ========================================================================= */
window.PEA_RELEASES = {
  /* 最近更新时间，仅作记录，展示用 */
  updatedAt: "2026-09-27",

  products: {
    player: {
      name: "PeaPlayer",
      /* 填入仓库后即可自动显示最新版本；未发布可留空 */
      repo: "Pea-Series/peaplayer",
      platforms: {
        macos: {
          /* macOS 暂未发布 → 待上线 */
          url: "",
          version: ""
        },
        windows: {
          /* 已上架 Microsoft Store */
          store: "https://apps.microsoft.com/detail/9pf3hdzw5t5d",
          version: "1.0.3"
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
          version: ""
        },
        windows: {
          /* TODO: PeaScribe 上架后换成它自己的商店链接（当前借用 PeaPlayer 的） */
          store: "https://apps.microsoft.com/detail/9pcswk5v1r1s",
          version: "1.0.0" // scribe-version
        }
      }
    }
  }
};
