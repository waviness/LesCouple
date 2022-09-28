<template>
	<view :class="['d-flex flex-wrap', around ? 'justify-space-around' : '']">
		<type-tag v-for="(item, index) in tempOptions" :key="index" class="mr-5" :type="item.value" :text="item.label"
			:active.sync="item.checked" :small="small" @click="onClick(index)" />
	</view>
</template>

<script>
	import TypeTag from '@/components/TypeTag.vue'
	export default {
		name: "TypeCheckBox",
		components: {
			TypeTag,
		},
		props: {
			type: {
				type: String,
				default: 'checkbox' // checkbox多选 radio单选
			},
			options: {
				type: Array,
				default: []
			},
			around: {
				type: Boolean,
				default: false // 是否开启justify-space-around
			},
			small: {
				type: Boolean,
				default: false // 是否小尺寸
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
				console.log(res)
				this.$emit('update:value', res)
			}
		}
	}
</script>

<style lang="scss"></style>
