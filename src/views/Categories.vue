<!--script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  }
}
</script-->




<script setup>
import { ref, onMounted } from 'vue';
import { createApp } from "vue";
  import VueFeather from 'vue-feather';
  feather.replace();
  const app = createApp({});
  app.component(VueFeather.name, VueFeather);
  import feather from "feather-icons";
import Student from '@/components/Student.vue';
const tabs = ref(['小冊子', '數學組', '物理組', '化學組','生物組']);
let activeTab = ref('小冊子');
let activeShow = ref('0')
const popupVisible = ref(false);
const selectedWork = ref(null);

const a01 = '【三十秒自戀一下】講義中的自主練習(自戀)老師總是覺得我們很快就會寫完，但實際上，我們幾乎沒有成功過'
const a02 = '【講義笑點總是很多】在老師的講義中，總是放了許多有趣的插圖，所以大家拿到講義第一件事，通常都是直接看完所有的插圖。'
const a03 = '【口頭禪】”休息一下吧！” '
const a04 = '【倒數風格很有趣】老師在我們成發倒數影片的創意得到大家一致的認可，但拍完就受傷了，希望老師早日康復。'
const b01 = '【是位youtuber】總是會在youtube上分享一些物理知識，讓我們可以獲得更多豐富的知識'
const b02 = '【桌球熱愛者】有一次在我們打桌球班際前，老師甚至還花了快半小時教我們怎麼攻克對手。'
const b03 = '【板書超級好看】每次上完課，下節課的老師走進來，都會驚嘆慈甦老師的字怎麼這麼好看，簡直就像在寫書法一樣。'
const b04 = '【超級暖男】會為了慶祝老婆(或小孩)生日，跟我們說提早一點放學(他要去準備禮物)，也是一個好爸爸'
const c01 ='【上課都在趕進度】常常可以看到老師匆匆忙忙的跑進班上，並一直說進度快要來不及了。'
const c02 ='【五四三只能扯三分鐘】老師分享人生故事時，總是想要控制在三分鐘內講完，但有時候會有些困難。有一次，他甚至講了超過30分鐘。'
const c03 ='【桌球超強】老師的桌球技術非常高超，他曾經說過，如果不能當化學老師，他就會去教桌球。'
const c04 ='【理財大佬】教導我們只是他的興趣，事實上他光房地產根本不用工作(所得還比當教職員高)。人也非常大方，請化學組吃飯時常被其他組一起蹭'
const d01 ='【網球熱愛者】每次早上上課前，和下午放學後，總是可以看到他在網球場上打網球，而且還超強的'
const d02 ='【講話超好笑】老師上課時經常會冒出一些經典語錄，甚至有同學為他創建了粉絲專頁來分享這些語錄。不過，老師自己常常不覺得他在搞笑。'
const d03 ='【來賭奧利多水】老師常常用奧利多水來賭我們的段考成績，他自認很少輸。但就我們班的經驗來看，似乎很難見到他一直贏。'
const d04 ='【口頭禪】”誒我這個比喻好嗎？” “其中的Know How 還不是很清” “這是基本單字”'




const a1  = '兩全等多邊形重疊部分的邊長面積探討'
const a11 = '作者：王加葉、王璿宇、邱澤'
const a12 = '本研究最初將一正方形旋轉一角度並平移適當距離後得到一新正方形，再將原正方形與新正方形重疊，使其重疊處為一個八邊形，研究其旋轉角度的變化關係以及平移距離的範圍。接著，定此八邊形的其中一邊為𝑎1，其餘邊由𝑎1的逆時鐘方向依序定為𝑏1、𝑎2、𝑏2、𝑎3、𝑏3、𝑎4、𝑏4，探討𝑎1～𝑎4正整數次方後之和與𝑏1～𝑏4的正整數次方後之和之相等關係。 而後，我們將正方形拓展至正 n 邊形及其他特殊 n 邊形，以相同方式探討重疊部分的多邊形之邊長性質，並得出各性質。'


