import React, { Component } from "react";
 
class Album extends Component {
  render() {
    return (
      <div>
        <h2>Album</h2>
        <ul className="album-list">
          <li>
            <img src="/img/album1.jpg" alt=""/>
            <h3>RED PLANET 'Hidden Track'</h3>
          </li>
          <li>
            <img src="/img/album2.jpg" alt=""/>
            <h3>RED PLANET</h3>
          </li>
          <li>
            <img src="/img/album3.jpg" alt=""/>
            <h3>RED ICKLE</h3>
          </li>
        </ul>
        <small><a href="https://zh.wikipedia.org/wiki/%E8%87%89%E7%B4%85%E7%9A%84%E6%80%9D%E6%98%A5%E6%9C%9F" target="_blank" rel="noopener noreferrer">資料來源：Wiki</a></small>
      </div>
    );
  }
}
 
export default Album;