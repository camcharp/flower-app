<script>
export default {
  name: 'season-button-component',
  props: ['season', 'isselected'],
  emits: ['checkbox'],
  methods: {
    onCheckSeason(event) {
      this.$emit('checkbox',
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
    <input type="checkbox" v-bind:id="season" v-bind:name="season" v-bind:value="season" @click="onCheckSeason">
    {{ season }}
  </label>
</template>

<style>
  .season-button {
    cursor: pointer;
    text-align: center;
    padding: 6px 25px;
    border-radius: 16px;
    border: 1px solid #74747B;
  }
  .season-button:hover,
  .season-button:focus,
  .season-button[isselected=true] {
    background: #C2D1A9;
    color: #28282A;
    text-decoration: none;
  }
  .season-button:active {
    background: #B0BD9A;
  }
  .season-button input[type="checkbox"] {
    display: none;
  }
</style>