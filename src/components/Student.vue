<script setup>
import { ref, onMounted } from 'vue';
  function switchTab(newTab) {
    activeTab.value = newTab;
  }
  let activeTab = ref('0');
const a = ref(['王加葉' , '王彥捷' , '王璿宇' , '江孟恩' , '吳季澤' , '吳宥廷'])
const b =  ref(['李宗洋' , '周秉宏' , '林威廷' , '邱澤' , '胡睿宸' , '梁勝宥'])
const c =  ref(['許靖' , '陳宇鋒' , '陳定均' , '陳羿嘉' , '陳泰然' , '楊恩睿'])
const d =  ref(['葉家維' , '廖志允' , '蒙定暘' , '趙子耀' , '蔡承佑' , '蔡承恩'])
const e =  ref(['鄧福寬' , '盧宣滈' , '賴宥霖' , '林詠晴' , '魏全儀'])

</script>


<template>
      <div class="BB" >
        <div id="hh">
          <div
        v-for="a in a" :key="a"  @click="switchTab(a)">
          <p1 v-bind:id="a" class="a">
            {{ a  }}
          </p1>
          <br/>
          <br/>
          <br/>
        </div>
        </div>

        <div id="hh">
        <div
        v-for="b in b" :key="b"  @click="switchTab(b)">
          <p1 v-bind:id="b" class="b">
            {{ b  }}
          </p1>
          <br/>
          <br/>
          <br/>
        </div>
      </div>

      <div id="hh">
        <div
        v-for="c in c" :key="c"  @click="switchTab(c)">
          <p1 v-bind:id="c" class="c">
            {{ c  }}
          </p1>
          <br/>
          <br/>
          <br/>
        </div>
      </div>

      <div id="hh">
        <div
        v-for="d in d" :key="d"  @click="switchTab(d)">
          <p1 v-bind:id="d" class="d">
            {{ d  }}
          </p1>
          <br/>
          <br/>
          <br/>
        </div>
      </div>

      <div id="hh">
        <div
        v-for="e in e" :key="e"  @click="switchTab(e)">
          <p1 v-bind:id="e" class="e">
            {{ e  }}
          </p1>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>

