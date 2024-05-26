<script setup>
  import { createApp } from "vue";
  import VueFeather from 'vue-feather';
  const app = createApp({});
  app.component(VueFeather.name, VueFeather);
  /*
  import Home from "@/views/Home.vue";
  import About from "@/views/About.vue";
  import Categories from "@/views/Categories.vue";
  import Contact from "@/views/Contact.vue";*/

  
  import { onMounted, onUnmounted } from "vue";
  onMounted(()=>{
    const tl = document.querySelector(".tl");
    const sidebar = document.querySelector(".sidebar");
    const snav = document.querySelector(".snav");
    snav.addEventListener("click", () => {
      tl.classList.toggle("active");
      sidebar.classList.toggle("active");
    });
  });
  import activeTab from '../views/About.vue';
  function g(){
      let activeTab = ref('同學');
    };

</script>


<!--script>
  onMounted(){
    this.const 
  }
  const tl = document.querySelector(".tl");
  const sidebar = document.querySelector(".sidebar");
  tl.addEventListener("click", () => {
    tl.classList.toggle("active");
    sidebar.classList.toggle("active");
  });

</script-->

<template>
  <div class="cover">
    <div class="sidebar">
    
      <div class="SC2">

        <router-link to="/" class="Slink" id="H">Home</router-link>
      
        <div class="seperated_line" id="L"></div>

        <router-link to="/about" class="Slink" >About</router-link>
      
        <div class="seperated_line"></div>
        
        <router-link to="/categories" class="Slink">Categories</router-link>
        
        <div class="seperated_line"></div>
        
        <router-link to="/schedule" class="Slink">Sechedule</router-link>
        
        <div class="seperated_line"></div>
        
        
        <router-link to="/contact" class="Slink">Contact</router-link>

        
        <div class="seperated_line"></div>
        
        <div class="Souter">

          <a href="https://www.instagram.com/metamorphosis_wlmgc_35th/" 
          target="_blank" rel="noooener" class="SIC" >
            <vue-feather type="instagram" size="20"></vue-feather>
          </a>

          <a href="https://youtu.be/3DID-vTnjo8?si=GUZ8gtnGVIQEIU1p" 
          target="_blank" rel="noooener" class="SIC" >
            <vue-feather type="youtube" size="20"></vue-feather>
          </a>

        </div>
      </div>
    </div>       
  </div>

  <nav class="snav">
    <div class="C4">
      <div class="tl">
        <span></span>
        <span></span>
        <span></span>
        </div>
    </div>
  </nav>

</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.cover{
  /*background-color: rgb(0, 0, 106);*/
  /*opacity: 0.7;*/
  z-index: 9;
  position: absolute;
  width: auto;
  height: 100vh;
}

.sidebar{
  background-color:  rgb(34, 37, 49);
  opacity: 0.8;
  height: 100vh;
  /*width: 300px;*/
  right: -300px;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;    
  justify-content: center;
}
.SC2{
  display: flex;
  flex-direction: column;
  gap: 10px;
  /*background-color: #cbffce;*/
  align-items: center;
  opacity: 0.9;
}

.Slink {
  width: 300px;
  /*background-color: #fff5cb;*/
  font-family: 'Recursive', sans-serif;
  font-weight: bold;
  border-radius: 0.45em;
  color: #fff5cb;
  padding: 15px 2%;
  font-size: 2rem;
  text-align: start;
}

.seperated_line{
  width: 100%;
  border: solid 2px rgb(241, 241, 241);
}

.Souter{
  display: flex;
  flex-direction: row;
  gap: 50px;
  color: #fff5cb;
  padding-top: 5%;
  padding-right: 15%;
}

