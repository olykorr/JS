<template>
  <div v-bind:class="{ currentDay: date.current, 'day':true}">
    <div v-bind:class="{ active: date.isSame, notActive: !date.isSame, 'day-number':true }">{{getDay}}</div>
  </div>
</template>
<script src="./day.js">
</script>

<style>
.active.day-number {
  color: black;
}
.notActive.day-number {
  color: grey;
}
.day {
}
.day.currentDay .day-number {
  color: blue;
}

.day-number {
  font-size: 36px;
}
</style>
