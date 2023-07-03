import {ref, computed, onMounted} from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useCounterStore = defineStore('counter', () => {

  const userStoredTime = ref(localStorage.getItem('start-date'));
  const isTimerStarted = computed(() => {
    return !!userStoredTime.value;
  });

  const moneyPerSecond = 200 / (24 * 3600);
  const currentTime = ref('');


  onMounted(() => {
    currentTime.value = dayjs().format()
  });

  const runTimer = () => {
    setInterval(() => {
      currentTime.value = dayjs().format();
    }, 1000);
  };

  const startFromtDate = (newStartDate) => {
    userStoredTime.value = newStartDate;
    currentTime.value = dayjs().format();
    localStorage.setItem('start-date', userStoredTime.value);
    runTimer();
  };

  if (isTimerStarted.value) {
    runTimer();
  }

  const timer = computed(() => {
    const date1 = dayjs(currentTime.value);
    const totalSecDifferent = date1.diff(userStoredTime.value, 'seconds');
    const sec = totalSecDifferent % 60;
    const min = date1.diff(userStoredTime.value, 'minutes') % 60;
    const hours = date1.diff(userStoredTime.value, 'hours') % 24;
    const days = date1.diff(userStoredTime.value, 'days');

    const savedMoney = (moneyPerSecond * totalSecDifferent).toFixed(2) | 0;
    return { days: days | 0, hours: hours | 0, min: min | 0, sec: sec | 0, totalSecDifferent: totalSecDifferent | 0, savedMoney };
  });

  return { timer, startFromtDate, isTimerStarted }
})