const b1 = '螺震舞鬥—探討螺絲下滑的震盪現象'
const b11= '作者：江孟恩、胡睿宸、陳羿嘉'
const b12 = '當一個螺絲以一定角度擺放於平整的斜面下滑時，螺絲的擺盪振幅也會隨著下滑的距離增 加。我們以此現象為基準去設計更符合我們所需要觀察數據的自製螺絲，我們以角錐為模型 去設計不同直徑、角錐角度以及螺桿的自製螺絲，並以滑軌錄影的方式透過 Tracker 去分析 不同的擺放角度和螺絲下對其震盪增幅的影響，再繪製圖表歸納其中不同數據的相關性。而 我們也發現螺絲下滑速度必須超過臨界速度才會有震盪的存在，並以一般物理分析以及反阻 尼分析去解釋震盪的現象。'
const b2 = 'Ping Pong Rocket'
const b21= '作者：吳宥廷、林威廷'
const b22 = '本研究探討裝水之容器從空中落下，水面的變化以及造成水面上物體的運動狀態改變的現象。另有探討不同種類之球上下擺放從空中落下，上球以及下球各自之彈出情形。以不同容積之寶特瓶或是其他容器裝不同體積的水或是鹽水，以磁鐵固定乒乓球使乒乓球上方剛好齊平水面，將容器在特定高度施放，即能觀察到乒乓球從容器中彈出，藉由乒乓球的彈出高度以及情形，探討改變不同變因下對實驗結果的影響，在藉由乒乓球的彈出，探討促使乒乓球談出的水面之改變情形。'
const b3 = '“紙”尺天壓—探討大氣壓力在極短時間內造成的壓力'
const b31= '作者：葉家維、蔡承佑、鄧福寬'
const b32 = '將一把尺放在桌子邊緣並突出，然後將一個球扔到尺的突出端，尺將被彈飛。然而，如果用一張紙蓋住尺的一部分再投擲，那麼尺子將穩固的停留在桌子上，而球會從尺上彈開。首先我們假設了造成此現象的原因，接著透過分析球運動的軌跡，以及紙張邊緣的波動，並透過裁剪不同形狀、改變紙張的面積大小、改變紙張的擺法和更換不同材質的紙張等等方式增加變因，以探討影響此現象的因素。'
const b4 = '瘋狂的LK99背後真實的高溫超導'
const b41= '作者：盧宣滈、簡紹益、吳婧慈'
const b42 = '超導體具有兩大特性—零電阻以及抗磁性，若善加利用可有效降低能源消耗，但 由於目前所發現的超導體臨界溫度較低，無法被人們善加利用，因此我們使用臨 界溫度相較其他材料極高(95K)的 YBCO 及我們所在實驗室已有研究的另一塊高 溫超導 NBCO 兩種塊材作為實驗主要研究的材料。本實驗從粉末開始配置，嘗試 利用不同的燒製溫度尋找有較低臨界溫度的塊材，並以不同比例合成單晶得到較 低臨界溫度的超導塊材。結果顯示無論 YBCO、兩種不同比例的 NBCO，在燒製 溫度為 900c-920c 具有較佳的超導性質，由於兩種材料結構相似，且燒製溫度會 影響架構，故最佳燒製溫度相差不大，再來，由 XRD 可看出低於 880c 或高於 970c 的材料不具有超導性質，此實驗中有許多窒礙難行的部分是值得我們注意 地方。'
const b5 = '外加磁場對金屬球震盪模式之探討'
const b51= '作者：李宗洋、梁勝宥'
const b52 = '本實驗探討金屬球在外加磁場的轉動阻尼震盪運動。金屬球在強磁場下會在球內產 生感應電場，造成球內的電荷達成某一種特殊的分布電荷移動的過程中會在實心金屬 球內產生體電流，同時磁性物質產生之磁化亦有影響，造成整顆金屬球自旋角速度產 生改變。實驗在改變單項初始條件的情況下對轉動過程進行錄影，並用 tracker 進行分 析，由標定球上 2 點之相對位移關係來得出整體的角速度，將其運動過程的相關函數 圖與標準組進行對照以定性分析不同變因對轉動的影響。'


