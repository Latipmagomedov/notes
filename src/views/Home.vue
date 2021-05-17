<template>
  <div class="home-view">
    <Header />
    <main>
      <section class="tasks">
        <div class="container">
          <h2 class="tasks__title" id="status-1">Все задачи</h2>
          <div class="tasks__wrapper" id="tasks">
            <div class="tasks__task">
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
                <button class="tasks__remove">+</button>
              </div>
              <h2 class="tasks__task-title">Хлеб</h2>
              <div class="tasks__task-open">
                <div class="tasks__task-open-btn" id="open-subtasks">
                  <p>Раскрыть</p>
                  <img src="@/assets/icons/arrow.svg" alt="arrow" />
                </div>
                <div class="tasks__task-date">2021-05-15 13:16</div>
              </div>
              <div class="tasks__task-subtasks" id="subtasks">
                <div class="tasks__task-subtask">
                  <p>вавыа</p>
                  <input type="checkbox" class="completed" />
                </div>
                <div class="tasks__task-subtask">
                  <p>вавыа</p>
                  <input type="checkbox" class="completed" />
                </div>
                <div class="tasks__task-subtask">
                  <p>вавыа</p>
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
    return {};
  },
};
</script>
