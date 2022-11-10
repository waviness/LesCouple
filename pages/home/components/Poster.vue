<template>
	<view class="poster">
		<u-overlay :show="show" @click="close">
			<view class="d-flex flex-column align-center my-6">
				<canvas :style="{ width: canvasW + 'px', height: canvasH + 'px' }" canvas-id="myCanvas"
					id="myCanvas"></canvas>
				<view class="d-flex justify-space-between pt-4">
					<u-button type="error" :plain="true" size="large" shape="circle" :disable="btnDisable" text="保存到相册"
						customStyle="width: 150px" @click="savePicture"></u-button>
					<u-button type="error" :plain="true" size="large" shape="circle" :disable="btnDisable" text="分享给好友"
						customStyle="marginLeft: 20px; width: 150px" @click="sharePicture"></u-button>
				</view>
			</view>
		</u-overlay>
	</view>
</template>

<script>
	import {
		typeOptions,
	} from '@/constants/common.js'
	export default {
		name: "Poster",
		props: {
			detail: Object,
			show: {
				type: Boolean,
				default: false
			}, // 是否显示
			checkedObj: Object,
		},
		data() {
			return {
				// show: true,
				canvasW: 0, // 画布宽
				canvasH: 0, // 画布高
				picWidth: '', //图片宽
				picHight: 260, //图片高
				SystemInfo: {}, // 设备信息
				userImg: '', // 照片墙
				userImg2: '', // 照片墙
				userImg3: '', // 照片墙
				logoImg: {}, // logo图片
				bgImg: {}, // 背景图片
				logoW: 66, // logo大小
				hbUrl: [], //储存生成的图片地址
				typeOptions,
				startX: 200,
				startY: 140,
			}
		},
		async mounted() {
			console.log(this.checkedObj)
			//获取从上衣页面传过来的图片参数
			// 获取设备信息，获取设备的宽高，画布做一样的高度
			this.SystemInfo = await this.getSystemInfo()
			this.canvasW = this.SystemInfo.windowWidth - 30 // 画布宽度
			// this.canvasH = this.SystemInfo.windowHeight - 200 //画布高度
			let num = 0
			Object.keys(this.checkedObj).forEach(item => {
				if (this.checkedObj[item]) {
					num++
				}
			})
			console.log(num)
			this.canvasH = num < 6 ? 420 : 300 + num * 20 //画布高度
			this.startX = this.canvasW - 70
			//获取照片的长与宽，按画布的比例进行缩放
			if (this.checkedObj.photo) {
				this.userImg = this.detail.imgList[0] ? await this.getImageInfo(this.detail.imgList[0]) : ''
				this.userImg2 = this.detail.imgList[1] ? await this.getImageInfo(this.detail.imgList[1]) : ''
				this.userImg3 = this.detail.imgList[2] ? await this.getImageInfo(this.detail.imgList[2]) : ''
			}

			//logo的信息
			this.logoImg = '/static/logo.png'
			this.bgImg = '/static/background.png'
			this.locImg = '/static/location.png'

			// 如果主图，logo图片，设备信息都获取成功，开始绘制海报，这里需要用setTimeout延时绘制，否则可能会出现图片不显示。
			if ((!this.userImg || this.userImg.errMsg == 'getImageInfo:ok') &&
				(!this.userImg2 || this.userImg2.errMsg == 'getImageInfo:ok') &&
				(!this.userImg3 || this.userImg3.errMsg == 'getImageInfo:ok') &&
				this.SystemInfo.errMsg == 'getSystemInfo:ok') {
				// console.log('ok')
				uni.showToast({
					icon: 'loading',
					mask: true,
					// duration: 5000,
					title: '海报绘制中',
				})
				this.btnDisable = true
				setTimeout(() => {
					var ctx = uni.createCanvasContext('myCanvas', this)
					// 填充背景色，白色
					ctx.setFillStyle('#fff') // 默认白色
					ctx.fillRect(0, 0, this.canvasW, this.canvasH) // fillRect(x,y,宽度，高度)

					ctx.drawImage(this.bgImg, 0, 0, this.canvasW, 120)
					// 绘制logo
					ctx.drawImage(this.logoImg, 8, 8, this.logoW, this.logoW)
					// 绘制照片墙
					if (this.checkedObj.photo) {
						if (this.userImg?.path) {
							ctx.drawImage(this.userImg.path, this.canvasW - 110, 230, 80, 80)
						}
						if (this.userImg2?.path) {
							ctx.drawImage(this.userImg2.path, this.canvasW - 180, 265, 80, 80)
						}
						if (this.userImg3?.path) {
							ctx.drawImage(this.userImg3.path, this.canvasW - 110, 300, 80, 80)
						}
					}
					// 3、绘制用户信息
					ctx.setFontSize(16) // setFontSize() 设置字体字号
					ctx.setFillStyle('#000000') // setFillStyle() 设置字体颜色
					ctx.fillText(this.detail.name, 16, 150)
					const target = this.typeOptions.find(item => {
						return item.value === +this.detail.type
					})
					const width = ctx.measureText(target?.label + this.detail.level).width
					console.log(width)
					const coordinates = this.drawArcTo(ctx, width, 12)
					ctx.setFillStyle('#fff')
					ctx.setFontSize(20) // setFontSize() 设置字体字号
					ctx.fillText(target?.label, this.canvasW - 60, 158)
					ctx.setFontSize(16)
					ctx.fillText(this.detail.level, this.canvasW - 45, 158)
					ctx.setFillStyle('#999')
					ctx.setFontSize(14)
					ctx.fillText('ID：' + this.detail.id, 16, 178)
					ctx.drawImage(this.locImg, 16, 187, 16, 16)
					ctx.fillText(this.detail.city, 36, 200)
					ctx.setFillStyle('#000000')
					let current = 0
					if (this.checkedObj.child) {
						current++
						ctx.fillText(`育儿计划：${this.detail.child ? '有' : '无'}`, 16, this.canvasH - 80 - 20 *
							current)
					}
					if (this.checkedObj.situation) {
						current++
						ctx.fillText(`出柜情况：${this.detail.situationName}`, 16, this.canvasH - 80 - 20 * current)
					}
					if (this.checkedObj.income) {
						current++
						ctx.fillText(`年收入：${this.detail.incomeName}`, 16, this.canvasH - 80 - 20 * current)
					}
					if (this.checkedObj.house) {
						current++
						ctx.fillText(`房产：${this.detail.house ? '有' : '无'}`, 16, this.canvasH - 80 - 20 *
							current)
					}
					if (this.checkedObj.pet) {
						current++
						ctx.fillText(`宠物：${this.detail.pet ? '有' : '无'}`, 16, this.canvasH - 80 - 20 * current)
					}
					if (this.checkedObj.constellation) {
						current++
						ctx.fillText(`星座：${this.detail.constellation}`, 16, this.canvasH - 80 - 20 * current)
					}
					if (this.checkedObj.hair) {
						current++
						ctx.fillText(`发长：${this.detail.hairName}`, 16, this.canvasH - 80 - 20 * current)
					}
					if (this.checkedObj.height) {
						current++
						ctx.fillText(`身高：${this.detail.heightName}`, 16, this.canvasH - 80 - 20 * current)
					}
					if (this.checkedObj.job) {
						current++
						ctx.fillText(`职业：${this.detail.job}`, 16, this.canvasH - 80 - 20 * current)
					}
					if (this.checkedObj.education) {
						current++
						ctx.fillText(`学历：${this.detail.educationName}`, 16, this.canvasH - 80 - 20 * current)
					}
					ctx.fillText(`感情状态：${this.detail.stateName}`, 16, this.canvasH - 80)
					ctx.fillText(`性格标签：${this.detail.natureText}`, 16, this.canvasH - 60)
					ctx.fillText(`爱好标签：${this.detail.hobbyText}`, 16, this.canvasH - 40)
					ctx.fillText(`娱乐标签：${this.detail.funText}`, 16, this.canvasH - 20)
					ctx.draw(true, (ret) => { // draw方法 把以上内容画到 canvas 中。
						uni.showToast({
							icon: 'success',
							mask: true,
							title: '绘制完成',
						})
						this.btnDisable = false
						uni.canvasToTempFilePath({ // 保存canvas为图片
							canvasId: 'myCanvas',
							quality: 1,
							complete: (res) => {
								console.log(res)
								this.hbUrl.push(res.tempFilePath)
							},
						}, this)
					})
				}, 1000)
			} else {
				console.log('err')
			}

			uni.showShareMenu({
				withShareTicket: true,
				menus: ["shareAppMessage", "shareTimeline"]
			})
		},
		methods: {
			drawArcTo(ctx, w, r) {
				const x = parseFloat(this.startX + '')
				const y = parseFloat(this.startY + '')
				const endX = x + w + 2 * r + 15
				this.startX = endX
				this.startY = y
				ctx.beginPath()
				ctx.moveTo(x + r, y) // 创建开始点
				ctx.lineTo(x + w + r, y) // 创建水平线
				const colors = ['', '#fc8caf', '#f2ada4', '#a5bdf0', '#ca9aec']
				ctx.strokeStyle = colors[this.detail.type]
				ctx.setFillStyle(colors[this.detail.type])
				ctx.arcTo(x + w + 2 * r, y, x + w + 2 * r, y + r, r) // 创建弧
				ctx.arcTo(x + w + 2 * r, y + (2 * r), x + w, y + (2 * r), r)
				ctx.lineTo(x + r, y + (2 * r))
				ctx.arcTo(x, y + (2 * r), x, y + r, r)
				ctx.arcTo(x, y, x + r, y, r)
				ctx.fill()
				ctx.stroke()

				return [x + r, y + r]
			},

			saveHB() {
				console.log('点击了图片')
				uni.previewImage({
					urls: this.hbUrl
				})
			},

			// 获取图片信息
			getImageInfo(image) {
				return new Promise((req, rej) => {
					uni.getImageInfo({
						src: image,
						success: (res) => {
							req(res)
						},
					})
				})
			},

			// 获取设备信息
			getSystemInfo() {
				return new Promise((req, rej) => {
					uni.getSystemInfo({
						success: function(res) {
							req(res)
						}
					})
				})
			},

			//保存相片到本地
			savePicture() {
				console.log('save---', this.hbUrl)
				uni.saveImageToPhotosAlbum({
					filePath: this.hbUrl[0],
					success(res) {
						console.log(res)
					},
					fail(err) {
						console.error(err)
					}
				})
			},
			//分享相片
			sharePicture() {
				console.log('share---', this.hbUrl)
				uni.share({
					provider: 'weixin',
					imageUrl: this.hbUrl[0],
					type: 2,
					scene: 'WXSceneTimeline'
				})
			},

			close() {
				this.$emit('close')
			}
		},
	}
</script>

<style lang="scss">
</style>
