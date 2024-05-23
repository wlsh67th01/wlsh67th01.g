<script setup>
import { ref, onMounted } from 'vue';
function switchShow(newShow) {
    activeShow.value = newShow;
  }
let activeShow = ref('0')

const d1 = '任重「稻」遠─ 真核起始因子 4A-2 基因對水稻在逆境中的影響探討'
const d11= '作者：魏全儀、許靖、賴宥霖'
const d12 = '為了研究以基因改造提高糧食作物對逆境抗性的可能性，並了解特定基因 在其中扮演的角色，我們用基因槍和 CRISPR/Cas9 技術對常見的水稻進行基因 修改，嘗試剔除和 stress granules 有關的兩個基因，看是否會對水稻在不同逆境 中的表現造成影響。在對水稻癒傷組織進行基改後透過抗生素篩選出成功的組 織，並抽取其 DNA 和質體，以聚合酶連鎖反應處理後透過膠體電泳確認基因改 造後的結果，並將成功的組織培養成完整的植珠。最後成功確定基因改造的可 行性，但尚未對其抗逆境的能力進行實驗。'
const d2 = '汲汲「蠅蠅」—解析公母果蠅不同年齡間多巴胺之釋放量'
const d21= '作者：廖志允 陳宇鋒'
const d22 = '性別，一個會廣泛性影響許多生理與心理反應的因子，過去研究認為其原因莫過於 不同性別間多巴胺與多巴胺受器在不同性別間表現量差異所導致，然而更進一步的神經 迴路與機制仍不清楚，所以在本篇研究中，我們希望透過果蠅這個模式生物，來解析不 同性別間蕈狀體(mushroom body, MB)上游原腦前內側神經元 (protocerebral anterior medial, PAM)多巴胺釋放量上的差異。更進一步的，由於年老對於生物來說是非常重要的生理因 子，它會透過改變多巴胺神經元直接影響生物的體內反應與決策過程，更甚至會導致神 經相關的疾病發生，且原腦前內側神經元亦有參與在年老相關的行為中，所以我們想知 道年老與性別這兩項因子對於原腦前內側神經元多巴胺的釋放量是否會造成影響。我們 將分析不同性別與年紀之果蠅的酪胺酸羥化酶 (tyrosine hydroxylase, TH) 表現量差異推測多 巴胺的釋放量，我們發現到雖然公母果蠅在相同年齡間的釋放量並無差異，但在面對老 化的過程中，公果蠅原腦前內側神經元多巴胺釋放量下降的速度遠高於母果蠅。我們期 望透過這個研究能讓科學家進一步探討與性別和老化相關的神經疾病。'

</script>



<template>
  <div class="nt1">
    <div class="t1" @click="switchShow('d1')">
      <div class="a1">{{ d1 }}</div>
      <div class="a11">{{ cd1 }}</div>
    </div>
    <div class="t1" @click="switchShow('d2')">
      <div class="a1">{{ d12 }}</div>
      <div class="a11">{{ d21 }}</div>
    </div>
  </div>



<div v-if="activeShow === 'd1'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0')">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../img/d1.jpg" class="img">
    <h3>{{ d1 }}</h3>
    <h4>{{d11}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/10SlsOvHczAfkPeSXfScJv4Yi49X6WDyU/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ d12 }}</h7></div>
  </div>
</div>

<div v-if="activeShow === 'd2'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0')">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../img/d2.jpg" class="img">
    <h3>{{ d2 }}</h3>
    <h4>{{d21}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1egtRSZ8HtzMFjWfmlhUFhP64oKpUvQqe/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ d22 }}</h7></div>
  </div>
</div>

</template>