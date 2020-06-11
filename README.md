<template>
    <div class="login">
        <m-header :name="name" :filter="filter"></m-header>
        <tip :content="content"></tip>
        <cube-form :model="model">
            <cube-form-group>
                <div class="cube-form-item">您的问题：{{question}}？</div>
                <cube-form-item :field="fields[0]"></cube-form-item>
                <cube-form-item :field="fields[1]">
                    <input type="password" name="re_mm" v-model='model.re_mm' class="cube-input-field password"
                           placeholder="请输入您账号的登录密码">
                </cube-form-item>
                <cube-form-item class="yzm" :field="fields[2]"></cube-form-item>
            </cube-form-group>
            <span class="getYzm">忘记答案</span>
            <img ref='yzm' onclick="this.src='http://www.yumihang.com/xcode.htm?'+new Date().getTime()"
                 src="http://www.yumihang.com/xcode.htm" alt="">
            <router-link class="pro-sm" to="./book">操作保护解除说明 ></router-link>
            <cube-form-group>
                <cube-button type="submit" @click="submitHandler">解除</cube-button>
            </cube-form-group>
        </cube-form>
    </div>
</template>

<script type="text/ecmascript-6">
	import MHeader from 'components/m-header/m-header'
	import Tip from 'base/tip/tip'

	export default {
		data() {
			return {
				model: {
					zsxm: '',
					qqhm: '',
					sjhm: '',
					mmbhwt: '',
					mmbhda: '',
					yxcode: '',
					mmbhwt2: ''
				},
                question: '',
				name: '解除保护设置',
				filter: false,
				content: '您的账户正在安全保护状态，请先解除操作保护，再执行此项操作！',
				fields: [
					{
						type: 'input',
						modelKey: 'inputValue',
						props: {
							placeholder: '您输入的答案'
						}
					},
					{
					},
					{
						type: 'input',
						modelKey: 'inputValue',
						props: {
							placeholder: '请输入图形验证码'
						}
					}
				]
			}
		},
        created(){
	        let _this = this
	        _this.$axios.post('http://www.yumihang.com/user_mmbh.htm?Wap_dataType=Json').then(function (response) {
		        let _data = response.data
		        if (_data.code == "1") {
			        _this.question = _data.wenti
		        }
	        })
        },
        methods: {
	        submitHandler(e) {
		        e.preventDefault();
		        let _this = this
		        let json = {}
		        json.zhmm = _this.model.zhmm
		        json.mmbhda = _this.model.mmbhda
		        json.re_yzm = _this.model.re_yzm
		        json.tan = 0
		        json.csrf_token = localStorage['csrf_token']
		        json = _this.$qs.stringify(json)
		        _this.$axios.post('http://www.yumihang.com/user_mmbh.htm?guan=1&Wap_dataType=Json', json).then(function (response) {
			        let _data = response.data
			        if (_data.code == "1") {
				        _this.$createDialog({
					        type: 'alert',
					        title: _data.msg,
					        icon: 'cubeic-smile',
					        onConfirm: () => {
						        _this.$router.push({
							        path: './my'
						        })
					        }
				        }).show()
			        } else {
				        _this.$createDialog({
					        type: 'alert',
					        title: _data.msg,
					        icon: 'cubeic-sad'
				        }).show()
			        }
		        })
	        }
        },
		components: {
			MHeader,
			Tip
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"
    #app
        height 100%
    .login
        background-color $color-background
        height 100%
        overflow hidden
        .cube-form
            margin-top .2rem
        .login-box
            margin-top 3.7rem
        .cube-form-item
            margin 0 .38rem
            margin-bottom .3rem
            padding 0
            border-bottom: .02rem solid #eee
        .cube-input-field
            width 4.6rem
        img
            position absolute
            width 1.4rem
            float right
            bottom 2.4rem
            right .64rem
        .cube-btn
            width 6.23rem
            height .87rem
            margin 0 auto
            padding 0
            margin-top .7rem
            border-radius .435rem
            background-image -webkit-linear-gradient(25deg, rgb(32, 173, 240) 0%, rgb(12, 153, 249) 100%)
            line-height .87rem
            font-size .36rem
        .form-tar
            padding 0 .64rem
            overflow hidden
            a
                margin-top .14rem
                float right
                color #22adfe
        .login-title
            display flex
            flex-direction column
            padding-left .38rem
            color #666
            font-size $font-size-36
            span:last-child
                display block
                width .5rem
                height .03rem
                margin-top .2rem
                margin-bottom .4rem
                background-color #666
        .getYzm
            position absolute
            right .38rem
            top 1.4rem
            padding-left .22rem
            border-left .03rem solid #dfdfdf
            font-size $font-size-28
            color $color-theme
        .getPhone
            top 3.8rem
    .pro-sm
        margin-left .38rem
        color #22adfe
        font-size $font-size-24

    .password
        padding 13px 0
        background-color transparent
</style>