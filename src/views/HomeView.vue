<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Kanban />
  </div>
</template>

<script lang="ts" setup>
import { getCard}from '@/lib/api'
import { key } from '@/store';
import { onMounted } from 'vue';
import { useStore } from 'vuex';


const store = useStore(key);
onMounted(() => {
  console.log('Component is unmounted');
  //getCards();
  mock();
})

let getCards = async () => {
  try {
    console.log(1);
    var result = await getCard();
    if(result.header.resultCode === '0000'){
      store.commit('setCards',result.body) ;
    }
    else { throw new Error();
    }
  } catch (error) {
    console.error('Error fatch data:');
  }
};

let mock = () =>{
      var result = {
        "header": {
            "resultCode": "0000",
            "resultDescription": "Success."
        },
        "body": [
            {
                "id": 3,
                "title": "測試新增",
                "content": "測試內容",
                "date": "2024-06-28",
                "creater": "張三",
                "typeName": "Todo",
                "type": 0,
                "sort": 1
            },
            {
                "id": 4,
                "title": "測試新增2",
                "content": "測試內容2",
                "date": "2024-06-28",
                "creater": "張三",
                "typeName": "Todo",
                "type": 0,
                "sort": 2
            },
            {
                "id": 6,
                "title": "測試新增2",
                "content": "測試內容2",
                "date": "2024-07-02",
                "creater": "張三",
                "typeName": "Doing",
                "type": 1,
                "sort": 3
            },
            {
                "id": 12,
                "title": "apitesttitle",
                "content": "安安安安安",
                "date": "2024-07-03",
                "creater": "張三",
                "typeName": "Doing",
                "type": 1,
                "sort": 4
            },
            {
                "id": 15,
                "title": "apitesttitle",
                "content": "安安安安安",
                "date": "2024-07-03",
                "creater": "張三",
                "typeName": "Pending",
                "type": 2,
                "sort": 5
            },
            {
                "id": 1,
                "title": "測試新增",
                "content": "測試內容",
                "date": "2024-06-03",
                "creater": "張三",
                "typeName": "Done",
                "type": 3,
                "sort": 6
            },
            {
                "id": 8,
                "title": "apitesttitle",
                "content": "testUpdate",
                "date": "2024-07-02",
                "creater": "張三",
                "typeName": "Done",
                "type": 3,
                "sort": 7
            }
        ]
    }

    store.commit('setCards',result.body) ;
    
    }

</script>
