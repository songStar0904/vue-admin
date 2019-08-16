<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { handleTheme } from '@/utils/theme'
export default {
  created () {
    this.$loading.service()
    handleTheme(this.$store.state.app.theme)
  }
}
</script>
