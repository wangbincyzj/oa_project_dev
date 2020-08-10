<template>
  <div class="sqsfxy">
     <ContainerTwoType
      class="container"
      :nav-info="navInfo"
      @liClick="liClick"
    >
   
      <TitleTable
        title="账户对应监管协议列表">
         <template #controls>
          <ButtonsArea :row="row" @cancel="setCurrent">
            <el-button
              size="mini"
              type="primary"
              @click="handleGetFile(0, row)"
             >确认收件
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleManageFile(0, row)">管理收件
            </el-button>
            <el-button
                size="mini"
                type="primary"
                @click="handleUpdate(0,row)"
                 :disabled="row.hetongShzt!==0&&row.hetongShzt!==3">修改
              </el-button>
               <el-button
                size="mini"
                type="primary"
                @click="handleInform(0, row)"
                :disabled="row.hetongShzt!==0&&row.hetongShzt!==3">上报
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(0, scope.row)"
                :disabled="row.hetongShzt!==0&&row.hetongShzt!==3">删除
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handlePrint(0,row)">查看合同
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(0, row)">详情
              </el-button>
          </ButtonsArea>
        </template>
        <!-- <div slot="controls">
          <el-alert
            type="warning"
            center
            :closable="false">
            <div class="controls">
              <span class="warning" v-if="selectedIndex">当前选择 【{{selectedIndex.name}}】</span>
              <span class="warning" v-else>首先点击左边对应的监管账号，然后再点“添加合同”	</span>
              <el-button :disabled="selectedIndex===0" @click="addClick" icon="el-icon-plus" size="mini" type="primary">添加合同</el-button>
            </div>
          </el-alert>
          <el-alert
            type="warning"
            center
            :closable="false">
            <span class="warning" style="color: red">注意：资金监管账户审核通过才能申请“资金监管三方协议”</span>
          </el-alert>
        </div> -->
        <el-table
          :data="tableData"
          style="width: 100%"
          size="mini"
          ref="table"
          highlight-current-row
           @current-change="handleCurrentChange"
           @cell-mouse-enter="cellMouseEnter">
          <el-table-column
            label="序号"
            width=50
            prop="hetongId">
          </el-table-column>
          <el-table-column
            label="银行名称"
            prop="hetongYhmc">
          </el-table-column>
          <el-table-column
            label="企业名称"
            prop="hetongKfsmc">
          </el-table-column>
          <el-table-column
            label="监管账户"
            prop="hetongZhmc">
          </el-table-column>
          <el-table-column
            label="项目名称"
            prop="hetongXmmc">
          </el-table-column>
          <el-table-column
            align="center"
            label="状态"
            prop="hetongShztN">           
          </el-table-column>
          <!-- <el-table-column
            align="center"
            label="收件操作"
            width="200px"
            prop="operation">       
            <template slot-scope="scope" >
              <el-button
              size="mini"
              type="primary"
              @click="handleGetFile(scope.$index, scope.row)"
             >确认收件
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleManageFile(scope.$index, scope.row)">管理收件
            </el-button>
               
            </template>    
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
             width="250px"
          >
           
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleUpdate(scope.$index, scope.row)"
                 :disabled="scope.row.hetongShzt!==0&&scope.row.hetongShzt!==3">修改
              </el-button>
               <el-button
                size="mini"
                type="primary"
                @click="handleInform(scope.$index, scope.row)"
                :disabled="scope.row.hetongShzt!==0&&scope.row.hetongShzt!==3">上报
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(scope.$index, scope.row)"
                :disabled="scope.row.hetongShzt!==0&&scope.row.hetongShzt!==3">删除
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handlePrint(scope.$index, scope.row)">查看合同
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(scope.$index, scope.row)">详情
              </el-button>
             
            </template>
          </el-table-column> -->
        </el-table>
        <template #addButton>
          <Why>注意：资金监管账户审核通过才能申请“资金监管三方协议”</Why>
           <el-button :disabled="selectedIndex===0" @click="addClick" icon="el-icon-plus" size="mini" type="primary">添加合同</el-button>
        </template>
       
         <template #pager>
          <el-pagination
            background
            layout="prev, pager, next, total, sizes"
            @current-change="currentChange"
            @size-change="handleSizeChange"
            :page-sizes="[10, 20, 30, 40]"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total">
          </el-pagination>
        </template>
        <el-dialog
          :title="dialogTitle"
          center
          width="1200px"
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
        >
          <SqsfxyDialog
            ref="dialog"
            :dialog-type="dialogType"
            :zjjgzhId="zjjgzhId"
            :zjjgzhYhzh="zjjgzhYhzh"
            :zjjgzhZhmc="zjjgzhZhmc"
            :zjjgzhGsmc="zjjgzhGsmc"
            :zjjgzhYhmc="zjjgzhYhmc"
            :zjjgzhXmmc="zjjgzhXmmc"
            :kfsId="kfsId"
            :hetongYwzh="hetongYwzh"
            @submitSuccess="submitSuccess"
          />
        </el-dialog>

        <div style="width:700px;margin:0 auto;display:none;" id="printData">
          <p style="font-size:20px;width:350px;margin:0 auto">潼关县新建商品房预售资金监管协议书</p>
          <p style="width:200px;margin:0 auto">合同备案号（{{this.htbah}}）</p>
          <p>甲方(监管机构)：{{this.jgjg}}</p>
          <p>乙方(监管银行)：{{this.jgyh}}</p>
          <p>丙方(开发企业)：{{this.kfqy}}</p>
          <p style="text-indent:2em">为加强潼关县商品房预售资金监督管理，保证商品房预售资金专款专用，保障预售商品房交易当事人的合法权益，维护房地产市场秩序，根据《中华人民共和国城市房地产管理法》、《城市商品房预售管理办法》、《潼关县新建商品房预售资金监管办法》（以下简称《办法》）等规定，经甲、乙、丙三方充分协商，在平等、自愿的基础上，就丙方开发建设并拟进行预售商品房的预售资金监管事宜，特订立本协议。</p>
          <p style="text-indent:2em;font-weight:bold">一、以下项目商品房预售资金的收存、拨付和使用均遵守本协议：</p>
          <p>新建商品房项目名称：{{this.xmmc}}</p>
          <p>项目所处行政区：{{this.xzq}}</p>
          <p>座落位置：{{this.zlwz}}</p>
          <p>建设用地规划许可证号：{{this.xkzh}}</p>
          <p>用地性质：{{this.ydxz}}</p>
          <p>用地面积：{{this.ydmj}}（㎡）</p>
          <p>建设规模：{{this.jsgm}}（㎡）</p>
          <p style="text-indent:2em;font-weight:bold">二、预售资金缴存</p>
          <p style="text-indent:2em">1、丙方在乙方开立的商品房预售资金专用账户为：</p>
          <p>监管账户名称：{{this.zhmc}}</p>
          <p>预售资金账户账号：{{this.jgzh}}</p>
          <p>开户银行：{{this.yhmc}}</p>
          <p>开户行行号：{{this.yhhh}}</p>
          <p style="text-indent:2em">该监管账户的使用范围仅限本项目预售资金的收存、拨付和使用；该监管账户不可支取现金，不得办理除查询功能以外的网上银行业务，不得办理质押，不得作为保证金账户及办理其他业务，不可申请使用POS机（专用POS机除外）。</p>
          <p style="text-indent:2em">2、丙方应协助购房人将购房款全部存入本协议项下的监管账户，不得直接收取购房款。</p>
          <p style="text-indent:2em">3、购房人持丙方开具的《潼关县新建商品房买卖合同缴款通知书》，在约定的时间内到乙方柜面缴款或转账支付，乙方代丙方收取商品房预售款并向购房人出具《潼关县新建商品房预售资金缴款确认凭证》，丙方凭乙方出具的缴款确认凭证向购房人开具发票等相关票据。</p>
          <p style="text-indent:2em">4、购房人未按照商品房买卖合同约定缴存购房款的，丙方应主动催缴。</p>
          <p style="text-indent:2em">5、购房人申请商品房贷款的，丙方应确保按揭银行按照借款合同约定的时间和金额将贷款直接划转至监管账户。</p>
          <p style="text-indent:2em">6、监管账户内预售资金产生的利息，将同其他入账资金一起纳入监管范围。</p>
          <p style="text-indent:2em;font-weight:bold">三、监管资金的使用</p>
          <p style="text-indent:2em">1、重点监管资金额度为监管项目总预售款的10%，其余的为非重点监管资金。重点监管资金需在项目完成房屋初始登记达到购房人可单方办理房屋转移登记的条件下才可申请退回使用。</p>
          <p style="text-indent:2em">2、非重点监管资金必须用于购置本项目建设必需的建筑材料、设备和支付项目建设的施工进度款、税费、其他相关费用；优先偿还项目抵押贷款，并优先偿还项目抵押贷款。</p>
          <p style="text-indent:2em">3、监管账户内预售资金超过重点监管比例，在甲方核定10%的重点监管资金后,丙方在施工单位、监理单位共同认可后，丙方可以通过监管系统向甲方申请提取重点监管资金以外的非重点监管资金，甲方审核通过后，乙方对符合条件的应于受理之日起3个工作日内进行拨付。</p>
          <p style="text-indent:2em;font-weight:bold">四、预售资金对账</p>
          <p style="text-indent:2em">1、监管账户实际金额与监管网络系统显示余额不符时，乙方应积极配合甲方查找原因，纠正误差情况，调整差错期间监管账户暂停拨付。</p>
          <p style="text-indent:2em">2、资金监管系统提供的账户信息只作参考之用，监管账户余额、发生额以乙方对账单为准。</p>
          <p style="text-indent:2em;font-weight:bold">五、不明入账处理</p>
          <p style="text-indent:2em">1、购房人通过电汇、网上银行转账等方式交存购房款或者预售资金划拨过程中因拨付失败返回资金监管账户形成的不明入账，丙方应当及时予以区分并做冲正或退票处理</p>
          <p style="text-indent:2em">2、对不明入账乙方应核实资金来源后进行入账操作并录入相应交款信息；对于核实资金来源确有困难的，丙方应积极配合乙方确认资金入账信息。</p>
          <p style="text-indent:2em">3、属于资金错误划入监管账户的，丙方应尽快提交相关资料到甲方申请办理冲正。由于发放购房贷款或者银行汇款等原因造成资金错误划入监管账户的，还应当提供相关发起银行出具的证明文件。</p>
          <p style="text-indent:2em">4、属于资金因拨付失败返回监管账户的，丙方可以通过向甲方申请退票，重 新拨付该笔资金。同时，应提供乙方出具的拨付失败证明。</p>
          <p style="text-indent:2em"> 六、退款处理</p>
          <p style="text-indent:2em">1、丙方与购房人达成退房退款协议的，退款原则上使用非重点资金支付或丙方自行筹资解决。非重点监管资金不足的，丙方可以向甲方申请使用重点监管资金进行支付。</p>
          <p style="text-indent:2em">2、申请使用重点监管资金用作退款的，丙方需向甲方提交《潼关县新建商品房预售资金监管账户退房退款申请书》，申请解除退款部分的监管。甲方通过商品房买卖合同备案系统核查后，通知乙方转付。</p>
          <p style="text-indent:2em;font-weight:bold">七、监管账户管理</p>
          <p style="text-indent:2em">1、新建商品房已核发预售的，其监管账户不得变更；由于丙方机构合并、分立等原因导致丙方企业名称变更的，丙方须持相关材料向甲方和乙方分别提出变更监管账户名称申请；由于乙方机构调整、撤销、系统升级等原因导致监管账号变更的，乙方应及时书面通知甲方，并提供相应的证明材料，丙方应及时向甲方申请变更相关信息。</p>
          <p style="text-indent:2em">2、乙方应根据监管系统数据接口标准的要求，及时更新监管账户的金额及收支明细，定时与甲方对账；丙方可通过监管系统查询监管账户金额及收支明细；账目有出入的，乙方应尽快查找问题、及时纠正并通知甲方。</p>
          <p style="text-indent:2em">3、丙方违反《潼关县新建商品房预售资金监管办法》和本协议规定的，甲方可暂停其监管账户的资金拨付，乙方应积极协助配合甲方工作。</p>
          <p style="text-indent:2em">4、丙方完成项目的房屋所有权初始登记并达到购房人可单方办理房屋转移登记的条件后，可持相关证明文件向甲方申请撤销对监管账户的监管。</p>
          <p style="text-indent:2em;font-weight:bold">八、金融服务约定</p>
          <p style="text-indent:2em">1、无论丙方与乙方是否存在借贷关系，无论该贷款偿还期限是否届满，未经甲方同意，乙方均不得将依本协议代收的预售资金以任何方式冲抵丙方贷款及与该贷款有关的利息、费用。</p>
          <p style="text-indent:2em">2、乙方应在遵守《办法》及本协议的基础上，严格履行账户管理、资金收存、资金划拨等监管义务，向丙方与购房人提供优质、高效的金融服务。</p>
          <p style="text-indent:2em">3、乙方不得从监管账户中扣划账户管理费、划款手续费等费用，丙方应通过现金、汇划等其他方式支付。乙方应当在监管账户利息、账户管理费、划款手续费等方面为丙方提供相应的优惠措施。</p>
          <p style="text-indent:2em">4、监管账户如被有权机关查封、冻结、扣划或存在其他情况，致使乙方无法进行账户管理的，乙方不承担任何法律责任。</p>
          <p style="text-indent:2em">5、因丙方不按本协议约定的程序办理而造成的一切后果，乙方不承担任何法律责任。</p>
          <p style="text-indent:2em;font-weight:bold"> 九、资料真实性及违约责任</p>
          <p style="text-indent:2em">1、丙方向甲方承诺所提供的资金监管相关资料真实、合法、有效。甲方仅承担丙方提供资料的书面形式审核责任，不对具体内容的真实性承担审核责任。由于丙方提供资料产生的问题造成拨付资金错误或延误的，丙方应承担相关法律和经济责任。</p>
          <p style="text-indent:2em">2、甲乙丙三方任何一方未按照《办法》及本协议的规定履行义务均构成违约，守约方有权要求对方采取补救措施，并继续完全、充分履行本协议；任何一方在合理的期限内未采取补救措施，仍不履行或未完全履行的，应承担违约责任。</p>
          <p style="text-indent:2em;font-weight:bold">十、争议解决方式</p>
          <p style="text-indent:2em">本协议在履行过程中发生争议，由当事人三方协商或项目所在地房地产主管部门调解解决，协商或调解不成，或当事人不愿协调或调解的，向当地仲裁委员会申请仲裁。</p>
          <p style="text-indent:2em;font-weight:bold"> 十一、其他</p>
          <p style="text-indent:2em">1、本协议自三方签字或盖章之日起生效，至甲方同意撤销监管时为止。</p>
          <p style="text-indent:2em">2、本协议未尽事宜，协议三方可签订补充协议。补充协议与本协议具有同等法律效力。</p>
          <p style="text-indent:2em">3、本协议执行过程中，协议三方的预售商品房资金监管行为应接受和服从当地房地产行政主管部门的指导、监督、管理。</p>
          <p style="text-indent:2em">4、本协议一式叁份，协议方各执壹份，壹份报送潼关县房地产交易所备案，具有同等法律效力。</p>
          <div>
          <p style="text-indent:2em">甲　　　方（签章）：潼关县房地产管理所</p>
          <p style="text-indent:2em">经 办 人（签章）：</p>
          <p style="text-indent:2em;"><span style="display:inline">联　系　电　话：</span><span style="margin-left:250px">年    月    日</span></p>
         
          <p style="text-indent:2em">乙　　　方（签章）：</p>
          <p style="text-indent:2em">经 办 人（签章）：</p>
           <p style="text-indent:2em;"><span style="display:inline">联　系　电　话：</span><span style="margin-left:250px">年    月    日</span></p>
          <p style="text-indent:2em">丙　　　方（签章）：</p>
          <p style="text-indent:2em">经 办 人（签章）：</p>
           <p style="text-indent:2em;"><span style="display:inline">联　系　电　话：</span><span style="margin-left:250px">年    月    日</span></p>
          </div>
        </div>
      </TitleTable>
      </ContainerTwoType>
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import SqsfxyDialog from "@/views/menu_4/SqsfxyDialog";
  import {sqsfxyApi} from "@/api/menu_4/sqsfxy";
  import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
  import {mixins} from "@/utils/mixins";

  import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";
  import Why from "@/components/common/why/Why";

  export default {
    name: "sqsfxy",
    mixins: [mixins.dialogMixin,mixins.myPagerMixin, mixins.tableMixin],
    components: {SqsfxyDialog, TitleTable, ContainerTwoType,ButtonsArea,Why},
    data() {
      return{
        navInfo:{
          loading: false,
          list: [
            //  { id:1,name:"别问"},
            //  { id:2,name:"问就是不知道"},
          ]
        },
        tableData: [
        ],
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 1,
        currentPage:1,
        pageSize:10,
        total:0,
        pages:1,
        selectedIndex: 0,
        zjjgzhId:"",
        zjjgzhZhmc:"",
        zjjgzhGsmc:"",
        zjjgzhYhmc:"",
        zjjgzhXmmc:"",
        kfsId:"",
        hetongYwzh:"",
        zjjgzhYhzh:"",
        xmxxXmbh:"",
        htbah:"",
        jgjg:"",
        jgyh:"",
        kfqy:"",
        xmmc:"",
        xzq:"",
        zlwz:"",
        xkzh:"",
        ydxz:"",
        ydmj:0,
        jsgm:"",
        zhmc:"",
        jgzh:"",
        yhmc:"",
        yhhh:"",

      }
    },
    
    created() {
      this.fetchNavInfo();
      //this.fetchData();
    },
    methods:{
      fetchNavInfo() {
      this.xmxxXmbh=this.$store.state.projectData.xmxxXmbh;
        sqsfxyApi.getYshAccount(this.xmxxXmbh,).then(ret => {
           this.navInfo.list = ret.data.map(item=>({
            ...item, id: item.zjjgzhId, name: item.zjjgzhYhzh
          }));
          this.navInfo.list.unshift({id:-1, name: "请选择监管账号"});
        })
      },
     
     fetchDataByAccountId(id){
       
       sqsfxyApi.getContractByAccount(this.currentPage, this.pageSize,this.kfsId,id).then(ret => {
         console.log(ret);
         console.log("where is my ...");
         
          this.pages=ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
          this.tableData.forEach(function(row,index){
            if(row.hetongShzt===0){
              row.hetongShztN="新建"
            }else if(row.hetongShzt===1){
              row.hetongShztN="审核中"
            }else if(row.hetongShzt===2){
              row.hetongShztN="审核通过"
            }else if(row.hetongShzt===3){
              row.hetongShztN="驳回"
            }
          })
         
        })
     },
      liClick(index) {
        this.selectedIndex = index;
        console.log("index:"+index);
        console.log(this.$store.state.projectData.xmxxXmbh);
        
         this.selectedIndex = this.navInfo.list[index];
         this.zjjgzhId=this.navInfo.list[index].id;
         this.zjjgzhZhmc=this.navInfo.list[index].zjjgzhZhmc;
         this.zjjgzhGsmc=this.navInfo.list[index].zjjgzhGsmc;
         this.zjjgzhYhmc=this.navInfo.list[index].zjjgzhYhmc;
         this.zjjgzhXmmc=this.navInfo.list[index].zjjgzhXmmc;
         this.zjjgzhYhzh=this.navInfo.list[index].zjjgzhYhzh;
         this.kfsId=this.navInfo.list[index].kfsId;
         console.log(this.zjjgzhId);
         console.log(this.zjjgzhZhmc);
         console.log(this.zjjgzhGsmc);
         console.log(this.zjjgzhYhmc);
         this.fetchDataByAccountId(this.zjjgzhYhzh);        
      },
      
      addClick() {
        this.dialogVisible = true;
        this.dialogTitle = "添加合同";
        this.dialogType = 1;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1,this.zjjgzhId);
        })
      },
      handleUpdate(index,row){
        this.dialogVisible = true;
        this.dialogTitle = "修改合同";
        this.dialogType = 2;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2,row.hetongId);
        })
      },
      handleDetail(index, row){
        this.dialogVisible = true;
        this.dialogTitle = "三方协议申请信息";
        this.dialogType = 3;
        this.hetongYwzh=row.hetongYwzh;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(3, row.hetongId,row.logId,row.hetongYwzh);
          this.$refs.dialog.reset();
        })
      },
      handleInform(index, row){
          if(window.confirm("确定要上报该三方协议吗?")){
            sqsfxyApi.informContract(row.hetongId).then(ret => {
              if (ret.code === 200) {
                this.$message.success("上报成功");
               this.fetchDataByAccountId(this.zjjgzhYhzh);
              } else {
                
                this.$message.error(ret.message)
              }
            })
          }
      },
      handleDelete(index, row){
          if(window.confirm("确定要删除该三方协议吗?")){
            sqsfxyApi.deleteContract(row.hetongId).then(ret => {
              if (ret.code === 200) {
                this.$message.success("删除成功");
                this.fetchDataByAccountId(this.zjjgzhYhzh);
              } else {
                
                this.$message.error(ret.message)
              }
            })
          }
      },
      
      handleManageFile(index, row) {
        this.dialogVisible = true;
        this.dialogTitle = "管理收件";
         this.hetongYwzh=row.hetongYwzh;
        this.dialogType = 9;
        this.$nextTick(() => {
          this.$refs.dialog.setMode(9, row.hetongId,0,row.hetongYwzh);
        })
      },
      handlePrint(index, row){         
       let obj=document.getElementById('printData');
        let newWindow=window.open("打印窗口","_blank");
        let docStr = obj.innerHTML;
        newWindow.document.write(docStr);
        newWindow.document.close();
        newWindow.print();
      },
      handleGetFile(index, row){
         this.dialogVisible = true;
        this.dialogTitle = "确认收件";
        this.hetongYwzh=row.hetongYwzh;
        this.dialogType = 4;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(4, row.hetongId,0,row.hetongYwzh);
        })
      },
      handleDelFile(){
        if(window.confirm("确定要清除收件吗?")){
            sqsfxyApi.deleteSj(row.hetongYwzh).then(ret => {
              if (ret.code === 200) {
                this.$message.success("删除成功");
                this.fetchDataByAccountId(this.zjjgzhYhzh);
              } else {
                
                this.$message.error(ret.message)
              }
            })
          }
      },
      handlePrintFile(){},
      submitSuccess() {
         this.$nextTick(()=>{
                this.$refs.dialog.reset();
            });
            this.fetchDataByAccountId(this.zjjgzhYhzh);
        this.dialogVisible = false;
      },
       cellMouseEnter(row) {
        this.currentRow = row;
        this.htbah=row.hetongHtbah;
        this.jgjg=row.hetongJgjgmc;
        this.jgyh=row.hetongYhmc;
        this.kfqy=row.hetongKfsmc;
        this.xmmc=row.hetongXmmc;        
        this.xzq=row.hetongXzdq;
        this.zlwz=row.hetongXmdz;
        this.xkzh=row.hetongSjgcxkzh;
        this.ydxz=row.hetongTdxz;
        this.ydmj=row.hetongTdsymj;
        this.jsgm=row.hetongGhzjzmj;
        this.zhmc=row.hetongZhmc;
        this.jgzh=row.hetongJgzh;
        this.yhmc=row.hetongYhmc;
        this.yhhh=row.a;
      },
      currentChange(num) {
         this.currentPage = num;         
           this.fetchDataByAccountId(this.zjjgzhYhzh)
      },
       handleSizeChange(val){
        console.log(val);
        this.pageSize=val;
        this.fetchDataByAccountId(this.zjjgzhYhzh)
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .tjrwry{
    padding: $pm;
  }

</style>
