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
            <el-option :value="0" label="原件"></el-option>
            <el-option :value="1" label="复印件"></el-option>
            <el-option :value="2" label="扫描件"></el-option>
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
  import {filesApi} from "@/api/files";

  export default {
    name: "ConfirmReceive",
    components: {CenterButton},
    props: {
      ywzh: {
        required: true
      },
      type: {
        type: String,
        required: true
        /**
         * 根据业务宗号查询默认收件
         * 预售许可       SPFHTBA_XKZ
         * 预售资质       CYZT_ZIZHI
         * 监管账户       YSZJJG_ZJJGZH
         * 解除资金监管 YSZJJG_JCZJJG
         * 三方协议        YSZJJG_HETONG
         * 合同变更        SPFHTBA_HT_BG
         * 合同撤销        CONTART_REVOKE
         * 定金退款        DJ_SHENBAO
         * 资金使用        YSZJJG_SHIYONG
         * 维修资金使用 WXZJ_SHIYONG
         */
      },
    },
    data() {
      return {
        addList: [],
        list: [],
        originList: [],
        id: null
      }
    },
    methods: {
      _mapSjxz(str) {
        switch (str) {
          case "原件":
            return 0;
          case "复印件":
            return 1;
          case "扫描件":
            return 2;
        }
      },
      fetchDefault(id) {
        if (this.id) {
          id = this.id
        } else {
          this.id = id
        }
        filesApi.queryDefault(this.type, id).then(ret => {
          this.list = ret.data.businessReceives.map(item => ({
            ...item,
            shoujianSjxz: this._mapSjxz(item.shoujianSjxz)
          }));
          this.addList = ret.data.certificateSettings.map(item => ({
            ...item,
            value: item.zhengjianName
          }))
        });
      },
      addFile() {
        this.list.push({
          add: true,
          shoujianTitle: "",
          shoujianFenshu: 1,
          shoujianYema: "",
          shoujianSjxz: "",
          zhengjianId: "",
        })
      },
      resetR() {
        this.fetchDefault()
      },
      handleShouJian() {
        console.log(this.ywzh)


        let respList = this.list.map(item => ({
          zhengjianId: item.zhengjianId,
          ywsjTitle: item.shoujianTitle,
          ywsjFenshu: item.shoujianFenshu,
          ywsjSjxz: item.shoujianSjxz,
          ywsjYwzh: this.ywzh
        }))
        filesApi.confirmReceive(respList).then(ret => {
          if (ret.code === 200) {
            this.$message.success("确认收件成功,传图或者打印收件请前往管理收件")
            this.$emit("complete")
          } else {
            this.$message.error(ret.message || "未知错误,请联系管理员")
          }
        })

        return;
        if (this.list.some(item => {
          if (!item.shoujianFenshu || !item.shoujianSjxz || !item.shoujianTitle)
            return true
        })) {
          this.$message.error("不允许空值")
        } else {
          let respList = this.list.map(item => ({
            zhengjianId: item.zhengjianId,
            ywsjTitle: item.shoujianTitle,
            ywsjFenshu: item.shoujianFenshu,
            ywsjSjxz: item.shoujianSjxz,
            ywsjYwzh: this.ywzh
          }))
          filesApi.confirmReceive(respList).then(ret => {
            if (ret.code === 200) {
              this.$message.success("确认收件成功,传图或者打印收件请前往管理收件")
              this.$emit("complete")
            } else {
              this.$message.error(ret.message || "未知错误,请联系管理员")
            }
          })
        }
      },
      change(val, item) {
        item.shoujianTitle = val;
      },
      handleRemove(index) {
        this.list.splice(index, 1)
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