<script setup>
import { ref, onMounted } from 'vue';
import Student from '@/components/Student.vue';
const tabs = ref(['邀請函', '主題含意', '同學', '成發歌曲']);
let activeTab = ref('邀請函');
const popupVisible = ref(false);
  const selectedWork = ref(null);

  function showPopup(work) {
    document.body.classList.add("popup-show");
    selectedWork.value = work;
    popupVisible.value = true;
  }
  function hidePopup() {
    document.body.classList.add("popup-show");
    popupVisible.value = false;
    selectedWork.value = null;
  }
  function switchTab(newTab) {
    activeTab.value = newTab;
  }
  onMounted(() => {
    window.addEventListener('keydown', function(event) {
        if (event.key === "Escape") { 
          hidePopup();
        }
      }
    )
  });
const c = "Metamorphosis，是指昆蟲和某些動物由幼年形態轉變為成年形態的過程，是一個徹底的改變。以蝴蝶為例，牠的一生最為徹底的改變，就是由毛毛蟲化為蛹，而後破蛹而出，變成美麗的蝴蝶。而我們在數資班的這段時間，就像蝴蝶的一生一般，從小小的毛毛蟲經過各式各樣的學習，化為蛹。破蛹的過程總是不容易的，但在我們的不懈努力之下，每位同學都帶著屬於自己的成果——就像美麗的翅膀——破蛹而出，飛向更遠的天空。這就是屬於我們的“蛻變”";
</script>



<template>
    <div class="start">
        <h1>About</h1>
        <br/>
        <div class="flex justify-center space-x-4 ml-[2%] tab">
          <div
        v-for="tab in tabs" :key="tab"  @click="switchTab(tab)">
          <p1 v-bind:id="tab" class="B">
            {{ tab  }}
            <div  v-bind:id="tab"></div>
          </p1>
        </div>
        </div>
 
      <br/>
      <br/>
      <br/>
    <div>
      <div v-if="activeTab === '邀請函'" class="s">
        <div id="a"></div>
        <div class="C1">
          <div class="H2"> <h2>邀請函</h2> </div>
          <img src="../../public/img/inv.jpg" id="inv" style="border-radius: 0.25em;"/>
        </div>
      </div>

      <div v-if="activeTab === '主題含意'" class="s">
        <div class="H2"> <h2>主題含意</h2> </div>
        <div class="sp"><span>{{ c }}</span></div>
      </div>

      <div v-if="activeTab === '同學'" class="s2">
        <div class="H2"> <h2>同學</h2> </div>
        <Student />
      </div>

      <div v-if="activeTab === '成發歌曲'">
        <div id="d"></div>
        <img src="../../public/img/lyrics.png" id="lyc">
      </div>

    </div>
  </div>
</template>

<style scoped>
.start{
    display: flex;
    flex-direction: column;
    margin: 5%;
    padding: 1px;
    border-radius: 0.25em;
    background-color: antiquewhite;
    opacity: 80%;

}
h1{
    display: flex;
    justify-content: center; 
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 0%;
}
.B{
  font-weight: 700;
  font-size: 1.25em;
  border-radius: 0.25em;
  padding: 10px;
  background-color: rgb(255, 197, 127);
}
.B:hover{
  border-color: hsl(186, 100%, 78%);
  background-color: hsl(186 100% 78%);
  color: rgb(55, 55, 55);
  transition: 0.5s;
}
#邀請函{
  position: absolute;
  margin-left: -230px;
}
#主題含意{
  position: absolute;
  margin-left: -110px;
}
#同學{
  position: absolute;
  margin-left: 30px;
}
#成發歌曲{
  position: absolute;
  margin-left: 130px;
}
.s{
  margin: 1.5%;
  background-color: rgb(202, 189, 171);
  border-radius: 0.25em;
  opacity: 100%;
}
.s2{
  height: 500px;
  margin: 1.5%;
  background-color: rgb(202, 189, 171);
  border-radius: 0.25em;
  opacity: 100%;
}
.C1{
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.H2{
  display: flex;
  align-items: start;
  padding-left: 1px;
}
h2{
  color: #032887;
  font-size: 1.25em;
  margin-left: 1%;
}
#lyc{
  margin-top: 50px;
  margin-bottom: 30px;
  width: 90%;
  height: auto;
  border-radius: 1em;
}
span{
  font-size: 1.25em;
  width: 100%;
  height: 100%;
}
.sp{
  margin-top: -7px;
  width: 96%;
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 2%;
}
#inv{
  margin-left: 5%;
  margin-bottom: 30px;
  width: 90%;
  height: auto;
  border-radius: 1em;
}


