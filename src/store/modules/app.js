const state = {
  sidebar: localStorage.getItem('sidebar')
    ? JSON.parse(localStorage.getItem('sidebar'))
    : {
      opened: true,
      withoutAnimation: false
    },
  device: 'desktop',
  size: 'medium'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    localStorage.setItem('sidebar', JSON.stringify(state.sidebar))
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
