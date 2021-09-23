<template>
<div>
  <table>
    <thead>
    <tr>
      <th>姓名</th>
      <th>邮箱</th>
      <th>电话</th>
      <th>用户状态</th>
      <th>操作</th>
    </tr>
    </thead>
    <tr>
      <td>{{item.name}}</td>
      <td>{{item.email}}</td>
      <td>{{item.phone}}</td>
      <td>{{item.user}}</td>
      <td><a herf="">{{item.data}}删除</a>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: "UserList",

}
</script>

<style scoped>

</style>
