import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Ztext from "react-ztext";
import Cosha from "react-cosha";
import quiz from "./photo/quiz.png";
import news from "./photo/news.png";
import street from "./photo/street_view.png";
import shige from "./photo/shige.png";
import "./styles.css";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleButtonClick = () => {
    setSelectedIndex(0);
  };

  return (
    <>
      <Ztext
        depth="1rem"
        direction="both"
        event="pointer"
        eventRotation="5deg"
        eventDirection="default"
        fade={false}
        layers={10}
        perspective="500px"
        style={{
          fontSize: "4rem",
          color: "#90a4ae"
        }}
      >
        <span>しげ ポートフォリオ</span>
      </Ztext>
      <Tabs
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
      >
        <TabList>
          <Tab>プロフィール</Tab>
          <Tab>成果物</Tab>
        </TabList>
        <TabPanel>
          <h2>
            名前: しげ <br />
            言語（できる順）: python,javascript,C#,C,arduino lang,golang,php
            <br />
            ハード: raspi,esp32,arduino uno r3,m5stack <br />
            <br />
            フリーランスエンジニア、長野県在住、３６歳、クラウドのバックエンドからIoTまで案件受注しております。
            <br />
            <a href="https://github.com/shige-ywyw/">
              <img className="shige" src={shige} alt="shige" />
            </a>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            python クイズアプリ(工事中)
            <br />
            reveal.jsを使ったスライドショー式クイズアプリ
            <br />
            <a href="https://shige-ywyw.github.io/quiz_slide/">
              <Cosha className="photo" src={quiz} alt="quiz" />
            </a>
            <br />
            ソース
            <br />
            <a href="https://github.com/shige-ywyw/quiz_slide">
              https://github.com/shige-ywyw/quiz_slide
            </a>
          </h2>
          <h2>
            news　アプリ
            <br />
            はてなブックマークのRSS情報を取得し、ランキング形式で表示
            <br />
            <a href="https://shige-ywyw.github.io/news/">
              <Cosha className="photo" src={news} alt="news" />
            </a>
            <br />
            ソース
            <br />
            <a href="https://github.com/shige-ywyw/news">
              https://github.com/shige-ywyw/news
</a>
</h2>
<h2>
ストリートビュー検索くん
<br />
地名などを検索して、ストリートビューで閲覧するアプリ（未完成)
<br />
<a href="https://shige-ywyw.github.io/street-view-search/">
<Cosha className="photo" src={street} alt="street" />
</a>
<br />
ソース
<br />
<a href="https://github.com/shige-ywyw/street-view-search">
https://github.com/shige-ywyw/street-view-search
</a>
</h2>
</TabPanel>
</Tabs>
</>
);
}

ReactDOM.render(<App />, document.getElementById("root"));
