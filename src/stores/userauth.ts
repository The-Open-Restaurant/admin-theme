import { defineStore, acceptHMRUpdate } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAuth = defineStore('auth', {
  state: () => ({
    user: useStorage('user', {}),
    userType: useStorage('userType', null),
    isAuthenticated: useStorage('isAuthenticated', false),
    jwt: useStorage('jwt', null),
  }),
  getters: {
    userSigned: (state) => state.user,
  },
  actions: {
    authUser(user, jwt) {
      this.user = user
      this.jwt = jwt
      this.isAuthenticated = true
    },
    authUserType(userType) {
      this.userType = userType
    },
    resetStore() {
      this.$reset
      this.user = {}
      this.userType = null
      this.isAuthenticated = false
      this.jwt = null
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}
