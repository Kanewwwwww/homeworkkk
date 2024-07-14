<template >
    <div id="CardFactory" class="lightbox-background" @click="close">
      
        <div id="control-panel" class="center-panel">

          <div class="panel-top"><a >{{title}}</a>
            <div class="close" @click="close">X</div>
          </div>
          <div class="panel-body">
              <div class="row">
              <label for="name1">Name 1:</label>
              <input type="text" id="name1" name="name1">
            </div>
            <div class="row">
              <label for="name2">Name 2:</label>
              <input type="text" id="name2" name="name2">
            </div>
            <div class="row">
              <label for="name3">Name 3:</label>
              <input type="text" id="name3" name="name3">
            </div>
          </div>
        </div>
    </div>
</template>
<script  lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
export default defineComponent({
 name: 'CardFactory',
  props: {
    type: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const title = ref('');

    const close = (event: MouseEvent) => { 
      
      const className = ( event.target as HTMLElement).className;
      if(className === "lightbox-background" || className === "close" )
      {
        emit('close',false);
      }
    };

    const updateTitle = () => {
      switch (props.type) {
        case 1:
          title.value = '新增';
          break;
        case 2:
          title.value = '修改';
          break;
        default:
          title.value = '';
      }
    };

    onMounted(() => {
      updateTitle();
      console.log(props.type === 1);
    });

    watch(() => props.type, updateTitle);

    return {
      title,
      close,
    };
  },
});


</script>
<style lang="scss">


  $heightParam: 500px;
  $widthParam: 500px;
  .center-panel{
    width: $widthParam;
    height: $heightParam;
  }
    
</style>