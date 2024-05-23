<script setup>

     const day1Floor2GroupList = [
        { id: '1', 
          mark: "-", 
          title: "來賓入席", 
          time: "12:30~13:00" },
        { id: '2', mark: "-", title: "開幕(貴賓致詞)", time: "13:00~13:05" },
        {
          id: '3',
          mark: "化",
          title: "「鈦」「氫」鬆到令人「金」訝",
          time: "13:20~13:35",
        },
        { id: '4', 
          mark: "化", 
          title: "鳳梨放那麼久，好「酵」嗎", 
          time: "13:35~13:50" },
        {
          id: 'yy',
          mark: "表演",
          title: "舞團表演 & 遊戲",
          time: "13:50~14:05",
        },
        { id: '6', 
          mark: "數", 
          title: "兩全等多邊形重疊部分的邊長面積探討", 
          time: "14:05~14:20" },
        {
          id: 'rr',
          mark: "-",
          title: "中場休息",
          time: "14:20~14:30",
        },
        { id: '8', 
          mark: "生", 
          title: "任重「稻」遠", 
          time: "14:45~15:00" },
        { id: '9', 
          mark: "物", 
          title: "外加磁場對金屬球震盪模式之探討", 
          time: "15:00~15:15" },
        {
          id: 'yy',
          mark: "表演",
          title: "彈唱 & 御宅藝",
          time: "15:15~15:30",
        },
        {
          id: '11',
          mark: "物",
          title: "“紙”尺天壓",
          time: "15:30~15:40",
        },
        {
          id: '12',
          mark: "物",
          title: "瘋狂的LK99背後真實的高溫超導",
          time: "15:45~16:00",
        },
        {
          id: 'yy',
          mark: "表演",
          title: "大合唱",
          time: "16:15~16:30",
        },
        { id: '-', 
          mark: "-", 
          title: "靜態展", 
          time: "16:30~17:00" },
      ]

const day1Floor2GroupList2 = [
        { id: '1', 
          mark: "-", 
          title: "來賓入席", 
          time: "8:00~8:30" },
        { id: '2', mark: "-", title: "開幕(貴賓致詞)", time: "8:30~8:35" },
        {
          id: '3',
          mark: "數",
          title: "兩全等多邊形重疊部分的邊長面積探討",
          time: "8:50~9:05",
        },
        { id: '4', 
          mark: "化", 
          title: "每逢佳節「鋇」「鍶」親", 
          time: "9:05~9:20" },
        {
          id: 'yy',
          mark: "表演",
          title: "彈唱 & 御宅藝",
          time: "9:20~9:35",
        },
        { id: '6', 
          mark: "化", 
          title: "「氨」渡陳「妝」", 
          time: "9:35~9:50" },
        {
          id: 'rr',
          mark: "-",
          title: "中場休息",
          time: "9:50~10:00",
        },
        { id: '8', 
          mark: "物", 
          title: "螺震舞鬥息", 
          time: "10:15~10:30" },
        { id: '9', 
          mark: "生", 
          title: "汲汲「蠅蠅」蹤", 
          time: "10:30~10:45" },
        {
          id: 'yy',
          mark: "表演",
          title: "舞團表演 & 遊戲",
          time: "10:45~11:00",
        },
        {
          id: '11',
          mark: "物",
          title: "Ping Pong Rocket",
          time: "11:00~11:15",
        },
        {
          id: 'yy',
          mark: "表演",
          title: "大合唱",
          time: "11:30~11:45",
        },
        {
          id: '13',
          mark: "-",
          title: "靜態展",
          time: "11:45~12:30",
          }
      ]

</script>


<template>
    <div class="start">
      <div class="all">
        <h1 id="title">Schedule</h1>

        <div>

          <div class="k1">
            <div class="H2">
              <h2>Day 1</h2>
            </div>
            <table>
              <tr>
                <th>Index</th>
                <th>Title</th>
                <th>Time</th>
              </tr>
              <tr v-for="group in day1Floor2GroupList" :key="group.id" >
                <td>{{ group.mark }}</td>
                <td class="title" v-bind:id="group.id" >{{ group.title }}</td>
                <td>{{ group.time }}</td>
              </tr>
            </table>
          </div>
          <br/>
          <div class="k2">
            <div class="H2">
              <h2>Day 2</h2>
            </div>
            <table>
              <tr>
                <th>Index</th>
                <th>Title</th>
                <th>Time</th>
              </tr>
              <tr v-for="group in day1Floor2GroupList2" :key="group.id">
                <td>{{ group.mark }}</td>
                <td class="title"v-bind:id="group.id">{{ group.title }}</td>
                <td>{{ group.time }}</td>
              </tr>
            </table>
          </div>

        </div>
      </div>
    </div>
</template>

<style scoped>
.start{
    display: flex;
    flex-direction: column;
    margin: 5%;
    padding: 15px;
    border-radius: 0.25em;
    background-color: antiquewhite;
    opacity: 80%;
    gap: 5px;
}
.k1{
  font-weight: 700;
  font-size: 1.25em;
  border-radius: 0.25em;
  padding: 10px;
  background-color: rgba(124, 92, 52, 0.392);
}
.k2{
  font-weight: 700;
  font-size: 1.25em;
  border-radius: 0.25em;
  padding: 10px;
  background-color: rgba(124, 92, 52, 0.392);
}
h1{
    display: flex;
    justify-content: center; 
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 0%;
}
.H2{
    display: flex;
    align-items: start; 
}
h2{
    font-family: Brush Script MT;
    margin-left: 2%;
    margin-bottom: 3px;
}
table {
  width: 100%;
}

th, td {
  border: 1px solid #000000;
  text-align: center;
  padding: 5px;
}
#yy{
    color: #0184ff;
    font-weight: bold;
}
#rr{
    color: #ff2e2e;
    font-weight: bold;
}


@media (max-width: 2000px) {
 h1{font-size: 3em;}
 .k1{font-size: 1.25em;}
 .k2{font-size: 1.25em;}
}

@media (max-width: 1100px) {
  h1{font-size: 2.5em;}
}

@media (max-width: 900px) {

}

@media (max-width: 800px) {
  h1{font-size: 1.9em;}
  .k1{font-size: 1em;}
  .k2{font-size: 1em;}
}
@media (max-width: 600px){
  .k1{font-size: 0.8em;}
  .k2{font-size: 0.8em;}
}

@media (max-width: 480px){
  h1{font-size: 1.9em;}
  .k1{font-size: 0.01em;}
  .k2{font-size: 0.01em;}
}

@media (max-width: 380px) {
  h1{font-size: 1.5em;}
}


</style>

