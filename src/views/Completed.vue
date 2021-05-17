<template>
  <div class="completed-view">
    <Header />
    <main>
      <section class="tasks">
        <div class="container">
          <h2 class="tasks__title" id="status-2">Выполненные задачи</h2>
          <div class="tasks__wrapper" id="past-tasks"></div>
        </div>
      </section>
    </main>
    <AddNoteBtn />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import AddNoteBtn from "@/components/AddNoteBtn.vue";

export default {
  name: "Home",
  components: {
    Header,
    AddNoteBtn,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>