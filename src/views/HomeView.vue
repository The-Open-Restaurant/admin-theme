<template>
  <LayoutWrapper>
    <LayoutTopBar />
    <LayoutAside> aside... </LayoutAside>
    <LayoutMain>
      <HomeDashboard />
    </LayoutMain>
  </LayoutWrapper>
</template>

<script setup lang="ts">
import LayoutWrapper from '@/components/layout/LayoutWrapper.vue'
import HomeDashboard from '@/components/HomeDashboard.vue'
import LayoutAside from '../components/layout/LayoutAside.vue'
import LayoutMain from '../components/layout/LayoutMain.vue'
import LayoutTopBar from '../components/layout/LayoutTopBar.vue'
</script>

<style lang="scss">
.menu-spacer {
  height: 48px;
}
</style>