<div class="AA">
  <div v-if="activeTab === '王加葉'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/1.jpg" class="pho">
      <h2>王加葉</h2>
      <h3>數學組</h3>
      <h4>工作：活動</h4>
    </div>
  </div>

  <div v-if="activeTab === '王彥捷'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/2.jpg" class="pho">
      <h2>王彥捷</h2>
      <h3>化學組</h3>
      <h4>工作：活動</h4>
    </div>
  </div>

  <div v-if="activeTab === '王璿宇'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/3.jpg" class="pho">
      <h2>王璿宇</h2>
      <h3>數學組</h3>
      <h4>工作：總務</h4>
    </div>
  </div>

  <div v-if="activeTab === '江孟恩'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/4.jpg" class="pho">
      <h2>江孟恩</h2>
      <h3>物理組</h3>
      <h4>工作：活動(組長)</h4>
    </div>
  </div>

  <div v-if="activeTab === '吳季澤'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/5.jpg" class="pho">
      <h2>吳季澤</h2>
      <h3>化學組</h3>
      <h4>工作：公關(組長)​​</h4>
    </div>
  </div>

  <div v-if="activeTab === '吳宥廷'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/6.jpg" class="pho">
      <h2>吳宥廷</h2>
      <h3>物理組</h3>
      <h4>工作：總務</h4>
    </div>
  </div>

  <div v-if="activeTab === '李宗洋'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/7.jpg" class="pho">
      <h2>李宗洋</h2>
      <h3>物理組</h3>
      <h4>工作：總務</h4>
    </div>
  </div>

  <div v-if="activeTab === '周秉宏'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/8.jpg" class="pho">
      <h2>周秉宏</h2>
      <h3>化學組</h3>
      <h4>工作：活動</h4>
    </div>
  </div>

  <div v-if="activeTab === '林威廷'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/9.jpg" class="pho">
      <h2>林威廷</h2>
      <h3>物理組</h3>
      <h4>工作：總務</h4>
    </div>
  </div>

  <div v-if="activeTab === '邱澤'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/10.jpg" class="pho">
      <h2>邱澤</h2>
      <h3>數學組</h3>
      <h4>工作：總務(組長)</h4>
    </div>
  </div>

  <div v-if="activeTab === '胡睿宸'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/11.jpg" class="pho">
      <h2>胡睿宸</h2>
      <h3>物理組</h3>
      <h4>工作：活動</h4>
    </div>
  </div>

  <div v-if="activeTab === '梁勝宥'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/12.jpg" class="pho">
      <h2>梁勝宥</h2>
      <h3>物理組</h3>
      <h4>工作：活動</h4>
    </div>
  </div>

  <div v-if="activeTab === '許靖'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/13.jpg" class="pho">
      <h2>許靖</h2>
      <h3>生物組</h3>
      <h4>工作：燈光音控​​</h4>
    </div>
  </div>

  <div v-if="activeTab === '陳宇鋒'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/14.jpg" class="pho">
      <h2>陳宇鋒</h2>
      <h3>生物組</h3>
      <h4>工作：燈光音控</h4>
    </div>
  </div>

  <div v-if="activeTab === '陳定均'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/15.jpg" class="pho">
      <h2>陳定均</h2>
      <h3>化學組</h3>
      <h4>工作：美軒(組長)​​</h4>
    </div>
  </div>

  <div v-if="activeTab === '陳羿嘉'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/16.jpg" class="pho">
      <h2>陳羿嘉</h2>
      <h3>物理組</h3>
      <h4>工作：公關</h4>
    </div>
  </div>

  <div v-if="activeTab === '陳泰然'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/17.jpg" class="pho">
      <h2>陳泰然</h2>
      <h3>化學組</h3>
      <h4>工作：公關</h4>
    </div>
  </div>

  <div v-if="activeTab === '楊恩睿'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/18.jpg" class="pho">
      <h2>楊恩睿</h2>
      <h3>化學組</h3>
      <h4>工作：公關</h4>
    </div>
  </div>

  <div v-if="activeTab === '葉家維'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/19.jpg" class="pho">
      <h2>葉家維</h2>
      <h3>物理組</h3>
      <h4>工作：活動</h4>
    </div>
  </div>

  <div v-if="activeTab === '廖志允'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/20.jpg" class="pho">
      <h2>廖志允</h2>
      <h3>生物組</h3>
      <h4>工作：總務</h4>
    </div>
  </div>

  <div v-if="activeTab === '蒙定暘'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/21.jpg" class="pho">
      <h2>蒙定暘</h2>
      <h3>化學組</h3>
      <h4>工作：公關</h4>
    </div>
  </div>

  <div v-if="activeTab === '趙子耀'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/22.jpg" class="pho">
      <h2>趙子耀</h2>
      <h3>化學組</h3>
      <h4>工作：美軒​​</h4>
    </div>
  </div>

  <div v-if="activeTab === '蔡承佑'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/23.jpg" class="pho">
      <h2>蔡承佑</h2>
      <h3>物理組</h3>
      <h4>工作：美軒​​</h4>
    </div>
  </div>

  <div v-if="activeTab === '蔡承恩'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/24.jpg" class="pho">
      <h2>蔡承恩</h2>
      <h3>化學組</h3>
      <h4>工作：活動</h4>
    </div>
  </div>

  <div v-if="activeTab === '鄧福寬'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/25.jpg" class="pho">
      <h2>鄧福寬</h2>
      <h3>物理組</h3>
      <h4>工作：總務</h4>
    </div>
  </div>

  <div v-if="activeTab === '盧宣滈'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/26.jpg" class="pho">
      <h2>盧宣滈</h2>
      <h3>物理組</h3>
      <h4>工作：副召</h4>
    </div>
  </div>

  <div v-if="activeTab === '賴宥霖'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/27.jpg" class="pho">
      <h2>賴宥霖</h2>
      <h3>生物組</h3>
      <h4>工作：美軒​​</h4>
    </div>
  </div>

  <div v-if="activeTab === '林詠晴'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/28.jpg" class="pho">
      <h2>林詠晴</h2>
      <h3>化學組</h3>
      <h4>工作：總召</h4>
    </div>
  </div>

  <div v-if="activeTab === '魏全儀'" class="A">
    <div class="cot">
      <div class="Back" @click="switchTab('0')">
        <p2>關閉視窗</p2>
      </div>
      <img src="../../public/img/29.jpg" class="pho">
      <h2>魏全儀</h2>
      <h3>生物組</h3>
      <h4>工作：美軒、燈光音控​​</h4>
    </div>
  </div>





</div>



</template>