@media (max-width: 2000px) {
  h1{
        font-size: 3em;
    }
  h2{
    font-size: 2em;
    margin-bottom: 10px;
  }
  span{
    font-size: 1.25em;
    margin-top: -10px;
  }
  #邀請函{
    margin-left: -250px;
  }
  #主題含意{
    margin-left: -130px;
  }
  #同學{
    margin-left: 20px;
  }
  #成發歌曲{
    margin-left: 120px;
  }
  .s2{
    height: 600px;
  }
  .B{
    font-size: 1.5em;
  }
  }

  
  @media (max-width: 1100px) {
  h1{
        font-size: 2.5em;
    }
    h2{
    font-size: 1.75em;
    margin-bottom: 10px;
  }
  span{
    font-size: 1.25em;
    margin-top: -10px;
  }
  #邀請函{
    margin-left: -250px;
  }
  #主題含意{
    margin-left: -130px;
  }
  #同學{
    margin-left: 20px;
  }
  #成發歌曲{
    margin-left: 120px;
  }
  .s2{
    height: 500px;
  }
  }

  @media (max-width: 900px) {

  }
  
  @media (max-width: 800px) {
    h1{
        font-size: 1.9em;
    }
    h2{
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  span{
    font-size: 1.1em;
    margin-top: -10px;
  }
  #邀請函{
    margin-left: -200px;
  }
  #主題含意{
    margin-left: -100px;
  }
  #同學{
    margin-left: 20px;
  }
  #成發歌曲{
    margin-left: 100px;
  }
  .B{
    font-size: 1.1em;
  }
  .s2{
    height: 450px;
  }
  }
  
  @media (max-width: 480px){
    h1{
        font-size: 1.9em;
    }
    h2{
    font-size: 1.25em;
    margin-bottom: 10px;
  }
  span{
    font-size: 0.9em;
    margin-top: -10px;
  }
  #邀請函{
    margin-left: -180px;
  }
  #主題含意{
    margin-left: -95px;
  }
  #同學{
    margin-left: 10px;
  }
  #成發歌曲{
    margin-left: 80px;
  }
  .B{
    font-size: 1.1em;
  }
  .s2{
    height: 450px;
  }
  }
  
  @media (max-width: 380px) {
    h1{
        font-size: 1.5em;
    }
    h2{
    font-size: 1.25em;
    margin-bottom: 10px;
  }
  span{
    font-size: 0.9em;
    margin-top: -10px;
  }
  #邀請函{
    margin-left: -140px;
  }
  #主題含意{
    margin-left: -75px;
  }
  #同學{
    margin-left: 0px;
  }
  #成發歌曲{
    margin-left: 50px;
  }
  .B{
    font-size: 0.7em;
  }
  .s2{
    height: 400px;
  }
  }
  
















/*
#a{
  z-index: -1;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: hsl(225, 100%, 78%);

  border-radius: 0.25em;
}
#b{
  z-index: -1;
  position: absolute;
  width: 90px;
  height: 50px;
  background-color: hsl(225, 100%, 78%);
  margin-top: -75px;
  margin-left: 210px;
  border-radius: 0.25em;
}
#c{
  z-index: -1;
  position: absolute;
  width: 90px;
  height: 50px;
  background-color: hsl(225, 100%, 78%);
  margin-top: -75px;
  margin-left: 330px;
  border-radius: 0.25em;
}
#d{
  z-index: -1;
  position: absolute;
  width: 90px;
  height: 50px;
  background-color: hsl(225, 100%, 78%);
  margin-top: -75px;
  margin-left: 450px;
  border-radius: 0.25em;
}
*/

/*
table tr td {
  padding-left: 3px;
}
a:hover{ color: rgb(0, 144, 216); }
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
  max-height: 90%;
  overflow: visible;
  overflow-y: auto;
  z-index: 100;
  background-color: rgba(30, 32, 48, 0.69);
  box-shadow: 0 0 20px rgba(194, 233, 241, 0.568);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fade-in-animation ease-in 0.2s;
}*/
/*
@keyframes text-flicker {
  0% {
    opacity: 0.7;
  }
  5% {
    opacity: 0.3;
  }
  10% {
    opacity: 1;
  }
  15% {
    opacity: 0.6;
  }
  40% {
    opacity: 0.9;
  }
  60% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.9;
  }
}

@keyframes fade-in-animation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}*/

</style>