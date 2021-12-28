<template>
  <div>
    <footer class="SignFlowHomepage-footer">
      <div class="ZhihuLinks">
        <a target="_blank" :href="item.href" v-for="item of ZhihuLinks" :key="item.name">{{ item.name }}</a>
      </div>
      <div class="ZhihuRights">
        <span>© 2021 知乎</span>
        <a target="_blank" :href="item.href" v-for="item of ZhihuRights" :key="item.name">
          <img v-if="item.imageUrl" :src="item.imageUrl" />
          {{ item.name }}
        </a>
        <span>互联网药品信息服务资格证书（京）- 非经营性 - 2017 - 0067</span>
      </div>
      <div class="ZhihuReports">
        <a target="_blank" :href="item.href" v-for="item of ZhihuReports" :key="item.name">{{ item.name }}</a>
        <span>违法和不良信息举报：010-82716601</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const ZhihuLinks = reactive([
  { name: '知乎专栏', href: 'https://zhuanlan.zhihu.com' },
  { name: '圆桌', href: 'javascript;' },
  { name: '发现', href: 'javascript;' },
  { name: '移动应用', href: 'javascript:;' },
  { name: '联系我们', href: 'javascript;' },
  { name: '来知乎工作', href: 'javascript;' },
  { name: '注册机构号', href: 'javascript;' },
  { name: 'Investor Relations', href: 'javascript;' }
])

const ZhihuRights = reactive([
  { name: '京 ICP 证 110745 号', href: 'https://beian.miit.gov.cn/', imageUrl: '' },
  { name: '京公网安备 11010802020088 号', href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088', imageUrl: 'https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png' },
  { name: '出版物经营许可证', href: 'https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg', imageUrl: '' }
])

const ZhihuReports = reactive([
  { name: '侵权举报', href: 'https://zhuanlan.zhihu.com/p/28852607' },
  { name: '网上有害信息举报专区', href: 'http://www.12377.cn' },
  { name: '儿童色情信息举报专区', href: '/term/child-jubao' }
])
</script>

<style lang="less" scoped>
@import './footer.less';
</style>