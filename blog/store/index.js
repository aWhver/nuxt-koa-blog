/**
 * Created by juntong on 2018/5/15.
 */
import Vuex from 'vuex'
import { state, mutations, actions } from './login'

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}

export default createStore
