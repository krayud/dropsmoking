<template>
  <div class="head-content">
    <template v-if="timerStore.isTimerStarted">
      <h1>НЕ КУРЮ!</h1>
      <div class="timer">{{ formattedTimer }}</div>

      <div class="saved-money">
        Сэкономлено 💸<br/> <p>{{ timerStore.timer.savedMoney }}₽</p>
      </div>

      <a class="payment-btn" href="https://yoomoney.ru/to/41001639946691" title="Пожертвовать" targer="_blank" target="_blank">Пожертвовать</a>
    </template>

    <template v-else>
      <p class="intro-description">Это минималистичное приложение разработано специально для тех, кто желает бросить эту вредную привычку и начать жить здоровой жизнью.<br/><br/>
      Ежедневный мониторинг своих достижений поможет собраться в тяжелые моменты, не закурить снова и двигаться дальше.<br/><br/>
      На протяжении всего времени, вы сможете видеть, сколько уже сэкономлено средств и(при желании) сможете сделать пожертвование на любую сумму.</p>
      <button class="start-btn" @click="startFromCurrentDate">Начать!</button>
    </template>
  </div>
  <div class="awards-list">
    <Award v-for="(item, index) in awardsStore.awardsList" :award-data="item" :key="index" style="margin-top: 16px"/>
  </div>
</template>

<script setup lang="ts">
import Award from '@/components/Award.vue';
import { useCounterStore } from '@/stores/counter'
import { useAwardsStore } from '@/stores/awards'
import {computed} from "vue";
import dayjs from 'dayjs'

const timerStore = useCounterStore();
const awardsStore = useAwardsStore();


const startFromCurrentDate = () => {
  timerStore.startFromtDate(dayjs().format());
};

const formattedTimer = computed(() => {
  return `${timerStore.timer.days}д ${timerStore.timer.hours}ч ${timerStore.timer.min}м ${timerStore.timer.sec}с`;
});
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 45px;
  margin-top: 12px;
}
.timer {
  text-align: center;
  font-size: 48px;
}

.awards-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.head-content {
  text-align: center;
}

.start-btn {
  padding: 10px 20px;
  border-radius: 4px;
  background-color: var(--green);
  border: 0;
  font-size: 28px;
  color: var(--black);
  margin: 20px 0;
  cursor: pointer;
}

.saved-money {
  margin-top: 12px;
  font-size: 18px;

  p {
    font-size: 24px;
    color: var(--green)
  }
}

.payment-btn {
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--green);
  border: 0;
  font-size: 14px;
  color: var(--black);
  display: inline-block;
  margin-top: 12px;
  cursor: pointer;
  &:hover {
    color: var(--white);
    background-color: gray;
  }
}

.intro-description {
  font-size: 16px;
  font-style: normal;
  text-align: left;
  margin-top: 12px;
  line-height: 1.4;
}
</style>
