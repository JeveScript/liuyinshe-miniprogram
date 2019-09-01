Page({
  data: {
    courses:[],
  },
  onLoad: function(opt){

  },
  onShareAppMessage: function (res) {
    return {
      title: '留音社',
      path: '/pages/course/course'
    }
  }
})