.Slink:hover {
  border-color: hsl(186, 100%, 78%);
  background-color: hsl(186 100% 78%);
  color: rgb(55, 55, 55);
  /*box-shadow: 0 0 0.75em 1px hsl(186 100% 78%);*/
  /*box-shadow:  hsl(187, 29%, 22%) 0px 50px 100px -20px, hsl(187, 29%, 22%) 0px 30px 60px -30px, hsl(187, 29%, 22%) 0px -2px 6px 0px inset;*/
  box-shadow: hsl(186 70% 78%) 5px 5px, hsl(186 70% 78%) 10px 10px, hsl(186 70% 78%) 15px 15px;
  transition: 0.5s;
}
#H:hover{
  border-color: hsl(301, 71%, 81%);
  background-color: hsl(301, 71%, 81%);
  color: rgb(55, 55, 55);
  /*box-shadow: 0 0 0.75em 1px hsl(186 100% 78%);*/
  /*box-shadow:  hsl(187, 29%, 22%) 0px 50px 100px -20px, hsl(187, 29%, 22%) 0px 30px 60px -30px, hsl(187, 29%, 22%) 0px -2px 6px 0px inset;*/
  box-shadow: hsl(301, 71%, 81%) 5px 5px, hsl(301, 71%, 81%) 10px 10px, hsl(301, 71%, 81%) 15px 15px;
  transition: 0.5s;
}
.SIC{
  position: relative;
  border-radius: 0.45em;
  padding: 10px;
  color: #ffffff;
}
.SIC:hover{
border-color: hsl(148, 100%, 78%);
background-color: hsl(148, 100%, 78%);
/*box-shadow: 0 0 0.75em 1px hsl(148, 100%, 78%);*/
/*box-shadow:  hsla(148, 100%, 78%, 0.411) 0px 50px 100px -20px, hsla(148, 100%, 78%, 0.411) 0px 30px 60px -30px, hsla(148, 100%, 78%, 0.411) 0px -2px 6px 0px inset;*/
box-shadow: hsl(148, 70%, 78%) 3px 3px, hsl(148, 70%, 78%) 5px 5px, hsl(148, 70%, 78%) 7px 7px;
transition: 0.5s;
color: #000;
}

.sidebar.active{
  right: 0;
}

.snav{
  right: 4%;
  position: fixed;
  z-index: 999;
  /*margin-right: 200px;
  width: 60px;*/
  padding: 0.75rem;
  display: flex;
  border-radius: 0.45em;
  /*background-color: rgb(0, 0, 0);*/
}
.snav:hover{
  border-color: hsl(22, 71%, 81%);
  background-color: hsl(22, 71%, 81%);
  box-shadow: hsl(22, 71%, 81%) 0px 48px 100px 0px;
}

.tl{
  height: 35px;
  width: 30px;
  margin-left: auto;
  position: relative;
  /*background-color: rgb(255, 0, 0);*/
}

.tl span {
  height: 3px;
  width: 100%;
  background-color: #ffffff;
  /*display: block;*/
  border-radius: 25px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: .3s ease;
}

.tl span:nth-child(1){
  top: 75%;
}

.tl span:nth-child(3){
  top: 25%;
}

.tl.active span:nth-child(1) {
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
.tl.active span:nth-child(2) {
  /*display: none;*/
  opacity: 0;
}
.tl.active span:nth-child(3) {
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}











@media (max-width: 2000px) {
    .IC {
      padding: 18px 10px;
      --fsa: 10px;
      --fsb: 18px;
    }
    .cover{
      display: none;
    }
    .snav{
      display: none;
    }
    #H{
      display: none;
    }
    #L{
      display: none;
    }
  }
  
  @media (max-width: 1100px) {
    .IC {
      padding: 15px 5px;
      --fsa: 5px;
      --fsb: 15px;
    }
    .cover{
      display: none;
    }
    .snav{
      display: none;
    }
    #H{
      display: none;
    }
  }

  @media (max-width: 900px) {
    .cover{
      display: none;
    }
    .snav{
      display: none;
    }
    #H{
      display: none;
    }
  }
  
  @media (max-width: 800px) {
    .t1 span{
      height: 2px;
    }
    .cover{
      display: flex;
    }
    .snav{
      display: flex;
    }
    .Slink{
      width:300px;
      font-size: 1.8rem;
    }
    .sidebar{
      width: 300px;
      right: -300px;
    }
  }
  
  @media (max-width: 480px){
    .Slink{
      width:250px;
      font-size: 1.25rem;
    }
    .sidebar{
      width: 250px;
      right: -250px;
    }
  }
  
  @media (max-width: 380px) {
    .Slink{
      width:150px;
      font-size: 1rem;
    }
    .sidebar{
      width: 150px;
      right: -150px;
    }
  }

  @media (max-width: 680px) {
    #H{
      display: flex;
    }
    #L{
      display: flex;
    }
  }  


</style>