const c1 = '鳳梨放這麼久，好「酵」嗎─探討鳳梨放置環境對鳳梨酵素之影響'
const c11= '作者：陳定均、蒙定暘、蔡承恩'
const c12 = '鳳梨果實中含有鳳梨酵素(Bromelain)。本實驗將探討鳳梨果實在經過削皮，分切等食用前處理後，在不同的溫度條件下放置不同長度的時間，觀察此兩項條件對鳳梨果實內鳳梨酵素的含量及活性有何影響，並觀察果實不同部分的酵素之含量及活性有何差異。經實驗後，我們發現內側果心有蛋白質含量隨放置時間微幅上升的情況，但無法排除此結果為其他因素干擾或誤差所致的可能。而外側果肉則無此現象；放置於冷藏4℃的鳳梨果實中，在24小時範圍內有先升後降的情形，室溫25℃放置者則無明確關聯，在相同條件下，外側果肉之酵素活性皆高於內側果心。冷藏4℃放置8至16小時之果肉擁有最佳之活性。'
const c2 = '每逢佳節「鋇」「鍶」親 - Ba Sr TiO₂合成材料催化之活性'
const c21= '作者：陳泰然、林詠晴'
const c22 = '鈦酸鋇（BaTiO₃）為一種水熱合成材料，展現出廣泛的應用前景。本實驗旨在通過將鋇 （Ba）和鍶（Sr）以不同比例與二氧化鈦（TiO₂）進行合成，以探究其在催化應用中的最佳 比例。我們利用了多種分析技術，包括 X 光繞射儀、掃描式電子顯微鏡和紫外光-可見光光 譜儀，來評估不同比例下材料的晶體結構、形態特徵以及光學性質。此外，我們將進行降解 甲基橙和二氧化碳還原實驗，以評估不同比例下材料的催化活性。通過比較不同實驗條件下 產物生成的效率，我們將確定 Ba 和 Sr 在何種比例下具有最佳的催化活性。根據我們的實驗 結果顯示，三種材料皆能良好的吸收紫外光，吸收邊約落在 380nm，接著在降解甲基橙的實 驗中，我們將-ln（C/Co）與 t（時間）做圖求斜率，得知 BSTO7:3 最高的反應動力常數為 0.0219min⁻¹，另外在 Ba 和 Sr 的比例為 7:3 時，在光和壓電的偕同效應下，我們觀察到最佳 的催化活性產率約為 19.8μmol/g。'
const c3 = '「氨」渡陳「妝」-過期粉底液回收之二氧化鈦製成光觸媒材'
const c31= '作者：趙子耀、吳季澤'
const c32 = '本研究透過食人魚法成功分離過期粉底液中 TiO2，利用氨水成長法使其再結晶，製備出可 進行海水光催化製氫的光觸媒材料，具備二次利用與循環經濟之重要特點，符合永續經濟之 概念。 透過材料之 XRD、FE-SEM、光敏電流測試、Hall effect 分析、UV-VIS 吸收度測試，確認以 氨水溶液成長法製作光觸媒的可行性，比較不同氨水濃度之化學成長氧化鈦材料，所製備之 樣品擁有不同光電化學相關性質，並探究其原理。 材料之光電化學相關性質與氨水濃度具有高相關性，以氨水濃度 5M 所製備之二氧化鈦效 果最佳，其光敏電流(1.201 µA/sec)最強、載流子濃度最高、載子遷移率最大、電阻率最小、吸 收度有所提升。 本研究材料具有價格低廉、製程簡易、符合循環經濟等優勢，具有在台灣發展海水製氫光 觸媒材料的潛力。'
const c4 = '「鈦」「氫」鬆到令人「金」訝—鈦系列摻金光觸媒光催化產氫之比較'
const c41= '作者：王彥捷、周秉宏、楊恩睿'
const c42 = '本研究以再生能源探討的問題為出發，在較為環保的光觸媒產能領域，選擇了產氫的方 向作探索，以尋求兼具環保與效率的能源為目標，分別比較了五種不同的光觸媒材料的表現。 首先，我們先以水熱法製備出純相的 TiO2，並採用相同製程，添加三水合四氯合金酸 (HAuCl4 · 3H2O)經水熱反應後可依序獲得 Au-Na2Ti3O7 (Au-SHT)，以及酸洗後得到的 AuH2Ti3O7 (Au-HT)，歷經在空氣或在氫氣中燒結(煅燒)產生適當晶形之後，分別得出 Au-TiO2- air以及Au-TiO2-H2。經過X光繞射鑑定材料的晶體結構，並確認得出了所預期的五種材料， 再針對上述五種材料進行紫外光 / 可見光分光光譜儀的量測，分析其吸光波段。最終透過氙 燈測定五種光觸媒材料的催化產氫特性，分析並歸納結果與推測可能的因素。研究顯示，適 當的摻和金粒子、燒結出合適的晶體結構，以及在空氣和氫氣環境中的煅燒會對材料的產氫 效率產生影響。最後，我們的結果表明，以Au-TiO2-air為基礎的光觸媒在產氫效率方面表現 最佳。'



