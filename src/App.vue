<template>
  <div id="app">
    <div>
    <router-link to="/User">用户管理</router-link></div>
    <div><router-link to="/UserList">用户列表</router-link> </div>
      <div><router-link to="/Authority">权限管理</router-link></div>
      <div><router-link to="/AuthorityList">权限列表</router-link></div>
      <div><router-link to="/RoleList">角色列表</router-link></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // data () {
  //   return{
  //
  //   }
  // }
}
</script>

<style>
div table thead tr{
  float: left;
  margin-top: 30px;
}
#app {
  float: left;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
