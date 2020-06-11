<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router"></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				transitionName: 'slide-left'
			}
		},
		watch: {
			"$route"(to, form) {
				if (to.meta.index == 0 && form.meta.index == 0) {
					this.transitionName = 'slide';
				} else {
					if (to.meta.index > form.meta.index) {
						this.transitionName = 'slide-left';
					} else {
						this.transitionName = 'slide-right';
					}
				}
			}
		},
		components: {
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .router
        position absolute
        left 0
        top 0
        width: 100%
        height 100%
        z-index 9
        transition all 0.5s cubic-bezier(0.55, 0, 0.1, 1)
        overflow-x hidden

    .slide-left-enter,
    .slide-right-leave-active {
        opacity 0
        -webkit-transform translate(50px, 0)
        transform translate(50px, 0)
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity 0
        -webkit-transform: translate(-50px, 0)
        transform translate(-50px, 0)
    }

    .slide-leave-active,
    .slide-enter {
        opacity 0
    }

    .empty-box
        display flex
        align-items center
        justify-content center
        width 100%
        background-color #fff

    .empty
        width 60%
</style>

