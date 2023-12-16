'use client'

import createWebStorage from "redux-persist/lib/storage/createWebStorage"

const createNoobStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key:any) {
      return Promise.resolve()
    },
    removeItem(_key: any) {
      return Promise.resolve()
    }
  }
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoobStorage()

export default storage;