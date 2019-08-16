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
          <div class="">开启 Tags-View</div>
        </el-col>
        <el-col :span="12">
          <el-switch v-model="tagsView"
                     class="drawer-switch" />
        </el-col>
      </el-row>
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
      drawer: false,
      tagsView: true
    }
  },
  computed: {
    ...mapGetters(['theme'])
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
