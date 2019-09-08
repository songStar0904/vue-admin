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
      <Settings />
    </div>
  </div>
</template>
<script>
import { AppMain, SideBar, NavBar, Settings, TagsView } from './components'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  components: {
    AppMain,
    SideBar,
    NavBar,
    Settings,
    TagsView
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
