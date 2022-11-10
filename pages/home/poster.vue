<template>
	<view>
		<canvas :style="{ width: canvasW + 'px', height: canvasH + 'px' }" canvas-id="myCanvas" id="myCanvas"
			@click="saveHB"></canvas>
	</view>
</template>

<script>
	import {
		typeOptions,
	} from '@/constants/common.js'
	export default {
		data() {
			return {
				canvasW: 0, // 画布宽
				canvasH: 0, // 画布高
				picWidth: '', //图片宽
				picHight: 260, //图片高
				SystemInfo: {}, // 设备信息
				userImg: {}, // 照片墙
				userImg2: {}, // 照片墙
				userImg3: {}, // 照片墙
				logoImg: {}, // logo图片
				bgImg: {}, // 背景图片
				logoW: 56, // logo大小
				title: '营销是做一切的事情，让客户来找我；销售是做一切的事情，我去找客户。',
				name: '周希奇', // 推荐人
				hbUrl: [], //储存生成的图片地址
				detail: uni.getStorageSync('userDetail'),
				typeOptions,
				startX: 74,
				startY: 900,
			}
		},
		async onLoad() {
			//获取从上衣页面传过来的图片参数
			this.title = '阿斯顿'
			this.url = this.detail.imgList[0]
			// 获取设备信息，获取设备的宽高，画布做一样的高度
			this.SystemInfo = await this.getSystemInfo();
			console.log('this.SystemInfo', this.SystemInfo)
			this.canvasW = this.SystemInfo.windowWidth - 30; // 画布宽度
			this.canvasH = this.SystemInfo.windowHeight - 200; //画布高度

			//获取照片的长与宽，按画布的比例进行缩放
			this.userImg = await this.getImageInfo(this.detail.imgList[0]);
			this.userImg2 = await this.getImageInfo(this.detail.imgList[1]);
			this.userImg3 = await this.getImageInfo(this.detail.imgList[2]);

			//logo的信息
			this.logoImg = '/static/logo.png';
			this.bgImg = '/static/background.png';

			// 如果主图，logo图片，设备信息都获取成功，开始绘制海报，这里需要用setTimeout延时绘制，否则可能会出现图片不显示。
			if (this.userImg.errMsg == 'getImageInfo:ok' && this.userImg2.errMsg == 'getImageInfo:ok' && this.userImg3
				.errMsg == 'getImageInfo:ok' && this
				.SystemInfo.errMsg == 'getSystemInfo:ok') {
				// console.log('ok')
				uni.showToast({
					icon: 'loading',
					mask: true,
					// duration: 5000,
					title: '海报绘制中',
				});
				setTimeout(() => {
					var ctx = uni.createCanvasContext('myCanvas', this);
					// 填充背景色，白色
					ctx.setFillStyle('#fff'); // 默认白色
					ctx.fillRect(0, 0, this.canvasW, this.canvasH) // fillRect(x,y,宽度，高度)

					ctx.drawImage(this.bgImg, 0, 0, this.canvasW, 120)
					// 绘制logo
					ctx.drawImage(this.logoImg, 10, 10, this.logoW, this.logoW)
					// 绘制照片墙
					ctx.drawImage(this.userImg.path, this.canvasW - 110, 230, 90, 90)
					ctx.drawImage(this.userImg2.path, this.canvasW - 190, 265, 90, 90)
					ctx.drawImage(this.userImg3.path, this.canvasW - 110, 310, 90, 90)
					// 3、绘制用户信息
					ctx.setFontSize(16); // setFontSize() 设置字体字号
					ctx.setFillStyle('#000000'); // setFillStyle() 设置字体颜色
					ctx.fillText(this.detail.name, 16, 150);
					ctx.setFillStyle('#fff');
					ctx.setFontSize(20); // setFontSize() 设置字体字号
					const target = this.typeOptions.find(item => {
						return item.value === +this.detail.type
					})
					const width = ctx.measureText(target?.label + this.detail.level).width
					const coordinates = this.drawArcTo(ctx, width, 28)
					ctx.fillText(target?.label + this.detail.level, coordinates[0], coordinates[1])
					ctx.setFillStyle('#999');
					ctx.setFontSize(14);
					ctx.fillText(this.detail.city, 16, 180);
					ctx.fillText('ID：' + this.detail.id, 100, 180);
					ctx.setFillStyle('#000000');
					const _strHeight = 240;
					ctx.fillText(`学历：${this.detail.educationName}`, 16, _strHeight);
					ctx.fillText(`职业：${this.detail.job}`, 16, _strHeight + 20);
					ctx.fillText(`身高：${this.detail.heightName}`, 16, _strHeight + 40);
					ctx.fillText(`发长：${this.detail.hairName}`, 16, _strHeight + 60);
					ctx.fillText(`星座：${this.detail.constellation}`, 16, _strHeight + 80);
					ctx.fillText(`宠物：${this.detail.pet ? '有' : '无'}`, 16, _strHeight + 100);
					ctx.fillText(`房产：${this.detail.house ? '有' : '无'}`, 16, _strHeight + 120);
					ctx.fillText(`年收入：${this.detail.incomeName}`, 16, _strHeight + 140);
					ctx.fillText(`出柜情况：${this.detail.situationName}`, 16, _strHeight + 160);
					ctx.fillText(`育儿计划：${this.detail.child ? '有' : '无'}`, 16, _strHeight + 180);
					ctx.fillText(`感情状态：${this.detail.stateName}`, 16, _strHeight + 200);
					ctx.fillText(`性格标签：${this.detail.natureText}`, 16, _strHeight + 220);
					ctx.fillText(`爱好标签：${this.detail.hobbyText}`, 16, _strHeight + 240);
					ctx.fillText(`娱乐标签：${this.detail.funText}`, 16, _strHeight + 260);
					ctx.draw(true, (ret) => { // draw方法 把以上内容画到 canvas 中。
						uni.showToast({
							icon: 'success',
							mask: true,
							title: '绘制完成',
						});
						uni.canvasToTempFilePath({ // 保存canvas为图片
							canvasId: 'myCanvas',
							quality: 1,
							complete: (res) => {
								this.hbUrl.push(res.tempFilePath)
							},
						})
					});
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
				let x = parseFloat(this.startX + '')
				let y = parseFloat(this.startY + '')
				let endX = x + w + 2 * r + 15
				if (endX > 700) {
					y += 2 * r + 16
					x = 74
					endX = x + w + 2 * r + 15
				}
				this.startX = endX
				this.startY = y
				ctx.beginPath()
				ctx.moveTo(x + r, y) // 创建开始点
				ctx.lineTo(x + w + r, y) // 创建水平线
				ctx.strokeStyle = '#2486FF'
				ctx.arcTo(x + w + 2 * r, y, x + w + 2 * r, y + r, r) // 创建弧
				ctx.arcTo(x + w + 2 * r, y + (2 * r), x + w, y + (2 * r), r)
				ctx.lineTo(x + r, y + (2 * r))
				ctx.arcTo(x, y + (2 * r), x, y + r, r)
				ctx.arcTo(x, y, x + r, y, r)

				ctx.setFillStyle('#2486FF')
				ctx.fill()
				ctx.stroke();

				return [x + r, y + r]
			},

			saveHB() {
				// console.log('点击了图片')
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
					});
				})
			},

			// 获取设备信息
			getSystemInfo() {
				return new Promise((req, rej) => {
					uni.getSystemInfo({
						success: function(res) {
							req(res)
						}
					});
				})
			},

			//保存相片到本地
			savePicture() {
				uni.saveImageToPhotosAlbum({
					filePath: this.hbUrl,
				})
			},
			//分享相片
			sharePicture() {
				uni.share({
					provider: 'weixin',
					imageUrl: this.hbUrl,
					type: 2,
					scene: 'WXSceneTimeline'
				})
			},

		},
	}
</script>

<style lang="scss">
	.button-container {
		display: flex;
		justify-content: center;
		position: fixed;
		top: 80%;
		height: 100rpx;
		width: 100%;

		button {
			width: 40%;
			background-color: #0055ff;
		}
	}
</style>
