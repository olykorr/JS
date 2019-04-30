<template>
  <div class="container" id="app">
    <calendar/>
  </div>
</template>

<script>
import calendar from "./components/calendar/calendar";

export default {
  name: "App",
  components: {
    calendar
  }
};
</script>
