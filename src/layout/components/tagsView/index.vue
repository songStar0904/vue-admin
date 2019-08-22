<template>
  <div>
    <scroll-pane ref="ScrollPane">
      <el-tag v-for="(view, index) in visitedViews"
              :key="view.name"
              :name="view.name"
              :closable="!(view.meta && view.meta.affix)"
              :effect="isActive(index) ? 'dark': 'light'"
              @close="delTags(index)"
              @click="toRoute(view)"
              ref="tag"
              class="tag">
        {{view.title}}
      </el-tag>
    </scroll-pane>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import ScrollPane from './ScrollPane'
export default {
  components: {
    ScrollPane
  },
  computed: {
    ...mapGetters([
      'visitedViews', 'permission_routes'
    ])
  },
  data () {
    return {
      affixTags: [],
      current: 0
    }
  },
  mounted () {
    this.initTagsView()
    this.addTags()
  },
  watch: {
    $route () {
      this.addTags()
      this.moveToCurrentTag()
    }
  },
  methods: {
    ...mapMutations(['tagsView/ADD_VISITED_VIEWS', 'tagsView/DEL_VISITED_VIEWS']),
    initTagsView () {
      this.affixTags = this.filterAffixTags(this.permission_routes)
      for (const tag of this.affixTags) {
        // Must have tag name
        if (tag.name) {
          this['tagsView/ADD_VISITED_VIEWS'](tag)
        }
      }
    },
    filterAffixTags (routes) {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          tags.push(route)
        }
        if (route.children) {
          let tempTags = this.filterAffixTags(route.children)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    addTags () {
      const { name } = this.$route
      if (name) {
        this['tagsView/ADD_VISITED_VIEWS'](this.$route)
      }
      return false
    },
    delTags (index) {
      if (this.isActive(index)) {
        this.toLastRoute()
      }
      this['tagsView/DEL_VISITED_VIEWS'](index)
    },
    toRoute (view) {
      this.$router.push({ name: view.name, query: view.query })
    },
    toLastRoute () {
      let lastRoute = this.visitedViews.slice(-1)[0]
      if (lastRoute) {
        this.$router.push(lastRoute)
      } else {
        this.$router.push('/')
      }
    },
    moveToCurrentTag () {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.$attrs.name === this.$route.name) {
            this.$refs.ScrollPane.moveToTarget(tag)
            // when query is different then update
            // if (tag.to.fullPath !== this.$route.fullPath) {
            //   this.$store.dispatch('tagsView/updateVisitedView', this.$route)
            // }
            break
          }
        }
      })
    },
    isActive (index) {
      return this.visitedViews[index].name === this.$route.name
    }
  }
}
</script>
