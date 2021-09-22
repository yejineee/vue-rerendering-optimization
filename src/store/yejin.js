import uniqid from 'uniqid'

export const state = () => ({
  items: []
})

export const getters = {
  items (state) {
    return state.items
  }
}

export const mutations = {
  mutateItems (state, items) {
    state.items = items
  }
}

export const actions = {
  addItems ({ commit, state }, { total = 10 }) {
    const items = new Array(total).fill()
      .map((_, i) => ({ id: uniqid(), title: `item ${state.items.length + i}` }))
    setTimeout(() => {
      commit('mutateItems', [...state.items, ...items.map(Object.freeze)])
    }, 10)
  },
  clear ({ commit }) {
    commit('mutateItems', [])
  }
}
