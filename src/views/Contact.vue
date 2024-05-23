<script setup>
  import feather from "feather-icons";
  import VueFeather from 'vue-feather';

</script>
<template>
    <div class="start">
        <h1>Contact</h1>
        <div>
            <a href="https://www.instagram.com/metamorphosis_wlmgc_35th/"
            target="_blank" rel="noopener noreferrer" style="text-decoration:none" class="a">
                <div class="b">
                    <div class="IC"><vue-feather type="instagram" size="20"></vue-feather></div>
                    <h2>Instagram</h2>
                </div>
            </a>
            <a href="https://youtu.be/3DID-vTnjo8?si=GUZ8gtnGVIQEIU1p"
            target="_blank" rel="noopener noreferrer" style="text-decoration:none" class="a">
                <div class="b">
                    <div class="IC"><vue-feather type="youtube" size="20"></vue-feather></div>
                    <h2>Youtube</h2>
                </div>
            </a>
            <a href="mailto:wlsh.physics.67th@gmail.com"
            target="_blank" rel="noopener noreferrer" style="text-decoration:none" class="a">
                <div class="b">
                    <div class="IC"><vue-feather type="mail" size="20"></vue-feather></div>
                    <h2>Email</h2>
                </div>
            </a>
        </div>
        
    </div>
</template>

<style scoped>
    .start{
    display: flex;
    flex-direction: column;
    margin: 5%;
    padding: 1em;
    border-radius: 0.25em;
    background-color: antiquewhite;
    opacity: 80%;
    }
    .a{
        width: 200px;
    }
    .b{
        display: flex;
        flex-direction: row;
        justify-content: start;
        background-color: rgb(173, 255, 254);
        border-radius: 0.25em;
    }
    .b:hover{
        background-color: rgb(255, 161, 144);
        border-radius: 0.25em;
    }
    .IC{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: auto;
        color: #474dfe;
    }
    h2{
        font-family: 'Courier New', Courier, monospace;
        color: #000;
        font-style: normal;
    }





@media (max-width: 2000px) {
    h1{font-size: 3em;}
    h2{font-size: 2em;}
}

@media (max-width: 1100px) {
    h1{font-size: 2.5em;}
}

@media (max-width: 900px) {

}

@media (max-width: 800px) {
    h1{font-size: 1.9em;}
    h2{font-size: 1.5em;}
}

@media (max-width: 480px){
    h1{font-size: 1.9em;}
    h2{font-size: 1.3em;}
}

@media (max-width: 380px) {
    h1{font-size: 1.5em;}
    h2{font-size: 1em;}
}

</style>