const d1 = '任重「稻」遠─ 真核起始因子 4A-2 基因對水稻在逆境中的影響探討'
const d11= '作者：魏全儀、許靖、賴宥霖'
const d12 = '為了研究以基因改造提高糧食作物對逆境抗性的可能性，並了解特定基因 在其中扮演的角色，我們用基因槍和 CRISPR/Cas9 技術對常見的水稻進行基因 修改，嘗試剔除和 stress granules 有關的兩個基因，看是否會對水稻在不同逆境 中的表現造成影響。在對水稻癒傷組織進行基改後透過抗生素篩選出成功的組 織，並抽取其 DNA 和質體，以聚合酶連鎖反應處理後透過膠體電泳確認基因改 造後的結果，並將成功的組織培養成完整的植珠。最後成功確定基因改造的可 行性，但尚未對其抗逆境的能力進行實驗。'
const d2 = '汲汲「蠅蠅」—解析公母果蠅不同年齡間多巴胺之釋放量'
const d21= '作者：廖志允 陳宇鋒'
const d22 = '性別，一個會廣泛性影響許多生理與心理反應的因子，過去研究認為其原因莫過於 不同性別間多巴胺與多巴胺受器在不同性別間表現量差異所導致，然而更進一步的神經 迴路與機制仍不清楚，所以在本篇研究中，我們希望透過果蠅這個模式生物，來解析不 同性別間蕈狀體(mushroom body, MB)上游原腦前內側神經元 (protocerebral anterior medial, PAM)多巴胺釋放量上的差異。更進一步的，由於年老對於生物來說是非常重要的生理因 子，它會透過改變多巴胺神經元直接影響生物的體內反應與決策過程，更甚至會導致神 經相關的疾病發生，且原腦前內側神經元亦有參與在年老相關的行為中，所以我們想知 道年老與性別這兩項因子對於原腦前內側神經元多巴胺的釋放量是否會造成影響。我們 將分析不同性別與年紀之果蠅的酪胺酸羥化酶 (tyrosine hydroxylase, TH) 表現量差異推測多 巴胺的釋放量，我們發現到雖然公母果蠅在相同年齡間的釋放量並無差異，但在面對老 化的過程中，公果蠅原腦前內側神經元多巴胺釋放量下降的速度遠高於母果蠅。我們期 望透過這個研究能讓科學家進一步探討與性別和老化相關的神經疾病。'



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
  function switchShow(newShow) {
    activeShow.value = newShow;
    var AAA = document.querySelector(".AA");
    AAA.style='z-index: 10;';
  }
  function canClick() {
    var AAA = document.querySelector(".AA");
    AAA.style='z-index: -1;';
  }
  onMounted(() => {
    window.addEventListener('keydown', function(event) {
        if (event.key === "Escape") { 
          hidePopup();
        }
      }
    )
  });
