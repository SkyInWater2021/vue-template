/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 在这里添加环境变量的类型
  readonly VITE_BASE_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
