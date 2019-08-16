<template>
  <div>
    <el-color-picker v-model="theme"
                     :predefine="['#409EFF', '#1890ff', '#304156','#212121','#11a983', '#13c2c2', '#6959CD', '#f5222d', ]"
                     size="mini"></el-color-picker>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { handleTheme } from '@/utils/theme'

export default {
  data () {
    return {
      chalk: '',
      theme: this.$store.state.app.theme
    }
  },
  watch: {
    async theme (val) {
      await handleTheme(val)
      this['app/SET_THEME'](val)
      this.$message({
        message: '切换主题成功！',
        type: 'success',
        duration: 2000
      })
    }
  },
  methods: {
    ...mapMutations(['app/SET_THEME'])
  }
}
</script>
