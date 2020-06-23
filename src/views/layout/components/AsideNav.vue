<template>
	<el-menu class="el-menu" @open="handleOpen" @close="handleClose" background-color="#2c3037" text-color="#eee"
	 :unique-opened="true" :router="true" active-text-color="#67C23A">
		<el-submenu :index="`${index}`" v-for="(item,index) in routes">
			<template slot="title">
				<i class="iconfont" :class="item.class" />
				<span>{{item.title}}</span>
			</template>
			<el-menu-item-group>
				<el-menu-item :index="asideNav.path + '/' + child.path" v-for="child in item.group">{{child.title}}</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>

<script>
	import {
		navList
	} from "@/router/navList";

	export default {
		name: "AsideNav",
		computed: {
			asideNav() {
				let ret = this.$route.matched.length ? this.$route.matched[0].meta.asideNav : null
				// todo 不是很严谨,考虑重写
				return ret
			},
			routes() {
				return this.asideNav ? this.asideNav.routes : null
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			getNavData() {

			}
		}
	}
</script>

<style scoped lang="scss">
	.el-menu {
		color: #1a1a1c;

		.iconfont {
			margin-right: 5px;
		}
	}
</style>