const c = "在知識的泡沫中沉淪";
</script>



<template>
  <div>
<div class="start">
        <h10>Categories</h10>
        <br/>
        <div class="flex justify-center space-x-4 ml-[2%] tab">
          <div v-for="tab in tabs" :key="tab"  @click="switchTab(tab)">
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

        <div v-if="activeTab === '小冊子'" class="s">
          <div class="C1">
            <div class="H2"> <h2>小冊子</h2> </div>
            <a href="https://drive.google.com/file/d/1KWwx-GWXHp-HShDbzjcwptzD0FWK286P/view?usp=sharing" 
            class="aa">
            <img src="../../public/img/bro.png" id="bro" >
            <div class="sh"><p2>點擊可打開小冊子pdf</p2></div>
            </a>
          </div>
        </div>

        <div v-if="activeTab === '數學組'" >
          <div class="s">
            <div class="H2"> <h2>數學組</h2> </div>
            <h1>指導老師 陳依鴻</h1>
            <div class="ccc">
              <span>{{ a01 }}</span><br/>
              <span>{{ a02 }}</span><br/>
              <span>{{ a03 }}</span>
              <span>{{ a04 }}</span><br/>
            </div>
          </div>

          <div class="t1" @click="switchShow('a1')">
            <div class="a1">{{ a1 }}</div>
            <div class="a11">{{ a11 }}</div>
          </div>
        </div>

        <div v-if="activeTab === '物理組'">
          <div class="s">
            <div class="H2"> <h2>物理組</h2> </div>
            <h1>指導老師 王慈甦(Nash)</h1>
            <div class="ccc">
              <span>{{ b01 }}</span><br/>
              <span>{{ b02 }}</span><br/>
              <span>{{ b03 }}</span><br/>
              <span>{{ b04 }}</span><br/>
            </div>
          </div>

          <div class="nt1">
    <div class="t1" @click="switchShow('b1')">
      <div class="a1">{{ b1 }}</div>
      <div class="a11">{{ b11 }}</div>
    </div>
    <div class="t1" @click="switchShow('b2')">
      <div class="a1">{{ b2 }}</div>
      <div class="a11">{{ b21 }}</div>
    </div>
    <div class="t1" @click="switchShow('b3')">
      <div class="a1">{{ b3 }}</div>
      <div class="a11">{{ b31 }}</div>
    </div>
    <div class="t1" @click="switchShow('b4')">
      <div class="a1">{{ b4 }}</div>
      <div class="a11">{{ b41 }}</div>
    </div>
    <div class="t1" @click="switchShow('b5')">
      <div class="a1">{{ b5 }}</div>
      <div class="a11">{{ b51 }}</div>
    </div>
  </div>
</div>

        <div v-if="activeTab === '化學組'">
          <div class="s">
            <div class="H2"> <h2>化學組</h2> </div>
            <h1>指導老師 吳佩芳</h1>
            <div class="ccc">
              <span>{{ c01 }}</span><br/>
              <span>{{ c02 }}</span><br/>
              <span>{{ c03 }}</span><br/>
              <span>{{ c04 }}</span><br/>
            </div>
          </div>

          <div class="nt1">
    <div class="t1" @click="switchShow('c1')">
      <div class="a1">{{ c1 }}</div>
      <div class="a11">{{ c11 }}</div>
    </div>
    <div class="t1" @click="switchShow('c2')">
      <div class="a1">{{ c2 }}</div>
      <div class="a11">{{ c21 }}</div>
    </div>
    <div class="t1" @click="switchShow('c3')">
      <div class="a1">{{ c3 }}</div>
      <div class="a11">{{ c31 }}</div>
    </div>
    <div class="t1" @click="switchShow('c4')">
      <div class="a1">{{ c4 }}</div>
      <div class="a11">{{ c41 }}</div>
    </div>
  </div>
        </div>

        <div v-if="activeTab === '生物組'">
          <div class="s">
            <div class="H2"> <h2>生物組</h2> </div>
            <h1>指導老師 許根火(火哥)</h1>
            <div class="ccc">
              <span>{{ d01 }}</span><br/>
              <span>{{ d02 }}</span><br/>
              <span>{{ d03 }}</span><br/>
              <span>{{ d04 }}</span>
            </div>
          </div>

          <div class="nt1">
    <div class="t1" @click="switchShow('d1')">
      <div class="a1">{{ d1 }}</div>
      <div class="a11">{{ cd1 }}</div>
    </div>
    <div class="t1" @click="switchShow('d2')">
      <div class="a1">{{ d2 }}</div>
      <div class="a11">{{ d21 }}</div>
    </div>
  </div>
        </div>

      </div>

    </div>







 
