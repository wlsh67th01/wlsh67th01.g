<script setup>
  import { createApp } from "vue";
  import VueFeather from 'vue-feather';
  feather.replace();
  const app = createApp({});
  app.component(VueFeather.name, VueFeather);

  import Sidebar from "./Sidebar.vue";
  import feather from "feather-icons";
  
  /*
  import Home from "@/views/Home.vue";
  import About from "@/views/About.vue";
  import Categories from "@/views/Categories.vue";
  import Contact from "@/views/Contact.vue";
  import Schedule from "@/views/Schedule.vue";*/

</script>


<template>
        <nav class="navbar">
            <div class="C1">
              <!--RouterLink :to="Home" class="GH">Metamorphosis</RouterLink-->
              <router-link to="/" class="GH">Metamorphosis</router-link>
            </div>
            <div class="C2">
              <!--RouterLink :to='About' class="link">About</RouterLink-->
              <router-link to="/about" class="link">About</router-link>
              <router-link to="/categories" class="link">Categories</router-link>
              <router-link to="/schedule" class="link">Sechedule</router-link>
              <router-link to="/contact" class="link">Contact</router-link>
            </div>
            <div class="C3">
              <a href="https://www.instagram.com/metamorphosis_wlmgc_35th/" 
              target="_blank" rel="noooener" class="IC" >
                <vue-feather type="instagram" size="20"></vue-feather>
              </a>

              <a href="https://youtu.be/3DID-vTnjo8?si=GUZ8gtnGVIQEIU1p" 
              target="_blank" rel="noooener" class="IC" >
                <vue-feather type="youtube" size="20"></vue-feather>
              </a>

            </div>
            <Sidebar />
        </nav>
</template>


<style scoped>
  :root{
    --font-size:a;
  }
  .navbar{
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5% 3%;
    background-color: rgba(10, 10, 70, 0.7);
  }
  .C1{
    display: flex;
    align-items: center;
    opacity: 0.9;
  }
  .C2{
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0.9;
  }
  .C3{
    display: flex;
    align-items: center;
    opacity: 0.9;
  }
  .GH{
    text-align: center;
    font-weight: bold;
    font-family:  cursiveFont, sans-serif;
    text-decoration: none;
    color: #fff5cb;
    padding: 5%;
    border-radius: 0.45em;
  }
  .GH:hover{
    border-color: hsl(301, 71%, 81%);
    background-color: hsl(301, 71%, 81%);
    /*box-shadow: 0 0 0.5em 0.5px hsl(301, 71%, 81%);*/
    /*box-shadow: hsl(303, 15%, 28%) 0px 50px 100px -20px, hsl(303, 15%, 28%) 0px 30px 60px -30px, hsl(303, 15%, 28%) 0px -2px 6px 0px inset;*/
    box-shadow: hsl(301, 50%, 81%) 5px 5px, hsl(301, 50%, 81%) 10px 10px, hsl(301, 50%, 81%) 15px 15px, hsl(301, 50%, 81%) 20px 20px, hsl(301, 50%, 81%) 25px 25px;
    color: rgb(55, 55, 55);
    transition: 0.5s;
    
  }
  .link {
    min-width: fit-content;
    font-family: 'Recursive', sans-serif;
    text-decoration: none;
    font-weight: bold;
    border-radius: 0.45em;
    text-align: center;
    color: #fff5cb;
    padding: 15px 2%;
  }
  .link:hover {
    border-color: hsl(186, 100%, 78%);
    background-color: hsl(186 100% 78%);
    color: rgb(55, 55, 55);
    /*box-shadow: 0 0 0.75em 1px hsl(186 100% 78%);*/
    /*box-shadow:  hsl(187, 29%, 22%) 0px 50px 100px -20px, hsl(187, 29%, 22%) 0px 30px 60px -30px, hsl(187, 29%, 22%) 0px -2px 6px 0px inset;*/
    box-shadow: hsl(186 70% 78%) 5px 5px, hsl(186 70% 78%) 10px 10px, hsl(186 70% 78%) 15px 15px;
    transition: 0.5s;
  }
  .IC{
    /*width: 20px;*/
    height: auto;
    position: relative;
    border-radius: 0.45em;
    color: white;
  }
  .IC:hover{
    color: black;
    border-color: hsl(148, 100%, 78%);
    background-color: hsl(148, 100%, 78%);
    /*box-shadow: 0 0 0.75em 1px hsl(148, 100%, 78%);*/
  /*box-shadow:  hsla(148, 100%, 78%, 0.411) 0px 50px 100px -20px, hsla(148, 100%, 78%, 0.411) 0px 30px 60px -30px, hsla(148, 100%, 78%, 0.411) 0px -2px 6px 0px inset;*/
    box-shadow: hsl(148, 70%, 78%) 3px 3px, hsl(148, 70%, 78%) 5px 5px, hsl(148, 70%, 78%) 7px 7px;
    transition: 0.5s;
  }

  @media (max-width: 2000px) {
    .GH {
      font-size: 3.75rem;
    }
  
    .link {
      font-size: 1.1rem;
      width: 100px;
    }
  
    .IC {
      padding: 18px 10px;
      --fsa: 10px;
      --fsb: 18px;
    }

  }
  
  @media (max-width: 1100px) {
    .GH {
      font-size: 3rem;
    }
  
    .link {
      font-size: 0.9rem;
      width: 70px;
    }
    .IC {
      padding: 15px 5px;
      --fsa: 5px;
      --fsb: 15px;
    }
  }

  @media (max-width: 900px) {
    .GH {
      font-size: 2.75rem;
    }
  }
  
  @media (max-width: 800px) {
    .C2 {
      display: none;
    }
  
    .C3 {
      display: none;
    }
  }
  
  @media (max-width: 480px){
    .GH {
      font-size: 2rem;
    }
  }
  
  @media (max-width: 380px) {
    .GH {
      font-size: 1.6rem;
    }
    .navbar{
      height: 50px;
    }
  }

  @media (max-width: 680px) {
    .GH{
      display: none;
    }
    .navbar{
      height: 70px;
    }
  }
</style>