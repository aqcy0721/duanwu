<template>
  <div class="home" v-if="pageLoad">
    <div class="container">
      <form action="" id="vote" class="vote">
        <p><input type="text" placeholder="标题（十字以内）"></p>
        <p>
          <textarea name="" placeholder="详细内容" id="" cols="30" rows="10"></textarea>
        </p>
        <p><input type="text" placeholder="昵称"></p>
        <p><input type="text" placeholder="手机号"></p>
      </form>
      <div class="cz-btn">
          <button class="tian" type="button"></button>
      </div>
    </div>
    <img class="foot-bg" src="./foot@2x.png" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    toast: {},
    data() {
      return {
        pageLoad: true
      }
    },
    beforeCreate() {

    },
    created() {
      let _this = this;
      // _this.$axios.post('http://lj-xcx.mb5u.com/h5/group/init', _this.$qs.stringify({openid: _this.$openid})).then(function (response) {
      //   let _data = response.data
      //   if(_data.code==-1){
      //     _this.$createToast({
      //       type: 'warn',
      //       time: 1000,
      //       txt: _data.msg
      //     }).show()
      //   } else {
      //     if(_data.data == 1){
      //       _this.$router.replace({
      //         path: './card'
      //       })
      //     } else if(_data.data == 2){
      //       _this.$router.replace({
      //         path: './teamIndex'
      //       })
      //     } else {
      //       _this.pageLoad = false
      //     }
      //   }
      // })
    },
    methods: {

    },
    components: {
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        if (from.name == null) {
          vm.target = true
        }
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .container
    background url("./bg.png") repeat-y  left top
    background-size 100%
    overflow: hidden
    height: 100%
    .vote
      width 5.64rem
      height 8.84rem
      padding  0 .3rem
      padding-top .46rem
      margin 0 auto
      margin-top .32rem
      background url("./bg2.png") no-repeat
      overflow: hidden
      p
        margin-bottom .28rem
      textarea
      input
        width 100%
        background #a5f6e9
        border-radius .08rem
        color #333
        font-size .32rem
      input
        height .96rem
        text-indent .5rem
      textarea
        height 3.52rem
        padding .4rem .5rem
        box-sizing border-box

    .tian
      display block
      width 3.2rem
      margin 0 auto
      margin-top .6rem
      height 1rem
      background url("./btn.png") no-repeat
      background-size 100%
  .foot-bg
    position absolute
    width 100%
    z-index 9
    bottom 0
</style>
