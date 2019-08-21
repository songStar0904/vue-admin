<template>
  <div>
    <el-row type="flex">
      <el-input v-model="city"
                placeholder="请输入城市"></el-input>
      <el-button @click="getWeather">获取{{city}}天气</el-button>
    </el-row>
    <el-card>{{weather}}</el-card>

    <el-button @click="getImage">获取美图推荐</el-button>
    <el-image v-for="(index, image) in images"
              :key="index"
              :src="image.img"></el-image>
  </div>
</template>
<script>
export default {
  name: 'request',
  data () {
    return {
      city: '',
      weather: null,
      images: []
    }
  },
  methods: {
    getWeather () {
      this.$fetch.exmple.getWeather({
        city: this.city
      }).then(res => {
        this.weather = res.data
      })
    },
    getImage () {
      this.$fetch.exmple.getImages({
        page: 1,
        count: 5
      }).then(res => {
        this.images = res.result
      })
    }
  }
}
</script>
