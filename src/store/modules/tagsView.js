const state = {
  visitedViews: []
}

const mutations = {
  ADD_VISITED_VIEWS (state, view) {
    if (state.visitedViews.some(v => v.name === view.name)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  },
  DEL_VISITED_VIEWS (state, index) {
    state.visitedViews.splice(index, 1)
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
