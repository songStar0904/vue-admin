<template>
  <el-row type="flex"
          class="navbar"
          justify="space-between">
    <el-row type="flex">
      <hamburger class="nav-btn"
                 :is-active="sidebar.opened"
                 @toggleClick="toggleSideBar" />
      <breadcrumb />
    </el-row>
    <el-row type="flex">
      <el-tooltip class="item"
                  effect="dark"
                  content="全屏"
                  placement="bottom">
        <screen-full class="nav-btn" />
      </el-tooltip>
    </el-row>
  </el-row>
</template>
<script>
import hamburger from './hamburger'
import breadcrumb from './breadcrumb'
import screenFull from './screenFull'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'navBar',
  components: {
    hamburger,
    breadcrumb,
    screenFull
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
