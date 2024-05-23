<template>
    <li class="flex items-center mb-2 bg-gray-100 p-2 rounded-lg shadow-sm">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="$emit('toggle')"
        class="mr-2 h-5 w-5 test-blue-500 focus:ring-blue-500"
      />
      <span
        :class="{ 'line-through text-gray-500': todo.done }"
        class="flex-1 text-lg"
      >
        {{ todo.text }} - Priority: {{ todo.priority }}
      </span>
      <button
        @click="$emit('remove')"
        class="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
      <font-awesome-icon icon="trash" />
      </button>
    </li>
</template>
  
<script lang="ts" setup>
defineProps({
todo: {
    type: Object as PropType<{ text: string, done: boolean, priority: string }>,
    required: true,
}
})
</script>

<style scoped>
.done {
text-decoration: line-through;
}
</style>
