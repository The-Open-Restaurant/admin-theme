<template>
  <aside class="aside-area">
    <slot></slot>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
aside {
  &.aside-area {
    position: fixed;
    top: 48px;
    left: 0;
    bottom: 0;
    width: 280px;
    color: $white;
    background-color: $gray-700;
  }
}
</style>
