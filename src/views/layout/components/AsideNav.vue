<template>
	<el-menu
		class="el-menu"
		@open="handleOpen"
		@close="handleClose"
		background-color="#2c3037"
		:collapse-transition="false"
		:default-active="$route.path"
		text-color="#eee"
		:unique-opened="true"
		:router="true"
		:collapse="fold"
		active-text-color="#67C23A">
		<el-submenu :index="`${index}`" v-for="(item,index) in routes">
			<template slot="title">
				<i class="iconfont" :class="item.class"/>
				<span>{{item.title}}</span>
			</template>
			<el-menu-item-group>
				<el-menu-item
					v-if="canShow(child.title)"
					@click="itemClick(asideNav.path + '/' + child.path, child)"
					:index="asideNav.path + '/' + child.path"
					v-for="child in item.group"
					:key="asideNav.path + '/' + child.path"
				>{{child.title}}</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>

<script>

	export default {
		name: "AsideNav",
		props:["fold"],
		computed:{
			asideNav() {
				// todo 不是很严谨,考虑重写
				return this.$route.matched.length ? this.$route.matched[0].meta.asideNav : null
			},
			routes() {
				return this.asideNav ? this.asideNav.routes : null
			},
			authsCN() {
				return this.$store.state.loginInfo.userAuths.map(item=>item.qxName)
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			itemClick(arg1, arg2) {
				this.$emit("navClick", arg1, arg2)
			},
			canShow(item) {
				return this.authsCN.includes(item)
			}
		}
	}
</script>

<style scoped lang="scss">
	.el-menu{
		color: #1a1a1c;
		.iconfont{
			margin-right: 5px;
		}
	}
</style>