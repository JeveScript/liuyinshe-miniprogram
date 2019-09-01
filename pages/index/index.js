import indexService from '../../global/service/index.js';
const app = getApp()

Page({
  data: {
    pageShow: false,
    courses: [{
      id: 1,
      title: '钢琴',
      description: '钢琴描述',
      count: 20,
      image:'/images/piano_icon.png'
    },{
      id: 2,
      title: '声乐',
      description: '声乐描述',
      count: 20,
      image:'/images/music_icon.png'
    },{
      id: 3,
      title: '舞蹈',
      description: '舞蹈描述',
      count: 20,
      image:'/images/dance_icon.png'
    }],
    userInfo:null,
    classes: [],
  },
  onShow: function(){
    this.getData();
  },
  getData:function(){
    app.getUserInfo().then(userInfo => {
      this.setData({ userInfo });
      userInfo.id && this.getClasses(userInfo.id);
    })
    .catch(()=>{})
    .finally(()=>{
      this.setData({ pageShow: true })
    })
  },
  onGotUserInfo: function(e) {
    if(e.detail.userInfo) {
      app.getUserInfo().then(userInfo => {
        this.setData({ userInfo });
        userInfo.id && this.getClasses(userInfo.id);
      })
      .catch((err)=>{
        wx.navigateTo({ url: '/pages/bind/bind'})
      })
    }
  },
  getClasses: function(user_id) {
    indexService.class(user_id).then( res => {
      this.setData({
        classes: res.classes
      })
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '留音社',
      path: '/pages/index/index'
    }
  }
})
