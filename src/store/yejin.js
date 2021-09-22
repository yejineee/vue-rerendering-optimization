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
  mutateAddItems (state, items) {
    state.items = items
  }
}

export const actions = {
  addItems ({ commit, state }, { total = 10 }) {
    const items = new Array(total).fill()
      .map((_, i) => ({ id: uniqid(), title: `item ${i}` }))
    setTimeout(() => {
      commit('mutateAddItems', [...state.items, ...items.map(Object.freeze)])
    }, 10)
  }

}
