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
  emits: ['inputChange'],
  methods: {
    onInputChange(event) {
      this.$emit('inputChange', event.target.value);
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
</template>

<style>
</style>