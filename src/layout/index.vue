<template>
  <div :class="classObj">
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <nav-bar></nav-bar>
      <app-main />
      <settings />
    </div>
  </div>
</template>
<script>
import { appMain, sideBar, navBar, settings } from './components'
import { mapState } from 'vuex'
export default {
  name: 'layout',
  components: {
    appMain,
    sideBar,
    navBar,
    settings
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
    }),
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened
      }
    }
  }
}
</script>
