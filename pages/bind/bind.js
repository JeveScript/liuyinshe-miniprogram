import indexService from '../../global/service/index.js';

Page({
  data:{
    name: '',
    phone: '',
  },
  onReady:function(){
    this.tips = this.selectComponent('#pd-tips');
  },
  handleNameChange: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  handlePhoneChange: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getUserInfo: function(e) {
    let userInfo = e.detail.userInfo;
    if(userInfo) {
      this.handleSubmit();
    }
  },
  handleSubmit: function() {
    let name = this.data.name;
    let phone = this.data.phone;
    if(!name){
      this.tips.show('error','请输入真实姓名',3000);
      return
    }

    if(!phone){
      this.tips.show('error','请输入手机号',3000);
      return
    }

    wx.login({
      success: (wxLoginRes)=>{
        wx.showLoading({ title: "加载中", mask: true });
        indexService.bind({
          name, phone,
          code: wxLoginRes.code
        }).then(res => {
          this.tips.show('success',"绑定成功",3000);
          setTimeout(()=>{
            wx.navigateBack();
          },500);
        }).catch( err => {
          this.tips.show('error',err.message,3000);
        }).finally(()=>{
          wx.hideLoading();
        })
      }
    })
  }
})
