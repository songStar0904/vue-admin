<template>
  <div>
    <el-dropdown @command="handleCommand"
                 trigger="click">
      <el-avatar :src="avatarIcon"
                 shape="square"
                 size="small">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data () {
    return {
      avatarIcon: 'https://songstar0904.github.io/my-blog/logo.jpg'
    }
  },
  methods: {
    handleCommand (command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>
