<script setup>
    import Pic from '../components/Picture.vue'
    const googleMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.3608234143226!2d121.28280122541814!3d24.98785247784639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f152c89a1dd%3A0x29a6f94875f3563!2z5qGD5ZyS5biC56uL5q2m6Zm16auY57Sa5Lit562J5a245qCh!5e0!3m2!1szh-TW!2stw!4v1716393645959!5m2!1szh-TW!2stw";
    const googleMapsLink = "https://www.google.com/maps/place/%E6%A1%83%E5%9C%92%E5%B8%82%E7%AB%8B%E6%AD%A6%E9%99%B5%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1/@24.987672,121.2857263,15z/data=!4m2!3m1!1s0x0:0x29a6f94875f3563?sa=X&ved=1t:2428&ictx=111";
    const eventDate = "2024/5/23 12:30~17:00";
    const eventTime = "2024/5/24 08:00~12:30";
    const eventLocation = "330桃園市桃園區中山路889號";
    const eventDescription = `本獨立研究成果發表會旨在提倡科學研究。藉由各組別的成果報告，讓大家認識不同科目的專業領域，並提升對科學的愛好與熱忱。本校數理資優班的專題研究組別共分成數學、物理、化學和生物四個科目。每組成員對該科的知識內容進行更深層的探討，結合文獻探究及創意，完成一篇專題獨立研究。透過舉辦此活動，鼓勵數理資優班學生積極投入實驗研究，並讓同學們能有機會在活動中發表一整年努力的成果。此外，我們也希望此活動能促進校際學術交流，並讓大家一睹學生們在專題研究過程中的收穫與成長。`;
    const googleCalendarLink = "https://www.instagram.com/metamorphosis_wlmgc_35th/";

</script>

<template>
    <div class="start">
        <h1 id="title">桃園市立武陵高級中學</h1>
        <h1>數理資優班第35屆成果發表</h1>

        <div class="pic">
            <h2>主題與合照</h2>
                <Pic />
        </div>
        <div class="wor">
            <h3>
                Let us undergo metamorphosis.
            </h3>
            <div class="m">

                <div class="T">
                    <h4>舉辦時間</h4>
                    <span>{{ eventDate }}</span>
                    <br>
                    <span>{{ eventTime }}</span>
                    <br>
                    <a :href="googleCalendarLink" target="_blank" rel="noopener">加入Google Calendar</a>
                </div>

                <div class="W">
                    <h4>舉辦地點</h4>
                    <span>{{ eventLocation }}</span>
                    <br>
                    <a :href="googleMapsLink" target="_blank" rel="noopener">在Google Maps上查看</a>
                </div>

            </div>

                <iframe
                    :src="googleMapsEmbedSrc"
                    width="100%"
                    height="360"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            <div class="ww">
                <h5>活動宗旨與簡介</h5>
                <p>{{ eventDescription }}</p>
            </div>
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
h1{
    display: flex;
    justify-content: center; 
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 0%;
}
h2{
    display: flex;
    margin-top: 3%;
    margin-left: 3%;
    margin-bottom: 0%;
}
.pic{
    margin-top: 6%;
    background-color: rgb(202, 189, 171);
    border-radius: 0.25em;
    opacity: 100%;
}
.wor{
    margin-top: 2%;
    background-color: rgb(202, 189, 171);
    border-radius: 0.25em;
    opacity: 100%;
}
h3{
    font-family: Snell Roundhand;
    font-style: italic;
    color: #45626c;
}
.m{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 2%;
    padding-right: 2%;
    margin-top: -3%;
    margin-bottom: 3%;
}
.T{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.W{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h4{
    font-family: monospace;
    font-weight: bold;
    color: #000000;
    margin-bottom: 5%;
}
span{
    width: 100%;
    font-family: monospace;
    font-weight: bold;
    color: #ffffff;
}
a{
    font-family: monospace;
    font-weight: bold;
    color: #010fad;

}
.ww{
    display: flex;
    flex-direction: column;
    justify-items: center;
}
h5{
    font-family: monospace;
    font-weight: bold;
    color: #000000;
    margin-top: 5%;
    margin-bottom: 0%;
}
p{
    margin-top: -5%;
    margin: 3%;
}


@media (max-width: 2000px) {
    h1{
        font-size: 3em;
    }
    h2{
        font-size: 2.25em;
    }
    h3{
        font-size: 2.5em;
    }
    h4{
        font-size: 2.5em;
    }
    h5{
        font-size: 2.5em;
    }
    span{
        font-size: 2em;
    }
    a{
        font-size: 2em;
    }
    p{
        font-size: 1.5em;
    }
  }
  
  @media (max-width: 1100px) {
    h1{
        font-size: 2.5em;
    }
    h2{
        font-size: 2em;
    }
    h3{
        font-size: 2.25em;
    }
    h4{
        font-size: 2em;
    }
    h5{
        font-size: 2em;
    }
    span{
        font-size: 1.5em;
    }
    a{
        font-size: 1.5em;
    }
    p{
        font-size: 1.25em;
    }
  }

  @media (max-width: 900px) {

  }
  
  @media (max-width: 800px) {
    h1{
        font-size: 1.9em;
    }
    h2{
        font-size: 1.4em;
    }
    h3{
        font-size: 2em;
    }
    h4{
        font-size: 1.75em;
    }
    h5{
        font-size: 1.75em;
    }
    span{
        font-size: 1.25em;
    }
    a{
        font-size: 1.25em;
    }
    p{
        font-size: 1em;
    }
  }
  
  @media (max-width: 480px){
    h1{
        font-size: 1.7em;
    }
    h2{
        font-size: 1.25em;
    }
    h3{
        font-size: 1.4em;
    }
    h4{
        font-size: 1em;
    }
    h5{
        font-size: 1em;
    }
    span{
        font-size: 0.8em;
        margin: -5%;
    }
    a{
        font-size: 0.8em;
    }
    p{
        font-size: 0.7em;
    }
  }
  
  @media (max-width: 380px) {
    h1{
        font-size: 1.4em;
    }
    h3{
        font-size: 1.2em;
    }
    h4{
        font-size: 0.9em;
    }
    h5{
        font-size: 0.9em;
    }
    span{
        font-size: 0.7em;
        margin: -5%;
    }
    a{
        font-size: 0.7em;
    }
    p{
        font-size: 0.6em;
    }
  }



</style>