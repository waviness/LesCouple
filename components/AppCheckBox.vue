<template>
	<view class="d-flex flex-wrap">
		<view v-for="(item, index) in tempOptions" :key="index" class="mb-2 mr-2">
			<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="onClick">
			</u-tag>
		</view>
	</view>
</template>

<script>
	export default {
		name: "AppCheckBox",
		props: {
			appType: {
				type: String,
				default: 'checkbox' // checkbox多选 radio单选
			},
			options: {
				type: Array,
				default: []
			},
		},
		data() {
			return {
				tempOptions: JSON.parse(JSON.stringify(this.options))
			}
		},
		methods: {
			onClick(name) {
				console.log('click')
				if (this.appType === 'checkbox') {
					if (this.tempOptions[name].value === -1) {
						this.tempOptions.forEach(item => {
							item.checked = false
						})
						this.tempOptions[name].checked = true
					} else {
						const target = this.tempOptions.find(item => {
							return item.value === -1
						})
						if (target) {
							this.tempOptions[0].checked = false
						}
						this.tempOptions[name].checked = !this.tempOptions[name].checked
					}
				} else {
					console.log(this.tempOptions)
					console.log(name)
					this.tempOptions.map((item, index) => {
						item.checked = index === name ? true : false
					})
					console.log(this.tempOptions)
				}
				this.$forceUpdate()
				const res = this.tempOptions.filter(item => {
					return item.checked
				}).map(item => item.value)
				this.$emit('update:value', res)
			}
		}
	}
</script>

<style lang="scss"></style>
