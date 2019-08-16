<template>
  <div>
    <div class="setting-btn"
         :style="{'background-color':theme}"
         @click="drawer = !drawer">
      <i class="el-icon-s-tools"></i>
    </div>
    <el-drawer title="系统布局配置"
               :visible.sync="drawer"
               direction="rtl"
               custom-class="drawer">
      <theme-picker />
      <div class="drawer-item">
        <span>Open Tags-View</span>
        <el-switch v-model="tagsView"
                   class="drawer-switch" />
      </div>
    </el-drawer>
  </div>
</template>
<script>
import themePicker from './themePicker'
import { mapGetters } from 'vuex'
export default {
  components: {
    themePicker
  },
  data () {
    return {
      drawer: true,
      tagsView: true
    }
  },
  computed: {
    ...mapGetters(['theme'])
  }
}
</script>
<style lang="scss">
.setting-btn {
  width: 48px;
  height: 48px;
  position: fixed;
  top: 250px;
  right: 0;
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  pointer-events: auto;
  cursor: pointer;
  color: #fff;
  line-height: 48px;
}
</style>
