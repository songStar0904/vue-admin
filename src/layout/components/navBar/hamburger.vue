<template>
  <div @click="toggleClick">
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