<div class="AA">

<div v-if="activeShow === 'a1'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/a1.jpg" class="img">
    <h3>{{ a1 }}</h3>
    <h4>{{a11}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1VoA9iR2oNQdAv94gZMVPChJMWggS_PCj/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ a12 }}</h7></div>
  </div>
</div>


<div v-if="activeShow === 'b1'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/b1.jpg" class="img">
    <h3>{{ b1 }}</h3>
    <h4>{{b11}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1SZUIYRm0R6jdybU_1ErbpgXg63hkdqfn/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ b12 }}</h7></div>
  </div>
</div>

<div v-if="activeShow === 'b2'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/b2.jpg" class="img">
    <h3>{{ b2 }}</h3>
    <h4>{{b21}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1l-3Qvg5IlGkHgsRQF3Q6mxrbq-YUykja/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ b22 }}</h7></div>
  </div>
</div>

<div v-if="activeShow === 'b3'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/b3.jpg" class="img">
    <h3>{{ b3 }}</h3>
    <h4>{{b31}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1yZ1xrSMARa5kPeuMjGvw__hI-ubkHCs2/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ b32 }}</h7></div>
  </div>
</div>

<div v-if="activeShow === 'b4'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/b4.jpg" class="img">
    <h3>{{ b4 }}</h3>
    <h4>{{b41}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1Z1xYF62JNsRjaa8dTEh8J3AhWrlgxOJi/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ b42 }}</h7></div>
  </div>
</div>

<div v-if="activeShow === 'b5'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/b5.jpg" class="img">
    <h3>{{ b5 }}</h3>
    <h4>{{b51}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1Z8tMdKhMHIjkkestQ2L5Epedx4l8qgwS/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ b52 }}</h7></div>
  </div>
</div>




<div v-if="activeShow === 'c1'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/c1.jpg" class="img">
    <h3>{{ c1 }}</h3>
    <h4>{{c11}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1ihfT43MpNiFbC5mc-kC6f8GKjzkPxE4A/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ c12 }}</h7></div>
  </div>
</div>

<div v-if="activeShow === 'c2'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/c2.jpg" class="img">
    <h3>{{ c2 }}</h3>
    <h4>{{c21}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1S8cbDlVu2P1eBxewfv6Gpry794sNnf2X/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ c22 }}</h7></div>
  </div>
</div>

<div v-if="activeShow === 'c3'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/c3.jpg" class="img">
    <h3>{{ c3 }}</h3>
    <h4>{{c31}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1qe9Kn-77RM_jTTd8skbFHM01-5K4_D_n/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ c32 }}</h7></div>
  </div>
</div>

<div v-if="activeShow === 'c4'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/c4.jpg" class="img">
    <h3>{{ c4 }}</h3>
    <h4>{{c41}}</h4>
    <div class="h5">
      <h5>摘要</h5>    
      <a href="https://drive.google.com/file/d/1qwA7j2BtDJKOooGj79CLibarej8UDcBK/view?usp=sharing" 
          target="_blank" rel="noooener" class="IC" >
      <vue-feather type="file" size="20"></vue-feather>
    </a>
    <div class="h6"><h6>(點可打開)</h6></div>
  </div>
    <div class="h7"><h7>{{ c42 }}</h7></div>
  </div>
