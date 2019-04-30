<template>
  <div  style="min-width: 770px;">
  <div class="row">    
    <div class="col">
      <div class="row">    
        <div class="col-auto">
          <button class="btn btn-info" v-on:click="previusMonth()">Prev</button>
        </div>
        <div class="col text-center">
          <v-select v-model="month" :options="months"></v-select>
        </div>
        <div class="col-auto">
          <button class="btn btn-info" v-on:click="nextMonth()">Next</button>
        </div>
      </div>
    </div>
    <div class="col-auto">
      <div class="row">    
        <div class="col-auto">
          <button class="btn btn-info" v-on:click="previusYear()">Prev</button>
        </div>
        <div class="col text-center">
          <h2>{{year}}</h2>
        </div>
        <div class="col-auto">
          <button class="btn btn-info" v-on:click="nextYear()">Next</button>
        </div>
      </div>
    </div>
  </div> 
  <div class="row">
    <div class="col">
      <table class="table table-bordered table-sm">
        <thead>
          <tr>
            <th v-for="dayName of dayNames" class="text-center">
              {{dayName}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row of getDay">
            <td v-for="cel of row">
              <day v-bind:date="cel"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>
<script src="./calendar.js">
</script>
