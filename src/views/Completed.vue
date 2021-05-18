<template>
  <div class="completed-view">
    <Header />
    <main>
      <section class="tasks">
        <div class="container">
          <h2 class="tasks__title" id="status-2">Выполненные задачи</h2>
          <div class="tasks__wrapper" id="past-tasks">
            <div
              class="tasks__task"
              v-for="(task, index) in completedTasks"
              :key="index"
            >
              <div class="tasks__task-header">
                <button class="tasks__remove" @click="removeTask(index)">
                  +
                </button>
              </div>
              <h2 class="tasks__task-title">{{ task.title }}</h2>
              <div class="tasks__task-open">
                <div
                  v-if="subTasksOpen != index"
                  class="tasks__task-open-btn"
                  id="open-subtasks"
                  @click="subTaskOpen(index)"
                >
                  <p>Раскрыть</p>
                  <img src="@/assets/icons/arrow.svg" alt="arrow" />
                </div>

                <div
                  v-else
                  class="tasks__task-open-btn tasks__task-open-btn-active"
                  id="open-subtasks"
                  @click="subTaskOpen(index)"
                >
                  <p>Раскрыть</p>
                  <img src="@/assets/icons/arrow.svg" alt="arrow" />
                </div>

                <div class="tasks__task-date">
                  {{ task.date }} {{ task.time }}
                </div>
              </div>
              <div
                class="tasks__task-subtasks"
                id="subtasks"
                v-if="subTasksOpen == index"
              >
                <div
                  class="tasks__task-subtask"
                  v-for="(subTask, i) in task.subTasks"
                  :key="i"
                >
                  <p>{{ subTask }}</p>
                </div>
              </div>
            </div>
          </div>
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
    return {
      completedTasks: [],
      subTasksOpen: null,
    };
  },
  computed: {
    search() {
      return this.$store.getters.search;
    },
  },
  watch: {
    search() {
      let taskItem = document.querySelectorAll(".tasks__task");
      this.completedTasks.forEach((item, index) => {
        if (
          item.title.toUpperCase().indexOf(this.search.toUpperCase()) > -1 ||
          item.date.toUpperCase().indexOf(this.search.toUpperCase()) > -1 ||
          item.time.toUpperCase().indexOf(this.search.toUpperCase()) > -1
        ) {
          taskItem[index].style.display = "";
        } else {
          taskItem[index].style.display = "none";
        }
      });
    },
  },
  mounted() {
    if (localStorage.completedTasks) {
      this.completedTasks = JSON.parse(localStorage.completedTasks);
    }
  },
  methods: {
    removeTask(index) {
      this.completedTasks.splice(index, 1);
      localStorage.completedTasks = JSON.stringify(this.completedTasks);
    },
    subTaskOpen(index) {
      this.subTasksOpen = this.subTasksOpen === index ? null : index;
    },
  },
};
</script>

<style>
</style>