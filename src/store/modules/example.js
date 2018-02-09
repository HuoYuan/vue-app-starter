import api from '@/api'
import { handleError } from '@/utils'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  all: state => state.all
}

// mutation types
const FIND = 'FIND'

// actions
const actions = {
  async find({ commit }, { keyword, begin, end }) {
    try {
      const { result } = await api.example.find({ keyword, begin, end })
      commit(FIND, { companies: result.data })
    } catch (err) {
      handleError(err)
    }
  }
}

// mutations
const mutations = {
  [FIND](state, { companies }) {
    state.all = companies.map((company) => {
      company.title = `${company.SECU_SHT} (${company.BD_CODE})`
      company.value = `${company.SECU_SHT} (${company.BD_CODE})`
      return company
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
