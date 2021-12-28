<template>
  <div>
    <main class="App-main">
      <div class="Topstory Topstory--old">
        <div class="Topstory-container wrap_v1">
          <el-container>
            <!-- 左侧内容 -->
            <el-main>
              <div class="Topstory-mainColumn">
                <div class="Topstory-mainColumnCard">
                  <div class="Card Topstory-noMarginCard Topstory-tabCard">
                    <nav class="TopstoryTabs Topstory-tabs">
                      <router-link
                        v-for="(item, index) of navTabs"
                        :key="item.name"
                        :to="item.link"
                        :class="['TopstoryTabs-link', 'Topstory-tabsLink', item.select === selectIndex ? 'is-active' : '']"
                        @click="handleSelect(index)"
                        >{{ item.name }}
                      </router-link>
                    </nav>
                    <div class="Topstory-content">
                      <router-view />
                    </div>
                  </div>
                </div>
              </div>
            </el-main>

            <!-- 右侧内容 -->
            <el-aside>
              <home-side-bar />
            </el-aside>
          </el-container>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import HomeSideBar from '@/components/homeSideBar/homeSideBar.vue';
import { USERINFO } from "@/utils/api.js";

import { onBeforeMount, reactive, ref } from "vue";
defineProps({
  HomeSideBar
});

// 获取用户信息
const getUserInfo = async () => {
  // const userInfo = reactive(await USERINFO('GET', '/user'))
  // console.log(userInfo)
};

// 主题内容tabs
const navTabs = reactive([
  { name: "关注", link: "/follow", select: 0 },
  { name: "推荐", link: "/home", select: 1 },
  { name: "热榜", link: "/hot-rank", select: 2 },
  { name: "视频", link: "/video", select: 3 },
]);
const selectIndex = ref(1)
const handleSelect = (index) => {
  selectIndex.value = index
}

onBeforeMount(() => {
  getUserInfo();
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>