<template>
  <div class="main-area p-4">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-area {
  margin-top: 48px;
  margin-left: 280px;
  background-color: $gray-200;
}
</style>
