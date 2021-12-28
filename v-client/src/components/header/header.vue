<template>
  <div>
    <header class="Sticky AppHeader css-1x8hcdw">
      <div class="AppHeader-inner css-qqgmyv wrap_v2">
        <router-link to="/home">
          <img class="logo" src="@/assets/images/logo.png" alt="知乎" />
        </router-link>
        <ul class="Tabs AppHeader-Tabs css-g0ay3v">
          <li
            class="Tabs-item AppHeader-Tab"
            v-for="item of tabs"
            :key="item.key"
            @click="handleSelect(item)"
          >
            <router-link :to="item.link" :class="item.key == select ? 'TabsLink' : ''">{{ item.key }}</router-link>
          </li>
        </ul>
        <div class="css-1acwmmj">
          <div class="SearchBar AppHeader-SearchBar css-10fy1q8">
            <el-input v-model="searchVal" placeholder="考研成功你获得了什么">
              <template #suffix>
                <el-icon class="el-input__icon"><Search /></el-icon>
              </template>
            </el-input>
            <el-button type="primary">提问</el-button>
          </div>
        </div>
        <div class="AppHeader-userInfo">
          <div class="Popover">
            <span class="icon iconfont icon-xiaoxitongzhi"></span>
          </div>
          <div class="Popover">
            <span class="icon iconfont icon-24gf-bubbles4"></span>
          </div>
          <div class="AppHeader-profile">
            <div class="Popover">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <img src="https://pic4.zhimg.com/v2-9ad9b9b50dda41c5d2a5e94d3f2ec3e9_is.jpg" alt="点击打开超人不会飞的主页" />
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item :icon="UserFilled">
                      <router-link to="/myHomePage">我的主页</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <router-link to="/creation">
                        <span style="font-size: 14px" class="icon iconfont icon-user-edit"></span> 创作中心
                      </router-link>
                    </el-dropdown-item>
                    <el-dropdown-item :icon="Setting">
                      <router-link to="/setting">设置</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item :icon="SwitchButton">
                      <router-link to="/login">退出</router-link>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router';
import { Search, UserFilled, Setting, SwitchButton } from '@element-plus/icons';

const router = useRouter()

// 导航栏选项
const tabs = reactive([
  { key: "首页", link: '/home' },
  { key: "会员", link: '/vip' },
  { key: "发现", link: '/discover' },
  { key: "等你来答", link: '/answer' },
]);
const select = ref('首页')
const handleSelect = (item) => {
  select.value = item.key
};

// 导航栏搜索
const searchVal = ref('')
</script>

<style lang="less" scoped>
@import "./header.less";
</style>