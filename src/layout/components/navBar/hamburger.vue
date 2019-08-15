<template>
  <div class="hamburger"
       @click="toggleClick">
    <i :class="isActive ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
  </div>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleClick () {
      this.$emit('toggleClick')
    }
  }
}
</script>
<style lang="scss" scoped>
.hamburger {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>
