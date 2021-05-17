<template>
  <div class="addnote-view">
    <section class="add-task">
      <div class="container">
        <input
          type="text"
          class="add-task__title"
          placeholder="Заголовок задачи"
          v-model="task.title"
        />
        <div class="add-task__date-open">
          <input
            type="date"
            min=""
            class="add-task__date"
            v-model="task.date"
          />
          <input type="time" class="add-task__time" v-model="task.time" />
        </div>
        <button class="add-task__btn" @click="addTask">Добавить задачу</button>
        <div class="add-task__subtasks">
          <h2 class="add-task__subtasks-title">Подзадачи</h2>
          <button class="add-task__subtasks-btn" @click="addSubTaskInp">
            Добавить подзадачу
          </button>
          <div class="add-task__subtasks-wrapper">
            <div
              class="add-task__subtasks-form"
              v-for="(inp, index) in subTasksInp"
              :key="index"
            >
              <input
                placeholder="Подзадача"
                v-model="subTasksInp[index]"
                class="sub-task-inp"
              />
              <button
                class="add-task__subtasks-remove"
                @click="removeSubTaskInp(index)"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <router-link to="/">
        <button class="open-modal-btn open-modal-btn-close">+</button>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AddNote",
  data() {
    return {
      tasks: [],
      task: {
        title: "",
        date: "",
        time: "",
        completed: false,
        subTasks: [],
        completedSubTasks: [],
      },
      subTasksInp: [],
    };
  },
  methods: {
    addSubTaskInp() {
      this.subTasksInp.push("");
    },
    removeSubTaskInp(index) {
      this.subTasksInp.splice(index, 1);
    },
    addTask() {
      this.task.subTasks = [];
      this.task.completedSubTasks = [];
      this.subTasksInp.forEach((item) => {
        this.task.subTasks.push(item);
        this.task.completedSubTasks.push(false);
      });
      this.tasks.push(this.task);

      console.log(this.tasks);
    },
  },
};
</script>

<style>
</style>