import indexService from '../../global/service/index.js';


Page({
  data: {
    courses:{},
  },
  onLoad: function(opt){
    console.log(opt.id)
    indexService.courseShow(opt.id).then(res => {
      console.log(res)
      this.setData({
        courses:res,
      })
    }).catch(e => {
      console.log(e)
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '留音社',
      path: '/pages/course/course'
    }
  },

  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
      that.editorCtx.setContents({
        html:that.data.courses.description,
        success(res){
          console.log(res)
        },
        fail(err){
          console.log(err)
        }
     })
    }).exec()
  },
})


// EditorContext.insertText