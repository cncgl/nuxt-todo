<template>
    <div class="max-w-3xl mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <form @submit.prevent="addTodo" class="flex mb-4">
        <input
          v-model="newTodo"
          placeholder="What needs to be done?"
          class="flex-1 border p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <select v-model="newPriority" class="border p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        </select>
        <button type="submit"
            class="p-2 bg-blue-500 text-white rouunded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <font-awesome-icon :icon="['fas', 'circle-plus']" />
        </button>
      </form>
      <ul>
        <TodoItem
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          @toggle="toggleTodo(index)"
          @remove="removeTodo(index)"
        />
      </ul>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { useTodoStore } from '@/store/todo'
import TodoItem from '@/components/TodoItem.vue'
import fontawesome from '~/plugins/fontawesome';

const newTodo = ref('')
const newPriority = ref('C')
const todoStore = useTodoStore()

const addTodo = () => {
if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value, newPriority.value)
    newTodo.value = ''
    newPriority.value = 'C'
}
}

const toggleTodo = (index: number) => {
todoStore.toggleTodo(index)
}

const removeTodo = (index: number) => {
todoStore.removeTodo(index)
}

const todos = todoStore.$state.todos
</script>