<style scoped>
.BB{
  width: 83%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 7px;
}
#hh{
  padding-top: 10px;
}
.a{
  position: relative;
  padding: 8px;
  background-color: hsl(186 100% 78%);
  color: rgb(55, 55, 55);
  font-weight: 700;
  font-size: 1.25em;
  border-radius: 0.25em;
}
.a:hover{
  background-color: hsla(237, 100%, 78%, 0.739);
  color: rgb(255, 255, 255);
  border-radius: 0.25em;
}
.b{
  position: relative;
  padding: 8px;
  background-color: hsl(186 100% 78%);
  color: rgb(55, 55, 55);
  font-weight: 700;
  font-size: 1.25em;
  border-radius: 0.25em;
}
.b:hover{
  background-color: hsla(237, 100%, 78%, 0.739);
  color: rgb(255, 255, 255);
  border-radius: 0.25em;
}
.c{
  position: relative;
  padding: 8px;
  background-color: hsl(186 100% 78%);
  color: rgb(55, 55, 55);
  font-weight: 700;
  font-size: 1.25em;
  border-radius: 0.25em;
}
.c:hover{
  background-color: hsla(237, 100%, 78%, 0.739);
  color: rgb(255, 255, 255);
  border-radius: 0.25em;
}
.d{
  position: relative;
  padding: 8px;
  background-color: hsl(186 100% 78%);
  color: rgb(55, 55, 55);
  font-weight: 700;
  font-size: 1.25em;
  border-radius: 0.25em;
}
.d:hover{
  background-color: hsla(237, 100%, 78%, 0.739);
  color: rgb(255, 255, 255);
  border-radius: 0.25em;
}
.e{
  position: relative;
  padding: 8px;
  background-color: hsl(186 100% 78%);
  color: rgb(55, 55, 55);
  font-weight: 700;
  font-size: 1.25em;
  border-radius: 0.25em;
}
.e:hover{
  background-color: hsla(237, 100%, 78%, 0.739);
  color: rgb(255, 255, 255);
  border-radius: 0.25em;
}
.AA{
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 13%;
  margin-top: 0;
  font-size: 2em;
  position: absolute;
  background-color: rgb(242, 168, 244);
}
.cot{
  height: 550px;
  overflow: scroll;
}
.Back{
  margin-left: 10%;
  margin-top: 1%;
  width: 80%;
  height: 40px;
  position: absolute;
  background-color: rgb(255, 92, 206);
  border-radius: 0.25em;
}
.Back:hover{
  background-color: hsla(0, 100%, 52%, 0.604);
  color: rgb(255, 255, 255);
  border-radius: 0.25em;
}
.pho{
  margin-top: 50px;
}
h2{
  font-weight: 400;
  font-size: 1em;
}
h3{
  margin-top: -20px;
  font-weight: 400;
  font-size: 0.7em;
  color: #006954;
}
h4{
  margin-top: -20px;
  font-weight: 400;
  font-size: 0.7em;
  color: #006954;
}



@media (max-width: 2000px) {
  .a{font-size: 2em;}
  .b{font-size: 2em;}
  .c{font-size: 2em;}
  .d{font-size: 2em;}
  .e{font-size: 2em;}
  .Back{height: 40px;}
  p2{font-size: 1em;}
  h2{font-size: 1em;}
  h3{font-size: 0.7em;}
  h4{font-size: 0.7em;}
}

@media (max-width: 1100px) {
  .a{font-size: 1.5em;}
  .b{font-size: 1.5em;}
  .c{font-size: 1.5em;}
  .d{font-size: 1.5em;}
  .e{font-size: 1.5em;}
}

@media (max-width: 900px) {
  .Back{height: 35px;}
  p2{font-size: 0.9em;}
  h2{font-size: 0.9em;}
  h3{font-size: 0.6em;}
  h4{font-size: 0.6em;}
}


@media (max-width: 800px) {
  .a{font-size: 1.15em;}
  .b{font-size: 1.15em;}
  .c{font-size: 1.15em;}
  .d{font-size: 1.15em;}
  .e{font-size: 1.15em;}
  .cot{
    height: 400px;
  }
}

@media (max-width: 480px){
  .a{font-size: 0.9em;}
  .b{font-size: 0.9em;}
  .c{font-size: 0.9em;}
  .d{font-size: 0.9em;}
  .e{font-size: 0.9em;}
  .Back{height: 30px;}
  p2{font-size: 0.8em;}
  h2{font-size: 0.8em;}
  h3{font-size: 0.5em;}
  h4{font-size: 0.5em;}
}

@media (max-width: 380px) {
  .a{font-size: 0.7em;}
  .b{font-size: 0.7em;}
  .c{font-size: 0.7em;}
  .d{font-size: 0.7em;}
  .e{font-size: 0.7em;}
  .cot{
    height: 350px;
  }
  p2{font-size: 0.7em;}
  h2{font-size: 0.7em;}
  h3{font-size: 0.4em;}
  h4{font-size: 0.4em;}
}

</style>