<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened"
               @toggleClick="toggleSideBar" />
    <breadcrumb />
  </div>
</template>
<script>
import hamburger from './hamburger'
import breadcrumb from './breadcrumb'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'navBar',
  components: {
    hamburger,
    breadcrumb
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
