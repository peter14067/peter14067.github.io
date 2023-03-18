import React, { Component } from "react";
 
class Member extends Component {
  render() {
    return (
      <div>
        <h2>Member</h2>
        <ul className="member-list">
          <li>
            <h3>安智煐 안지영 - An Ji Yeong</h3>
            1995年9月14日 生於韓國慶尚北道榮州市<br/>
            隊長、主唱、主作詞曲
          </li>
          <li>
            <h3>禹智潤 우지윤 - Woo Ji Yun</h3>
            1996年1月6日 生於韓國慶尚北道榮州市<br/>
            副唱、RAP、主領舞、吉他、貝斯
          </li>
        </ul>
        <small><a href="https://zh.wikipedia.org/wiki/%E8%87%89%E7%B4%85%E7%9A%84%E6%80%9D%E6%98%A5%E6%9C%9F" target="_blank" rel="noopener noreferrer">資料來源：Wiki</a></small>
      </div>
    );
  }
}
 
export default Member;