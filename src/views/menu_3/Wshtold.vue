<template>
  <div>
    <TitleTable title="商品房买卖合同">
      <template #addButton>
        <Why>注意：1、点“完善合同”将其他条款进行完善；2、点“打印合同”打出一份，确认无误后“上报”合同；3、点“打印合同”和“打印申请表”后送房管局备案；4、合同单价超出挂牌单价则无法上报备案！</Why>
        <el-button size="mini" @click="showHt=true">测试</el-button>
      </template>
      <template #controls>
        <SearchBar>
          <SearchBarItem prefix="买受人"/>
          <SearchBarItem prefix="证件号码"/>
          <SearchBarItem prefix="备案号"/>
        </SearchBar>
        <ButtonsArea :row="row" @cancel="setCurrent">
          <el-button size="mini" @click="handleCompContract" type="primary">完善合同</el-button>
          <el-button size="mini" @click="handlePrintContract" type="primary">打印合同</el-button>
          <el-button size="mini" @click="handlePrintForm" type="primary">打印申请表</el-button>
        </ButtonsArea>
      </template>
      <template #default>
        <el-table size="mini" :data="tableData" ref="table" highlight-current-row @current-change="handleCurrentChange"
                  @cancel="setCurrent">
          <el-table-column label="合同备案号" align="center" prop="bah"/>
          <el-table-column label="买受人" align="center" prop=""/>
          <el-table-column label="共有方式" align="center" prop=""/>
          <el-table-column label="项目名称" align="center" prop=""/>
          <el-table-column label="楼栋名称" align="center" prop=""/>
          <el-table-column label="房号" align="center" prop=""/>
          <el-table-column label="面积" align="center" prop=""/>
          <el-table-column label="挂牌价" align="center" prop=""/>
          <el-table-column label="单价" align="center" prop=""/>
          <el-table-column label="状态" align="center" prop=""/>
          <el-table-column label="签订时间" align="center" prop=""/>
        </el-table>
      </template>

      <template #pager>
        <el-pagination
            background
            layout="prev, pager, next, total, sizes"
            @current-change="mixinCurrentChange"
            @size-change="mixinSizeChange"
            :page-sizes="[10, 20, 30, 40]"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total">
        </el-pagination>
      </template>
    </TitleTable>

    <div class="ht" v-if="showHt">
      <WshtoldLayout @close="showHt=false"/>
    </div>
  </div>
</template>

<script>
import WshtoldLayout from "@/views/menu_3/Wshtold/WshtoldLayout";
import TitleTable from "@/components/current/titleTable/TitleTable";
import Why from "@/components/common/why/Why";
import SearchBar from "@/components/current/searchBar/SearchBar";
import SearchBarItem from "@/components/current/searchBar/SearchBarItem";
import {mixins} from "@/utils/mixins";
import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";

export default {
  name: "Wshtold",
  components: {ButtonsArea, SearchBarItem, SearchBar, Why, TitleTable, WshtoldLayout},
  mixins: [mixins.myPagerMixin, mixins.tableMixin],
  data() {
    return {
      showHt: false,
      tableData: [
        {bah: "10086"}
      ]
    }
  },
  methods:{
    handleCompContract(){
      this.showHt = true
    },
    handlePrintContract(){
      window.open(`#/printView/htold?id=10086`)
    },
    handlePrintForm(){},
  }
}
</script>

<style scoped lang="scss">
.ht {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: whitesmoke;
}
</style>