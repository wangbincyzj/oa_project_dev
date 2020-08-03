<template>
  <!-- 打印预交款明细 -->
  <div class="Dymx">
    <table width="100%" border="1" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td height="25" colspan="6" align="center">
            <span class="STYLE1">【康师傅】截止到2020/6/11期间监管资金汇总</span>
          </td>
        </tr>
        <tr>
          <td align="center">
            <strong>序号</strong>
          </td>
          <td align="center">
            <strong>账户名称</strong>
          </td>
          <td align="center">
            <strong>监管账号</strong>
          </td>
          <td align="center">
            <strong>缴存金额</strong>
          </td>
          <td align="center">
            <strong>使用金额</strong>
          </td>
          <td height="25" align="center">
            <strong>剩余金额</strong>
          </td>
        </tr>
        <tr>
          <td height="30" align="left">&nbsp;1</td>
          <td align="left">&nbsp;</td>
          <td align="center"></td>

          <td align="center">0</td>

          <td align="center">0</td>
          <td height="25" align="center">0</td>
        </tr>

        <tr>
          <td height="30" align="left">&nbsp;1</td>
          <td align="left">&nbsp;ceshizhanghu</td>
          <td align="center">15485</td>

          <td align="center">3020000</td>

          <td align="center">100000</td>
          <td height="25" align="center">2920000</td>
        </tr>

        <tr>
          <td height="30" align="center">
            <strong>汇总信息</strong>
          </td>
          <td colspan="2" align="left">&nbsp;2</td>
          <td align="center">&nbsp;3020000</td>
          <td align="center">&nbsp;100000</td>
          <td height="25" align="center">&nbsp;2920000</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Dymx {
  table,
  td,
  th {
    border: 3px solid black;
    // border-collapse:separate ;
    // border: double：
    // border-collapse: inherit;
    // border-spacing: 1px;
  }
  table {
    width: 100%;
    tr {
      td {
        line-height: 30px;
        text-align: center;
      }
    }
  }
  th {
    height: 50px;
  }
}
</style>>
 
