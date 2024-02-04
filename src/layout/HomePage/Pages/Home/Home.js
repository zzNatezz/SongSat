import React from "react";
import "./Home.scss";
import Icon from "../../../../asset/icon/Icon";
import Picture from "../../../../asset/picture/Pictrure";
import { ChartList } from "../../../../StoreAll/StoreHome";

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-link">
          <div className="home-link-container">
            {" "}
            Discover <img src={Icon.arrow_right} alt="arrow-logo" />
            <span className="link-target">Recently Played</span>{" "}
          </div>
        </div>
        <div className="home-avatar">
          <img src={Picture.frame_42} alt="avatar" />
          <div className="user-container">
            <h3 className="user-name">Wade Warren</h3>
            <div className="user-class">Premium</div>
          </div>
          <img src={Icon.arrow_down2} alt="arrowdown2" />
        </div>
      </div>
      <div className="home-body">
        <div className="body-top">
          <h3 className="body-left">Charts: Top 50</h3>
          <div className="body-right">
            <img className="img1" src={Icon.arrow_down2Light} alt="lightArrow" />
            <img className="img2" src={Icon.arrow_down2} alt="Arrow" />
          </div>
        </div>
        <div className="body-bottom">
        {ChartList.map((item,i)=>(
            <div className="body-album-container" key = {i}>
                <img className="body-album-img" src={item.img} alt={`${item.img} ${i}`} />
                <img className="body-album-playbutton" src={Icon.play_button} alt={`${item.img} ${i}`} />
                <div className="body-album-des">{item.des}</div>
                <div className="body-album-class" >Top 50</div>
            </div>
        ))}
        </div>
      </div>
      <div>sdsds</div>
    </div>
  );
}

export default Home;
