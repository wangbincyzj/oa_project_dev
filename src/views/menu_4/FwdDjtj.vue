<template>
	<!-- 房屋定金统计====== 1049906948 -->
	<div class="FwdDjtj">
		<ContainerTwoType :nav-info="navInfo" @liClick="liClick">
			<TitleTable title="对应缴款信息">
				<div slot="controls">
					<el-alert type="success" :closable="false">
						<div class="controls" id="search">
							<div class="searchbox searchbox0">
								<span>买受人:</span>
								<el-input size="mini" placeholder="按买受人搜索" style="width:200px;" />
							</div>
							<div class="searchbox searchbox1">
								<span>开始时间:</span>
								<el-date-picker type="date" placeholder="选择日期" v-model="dateList.dateStart" style="width: 200px" size="mini"></el-date-picker>
							</div>
							<div class="searchbox searchbox2">
								<span>结束时间:</span>
								<el-date-picker type="date" placeholder="选择日期" v-model="dateList.dateEnd" style="width: 200px" size="mini"></el-date-picker>
							</div>
							<div class="searchbox searchbox3">
								<el-button size="mini" type="success" @click="handleSearchList()">搜索</el-button>
								<el-button size="mini" type="success" @click="Printing()">打印明细</el-button>
							</div>
						</div>
					</el-alert>
					<el-alert type="warning" center :closable="false"></el-alert>
				</div>
				<!-- 表格 -->
				<el-table :data="tableData" style="width: 100%" border>
					<el-table-column align="center" label="买受人" prop="msr"></el-table-column>
					<el-table-column align="center" label="证件号码" prop="zjhm"></el-table-column>
					<el-table-column align="center" label="项目名称" prop="zh"></el-table-column>
					<el-table-column align="center" label="楼栋名称" prop="fh"></el-table-column>
					<el-table-column align="center" label="房号" prop="mj"></el-table-column>
					<el-table-column align="center" label="建筑面积" prop="jkje"></el-table-column>
					<el-table-column align="center" label="缴款金额" prop="jkje"></el-table-column>
					<el-table-column align="center" label="缴款说明" prop="jksm"></el-table-column>
					<el-table-column align="center" label="缴款日期" prop="jgyh"></el-table-column>
				</el-table>
			</TitleTable>

			<TitleTable title="对应缴款信息">
				<div slot="controls">
					<el-alert type="success" :closable="false">
						<div class="controls" id="search">
							<div class="searchbox searchbox0">
								<span>买受人:</span>
								<el-input size="mini" placeholder="按买受人搜索" style="width:200px;" />
							</div>
							<div class="searchbox searchbox1">
								<span>开始时间:</span>
								<el-date-picker type="date" placeholder="选择日期" v-model="dateList.dateStart" style="width: 200px" size="mini"></el-date-picker>
							</div>
							<div class="searchbox searchbox2">
								<span>结束时间:</span>
								<el-date-picker type="date" placeholder="选择日期" v-model="dateList.dateEnd" style="width: 200px" size="mini"></el-date-picker>
							</div>
							<div class="searchbox searchbox3">
								<el-button size="mini" type="success" @click="handleSearchList()">搜索</el-button>
								<el-button size="mini" type="success" @click="Printing()">打印明细</el-button>
							</div>
						</div>
					</el-alert>
					<el-alert type="warning" center :closable="false"></el-alert>
				</div>
				<!-- 表格 -->
				<el-table :data="tableData" style="width: 100%" border="">
					<el-table-column align="center" label="申报金额" prop="msr"></el-table-column>
					<el-table-column align="center" label="划出账号" prop="zjhm"></el-table-column>
					<el-table-column align="center" label="发放日期" prop="jgyh"></el-table-column>
				</el-table>
			</TitleTable>


			<!-- <TitleTable title=""> -->
			<!-- 表格 -->
			<el-table :data="tableData" style="width: 100%" border="">
				<el-table-column align="center" label="缴款总金额" prop="msr"></el-table-column>
				<el-table-column align="center" label="使用总金额" prop="zjhm"></el-table-column>
				<el-table-column align="center" label="账户总额" prop="jgyh"></el-table-column>
			</el-table>
			<!-- </TitleTable> -->

		</ContainerTwoType>
	</div>
</template>

<script>
	import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
	import TitleTable from "@/components/current/titleTable/TitleTable";

	import axios from "axios";
	
	
	

	//选择楼栋列表
	// const ldList = [
	//   { id: 1, name: "天空之城" },
	//   { id: 2, name: "-D1" },
	//   { id: 3, name: "-D2" },
	//   { id: 4, name: "-D3" },
	//   { id: 5, name: "-D4" }
	// ];

	//列表信息
	const listck = [{
			htbh: "合同编号",
			msr: "买受人",
			zjhm: "证件号码",
			zh: "幢号",
			fh: "房号",
			mj: "面积",
			jkje: "缴款金额",
			jgyh: "监管银行",
			jgzh: "监管账号",
			jksm: "缴款说明",
			xmxxid: 1,
		},
		{
			htbh: "合同编号",
			msr: "买受人",
			zjhm: "证件号码",
			zh: "幢号",
			fh: "房号",
			mj: "面积",
			jkje: "缴款金额",
			jgyh: "监管银行",
			jgzh: "监管账号",
			jksm: "缴款说明",
			xmxxid: 2,
		}
	];

	export default {
		name: "FwdDjtj",
		components: {
			TitleTable,
			ContainerTwoType
		},
		data() {
			return {
				navInfo: {
					loading: false,
					title: "监管账户",
					selectedIndex: 0,
					list: []
				},
				tableData: [],
				dateList: {},
				selectedIndex: null,
			};
		},
		computed: {
			selectedBuilding() {
				//切换数据
				// console.log(this.navInfo.list)
				if (!this.navInfo.list.length) return null;
				if (this.selectedIndex === 0) return null;
				return this.navInfo.list[this.selectedIndex];
			},
		},
		created() {
			this.fetchNavInfo();
			// this.fetchTableData();
		},
		methods: {
			fetchNavInfo() {
				axios.get('http://192.168.1.161:8093/data-presale-funds/supervisedAccount/selectPage').then(async res => {
					const navlist = res.data.records
					this.navInfo.list = navlist.map(item => ({ ...item,
						id: item.zjjgzhId,
						name: item.zjjgzhYhzh
					}))
					this.navInfo.list.unshift({
						id: -1,
						name: "监管账户"
					})
					await this.fetchTableData()
				})
			},
			fetchTableData(id) {
				debugger
				// alert("列表信息");
				this.tableData = listck;
			},
			liClick(index) {
				this.selectedIndex = index;
				if (index === 0) return;
				this.selectedIndex = this.navInfo.list[index];
				 this.fetchTableData(this.navInfo.list[index].zjjgzhYhzh);
			},
			handleSearchList() {
				alert("搜索");
			},
			Printing() {
				alert("打印明细");
				// window.open("/#/printView/Dymx");
			}
		}
	};
</script>

<style scoped lang="scss">
	@import "~@/assets/css/var.scss";

	.tjrwry {
		padding: $pm;
	}

	#search {
		display: flex;
		width: 100%;

		.searchbox {
			margin: 0 50px;

			// &.searchbox1 {
			//   // margin-left: 100px;
			// }
			// &.searchbox2 {
			//   // margin-left: 100px;
			// }
			// &.searchbox3 {
			//   // margin-left: 200px;
			// }
			span {
				margin-right: 20px;
			}
		}
	}

	.Ldzjxx {
		.titleTable {
			height: 50%;
		}
	}
</style>
