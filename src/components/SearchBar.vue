<script>
export default {
  name: 'search-bar-component',
  props: ['seasons'],
  data() {
    return {
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
  <form id="flower-form">
    <label for="flower-search">
      Rechercher une fleur :
    </label>
    <input
      type="search"
      @input="onInputChange"
      placeholder="pivoine"
    >

    <div v-for="(value, key) in seasons" :key="key">
      <label v-bind:for="key" class="season-button" :is-selected="value">
        <input type="checkbox" v-bind:id="key" v-bind:name="key" v-bind:value="key" @click="onCheckSeason">
        {{ key }}
      </label>
    </div>
  </form>
</template>

<style>
  #flower-form {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .season-button input[type="checkbox"] {
    display: none;
  }
  .season-button {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 1px solid #94636c;
    border-radius: 8px;
    background: #ffffff;
    font: normal normal bold 20px arial;
    color: black;
    text-decoration: none;
}
  .season-button:hover,
  .season-button:focus,
  .season-button[is-selected=true] {
      border: 1px solid #d48e9a;
      background: #ffc4d4;
      background: -webkit-gradient(linear, left top, left bottom, from(#ffc4d4), to(#b27782));
      background: -moz-linear-gradient(top, #ffc4d4, #b27782);
      background: linear-gradient(to bottom, #ffc4d4, #b27782);
      color: black;
      text-decoration: none;
  }
  .season-button:active {
      background: #94636c;
      background: -webkit-gradient(linear, left top, left bottom, from(#94636c), to(#94636c));
      background: -moz-linear-gradient(top, #94636c, #94636c);
      background: linear-gradient(to bottom, #94636c, #94636c);
  }
</style>