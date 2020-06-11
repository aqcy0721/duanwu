<template>
  <div class="home" v-if="pageLoad">
    <div class="container">
      <div class="search-box">
        <input type="text" class="search" v-model="search" placeholder="点击搜索ID快速投票">
        <i class="icon-search" @click="searchId"></i>
      </div>
      <div class="list">
        <div class="list-tabs clear-fix">
          <span @click="rank(0)" :class="['shishi',tab==0?'on':'']">实时排名</span>
          <span @click="rank(1)" :class="['renqi',tab==1?'on':'']">人气排名</span>
        </div>
        <div class="list-box">
          <ul>
            <li class="list1"><span>023</span><span class="nickname">专业域名领先者</span><button type="button"></button></li>
            <li class="list2"><span>023</span><span class="nickname">专业域名领先者</span><button type="button"></button></li>
            <li class="list3"><span>023</span><span class="nickname">专业域名领先者</span><button type="button"></button></li>
            <li class="list4"><span>023</span><span class="nickname">专业域名领先者</span><button type="button"></button></li>
            <li class="list5"><span>023</span><span class="nickname">专业域名领先者</span><button type="button"></button></li>
            <li><span>023</span><span class="nickname">专业域名领先者</span><button class="ok" type="button"></button></li>
          </ul>
        </div>

      </div>
      <div class="cz-btn">
          <router-link class="tian" to="/vote"></router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    toast: {},
    data() {
      return {
        pageLoad: true,
        search: '',
        tab: 0
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
      searchx(f){
        if(f){
          if(this.search == '点击搜索ID快速投票'){
            this.search = "";
          }
        } else {
          if(this.search == ''){
            this.search = "点击搜索ID快速投票";
          }
        }
      },
      searchId(){

      },
      rank(t){
        this.tab = t;
      }
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
    background url("./bg.png") no-repeat left top
    background-size 100%
    overflow: hidden
    .search-box
      display flex
      align-items center
      justify-content space-between
      width:6.96rem;
      height:.72rem;
      margin 0 auto
      padding 0 .4rem
      box-sizing border-box
      margin-top 2.94rem
      background:rgba(13,140,144,1);
      border-radius:.8rem;
      opacity:0.8;
      line-height .72rem
      .search
        display block
        width 5.4rem
        height 100%
        background transparent
        color: #fff
      .icon-search
        width .36rem
        height .36rem
        background url("./icon_search.png")  no-repeat
        background-size .36rem
    .list
      width: 6.96rem
      margin 0 auto
      margin-top .3rem
      background url("./bg2.png") no-repeat
      background-size 100%
      overflow: hidden
      .list-tabs
        width 4.62rem
        margin  0 auto
        margin-top .7rem
        span
          display inline-block
          padding-left .48rem
          float left
          color #7BE1DB
          font-size .36rem
          &.shishi
            background url("./tab1.png") no-repeat
            background-size .36rem
            &.on
              background url("./tab1_on.png") no-repeat
              background-size .36rem
              color: #F3FEAF
          &.renqi
            float right
            background url("./tab2.png") no-repeat
            background-size .36rem
            &.on
              background url("./tab2_on.png") no-repeat
              background-size .36rem
              color: #F3FEAF
      .list-box
        width 6.22rem
        margin 0 auto
        margin-top .32rem
        height 7rem
        overflow-y scroll
      ul
        padding-bottom .6rem;
        li
          display: flex
          align-items center
          margin-bottom .24rem
          border-radius .08rem;
          padding 0 .32rem
          border-top-left-radius 0
          background #A5F6E9
          height .96rem
          line-height .96rem
          color #20795B
          font-size .32rem
          &.list1
            background #A5F6E9 url("./1.png") no-repeat left top
            background-size .72rem .28rem
          &.list2
            background #A5F6E9 url("./2.png") no-repeat left top
            background-size .72rem .28rem
          &.list3
            background #A5F6E9 url("./3.png") no-repeat left top
            background-size .72rem .28rem
          &.list4
            background #A5F6E9 url("./4.png") no-repeat left top
            background-size .72rem .28rem
          &.list5
            background #A5F6E9 url("./5.png") no-repeat left top
            background-size .72rem .28rem
          &:last-child
            margin-bottom 0
          span
            &:first-child
              width 1rem
          .nickname
            width 3.2rem
          button
            float: right
            width 1.36rem
            height .58rem
            background url("./tou.png") no-repeat;
            background-size 100%
            &.ok
              background url("./tou_ok.png") no-repeat;
              background-size 100%
    .cz-btn
      position fixed
      width 100%
      bottom 0
      flex-center()
      height 1.4rem
      background #0C898D
      .tian
        width 6.24rem
        height 1rem
        background url("./tian.png") no-repeat
        background-size 100%
    input.search::-webkit-input-placeholder
        color: #fff
        font-size .28rem
</style>