</div>


<div v-if="activeShow === 'd1'" class="a">
  <div class="cot">
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/d1.jpg" class="img">
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
    <div class="Back" @click="switchShow('0'),canClick()">
      <p2>關閉視窗</p2>
    </div>
    <br/>
    <img src="../../public/img/d2.jpg" class="img">
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








</div>
</div>
</template>

<style scoped>
.start{
  position: relative;
    display: flex;
    flex-direction: column;
    margin: 5%;
    padding: 1px;
    border-radius: 0.25em;
    background-color: antiquewhite;
    opacity: 80%;

}
h10{
    display: flex;
    justify-content: center; 
    font-size: 3em;
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 0%;
}
h1{
    display: flex;
    justify-content: center; 
    font-size: 2em;
    font-weight: 900;
    margin-top: -20px;
    margin-bottom: 3%;
}
.H2{
  display: flex;
  justify-content: start; 
  margin-left: 2%;
  margin-top: 10px;
  margin-bottom: -10px;
  color: #230183;
  font-size: 1.5em;
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
#小冊子{
  position: absolute;
  margin-left: -280px;
}
#數學組{
  position: absolute;
  margin-left: -160px;
}
#物理組{
  position: absolute;
  margin-left: -40px;
}
#化學組{
  position: absolute;
  margin-left: 80px;
}
#生物組{
  position: absolute;
  margin-left: 200px;
}
.s{
  margin: 1.5%;
  background-color: rgb(202, 189, 171);
  border-radius: 0.25em;
  opacity: 100%;
  padding-bottom: 50px;
}
#bro{
  position: relative;
  border-radius: 0.45em;
}
.sh{
  display: flex;
  flex-direction: row;
  background-color: rgb(138, 255, 212);
  justify-content: center;
  width: 200px;
  height: 20px;
  border-radius: 0.45em;
  color: #000;
  margin-left: 50%;
}
.sh:hover{
  background-color: rgba(0, 126, 21, 0.829);
  color: #ffffff;
}
.ccc{
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: start;
  gap: 5px;
padding-bottom: 10px;
}
span{
  width: 98%;
}
.t1{
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: solid;
  border-color: #000;
  margin: 1.5%;
  border-radius: 0.25em;
  padding: 1%;
  gap: 10px;
}
.t1:hover{
  background-color: rgb(127, 115, 252);
  border-radius: 0.25em;
  color: #ffffff;
}
.a1{
  width: 50%;
}
.a11{
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
  width: 40%;
}
.AA{
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 80%;
  margin-left: 10%;
  font-size: 2em;
  position: absolute;
  bottom: 530px;
}
.a{
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 2em;
  position: absolute;
  background-color: rgba(158, 255, 239, 0.948);
  border-radius: 0.25em;
  border: solid #23139d;
}
.cot{
  height: 400px;
  overflow-x: clip;
  overflow-y: scroll;
}
.Back{
  margin-left: 10%;
  margin-top: 1%;
  width: 80%;
  height: 40px;
  position: absolute;
  background-color: rgb(99, 164, 255);
  border-radius: 0.25em;
  font-size: 0.5em;
}
.Back:hover{
  background-color: hsla(236, 100%, 35%, 0.739);
  color: rgb(255, 255, 255);
  border-radius: 0.25em;
}


