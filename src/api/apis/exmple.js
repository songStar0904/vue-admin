import request from '@/utils/request'
// 获取天气
export function getWeather (params) {
  return request({
    url: '/weatherApi',
    method: 'get',
    params
  })
}
// 美图推荐
export function getImages (data) {
  return request({
    url: '/getImages',
    method: 'post',
    data
  })
}
