<template>
  <div class="login-info">
    <div class="SignFlowHomepage">
      <div class="SignFlowHomepage-content">
        <img
          class="SignFlowHomepage-logo"
          src="@/assets/images/login_logo.png"
          alt="知乎 LOGO"
        />
        <div class="css-zvnmar">
          <div class="SignContainer-content">
            <div class="SignContainer-inner">
              <div class="SignFlow Login-content">
                <div class="SignFlow-tabs">
                  <div
                    v-for="item of tabList"
                    :key="item.key"
                    :class="[
                      'SignFlow-tab',
                      item.key == setKey ? 'SignFlow-tab--active' : '',
                    ]"
                    @click="switchTabs(item.key)"
                  >
                    {{ item.name }}
                  </div>
                </div>
                <div class="SignFlow-account">
                  <input
                    ref="username"
                    v-show="!usernameTip"
                    type="text"
                    class="Input"
                    placeholder="手机号或邮箱"
                    v-model="user.username"
                    @blur="usernameBlur"
                  />
                  <input class="Input showTips" v-show="usernameTip" @focus="usernameFocus" placeholder="请输入手机号或邮箱" />
                </div>
                <div class="SignFlow-password">
                  <input
                    ref="password"
                    v-show="!passwordTip"
                    :type="showPassword"
                    class="Input"
                    placeholder="密码"
                    v-model="user.password"
                    @blur="passwordBlur"
                  />
                  <input class="Input showTips" v-show="passwordTip" @focus="passwordFocus" placeholder="请输入密码" />
                  <span v-show="showPassword === 'password'" class="icon iconfont icon-eye-fill" @click="handlePassword('text')"></span>
                  <span v-show="showPassword === 'text'" class="icon iconfont icon-eyeclose-fill" @click="handlePassword('password')"></span>
                </div>
                <div class="Login-options">
                  <div class="Login-switchType" @click="handleRegister">注册账号</div>
                  <div class="Login-cannotLogin">忘记密码?</div>
                </div>
                <button
                  class="Button SignFlow-submitButton"
                  @click="handleLogin"
                  @keyup.enter="handleLogin"
                >
                  登录
                </button>
                <div class="SignContainer-tip">
                  手机验证后自动登录，登录即代表同意
                  <a href="https://www.zhihu.com/term/zhihu-terms" >《知乎协议》</a>
                  <a href="https://www.zhihu.com/term/privacy">《隐私保护指引》</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, nextTick } from "vue";
import { useRouter } from "vue-router";
import { LOGIN } from "@/utils/api.js";
import Footer from "@/components/footer/footer.vue";
defineProps({
  Footer,
});
// 注册路由
const router = useRouter();
const handleRegister = () => {
  router.push({
    path: '/register'
  })
}

// tabs
const setKey = ref("free");
const tabList = reactive([
  { name: "免密码登录", key: "free" },
  { name: "密码登录", key: "noFree" },
]);
const switchTabs = (key) => {
  setKey.value = key;
}

// 登录
const user = reactive({ username: "", password: "" });
const handleLogin = async () => {
  const data = await LOGIN('POST', '/login', user)
  if (data) {
    localStorage.setItem("userInfo", data.data);
    router.push({
      path: "/home",
    })
  }
};

// 账号密码没输入提示
const usernameTip = ref(false)
const passwordTip = ref(false)
const username = ref(null)
const password = ref(null)
const usernameBlur = () => {
  if (!user.username) {
    usernameTip.value = true
  }
}
const usernameFocus = () => {
  usernameTip.value = false
  nextTick(() => {
    username.value.focus()
  })
  
}
const passwordBlur = () => {
  if (!user.password) {
    passwordTip.value = true
  }
}
const passwordFocus = () => {
  passwordTip.value = false
  nextTick(() => {
    password.value.focus()
  })
}

// 密码显示隐藏
const showPassword = ref('password')
const handlePassword = (type) => {
  showPassword.value = type
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>