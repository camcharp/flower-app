<script>
export default {
  name: 'season-button',
  props: ['season', 'isSelected'],
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
  <label class="season-button" v-bind:for="season" :is-selected="isSelected">
    <input type="checkbox" v-bind:id="season" v-bind:name="season" v-bind:value="season" @click="onCheckSeason">
    {{ season }}
  </label>
</template>

<style>
</style>