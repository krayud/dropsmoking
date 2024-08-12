<script setup lang="ts">
import { RouterView } from 'vue-router'
import logoImg from '@/assets/imgs/logo.png';

</script>

<template>
  <div class="main-wrapper">
    <header><img :src="logoImg" alt="DropSmoking.ru logo"/></header>
    <main><RouterView /></main>
    <footer>2023</footer>
  </div>
</template>

<style lang="scss" scoped>

.main-wrapper {
  margin: 0 auto;
  max-width: 426px;
  min-width: 290px;
  display: flex;
  flex-direction: column;

  header {
    top: 0;
    display: flex;
    justify-content: center;
    background-color: var(--yellow);
  }
  main {
    padding: 0 12px;
    box-sizing: border-box;
  }

  footer {
    padding: 12px;
    text-align: center;
    font-size: 12px;
  }
}
</style>
