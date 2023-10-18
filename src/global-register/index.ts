import * as icons from '@element-plus/icons-vue'
import type { App } from 'vue'

// 全局注册icon图标
const registerIcons = function (app: App) {
  for (const icon of Object.values(icons)) {
    app.component(icon.name, icon)
  }
}

export default function (app: App) {
  registerIcons(app)
}
