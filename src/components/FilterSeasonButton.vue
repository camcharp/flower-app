<script>
import { seasons } from '../utils/seasons.js'

export default {
  name: 'season-button-component',
  props: ['season', 'isselected'],
  emits: ['seasonClicked'],
  data() {
    return {
      seasons
    }
  },
  methods: {
    selectSeasons(event) {
      this.$emit('seasonClicked',
      {
        season: event.target.value,
        checked: event.target.checked
      });
    }
  }
}
</script>

<template>
  <label class="season-button" v-bind:for="season" :isselected="isselected">
    <i class="gg-radio-checked" v-if="isselected"></i>
    <i class="gg-radio-check" v-else></i>
    <input type="checkbox" v-bind:id="season" v-bind:name="season" v-bind:value="season" @click="selectSeasons">
      {{ seasons[season].displayName }}
  </label>
</template>

<style>
  .season-button {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
    cursor: pointer;
    text-align: center;
    padding: 6px 25px;
    border-radius: 16px;
    border: 1px solid var(--main-grey);
    font-weight: 500;
  }
  .season-button:hover,
  .season-button:focus,
  .season-button[isselected=true] {
    background: var(--light-green);
    color: #28282A;
    text-decoration: none;
  }
  .season-button:active {
    background: var(--active-green);
  }
  .season-button input[type="checkbox"] {
    display: none;
  }
</style>