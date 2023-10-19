<script lang="ts" setup></script>

<template>
  <div class="">
    <el-button>首页</el-button>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>

    <div style="color: red">
      <IconEpEdit />
      <IconEpCheck />
    </div>
  </div>
</template>
