<template>
  <section class="app-main">
    <el-card shadow="never">
      <div slot="header"
           v-if="title">
        <span>{{title}}</span>
      </div>
      <transition name="fade-transform"
                  mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </el-card>
  </section>
</template>

<script>
export default {
  name: 'appMain',
  computed: {
    cachedViews () {
      return this.$store.getters.cachedViews
    },
    key () {
      return this.$route.path
    },
    title () {
      return this.$route.meta && this.$route.meta.title
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar 52 = tagsView 50 + 52 */
  // min-height: calc(100vh - 102px);
  padding: 10px;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>
<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
