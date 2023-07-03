// import {ref, computed} from 'vue'
import { defineStore } from 'pinia'
import Icon1 from '@/assets/imgs/awards/1.png';
import Icon2 from '@/assets/imgs/awards/2.png';
import Icon3 from '@/assets/imgs/awards/3.png';

export const useAwardsStore = defineStore('awards', () => {

  const daySec = 86400;

  // amount измеряется в секундах!!!
  const awardsList = [
    { title: '1 час. Начало положено!', amount: 60 * 60, image: '🎌' },
    { title: '4 часа. Улучшение пульса', amount: 60 * 60 * 4, image: '💗' },
    { title: '1 день. Путь к свободе', amount: daySec, image: '🚀' },
    { title: '2 день. Уменьшение физической зависимости от никотина', amount: daySec * 2, image: '🔗'},
    { title: '3 день. Улучшение дыхания', amount: daySec * 3, image: '🌬️' },
    { title: '4 день. Восстановление чувства вкуса и обоняния', amount: daySec * 4, image: '🍍' },
    { title: '5 день. Повышение уровня энергии', amount: daySec * 5, image: '⚡️' },
    { title: '6 день. Уменьшение кашля и затрудненного дыхания', amount: daySec * 6, image: '🗣️' },
    { title: '7 день. Улучшение настроения и психического благополучия', amount: daySec * 7, image: '👌' },
    { title: '8 день. Повышение физической выносливости', amount: daySec * 8, image: '🏋️‍' },
    { title: '9 день. Улучшение состояния кожи', amount: daySec * 9, image: '👩‍' },
    { title: '10 день. Улучшение концентрации и памяти', amount: daySec * 10, image: '🧠' },
    { title: '11 день. Снижение уровня стресса', amount: daySec * 11, image: '☮️' },
    { title: '12 день. Укрепление иммунитета', amount: daySec * 12, image: '🛡️' },
    { title: '13 день. Улучшение зубной эстетики', amount: daySec * 13, image: '😁' },
    { title: '14 день. Улучшение запаха тела', amount: daySec * 14, image: '🌸' },
    { title: '15 день. Улучшение качества сна', amount: daySec * 15, image: '😴' },
    { title: '16 день. Более эффективная дыхательная система', amount: daySec * 16, image: '🏃' },
    { title: '17 день. Очищение от никотина', amount: daySec * 17, image: '🧼' },
  ];

  return { awardsList }
})
