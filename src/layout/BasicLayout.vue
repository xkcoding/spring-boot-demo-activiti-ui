<template>
  <el-container>
    <el-header
      style="border: 1px solid #eee;text-align: center;font-weight: bold;font-size: 26px"
    >
      spring-boot-demo-activiti
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="$route.path">
          <el-menu-item
            index="/activiti"
            @click="$router.push({ path: '/activiti' })"
          >
            <i class="el-icon-coin"></i>
            <span slot="title">模型管理</span>
          </el-menu-item>
          <el-menu-item
            index="/process"
            @click="$router.push({ path: '/process' })"
          >
            <i class="el-icon-folder"></i>
            <span slot="title">流程管理</span>
          </el-menu-item>
          <el-menu-item index="/task" @click="$router.push({ path: '/task' })">
            <i class="el-icon-document"></i>
            <span slot="title">代办任务</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
