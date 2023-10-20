<script lang="ts" setup>
import { traditionalDate } from '@/utils'

console.log(traditionalDate.solar2lunar(2023, 10, 20))
</script>

<template>
  <div class="">
    <el-button>首页</el-button>
    <h1>h1</h1>
    <h2>h2</h2>
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
