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

      <el-row type="flex"
              class="row-item"
              justify="space-around">
        <el-col :span="12">
          <div class="">主题颜色</div>
        </el-col>
        <el-col :span="12">
          <theme-picker />
        </el-col>
      </el-row>
      <el-row type="flex"
              class="row-item"
              justify="space-around">
        <el-col :span="12">
          <div class="">开启标签导航栏</div>
        </el-col>
        <el-col :span="12">
          <el-switch :value="tagsView"
                     @change="handleTagsView"
                     class="drawer-switch" />
        </el-col>
      </el-row>
    </el-drawer>
  </div>
</template>
<script>
import ThemePicker from './ThemePicker'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    ThemePicker
  },
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapGetters(['theme', 'tagsView'])
  },
  methods: {
    ...mapMutations(['app/TOGGLE_TAGSVIEW']),
    handleTagsView () {
      this['app/TOGGLE_TAGSVIEW']()
    }
  }
}
</script>
<style lang="scss" scoped>
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
.row-item {
  align-items: center;
  text-align: center;
  margin: 15px 0;
}
</style>
