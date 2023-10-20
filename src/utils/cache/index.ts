export enum CacheKeys {
  // add zhe cache keys
  // ...
  USER_INFO = '#_userInfo',
}

enum CacheType {
  Local,
  Session,
}

class Cache {
  storage: Storage

  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCache(key: CacheKeys, value: any) {
    if (value !== undefined && value !== null) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache<T = unknown>(key: CacheKeys) {
    const value = this.storage.getItem(key)

    if (value && value !== 'undefined') return JSON.parse(value) as T
  }

  removeCache(key: CacheKeys) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

const localCache = new Cache(CacheType.Local)
const sessionCache = new Cache(CacheType.Session)

export { localCache, sessionCache }
