<template>
  <div :class="classObj">
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <nav-bar></nav-bar>
      <transition name="el-fade-in">
        <tags-view class="tags-container"
                   v-show="tagsView" />
      </transition>
      <app-main />
      <settings />
    </div>
  </div>
</template>
<script>
import { appMain, sideBar, navBar, settings, tagsView } from './components'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  components: {
    appMain,
    sideBar,
    navBar,
    settings,
    tagsView
  },
  computed: {
    ...mapGetters(['sidebar', 'tagsView']),
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened
      }
    }
  }
}
</script>
