<template>
  <div class="home-view">
    <Header />
    <main>
      <section class="tasks">
        <div class="container">
          <h2 class="tasks__title" id="status-1">Все задачи</h2>
          <div class="tasks__wrapper" id="tasks">
            <div
              class="tasks__task"
              v-for="(task, index) in tasks"
              :key="index"
            >
              <div class="confirm" id="tasks-confirm">
                <div class="confirm-content">
                  <p>Вы уверены ?</p>
                  <div class="confirm-btns">
                    <button>Нет</button>
                    <button>Да</button>
                  </div>
                </div>
              </div>

              <div class="tasks__task-header">
                <input type="checkbox" id="task-1" class="completed" />
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
                  v-for="(subTask, index) in task.subTasks"
                  :key="index"
                >
                  <p>{{ subTask }}</p>
                  <input type="checkbox" class="completed" />
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
      tasks: JSON.parse(localStorage.tasks),
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
      console.log(this.search);
    }
  },
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
      localStorage.tasks = JSON.stringify(this.tasks);
    },
    subTaskOpen(index) {
      this.subTasksOpen = this.subTasksOpen === index ? null : index;
    },
  },
};
</script>
