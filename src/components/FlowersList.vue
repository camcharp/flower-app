<script>
  import FlowerCard from './FlowerCard'
  export default {
    name: 'flower-list-component',
    props: ['flowers', 'seasonsStatus'],
    emits: ['resetSearch'],
    components: {
      FlowerCard
    },
    methods: {
      resetSearch() {
        this.$emit('resetSearch');
      }
    }
  }
</script>

<template>
  <div class="number-results">
    <p v-if="flowers && flowers.length > 1">
      {{flowers.length}} fleurs trouvées
    </p>
    <p v-else>
      {{flowers.length}} fleur trouvée
    </p>
  </div>
  <div v-if="flowers && flowers.length">
    <ul id="flowers-list">
      <FlowerCard
        :flowers="flowers"
        :seasonsStatus="seasonsStatus"
      />
    </ul>
    <p class="results-end">Fin des résultats</p>
  </div>
  <div v-else class="no-results">
    <p>
      Oups, aucune fleur ne correspond à cette recherche... :(
    </p>
    <button class="cta" @click="resetSearch">
      <i class="gg-undo"></i>
      Réinitialiser la recherche
    </button>
  </div>
</template>

<style>
  .wrapper {
    width: 80%;
    margin: 0 auto;
    font-family: 'Quicksand', sans-serif;
  }
  .number-results p {
    text-align: end;
    padding: 1rem;
    font-family: 0.6rem;
  }
  #flowers-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    gap: 4rem 5rem;
    margin: 0 6rem 2rem;
  }
  @media (max-width: 658px) {
    #flowers-list {
      gap: 2rem 1rem;
      margin: 0;
    }
  } 
  .results-end {
    text-align: center;
  }
  ul {
    padding: 0;
  }
  ul li {
    list-style: none;
  }
  .no-results {
    margin: 0 auto;
    text-align: center;
  }
  button.cta {
    color: #FFFFFF;
    background: #1A916E;
    margin: 0 auto;
  }
  button.cta:hover {
    cursor: pointer;
    text-align: center;
    border-radius: 16px;
    border: 1px solid #74747B;
    font-weight: 500;
    color: #FFFFFF;
    background: #135843;
  }
  button.cta:active {
    background: #0B3428;
  }
</style>