<template>
  <div class="dialog myDialog myForm-mb5">
    <!--mode1增加  mode3修改-->
    <div v-if="mode===1||mode===3" class="add">
      <el-alert style="margin-bottom: 20px; line-height: 1.2" :closable="false">
        该楼栋必须具备以下四个条件才能在下面框中显示：1、楼栋已审核；2、一房一价已审核；3、设置好了预售资金监管方式；4、设置了维修资金缴存标准；如果你要选择的楼栋未在下面显示请你到“项目管理”——“楼盘上报审核”中查看下该栋房屋的某个状态是否有没有完成。
      </el-alert>
      <el-form
        ref="form"
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form1">
        <el-form-item label="选择楼栋">
          <el-checkbox-group v-model="form1.ldxxIds" @change="_handleChange">
            <el-checkbox :label="item.ldxxId" v-for="item in lds">{{item.ldxxMc}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <br>
        <el-form-item label="开盘日期">
          <el-date-picker v-model="form1.ysxkKprq" placeholder="选择开盘日期"/>
        </el-form-item>
        <el-form-item label="预售名称">
          <el-input v-model="form1.xkzLdmc"/>
        </el-form-item>
        <el-form-item label="业务类别">
          <el-input disabled value="新增预售许可"/>
        </el-form-item>
        <br/>
        <el-form-item label="住宅面积">
          <el-input disabled v-model="form1.xkzZzmj"/>
        </el-form-item>
        <el-form-item label="住宅套数">
          <el-input disabled v-model="form1.xkzZzts"/>
        </el-form-item>
        <el-form-item label="非住宅面积">
          <el-input disabled v-model="form1.xkzFzzmj"/>
        </el-form-item>
        <el-form-item label="非住宅套数">
          <el-input disabled v-model="form1.xkzFzzts"/>
        </el-form-item>
        <el-form-item label="预售总面积">
          <el-input disabled v-model="form1.xkzZjzmj"/>
        </el-form-item>
        <el-form-item label="预售总套数">
          <el-input disabled v-model="form1.xkzZts"/>
        </el-form-item>
        <el-divider/>
        <el-form-item label="监管账户名称">
          <el-input v-model="form1.xkzJgzhmc" style="width: 180px" type="textarea"/>
        </el-form-item>
        <el-form-item label="监管账户">
          <el-input v-model="form1.xkzJgzh" style="width: 180px" type="textarea"/>
        </el-form-item>
        <el-form-item label="监管银行">
          <el-input v-model="form1.xkzJgyh" style="width: 180px" type="textarea"/>
        </el-form-item>
      </el-form>
      <CenterButton :disabled="!form1.ldxxIds.length" @btnClick="handleAdd" :title="mode===1?'新增':'修改' "/>
    </div>
    <!--mode2收件-->
    <div v-if="mode===2">
      <info-list :title="`业务宗号:${ywzh?ywzh:'读取中...'}`"/>
      <div class="addItem">
        <h3 class="title">添加新收件</h3>
        <div>
          <label>收件名称</label>
          <el-select placeholder="请选择收件名称" size="mini" v-model="addForm.name">
            <el-option value="1" label="潼关县商品房预售许可证申请表"></el-option>
            <el-option value="2" label="开发企业《营业执照》（原件及彩色复印件"></el-option>
          </el-select>
        </div>
        <div>
          <label for="">收件性质</label>
          <el-radio v-model="addForm.attr" label="原件">原件</el-radio>
          <el-radio v-model="addForm.attr" label="复印件">复印件</el-radio>
        </div>
        <div>
          <el-select placeholder="请选择收件份数" size="mini" clearable v-model="addForm.count">
            <el-option :value="item" v-for="item in 5">{{item}}</el-option>
          </el-select>
        </div>
        <el-button type="primary" size="mini" icon="el-icon-plus">添加</el-button>
      </div>
      <div class="receiveList">
        <div class="item" v-for="(item,index) in businessReceives">
          <div class="no">
            <span>{{index+1}}</span>
          </div>
          <div class="info">
            <div class="name">{{item.shoujianTitle}}</div>
            <div class="attr">
              <div>性质:<span>{{item.shoujianSjxz}}</span></div>
              <div>份数:<span>{{item.shoujianFenshu}}</span></div>
            </div>
          </div>
        </div>
      </div>
      <CenterButton @btnClick="handleShouJian" title="确认收件"/>
    </div>
    <!--mode3修改-->
    <div v-if="mode===3">

    </div>
  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {yushowApi} from "@/api/menu_3/yushow";
  import {businessApi} from "@/api/menu_3/__Business";
  import InfoList from "@/components/common/infoList/InfoList";

  export default {
    name: "SqysxkDialog",
    components: {InfoList, CenterButton},
    data() {
      return {
        mode: 2, // 1 预售申报  2业务收件操作
        // 新增预售申报
        form1: {
          ldxxIds: [],
          xkzZzmj: null,
          xkzZzts: null,
          xkzFzzmj: null,
          xkzFzzts: null,
          xkzZjzmj: null,
          xkzZts: null,
          xkzLdid: [],  // ids需要处理
          xmxxId: null,  // store
          // kfsId: null, 没有开发商id
          xkzJgzhmc: null,
          xkzJgzh: null,
          xkzJgyh: null,
          ysxkKprq: null,
          xkzLdmc: null,
          ldFwlx: 0,
        },
        form1Blank: {
          ldxxIds: [],
          xkzZzmj: null,
          xkzZzts: null,
          xkzFzzmj: null,
          xkzFzzts: null,
          xkzZjzmj: null,
          xkzZts: null,
          xkzLdid: [],  // ids需要处理
          xmxxId: null,  // store
          // kfsId: null, 没有开发商id
          xkzJgzhmc: null,
          xkzJgzh: null,
          xkzJgyh: null,
          ysxkKprq: null,
          xkzLdmc: null,
          ldFwlx: 0,
        },
        name: "",
        lds: [],
        options: [],
        ywlx: [],
        // --------- mode2 业务收件表格
        businessAttachments: null,
        preSaleLicense: null,
        businessReceives: null,
        addForm: {
          name: "",
          attr: "原件",
          count: 1,
        }
      }
    },
    computed: {
      ywzh/*业务宗号*/() {
        return this.preSaleLicense ? this.preSaleLicense.xkzYwzh : null
      }
    },
    methods: {
      reset() {
        this.form1 = {...this.form1Blank}
        this.ywlx = [];
      },
      setMode(mode, arg) {
        this.mode = mode;
        if (mode === 1) {
          this.fetchLdData()
        } else if (mode === 2) {
          this.fetchShouJian(arg)
        } else if (mode === 3) {
          this.fetchLdData()
          this.fetchForUpdate(arg)
        }
      },
      fetchLdData() {
        yushowApi.getReportBuildingsByProjectId(this.$store.state.projectData.xmxxId, 0).then(ret => {
          this.lds = ret.data;
        });
        businessApi.getBusinessType().then(ret => {
          // value, label, children []
          this.options = ret.data.map(dl => {
            let obj = {};  // value同意用编号
            obj.label = dl.xtywdxName;
            obj.value = dl.xtywdxDxbh;
            obj.xtywdxDxbh = dl.xtywdxDxbh;
            obj.children = dl.children.map(zl => ({
              label: zl.xtywxxName,
              value: zl.xtywxxXxbh,
              xtywxxId: zl.xtywxxId
            }));
            return obj
          })
        })
      },
      fetchShouJian(id) {
        yushowApi.queryReceiving(id).then(ret => {
          this.businessAttachments = ret.data.businessAttachments;
          this.preSaleLicense = ret.data.preSaleLicense;
          this.businessReceives = ret.data.businessReceives;
        })
      },
      fetchForUpdate(id) {
        yushowApi.selectById(id).then(ret => {
          this.form1 = {...ret.data, ldxxIds: []}
          let dl = ret.data.ywxlBh.slice(0, 4)  // 8019001
          let xl = ret.data.ywxlBh.slice(4)  // 8019001
          this.ywlx = [dl, ret.data.ywxlBh]
        })
      },
      _handleChange(val) {
        this.form1.xkzLdid = val.join(",")
        if (val.length) {
          yushowApi.getBuildingParameters(val.join(",")).then(ret => {
            this.form1.xkzZts = ret.data.yszts;   // 预售总套数
            this.form1.xkzZjzmj = ret.data.yszmj;  // 预售总面积
            this.form1.xkzFzzts = ret.data.fzzts;  // 非住宅套数
            this.form1.xkzFzzmj = ret.data.fzzmj;  // 非住宅面积
            this.form1.xkzZzmj = ret.data.zzmj;  // 住宅面积
            this.form1.xkzZzts = ret.data.zzts;  // 住宅套数
            //this.form1.xkzFzzts = ret.data.xszmj;  // 现售总面积
            //this.form1.xkzFzzts = ret.data.xszts;  // 现售总套数
          })
        } else {
          this.form1.xkzZts = null;   // 预售总套数
          this.form1.xkzZjzmj = null;  // 预售总面积
          this.form1.xkzFzzts = null;  // 非住宅套数
          this.form1.xkzFzzmj = null;  // 非住宅面积
          this.form1.xkzZzmj = null;  // 住宅面积
          this.form1.xkzZzts = null;  // 住宅套数
        }
      },
      handleAdd() {
        this.form1.xmxxId = this.$store.state.projectData.xmxxId;
        let ywxlId = 8001001;
        if (this.mode === 1) {
          yushowApi.save({...this.form1, ldxxIds: this.form1.ldxxIds.join(","), ywxlBh: ywxlId}).then(ret => {
            if (ret.code === 200) {
              this.$message.success("添加成功")
              this.$emit("submitSuccess")
            } else {
              this.$message.error(ret.message)
            }
          })
        } else if (this.mode === 3) {
          yushowApi.update({...this.form1, ywxlBh: ywxlId}).then(ret => {
            if (ret.code === 200) {
              this.$message.success("修改成功")
              this.$emit("submitSuccess")
            } else {
              this.$message.error(ret.message)
            }
          })
        }
      },
      handleShouJian() {
        // 组装一个List
        console.log(this.businessReceives)
        let list = this.businessReceives.map(item => ({
          zhengjianId: item.shoujianId,
          ywsjTitle: item.shoujianTitle,
          ywsjFenshu: item.shoujianFenshu,
          ywsjSjxz: item.shoujianSjxz === "原件" ? 0 : 1,
          ywsjYwzh: this.ywzh,
          ywsjXh: item.shoujianXuhao
        }))
        yushowApi.submitShouJian(list).then(ret=>{
          if (ret.code===200){
            this.$message.success("收件成功")
            this.$emit("submitSuccess")
          }else{
            this.$message.error(ret.message)
          }
        })
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .addItem {
    display: flex;
    align-items: center;
    height: 40px;
    line-height: 40px;
    background-color: rgba(204, 204, 204, 0.51);
    padding: 0 10px;

    .title {
      font-weight: 600;
      margin-right: 20px;
    }

    div {
      margin: 0 20px;
    }
  }

  .receiveList {
    .item {
      background-color: rgba(228, 231, 237, 0.54);
      display: flex;
      height: 80px;
      margin: 5px 0;

      .no {
        width: 40px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $text-info;
      }

      .info {
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .name {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          font-weight: 600;
        }

        .attr {
          display: flex;

          div {
            margin-right: 20px;
            color: $text-info;

            span {
              color: $text-weight;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
</style>