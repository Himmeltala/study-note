<!--
 * @Author: Himmeltala zhengrenfu@outlook.com
 * @Date: 2026-02-04 18:54:51
 * @LastEditors: Himmeltala zhengrenfu@outlook.com
 * @LastEditTime: 2026-02-04 23:02:46
 * @Description: 默认布局
-->
<template>
  <div class="layout-container">
    <el-aside :width="isNavCollapsed ? '64px' : '240px'" class="left-container">
      <div class="logo-area">
        <el-icon class="logo-icon"><MapLocation /></el-icon>
        <span v-if="!isNavCollapsed">学习笔记</span>
      </div>
      <Menu class="nav-menu" v-model="isNavCollapsed" />
    </el-aside>
    <div class="right-container">
      <el-header class="header">
        <Breadcrumb />
        <div class="header-actions">
          <el-button
            type="primary"
            :plain="isNotesCollapsed"
            size="small"
            @click="toggleNotes"
          >
            <el-icon>
              <DocumentChecked v-if="!isNotesCollapsed" />
              <Document v-else />
            </el-icon>
            {{ isNotesCollapsed ? "显示笔记" : "收起笔记" }}
          </el-button>
        </div>
      </el-header>
      <div class="main-body">
        <el-main class="content-area">
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </el-main>
        <transition name="slide-fade">
          <Note v-model:collapse="isNotesCollapsed" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  MapLocation,
  Document,
  DocumentChecked,
} from "@element-plus/icons-vue";
import Menu from "./Menu.vue";
import Breadcrumb from "./Breadcrumb.vue";
import Note from "./Note.vue";

const isNavCollapsed = ref(false);
const isNotesCollapsed = ref(false);

const toggleNotes = () => {
  isNotesCollapsed.value = !isNotesCollapsed.value;
};
</script>

<style scoped>
.layout-container {
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.left-container {
  background-color: #304156;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.logo-area {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #263445;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.logo-icon {
  font-size: 24px;
  margin-right: 8px;
}

.nav-menu {
  flex: 1;
  border-right: none;
  overflow-y: auto;
}

.collapse-btn {
  height: 48px;
  background: #263445;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #bfcbd9;
}

.right-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f5f7fa;
}

.header {
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.breadcrumb {
  display: flex;
  align-items: center;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.main-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.content-area {
  flex: 1;
  padding: 0;
  overflow: hidden;
  position: relative;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
