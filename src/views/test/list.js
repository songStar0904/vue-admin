const list = [{
  el: 'el-carousel',
  options: {
    height: '200px'
  },
  children: [{
    el: 'el-carousel-item',
    options: {
      background: '#eee',
      text: 1
    }
  }, {
    el: 'el-carousel-item',
    options: {
      text: 2
    }
  }, {
    el: 'el-carousel-item',
    options: {
      text: 3
    }
  }]
}, {
  el: 'el-row',
  id: 1,
  children: [{
    el: 'el-col',
    id: 2,
    options: {
      span: 8
    },
    children: [{
      el: 'el-button',
      id: 3,
      options: {
        text: '按钮'
      }
    }]
  }, {
    el: 'el-col',
    id: 4,
    options: {
      span: 8
    },
    children: [{
      el: 'el-button',
      id: 5,
      options: {
        text: '按钮'
      }
    }]
  }, {
    el: 'el-col',
    id: 6,
    options: {
      span: 8
    },
    children: [{
      el: 'el-button',
      id: 7,
      options: {
        text: '按钮'
      }
    }]
  }]
}]

export default list
