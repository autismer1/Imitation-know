<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import { watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'App',
  components: {
    Header
  },
  setup () {
    const route = useRoute()
    const setHtmlTitle = () => {
      const key = route.path === '/login' ? '知乎' : `知乎-${route.matched[route.matched.length - 1].name}`
      document.title = key
    }

    watch(useRoute(), () => setHtmlTitle())
  }
}
</script>
