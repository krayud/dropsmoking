<template>
  <div class="award">
    <div class="award__img">
      {{ props.awardData.image }}
    </div>
    <div class="award__info">
      {{ props.awardData.title }}
      <div class="progress-bar">
        <div class="progress-bar__progress" :style="{ width: `${completePercents}%`}"/>
        <div class="progress-bar__percents">{{ completePercents }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref} from 'vue';
import { useCounterStore } from '@/stores/counter'

const props = defineProps({
  awardData: Object,
});
const timerStore = useCounterStore();


const calcPercent = () => {
  return (timerStore.timer.totalSecDifferent * 100 / props.awardData.amount).toFixed(2);
}

const isCompleted = ref(calcPercent() >= 100);

const completePercents = computed(() => {
  if (!isCompleted.value) {
    const newPercents = calcPercent();
    if(newPercents > 100) {
      isCompleted.value = true;
    }
    return newPercents <= 100 ? newPercents : 100;
  } else {
    return 100;
  }
})

</script>

<style lang="scss" scoped>
.award {
  display: flex;
  width: 95%;
  height: 85px;
  background-color: #323232;
  border-radius: 14px;
  padding: 12px;
  box-sizing: border-box;

  &__img {
    width: 50px;
    display: flex;
    justify-items: center;
    justify-content: left;
    align-items: center;
    font-size: 28px;
  }
  &__info{
    width: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .progress-bar {
    position: relative;
    margin-top: 6px;
    width: 100%;
    background-color: #4B4B4B;
    height: 16px;
    border-radius: 6px;

    &__progress {
      position: absolute;
      top: 0px;
      height: 16px;
      border-radius: 6px;
      background-color: var(--green);
    }

    &__percents {
      position: absolute;
      top: 0;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      text-align: center;
      width: 100%;
      color: #323232;
    }
  }

}
</style>
