<template>
  <div class="home" v-if="pageLoad">
    <div class="container">
      <div class="topBox">
        <img class="top-r" src="./china.png" alt="">
      </div>
      <img class="go" src="./go.png" alt="">
      <img class="qian clockwiseSpin" src="./qian.png" alt="">
      <p class="quote">- 参与投票，抽Switch大奖 -</p>
      <img class="longzhou" src="./longzhou.png" alt="">
      <div class="btn-box">
        <router-link class="tab-link" to="/rule">查看活动规则</router-link>
        <p class="sj">活动时间：2020年6月15日-2020年6月21日</p>
        <p class="btn-cz">
          <router-link class="tian" to="/vote"></router-link>
          <router-link class="toupiao" to="/voteList"></router-link>
        </p>
      </div>
      <img class="foot-bg" src="./foot_bg.png" alt="">
    </div>
    <div id="leafContainer">
      <div class="drop" v-for="(item, index) in leavesList" :key="item.top"
           :style="item.bgStyle">
        <img :src="item.pic" :class="item.className" :style="{animationDuration: item.imgwebkitAnimationDuration}"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const NUMBER_OF_LEAVES = 12;
  export default {
    toast: {},
    data() {
      return {
        pageLoad: true,
        leavesList: []
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
    mounted() {
      this.init();
    },
    methods: {
      init() {
        for (var i = 0; i < NUMBER_OF_LEAVES; i++) {
          this.leavesList.push(this.createALeaf());
        }
      },
      randomInteger(low, high) {
        return low + Math.floor(Math.random() * (high - low));
      },
      randomFloat(low, high) {
        return low + Math.random() * (high - low);
      },
      durationValue(value) {
        return value + 's';
      },
      pixelValue(value) {
        return value + 'px';
      },
      createALeaf() {
        var leafDiv = {};
        leafDiv.src = this.imgsrc;
        var top = "-100px";
        var left = this.pixelValue(this.randomInteger(0, 500));
        leafDiv.className = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
        var fadeAndDropDuration = this.durationValue(this.randomFloat(5, 11));
        var spinDuration = this.durationValue(this.randomFloat(4, 8));
        var webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
        var leafDelay = this.durationValue(this.randomFloat(0, 5));
        var webkitAnimationDelay = leafDelay + ', ' + leafDelay;
        leafDiv.bgStyle = 'top:'+top+";left:"+left+";animation-duration:"+webkitAnimationDuration+";animation-delay: "+webkitAnimationDelay
        leafDiv.imgwebkitAnimationDuration = spinDuration
        leafDiv.pic = require('@/common/image/leaves'+this.randomInteger(1, 6)+'.png');
        return leafDiv;
      }
    },
    components: {},
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
  @import "~common/stylus/leaves"

  .container
    height 100%
    background url("./bg.png") no-repeat
    background-size 100%
    overflow hidden
    .topBox
      position relative
      z-index 9
      display flex
      margin-top .9rem
      align-items center
      justify-content space-between
      .top-r
        display block
        width 6.2rem
        margin 0 auto
    .go
      width 6.06rem
      margin 0 auto
      margin-top .34rem
      display block
      position relative;
      z-index 9
    .longzhou
      width 6.94rem
      margin 0 auto
      margin-top 1.16rem
      display block
      position relative;
      z-index 9
    .qian
      position absolute
      width 6.96rem
      z-index 9
      top 1.6rem
    .foot-bg
      position absolute
      width 100%
      z-index 9
      bottom 0
    .quote
      position: relative
      z-index 9
      margin-top .16rem
      margin-bottom .5rem
      color #20795B
      line-height .46rem
      font-size $font-size-32
      text-align center
    .btn-box
      width 100%
      margin-top .06rem
      text-align center
      .sj
        font-size .26rem
        color: #20795B
    .tab-link
      display block
      color: #20795B;
      font-size .28rem
      margin-bottom .18rem
      text-decoration underline
    .bottomBox
      position absolute
      bottom 0
      left 0
      width 100%
      height 100%
      overflow hidden
      .bg
        width 100%
        position relative
    .btn-cz
      display flex
      justify-content space-evenly
      margin-top .3rem
      position: relative;
      z-index: 99999;
      a
        display inline-block
        width 3.2rem
        height: 1.02rem;
        &.toupiao
          background url("./toupiao.png")
          background-size 100%
        &.tian
          background url("./tian.png")
          background-size 100%

  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0)
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      -ms-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0)
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none
    }
  }

  .animate {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animate-a {
    animation-delay: .5s;
    -webkit-animation-delay: .5s; /*Safari and Chrome*/
  }

  .animate-b {
    animation-delay: .8s;
    -webkit-animation-delay: .8s; /*Safari and Chrome*/
  }

  .animate-c {
    animation-delay: 1s;
    -webkit-animation-delay: 1s; /*Safari and Chrome*/
  }

  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft
  }

  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0)
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      -ms-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0)
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none
    }
  }

  .fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0
    }

    100% {
      opacity: 1
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0
    }

    100% {
      opacity: 1
    }
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn
  }

  @-webkit-keyframes bounceInLeft {
    0%, 60%, 75%, 90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
      animation-timing-function: cubic-bezier(.215, .61, .355, 1)
    }
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-3000px, 0, 0);
      transform: translate3d(-3000px, 0, 0)
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0)
    }
    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0)
    }
    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0)
    }
    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }

  }

  @keyframes bounceInLeft {
    0%, 60%, 75%, 90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
      animation-timing-function: cubic-bezier(.215, .61, .355, 1)
    }
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-3000px, 0, 0);
      transform: translate3d(-3000px, 0, 0)
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0)
    }
    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0)
    }
    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0)
    }
    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }

  }

  @-webkit-keyframes fade {
    0% {
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes fade {
    0% {
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .fade {
    -webkit-animation-name: fade,drop;
    animation-name: fade,drop
  }

  @-webkit-keyframes drop {
    0% {
      -webkit-transform: translate(0px, -50px);
      transform: translate(0px, -50px);
    }

    100% {
      -webkit-transform: translate(0px, 12rem);
      transform: translate(0px, 12rem);
    }
  }
  .drop {
    -webkit-animation-name: fade,drop;
    animation-name: fade,drop;
  }


  @-webkit-keyframes clockwiseSpin {
    0% {
      -webkit-transform: rotate(-50deg);
      transform: rotate(-50deg);
    }

    100% {
      -webkit-transform: rotate(50deg);
      transform: rotate(50deg);
    }
  }

  .clockwiseSpin {
    -webkit-animation-name: clockwiseSpin;
    animation-name: clockwiseSpin
  }

  @-webkit-keyframes counterclockwiseSpinAndFlip {
    0% {
      -webkit-transform: scale(1) rotate(50deg);
      transform: scale(1) rotate(50deg);
    }

    100% {
      -webkit-transform: scale(1) rotate(-50deg);
      transform: scale(1) rotate(-50deg);
    }
  }

  .counterclockwiseSpinAndFlip {
    -webkit-animation-name: counterclockwiseSpinAndFlip;
    animation-name: counterclockwiseSpinAndFlip
  }

</style>
