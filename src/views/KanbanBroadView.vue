<template>
  <button @click="add()">新增卡片</button>
  <div class="kanban-board">
    <div v-for="(column, index) in columns" :key="index" class="kanban-column" :class=column.class >
      <h3>{{ column.name }}</h3>
      <draggable v-model="column.tasks" :group="{ name: 'tasks', put: true }" itemKey="id" @change="log">
        <template #item="{ element }" >
          <div class="kanban-task" @click="edit(element)" > 
            <a class="title">{{ element.title }}</a>
            {{ element.content }}
            {{ element.id }}
            {{ element.date }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import draggable from 'vuedraggable';
import { useStore } from 'vuex';
import { key } from '@/store';
import { CardType }from '@/lib/enum/typeEnum'

let columns = reactive<Column[]>([
  {
    class: 'todo',
    name: 'To Do',
    tasks: [],
  },
  {
    class:'doing',
    name: 'Doing',
    tasks: [],
  },
  {
    class:'pending',
    name: 'Pending',
    tasks: [],
  },
  {
    class:'done',
    name: 'Done',     
    tasks: [],
  },
]);

let store = useStore(key);

const getList = (className: string) => columns.filter(column => column.class === className)[0];

let todo = getList("todo");
let doing = getList("doing");
let pending = getList("pending");
let done = getList("done");

const columnTasks: { [key: number]: Card[] } = {
  0: todo.tasks,
  1: doing.tasks,
  2: pending.tasks,
  3: done.tasks
};


store.state.Cards.forEach(card => {
  const tasks = columnTasks[card.type];
  if (tasks) {
    tasks.push(card);
  }
});
  


// const add = () => {
//   columns[0].tasks.push({ name: "Juan " , id: 123 })
// };

const edit = (data:any) => {
  
  data.id =123
  data.name ='QQQQ'
};

const log = (evt: any) => {
  const { added } = evt;
  if (added !== undefined) {
    const changer = added;
    const updatedata = store.state.Cards.find(card => card.id === changer.element.id);

    if (updatedata) {
      updatedata.type = changer.newIndex;

      const isCardInList = (list: any[]) => list.some(card => card.id === changer.element.id);

      let newType: CardType | undefined;

      if (isCardInList(todo.tasks)) {
        newType = CardType.Todo;
      } else if (isCardInList(doing.tasks)) {
        newType = CardType.Doing;
      } else if (isCardInList(pending.tasks)) {
        newType = CardType.Pending;
      } else if (isCardInList(done.tasks)) {
        newType = CardType.Done;
      }

      if (newType !== undefined) {
        updatedata.typeName = CardType[newType];
        updatedata.type = newType;
      }
    }
  }
};



</script>

<style scoped lang="scss">
$color-todo: #f4f4f4;
$color-doing: #bbffe0;
$color-pending: #fddeea;
$color-done: #9cd6ff;

.kanban-board {
  display: flex;
  // gap: 16px;
  justify-content: center;

    h3{    
      border-radius: 5px;
      padding: 10px 0px;
      margin: 5px;
      width: 100%;
    }

    .kanban-column {
      background-color: #f4f4f4;
      padding: 16px;
      padding-top: 0px;
      // border-radius: 8px;
      width: 200px;

      &.todo{background-color: $color-todo;}

      &.doing{background-color:$color-doing;}
      
      &.pending{background-color:$color-pending;}

      &.done{background-color: $color-done;}
    }



  .kanban-task {
    background-color: #ffffff;
    padding: 8px;
    border: 1px solid #ddd;
    margin-bottom: 8px;
  }
}




</style>
