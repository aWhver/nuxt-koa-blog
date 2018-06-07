/**
 * Created by juntong on 2018/5/15.
 */
import login from '~/api/login'
export const state = {
  authUser: null
}

export const mutations = {
  SET_USER: (state, user) => {
    state.authUser = user
  }
}

export const actions = {
  nuxtServerInit({ commit }, ctx) {
    console.log(ctx.cookies + 'ds')
    /*if (!ctx.cookies.get('token')) { //token过期
      commit('SET_USER', null)
    } else {
      commit('SET_USER', ctx.cookies.get('token'))
    }*/
  },
  async LOGIN({ commit }, { user, password }) {
    try {
      const data = await login(user, password)
      console.log(data)
      //commit('SET_USER', data.token)
      // localStorage.setItem('AUTH_TOKEN', data.token)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async LOGOUT({ commit }) {
    // await axios.post('/api/logout')
    commit('SET_USER', null)
  }
}

