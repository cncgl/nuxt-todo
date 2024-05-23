import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Array<{ text: string, done: boolean, priority: string }>
  }),
  actions: {
    addTodo (text: string, priority: string) {
      this.todos.push({ text, done: false, priority })
      this.sortTodos()
    },
    toggleTodo (index: number) {
      this.todos[index].done = !this.todos[index].done
    },
    removeTodo (index: number) {
      this.todos.splice(index, 1)
    },
    sortTodos () {
      const priorityOrder = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5 }
      this.todos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    }
  }
})
