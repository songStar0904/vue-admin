import variables from '@/styles/element-variables.scss'
const state = {
  sidebar: localStorage.getItem('sidebar')
    ? JSON.parse(localStorage.getItem('sidebar'))
    : {
      opened: true,
      withoutAnimation: false
    },
  device: 'desktop',
  size: 'medium',
  theme: localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : variables.theme
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
  },
  SET_THEME: (state, theme) => {
    localStorage.setItem('theme', theme)
    state.theme = theme
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
