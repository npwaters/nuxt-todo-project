<template>
  <div class="container">
    <div>
      <h1 class="title">Nuxt Todo Project</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.text">
          <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <li>
          <input @keyup.enter="addTodo" placeholder="What needs to be done?" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    todos() {
      return this.$store.state.todos.list
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
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
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
  justify-content: center;
  align-items: center;
  text-align: center;
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

.done {
  text-decoration: line-through;
}
</style>