.img{
  width: 400px;
  height: auto;
  border-radius: 0.25em;
}
h3{
  font-size: 1.7rem;
}
h4{
  font-size: 1rem;
}
.h5{
  display: flex;
  flex-direction: row;
  margin-top: -30px;
  margin-left: 10px;
  text-align: start;
}
h5{
  font-size: 1.3rem;
}
.IC{
  margin-left: 2px;
}
.h6{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h6{
  font-size: 0.8rem;
  font-weight: lighter;
  justify-content: center;
}
.h7{
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  margin-left: 10px;
  text-align: start;
}

h7{
  font-size: 1.3rem;
  padding: 3px;
  padding-bottom: 20px;
}



@media (max-width: 2000px) {
 h10{font-size: 3em;}
 h1{font-size: 2em;}
 .H2{font-size: 1.5em;}
 span{font-size: 1.4em;}
 .t1{font-size: 1.3em;}
 .B{font-size: 1.25em;}
 .cot{height: 500px;}
 p2{font-size: 1em;}
h3{font-size: 1.7rem;}
h4{font-size: 1rem;}
h5{font-size: 1.3rem;}
h6{font-size: 0.8rem;}
h7{font-size: 1.3rem;}
}

@media (max-width: 1100px) {
  h10{font-size: 2.5em;}
 h1{font-size: 1.7em;}
 .H2{font-size: 1.3em;}
 span{font-size: 1.2em;}
 .t1{font-size: 1em;}
 .B{font-size: 1.25em;}
 #小冊子{margin-left: -280px;}
 #數學組{margin-left: -160px;}
 #物理組{margin-left: -40px;}
 #化學組{margin-left: 80px;}
 #生物組{margin-left: 180px;}
}
p2{font-size: 1em;}
h3{font-size: 1.7rem;}
h4{font-size: 1rem;}
h5{font-size: 1.3rem;}
h6{font-size: 0.8rem;}
h7{font-size: 1.3rem;}


@media (max-width: 900px) {

}

@media (max-width: 800px) {
  h10{font-size: 1.9em;}
 h1{font-size: 1.5em;}
 .H2{font-size: 1.2em;}
 span{font-size: 1em;}
 .t1{font-size: 0.8em;}
 .B{font-size: 1em;}
 #小冊子{margin-left: -240px;}
 #數學組{margin-left: -140px;}
 #物理組{margin-left: -40px;}
 #化學組{margin-left: 60px;}
 #生物組{margin-left: 160px;}
}
@media (max-width: 650px) {
   span{font-size: 0.8em;}
   #小冊子{margin-left: -190px;}
 #數學組{margin-left: -110px;}
 #物理組{margin-left: -30px;}
 #化學組{margin-left: 50px;}
 #生物組{margin-left: 130px;}
 .cot{height: 450px;}
 p2{font-size: 0.8em;}
 .Back{height: 35px;}
h3{font-size: 1.5rem;}
h4{font-size: 0.8rem;}
h5{font-size: 1.1rem;}
h6{font-size: 0.6rem;}
h7{font-size: 1.1rem;}
  }

@media (max-width: 480px){
  h10{font-size: 1.9em;}
 h1{font-size: 1.3em;}
 .H2{font-size: 1em;}
 span{font-size: 0.7em;}
 .t1{font-size: 0.8em;}
 .sh{font-size: 0.7em; width: 150px; height: 17px;}
 .B{font-size: 0.8em;}
 #小冊子{margin-left: -190px;}
 #數學組{margin-left: -110px;}
 #物理組{margin-left: -30px;}
 #化學組{margin-left: 50px;}
 #生物組{margin-left: 130px;}
}

@media (max-width: 380px) {
  h10{font-size: 1.5em;}
 h1{font-size: 1em;}
 .H2{font-size: 1.1em;}
 span{font-size: 0.4em;}
 .t1{font-size: 0.4em;}
 #小冊子{margin-left: -150px;}
 #數學組{margin-left: -90px;}
 #物理組{margin-left: -30px;}
 #化學組{margin-left: 30px;}
 #生物組{margin-left: 90px;}
 .B{font-size: 0.7em;}
 .cot{height: 400px;}
 p2{font-size: 0.7em;}
 .Back{height: 35px;}
h3{font-size: 1.4rem;}
h4{font-size: 0.7rem;}
h5{font-size: 1rem;}
h6{font-size: 0.5rem;}
h7{font-size: 1rem;}
}

</style>