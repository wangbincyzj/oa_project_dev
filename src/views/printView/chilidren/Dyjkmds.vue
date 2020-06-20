<template>
  <div class="demo">
    <table width="100%" border="1" cellpadding="1" cellspacing="1">
      <tbody>
        <tr>
          <td height="30" colspan="7" align="center">
            <strong>
              <font style="font-size:14px">预备缴款名单表</font>
            </strong>
          </td>
        </tr>
        <tr>
          <td height="30" align="center">买受人</td>
          <td align="center">项目名称</td>
          <td align="center">幢号</td>
          <td align="center">房号</td>
          <td align="center">缴款金额</td>
          <td align="center">监管银行</td>
          <td align="center">监管账号</td>
        </tr>

        <tr>
          <td height="26" align="center" class="td0">宗数：</td>
          <td colspan="3" align="left" class="td0">&nbsp;0</td>
          <td align="center" class="td0">总额：</td>
          <td colspan="2" align="center" class="td0">&nbsp;0</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
table,
td,
th {
  border: 1px solid black;
  // border-collapse:separate ;
  // border: double：
  border-collapse: inherit;
    border-spacing: 1px;

}
table {
  width: 100%;
  tr{
    td{
      line-height: 30px;
      text-align: center;
    }
  }
}
th {
  height: 50px;
  
}
</style>>

