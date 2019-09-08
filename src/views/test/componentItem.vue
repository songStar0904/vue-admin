
    <template>
  <component :is="component.el"
             v-bind="component.options">
    <template v-if="component.children && component.children.length > 0">
      <template v-for="children in component.children">
        <component-item :component="children"
                        :key="children.id"></component-item>
      </template>
    </template>
    <template v-else>
      {{component.options && component.options.text}}
    </template>
  </component>
</template>
<script>
export default {
  name: 'componentItem',
  props: {
    component: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
