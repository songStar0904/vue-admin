<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { Loading } from 'element-ui'
import { handleTheme } from '@/utils/theme'
export default {
  async created () {
    let $loading = Loading.service()
    await handleTheme(this.$store.state.app.theme)
    this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      $loading.close()
    })
  }
}
</script>
