import type { App } from 'vue'

const pinia = createPinia()

function registerStore(app: App<Element>) {
  app.use(pinia)

  // do something
  // ...
}

export default registerStore
