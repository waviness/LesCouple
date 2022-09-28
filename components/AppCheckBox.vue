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
			type: {
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
				if (this.type === 'checkbox') {
					this.tempOptions[name].checked = !this.tempOptions[name].checked
				} else {
					this.tempOptions.map((item, index) => {
						item.checked = index === name ? true : false
					})
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
