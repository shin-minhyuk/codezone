import "../styles/home.scss";
import sublogo from "../assets/sub-logo.svg";
import { useEffect, useState } from "react";

const Header2 = () => {
  return (
    <header className="header-box">
      <div className="left">
        <img src={sublogo} alt="코드존 로고" />
      </div>
      <div className="center">
        <img src="" alt="" />
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
          <section className="section-list">
            {/* <article>
              <ul>
                <li>나의 코드</li>
                <li>그룹</li>
                <li>메시지</li>
                <li>북마크</li>
              </ul>
            </article>
            <article>
              <ul>
                <li>알림</li>
                <li>설정</li>
              </ul>
            </article>
            <article>
              <ul>
                <li>김진모</li>
                <li>박미선</li>
              </ul>
            </article> */}
          </section>

          <section className="section-list">
            {/* <article>
              <div>
                <textarea name="" id=""></textarea>
                <div>
                  <div>
                    <button>O</button>
                    <button>O</button>
                    <button>더보기</button>
                  </div>
                  <button>123</button>
                </div>
              </div>
            </article>

            <article>
              <div>
                <img src="" alt="" />
              </div>
              <div></div>
              <div>#javascript</div>
              <div>
                <div>
                  <button>좋아요</button>
                  <span>200</span>
                </div>
                <div>
                  <button>좋아요</button>
                  <span>200</span>
                </div>
                <div>
                  <button>좋아요</button>
                  <span>200</span>
                </div>
              </div>
            </article> */}
          </section>

          <section className="section-list">right</section>
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

export default Home;
