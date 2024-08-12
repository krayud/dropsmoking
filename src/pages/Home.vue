<template>
  <div class="head-content">
    <template v-if="timerStore.isTimerStarted">
      <h1>НЕ КУРЮ!</h1>

      <div class="timer-table">
        <div class="timer-table__timer">
<!--          {{ formattedTimer }}-->
          <div>{{ timerStore.timer.days }}</div>
          <div>{{ timerStore.timer.hours }}</div>
          <div>{{ timerStore.timer.min }}</div>
          <div>{{ timerStore.timer.sec }}</div>
        </div>
        <div class="timer-table__units">
          <div>Дней</div>
          <div>Часов</div>
          <div>Минут</div>
          <div>Секунд</div>
        </div>
      </div>
      <div class="saved-money">
        <p>{{ timerStore.timer.savedMoney }}₽</p>
        Сэкономлено
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
    <button class="reset-timer-btn" @click="resetCounter">Начать заново :(</button>
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

const resetCounter = () => {
  const result = confirm('Точно сбросить счетчик?');
  if (result) {
    timerStore.resetStartTime(dayjs().format());
  }
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

.timer-table {
  display: flex;
  flex-direction: column;
  &__timer {
    font-size: 48px;
    display: flex;
    div {
      flex-basis: 25%;
    }
  }
  &__units {
    display: flex;
    div {
      flex-basis: 25%;
    }
  }
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
  font-size: 16px;
  p {
    margin-top: 16px;
    font-size: 36px;
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
  margin: 12px 0 20px 0;
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

.reset-timer-btn {
  margin-top: 12px;
  background-color: transparent;
  border: 1px solid #A6002F;
  padding: 2px 4px;
  color: #FF4076;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #FF739B;
    background-color: #BF3059;
  }
}
</style>
