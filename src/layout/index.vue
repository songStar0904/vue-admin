<template>
  <div>
    <side-bar></side-bar>
    <app-main />
  </div>
</template>
<script>
import { appMain, sideBar } from './components'
export default {
  name: 'layout',
  components: {
    appMain,
    sideBar
  }
}
</script>
<style lang="scss">
</style>
