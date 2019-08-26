<template>
  <el-row type="flex"
          class="navbar"
          justify="space-between">
    <el-row type="flex">
      <Hamburger class="nav-btn"
                 :is-active="sidebar.opened"
                 @toggleClick="toggleSideBar" />
      <Breadcrumb />
    </el-row>
    <el-row type="flex">
      <el-tooltip class="item"
                  effect="dark"
                  content="全屏"
                  placement="bottom">
        <screen-full class="nav-btn" />
      </el-tooltip>
      <Avatar class="nav-btn" />
    </el-row>
  </el-row>
</template>
<script>
import Hamburger from './Hamburger'
import Breadcrumb from './Breadcrumb'
import ScreenFull from './ScreenFull'
import Avatar from './Avatar'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'navBar',
  components: {
    Hamburger,
    Breadcrumb,
    ScreenFull,
    Avatar
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['app/TOGGLE_SIDEBAR']),
    toggleSideBar () {
      this['app/TOGGLE_SIDEBAR']()
    }
  }
}
</script>
