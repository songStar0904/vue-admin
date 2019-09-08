
<template>
  <div>
    <template v-for="component in list">
      {{component}}
      <component-item :component="component"
                      :key="component.id"></component-item>
    </template>
  </div>
</template>
<script>
import list from './list'
import componentItem from './componentItem.vue'
export default {
  name: 'component',
  components: {
    componentItem
  },
  data () {
    return {
      list: list
    }
  }
}
</script>
