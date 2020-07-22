<template>
	<div id="header">
		<div class="logo">开发商系统</div>
		<div class="topBar">
			<div class="home"><i class="iconfont icon-home" /> 首页</div>
			<el-popover placement="top-start" width="420" trigger="hover">
				<HeaderMenu :data="$store.state.navList" />
				<span slot="reference"><i class="iconfont icon-icon-" /> 菜单</span>
			</el-popover>
			<div class="userInfo">
				<el-popover placement="top-start" width="200" trigger="hover">
					<div class="popInfo">
						<div class="info">
							<span class="name">{{name}}</span> <span class="title">{{title}}</span>
						</div>
						<hr>
						<ul class="menu">
							<li @click="setPwd">修改密码</li>
							<li @click="logout">退出登录</li>
						</ul>
					</div>
					<div class="avatar" slot="reference">
						<img src="@/assets/images/header/avatar.png" alt="">
						<span class="name">{{name}}</span>
					</div>
				</el-popover>

			</div>
		</div>
		<WbDialog :visible.sync="visible" :title="dialogTitle">
			<ChangePwd @success="success"/>
		</WbDialog>
	</div>
</template>

<script>
	import HeaderMenu from "@/views/layout/components/HeaderMenu";
	import WbDialog from "@/components/common/wb-dialog/WbDialog";
	import ChangePwd from "@/components/common/wb-dialog/components/ChangePwd";
	export default {
		name: "Header",
		components: {
			ChangePwd,
			WbDialog,
			HeaderMenu
		},
		data() {
			return {
				visible: false,
				dialogTitle: ""
			}
		},
		computed: {
			navList() {
				return this.$store.state.navList
			},
			name() {
				return this.$store.state.loginInfo.username || "获取中..."
			},
			title() {
				return this.$store.state.loginInfo.title || "职称获取中..."
			}
		},
		mounted() {
			this.checkStatus()
		},
		methods: {
			logout() {
				this.$store.dispatch("logout");
				this.$message.info("退出登录成功")
			},
			checkStatus() {
				if(this.$store.state.loginInfo.rwdqrqzt === 1){
					this.$notify({
						title: "密钥提醒",
						message: "密钥将于15日内过期,请及时续期",
						type: "warning",
						duration: 0,
						position: 'top-left'
					})
				}
				if(this.$store.state.loginInfo.rwdqrqzt === 2){
					this.$notify({
						title: "密钥提醒",
						message: "密钥已过期, 请续期",
						type: "error",
						duration: 0,
						position: 'top-left'
					})
				}
			},
			setPwd() {
				this.visible = true;
				this.dialogTitle = "修改密码"
			},
			success() {
				this.visible = false
			}
		}
	}
</script>

<style scoped lang="scss">
	#header {
		height: 55px;
		display: flex;
		color: white;
		line-height: 55px;

		.logo {
			text-align: center;
			width: 200px;
			background-color: #0270c1;
			flex-shrink: 0;
		}

		.topBar {
			position: relative;
			flex: 1;
			display: flex;
			background-color: #1248b3;
			vertical-align: center;

			.userInfo {
				position: absolute;
				right: 30px;

				.avatar {
					height: 55px;
					line-height: 55px;
					display: flex;

					span {
						color: var(--border-1);
						font-size: 12px;
					}

					img {
						padding: 10px;
						width: 55px;
						height: 55px;
						border-radius: 50%;
					}
				}
			}

			&>* {
				margin: 0 30px;
				cursor: pointer;
			}

			i {
				font-size: 18px;
			}
		}
	}
</style>
