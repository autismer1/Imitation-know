<template>
  <div class="GlobalSideBar GlobalSideBar--old">
    <div class="SidebarShortcut">
      <div class="css-19idom">
        <div class="Card CreatorEntrance GlobalSideBar-creator CreatorEntrance-link CreatorEntrance-Link--smallIcon">
          <div class="CreatorEntrance-hint ProfileSideCreator-creatorEntranceHint CreatorEntrancePage-hint--smallIcon">
            <span class="icon iconfont icon-user-edit"></span>
            <div class="CreatorEntrance-text">
              <div>创作中心 <span class="css-1y4nzu1">Lv3</span></div>
            </div>
            <div class="css-186nt8z">草稿箱<a>（0）</a></div>
          </div>
          <div class="css-16vu25q">
            <div class="GlobalWriteV2 GlobalWriteV2--old">
              <div class="GlobalWriteV2-navTop">
                <div
                  class="GlobalWriteV2-topItem"
                  v-for="item of iconList"
                  :key="item.name"
                >
                  <div :class="['iconBg', item.icon]">
                    <span :class="['icon iconfont', `icon-${item.icon}`]"></span>
                  </div>
                  <div class="GlobalWriteV2-topTitle">{{ item.name }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="css-9cqq7d">
            <div class="Carousel">
              <el-carousel direction="vertical" :autoplay="true" indicator-position="none">
                <el-carousel-item v-for="item in 4" :key="item">
                  <div class="ProfileSideCreator-analytics css-17h4m98">
                    <div class="ProfileSideCreator-readCountItem">
                      <div class="ProfileSideCreator-readCountTitle">今日阅读 (播放) 数</div>
                      <div class="ProfileSideCreator-readCountNumber">5</div>
                      <div class="css-u2c28s">
                        <div class="css-1086365">昨日数据</div>
                        <div class="css-1gqd0v0">7</div>
                      </div>
                    </div>
                    <div class="ProfileSideCreator-readCountItem">
                      <div class="ProfileSideCreator-readCountTitle">今日赞同数</div>
                      <div class="ProfileSideCreator-readCountNumber">1</div>
                      <div class="css-u2c28s">
                        <div class="css-1086365">昨日数据</div>
                        <div class="css-1gqd0v0">0</div>
                      </div>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
              
            </div>
          </div>
          <div class="css-1bq9s6k">
            <span>进入创作中心</span>
          </div>
        </div>
      </div>
      <div class="Card GlobalSideBar-category">
        <div class="css-2a6lbs">
          <img class="css-1phd9a0" src="@/assets/images/sideBar-banner.jpg" alt="" />
        </div>
        <div class="GlobalSideBar-categoryList">
          <div class="GlobalSideBar-categoryItem" v-for="item of categoryList" :key="item.name">
            <div :class="[item.icon, 'iconButton']">
              <span :class="['icon iconfont', `icon-${item.icon}`]"></span>
            </div>
            <div class="GlobalSideBar-categoryLabel">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="Card">
        <div class="GlobalSideBar-navList">
          <div class="GlobalSideBar-navLink" v-for="item of navList" :key="item.name">
            <span :class="['icon iconfont', `icon-${item.icon}`]"></span>
            <span class="GlobalSideBar-navText">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const iconList = reactive([
  { name: "回答问题", icon: "text" },
  { name: "发视频", icon: "shipin" },
  { name: "写文章", icon: "bianji" },
  { name: "写想法", icon: "-Idea" },
]);

const categoryList = reactive([
  { name: 'Live', icon: 'lightning' },
  { name: '书店', icon: 'book' },
  { name: '圆桌', icon: 'hua' },
  { name: '专栏', icon: 'bianji1' },
  { name: '付费咨询', icon: 'zixun1' },
  { name: '百科', icon: 'i8homem-' },
])

const navList = reactive([
  { name: '我的收藏', icon: 'shoucang' },
  { name: '我关注的问题', icon: 'wenti' },
  { name: '我的邀请', icon: 'yaoqing' },
  { name: '我的余额', icon: 'zhanghuyue' },
  { name: '站务中心', icon: 'xiaoxi' },
  { name: '帮助中心', icon: 'kefu' },
  { name: '版权服务中心', icon: 'banquan-kuai' },
])
</script>

<style lang="less" scoped>
@import "./homeSideBar.less";
</style>