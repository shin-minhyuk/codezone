import "./login.scss";
import mainlogo from "./assets/main-logo.svg";
import kakao from "./assets/kakaoLogin.svg";
import facebook from "./assets/facebookLogin.svg";
import naver from "./assets/naverLogin.svg";
import apple from "./assets/appleLogin.svg";
import { useEffect, useState } from "react";
import useDidMountEffect from "./hooks/useDidMountEffect";

const Header = () => {
  return (
    <header>
      <div>
        <img src={mainlogo} alt="메인 로고" />
        <span>{`if (login) { return upgrade.code.skills }`}</span>
      </div>
    </header>
  );
};

const LoginForm = () => {
  const [inpIdValue, setInpIdValue] = useState("");
  const [inpPwValue, setInpPwValue] = useState("");
  const [isId, setIsId] = useState(true);
  const [isPw, setIsPw] = useState(true);

  const changeInpIdValue = (e) => {
    setInpIdValue(e.target.value);
  };

  const changeInpPwValue = (e) => {
    setInpIdValue(e.target.value);
  };

  const check = () => {
    if (inpIdValue.length > 6 && inpIdValue.indexOf("@") !== -1) {
      setIsId(true);
    } else {
      setIsId(false);
    }
  };

  useDidMountEffect(check, [inpIdValue]);

  // useEffect(() => {
  //   if (inpIdValue.length > 6 && inpIdValue.indexOf("@") !== -1) {
  //     setIsId(true);
  //   } else {
  //     setIsId(false);
  //   }
  // }, [inpIdValue]);

  return (
    <form action="#">
      <div className="loginForm">
        <input
          className={isId ? null : "error"}
          type="email"
          placeholder="이메일"
          onChange={changeInpIdValue}
          value={inpIdValue}
        />
        <p className={isId ? "success" : "errorEmail"}>
          올바른 이메일 형식이 아닙니다
        </p>
        <input type="password" placeholder="비밀번호" />
        <p className="errorPw">비밀번호는 6자리 이상 입력해주세요</p>
      </div>
      <div className="loginBtn">
        <button>로그인</button>
        <div>
          <span>아이디 찾기</span>
          <span>•</span>
          <span>비밀번호 찾기</span>
        </div>
      </div>
    </form>
  );
};

const LoginSocial = () => {
  return (
    <div className="loginSocial">
      <p>SNS 계정으로 로그인하기</p>
      <div>
        <img src={apple} alt="애플 로그인" />
        <img src={kakao} alt="카카오 로그인" />
        <img src={facebook} alt="페이스북 로그인" />
        <img src={naver} alt="네이버 로그인" />
      </div>
    </div>
  );
};

function Login() {
  return (
    <div className="container">
      <div className="containerInner">
        <Header />
        <div className="login">
          <LoginForm />
          <LoginSocial />
        </div>
      </div>
    </div>
  );
}

export default Login;
