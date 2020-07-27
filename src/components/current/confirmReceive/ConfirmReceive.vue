<template>
  <div>
    <h3 class="title">
      <el-button-group>
        <el-button size="mini" @click="addFile" type="primary" icon="el-icon-plus">添加收件</el-button>
        <el-button size="mini" @click="resetR" type="warning" icon="el-icon-warning-outline">重置默认</el-button>
      </el-button-group>
    </h3>

    <el-table :data="list" size="mini">
      <el-table-column
        type="index"
        width="50"/>
      <el-table-column align="left" label="收件名称" prop="shoujianTitle">
        <!--v-model="scope.row.shoujianTitle"-->
        <template #default="scope">
          <div v-if="scope.row.add" style="display: flex">
            <div style="flex: 3; padding-right: 20px;">
              <el-input size="mini" v-model="scope.row.shoujianTitle"/>
            </div>
            <div style="flex: 1">
              <el-select
                size="mini"
                value=""
                @change="change($event, scope.row)"
                placeholder="手动输入或选择收件"
              >
                <el-option v-for="item in addList" :value="item.value">{{item.value}}</el-option>
              </el-select>
            </div>
          </div>
          <div v-else>
            {{scope.row.shoujianTitle}}
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="份数" width="120">
        <template #default="{row}">
          <el-select v-model="row.shoujianFenshu" size="mini">
            <el-option value="1">1</el-option>
            <el-option value="2">2</el-option>
            <el-option value="3">3</el-option>
            <el-option value="4">4</el-option>
            <el-option value="5">5</el-option>
          </el-select>
        </template>

      </el-table-column>
      <el-table-column align="center" label="资料类型" width="120">
        <template #default="{row}">
          <el-select v-model="row.shoujianSjxz" size="mini">
            <el-option value="原件">原件</el-option>
            <el-option value="复印件">复印件</el-option>
            <el-option value="扫描件">扫描件</el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template #default="scope">
          <el-button size="mini" type="danger" @click="handleRemove(scope.$index)">删除收件</el-button>
        </template>
      </el-table-column>
    </el-table>

    <CenterButton @btnClick="handleShouJian" title="确认收件"/>
  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
  export default {
    name: "ConfirmReceive",
    components: {CenterButton},
    props:{
    },
    data() {
      return {
        addList: [],
        list: [],
        originList: null,
      }
    },
    methods:{
      setList(list) {
        this.list = [...list]
        this.originList = [...list]
        this.fetchAddList()
      },
      fetchAddList() {
        sqjgzhApi.getCertificateList().then(ret => {
          this.addList = ret.data.map(item => ({
            ...item,
            value: item.zhengjianName
          }))
        })
      },
      addFile() {
          this.list.push({
            add: true,
            shoujianXuhao: "",
            shoujianTitle: "",
            shoujianFenshu: 1,
            shoujianYema: "",
            shoujianSjxz: "",
            zhengjianId: "",
          })
      },
      resetR() {
        this.list = [...this.originList]
      },
      handleShouJian() {
        this.$emit("receive", this.list)
      },
      change(val, item) {
        item.shoujianTitle = val;
      },
      handleRemove(index) {
        this.list.splice(index,1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .title {
    font-weight: 600;
    line-height: 2;
    background-color: rgba(170, 170, 170, 0.18);
    margin-bottom: 20px;
    padding-left: 50px;
    font-size: 18px;
    margin-top: 20px;
  }


</style>