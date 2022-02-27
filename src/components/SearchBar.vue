<script>
export default {
  name: 'search-bar-component',
  props: {
    message: String
  },
  data() {
    return {
      value: ''
    }
  },
  components: {
  },
  emits: ['inputChange', 'checkbox'],
  methods: {
    onInputChange(event) {
      this.$emit('inputChange', event.target.value);
    },
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
  <label for="flower-search">
    Rechercher une fleur :
  </label>
  <input
    :value="message"
    @input="onInputChange"
    placeholder="pivoine"
  >

  <input type="checkbox" id="hiver" name="hiver" value="hiver" @click="onCheckSeason">
  <label for="hiver">hiver</label>

  <input type="checkbox" id="printemps" name="printemps" value="printemps" @click="onCheckSeason">
  <label for="printemps">printemps</label>

  <input type="checkbox" id="été" name="été" value="été" @click="onCheckSeason">
  <label for="été">été</label>

  <input type="checkbox" id="automne" name="automne" value="automne" @click="onCheckSeason">
  <label for="automne">automne</label>
</template>

<style>
</style>