<template>
  <div class="kanban-board">
    <div v-for="(column, index) in columns" :key="index" class="kanban-column">
      <h2>{{ column.name }}</h2>
      <draggable v-model="column.tasks" :group="{ name: 'tasks', put: true }">
        <template #item="{ element }">
          <div class="kanban-task">
            {{ element.name }}
            {{ element.id }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import draggable from 'vuedraggable';

interface Task {
  id: number;
  name: string;
}

interface Column {
  name: string;
  tasks: Task[];
}

export default defineComponent({
  name: 'Kanban',
  components: {
    draggable,
  },
  data() {
    return {
      columns: [
        {
          name: 'To Do',
          tasks: [
            { id: 1, name: 'Task 1' },
            { id: 2, name: 'Task 2' },
          ],
        },
        {
          name: 'In Progress',
          tasks: [
            { id: 3, name: 'Task 3' },
          ],
        },
        {
          name: 'Done',
          tasks: [
            { id: 4, name: 'Task 4' },
          ],
        },
      ] as Column[],
    };
  },
});
</script>

<style scoped>
.kanban-board {
  display: flex;
  gap: 16px;
}

.kanban-column {
  background-color: #f4f4f4;
  padding: 16px;
  border-radius: 8px;
  width: 200px;
}

.kanban-task {
  background-color: #ffffff;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>
