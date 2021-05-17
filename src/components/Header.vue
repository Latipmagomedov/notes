<template>
  <header class="header">
    <div class="container">
      <div class="header__search">
        <input
          type="text"
          class="header__search-inp"
          placeholder="Поиск задач"
          v-model="search"
          @input="searchTodo"
        />
        <button class="header__search-icon" id="voice-search"></button>
      </div>

      <div class="header__tabs">
        <router-link to="/" class="header__tab">Активные</router-link>
        <router-link to="/completed" class="header__tab"
          >Выполненные</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchTodo() {
      this.$store.state.searchInp = this.search;
    },
  },
};
</script>

<style>
</style>