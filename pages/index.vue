<template>
  <div class="container">
    <h3>My Nuxt Todo Project</h3>
    <div class="todos">
      <div v-for="todo in todos" :key="todo.todoId" class="todo">
        <TodoItem :todo="todo" />
      </div>
      <input @keyup.enter="addTodo" placeholder="What needs to be done?" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { TodoItem } from '~/types'

export default Vue.extend({
  computed: {
    ...mapGetters({
      getTodos: 'todos/todos',
    }),
    todos(): TodoItem[] {
      return this.getTodos
    },
  },
  mounted() {
    this.retrieveInitial()
  },
  methods: {
    addTodo(e: { target: HTMLInputElement }) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapActions({
      retrieveInitial: 'todos/retrieveInitial',
    }),
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.todos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.todo {
  width: 100%;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
