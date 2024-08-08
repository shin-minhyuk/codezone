import "../styles/home.scss";
import sublogo from "../assets/icon/sub-logo.svg";
import { useEffect, useState } from "react";
import search from "../assets/icon/search_24.svg";
import java from "../assets/icon/java.svg";
import python from "../assets/icon/python.svg";
import reactImg from "../assets/icon/reactimg.svg";
import mysql from "../assets/icon/mysql.svg";
import javascript from "../assets/icon/javascript.svg";
import css from "../assets/icon/css.svg";
import html from "../assets/icon/html.svg";
import client from "../client/client";

const Header2 = () => {
  return (
    <header className="header-box">
      <div className="left">
        <img src={sublogo} alt="코드존 로고" />
      </div>
      <div className="center">
        <img className="search" src={search} alt="검색" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="right"></div>
    </header>
  );
};

const MainSection = () => {
  return (
    <>
      <div className="mainSection">
        <main>
          <section className="section-list side">
            <article>
              <ul>
                <li>
                  <p className="img"></p>
                  나의 코드
                </li>
                <li>
                  <p className="img"></p>그룹
                </li>
                <li>
                  <p className="img"></p>메시지
                </li>
                <li>
                  <p className="img"></p>북마크
                </li>
              </ul>
            </article>
            <article>
              <ul>
                <li>
                  <p className="img"></p>알림
                </li>
                <li>
                  <p className="img"></p>설정
                </li>
              </ul>
            </article>
            <article>
              <ul>
                <li>
                  <p className="img"></p>김진모
                </li>
                <li>
                  <p className="img"></p>박미선
                </li>
              </ul>
            </article>
          </section>

          <section className="section-list center">
            <article className="textarea">
              <div className="textarea-inner">
                <textarea name="" id=""></textarea>
                <div className="textarea-bottom">
                  <div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <button>더보기</button>
                  </div>
                  <div className="icon-right"></div>
                </div>
              </div>
            </article>

            <article className="post">
              <div className="post-inner">
                <div className="guest">
                  <div className="guest-image"></div>
                  <div className="guest-name">
                    <span>신민혁</span>
                    <p>2시간 전</p>
                  </div>
                </div>

                <div className="post-box">
                  <div className="post-text">
                    Lorem ipsum dolor sit amet consectetur. Donec nunc varius
                    turpis nullam. Quam id pellentesque vitae non mi in
                    pellentesque molestie. Tristique at ac pellentesque rhoncus
                    bibendum euismod consectetur convallis. Ipsum urna
                    ullamcorper dignissim urna in magna est leo morbi. Lorem
                    ipsum dolor sit amet consectetur. Donec nunc varius turpis
                    nullam.
                  </div>

                  <div className="post-language">#javascript</div>

                  <div className="post-buttons">
                    <div>
                      <button></button>
                      <span>200</span>
                    </div>
                    <div>
                      <button></button>
                      <span>200</span>
                    </div>
                    <div>
                      <button></button>
                      <span>200</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className="section-list side">
            <article>
              <ul>
                <li>
                  <img src={html} alt="" />
                  Html
                </li>
                <li>
                  <img src={css} alt="" />
                  CSS
                </li>
                <li>
                  <img src={javascript} alt="" />
                  Javascript
                </li>
                <li>
                  <img src={reactImg} alt="" />
                  React
                </li>
                <li>
                  <img src={mysql} alt="" />
                  MySql
                </li>
                <li>
                  <img src={java} alt="" />
                  Java
                </li>
                <li>
                  <img src={python} alt="" />
                  Python
                </li>
              </ul>
            </article>
          </section>
        </main>
      </div>
    </>
  );
};

function Home() {
  return (
    <>
      <Header2 />
      <MainSection />
    </>
  );
}

const getPostList = () => {
  client
    .get("/rest/v1/posts", {
      Authorization: localStorage.getItem("COMMUNITY_TOKEN"),
    })
    .then((res) => console.log("성공: ", res))
    .catch((err) => console.log("err: ", err));
};

getPostList();
export default Home;
