<template>
    <div id="app">
        <div class="slides">
            <transition-group tag="div" :name="transitionName" class="img-boxex" >
                <div v-for="(img, idx) of imgs" :key="idx" 
                     class="img-box" v-show="idx === showImg">
                    <img :src="img.src" />
                    <span>{{ idx + 1 }}</span>
                </div>
            </transition-group>
            <div class="btn-group">
                <button class="prev" @click="setShowImg(-1)">◀</button>
                <button class="page" @click="setShowImgTo(num - 1)" 
                        v-for="num in imgs.length" :key="num - 1" >{{ num }}</button>
                <button class="next" @click="setShowImg(1)">▶</button>
            </div>
        </div>
    </div>
</template>

<script>
import img1 from '../../public/img/img1.jpg'
import img2 from '../../public/img/img2.jpg'
import img3 from '../../public/img/img3.jpg'
import img4 from '../../public/img/img4.jpg'
import img5 from '../../public/img/img5.jpg'

/*
onMounted(()=>{
    window.onscroll = function(){}
$(document).scrollTop();
$("img").offset().top;
$(window).height();
$("img").height();

var a = $("img").offset().top - $(document).scrollTop() - $(window).height();
var b = $("img").height() + $(window).height();
    });
*/

let timer;
const autoPlayInterval = 5000;

export default {
    data() {
        return {
            transitionName: "right-in",
            showImg: 0,
            imgsCount: 8,
            imgs: [{src: img1 },
                { src: img2 },
                { src: img3 },
                { src: img4 },
                { src: img5 }
            ]
        };
    },
    mounted() {
        setInterval(this.setShowImg, autoPlayInterval);
    },
    methods: {
        setShowImg(changeIdx = 1) {
            switch (true) {
                case changeIdx === 1 && this.showImg === this.imgs.length - 1:
                    this.showImg = 0;
                    break;
                case changeIdx === -1 && this.showImg === 0:
                    this.showImg = this.imgs.length - 1;
                    break;
                default:
                    this.showImg = this.showImg + changeIdx;
                    break;
            }
        },
        setShowImgTo(changeIdxTo) {
            this.showImg = changeIdxTo;
        }
    },
    watch: {
        showImg(nIdx, oIdx) {
            this.transitionName = nIdx > oIdx ? "right-in" : "left-in";
        }
    }
};
</script>

<style lang="scss">
#app {
    text-align: center;
    margin: auto;
}
.slides {
    margin: auto;
    padding: 3%;

    .img-boxex {

        position: relative;
        justify-content: center;
        width: 100%;
        /*height: 400px;*/
        overflow: hidden;

        .img-box {
            position: relative;
            display: flex;
            justify-content: center;

                        
            img{
                
                /*height: 400px;*/
                width: auto;
                box-shadow: 0px 0px 10px rgb(0 0 0 / 50%);
                border-radius: 0.25em;
            }

            
            span {
                /*height: 18px;
                width: 18px;*/
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                background-color: rgba(0, 0, 0, 0.7);
                /*padding: 5px 10px;*/
                color: #fff;
            }
        }
    }
}

.btn-group{
    margin: 10px;
}
button{
    background-color:antiquewhite;
    border-color: black;
}

/*
// transitionName(Next):'right-in'
.right-in-enter {              // 1-1:enter
    left: 100%;
}
.right-in-enter-active,      // 1-2:enter-active
.right-in-leave-active {     // 2-2:leave-active
    transition: left 0.5s;
}
.right-in-enter-to,          // 1-3:enter-to
.right-in-leave {            // 2-1:leave
    left: 0%;
}
.right-in-leave-to {        // 2-3:leave-to
    left: -100%;
}

// transitionName(Prev):'left-in'
.left-in-enter {            // 1-1:enter
    right: 100%;
}
.left-in-enter-active,      // 1-2:enter-active
.left-in-leave-active {     // 2-2:leave-active
    transition: right 0.5s;
}
.left-in-enter-to,           // 1-3:enter-to
.left-in-leave {            // 2-1:leave
    right: 0%;
}
.left-in-leave-to {         // 2-3:leave-to
    right: -100%;
}
*/



@media (max-width: 2000px) {
    .img-box{
        height: 650px;
    }
    img{
        height: 650px;
    }
    span{
        width: 10px;
        height: 18px;
        padding: 5px 10px;
    }
}

@media (max-width: 1100px) {
    .img-box{
        height: 400px;
    }
    img{
        height: 400px;
    }
}


@media (max-width: 900px) {
}

@media (max-width: 800px) {
    .img-box{
        height: 350px;
    }
    img{
        height: 350px;
    }
    span{
        width: 8px;
        height: 16px;
        padding: 3px 6px;
    }
}

@media (max-width: 480px){
    .img-box{
        height: 250px;
    }
    img{
        height: 250px;
    }
    span{
        width: 5px;
        height: 14px;
        padding: 2px 4px;
    }
}

@media (max-width: 380px) {
    .img-box{
        height: 190px;
    }
    img{
        height: 190px;
    }
    button{
        width: 18px;
        height: 18px;
    }
}



</style>
