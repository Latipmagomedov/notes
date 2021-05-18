<template>
  <div class="home-view">
    <div class="message-error" :class="errorActive">
      <div class="message-error__message">
        <p>Что бы отметить задачу, нужно сначала отметить все подзадачи</p>
      </div>
    </div>
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
              <div class="tasks__task-header">
                <button class="completedBtn" @click="completedTask(index)">
                  Выполнить
                </button>

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
                  <input
                    v-if="task.completedSubTasks[i]"
                    type="checkbox"
                    checked
                    class="completed completed-sub-task"
                    @click="completedSubTask(index, i)"
                  />

                  <input
                    v-if="!task.completedSubTasks[i]"
                    type="checkbox"
                    class="completed completed-sub-task"
                    @click="completedSubTask(index, i)"
                  />
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
      tasks: [],
      subTasksOpen: null,
      completedTasks: [],
      errorActive: "",
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
      this.tasks.forEach((item, index) => {
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
    if (localStorage.tasks) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
    if (localStorage.completedTasks) {
      this.completedTasks = JSON.parse(localStorage.completedTasks);
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
    completedSubTask(index, i) {
      this.tasks[index].completedSubTasks[i] = !this.tasks[index]
        .completedSubTasks[i];
      localStorage.tasks = JSON.stringify(this.tasks);
    },
    completedTask(index) {
      if (this.tasks[index].completedSubTasks.every((elem) => elem == true)) {
        this.completedTasks.push(this.tasks[index]);
        this.tasks.splice(index, 1);
        localStorage.completedTasks = JSON.stringify(this.completedTasks);
        localStorage.tasks = JSON.stringify(this.tasks);
        this.errorActive = "";
      } else {
        this.errorActive = "message-error_active";
        setTimeout(() => {
          this.errorActive = "";
        }, 3000);
      }
    },
  },
};
</script>
