import "../styles/login.scss";
import mainlogo from "../assets/main-logo.svg";
import kakao from "../assets/kakaoLogin.svg";
import facebook from "../assets/facebookLogin.svg";
import naver from "../assets/naverLogin.svg";
import apple from "../assets/appleLogin.svg";
import { useState } from "react";
import useDidMountEffect from "../hooks/useDidMountEffect";
import client from "../client/client";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="headerInner">
        <img src={mainlogo} alt="메인 로고" />
        <span>{`if (login) { return upgrade.code.skills }`}</span>
      </div>
    </header>
  );
};

const LoginForm = () => {
  const [isId, setIsId] = useState(true);
  const [isPw, setIsPw] = useState(true);
  const [isButton, setIsButton] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const checkId = () => {
    setIsId(false);
    if (form.email.indexOf("@") !== -1) {
      setIsId(true);
    } else {
      setIsId(false);
    }
  };

  const checkPw = () => {
    setIsPw(false);
    if (form.password.length >= 6) {
      setIsPw(true);
    } else {
      setIsPw(false);
    }
  };

  const passIdPw = () => {
    if (isId && isPw && form.email !== "" && form.password.length > 5) {
      setIsButton(true);
    } else {
      setIsButton(false);
    }
  };

  useDidMountEffect(checkId, [form]);
  useDidMountEffect(checkPw, [form]);
  useDidMountEffect(passIdPw, [isId, isPw]);

  // 로그인
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    client
      .post("/auth/v1/token?grant_type=password", {
        email: form.email,
        password: form.password,
      })
      // 성공시
      .then((res) => {
        console.log("성공: ", res);
        console.log(res.data.access_token);
        localStorage.setItem("COMMUNITY_TOKEN", res.data.access_token);
        navigate("/home");
      })
      // 실패시
      .catch((err) => console.log("error: ", err));
  };

  // const handleSignUpClick = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <div className="loginForm">
        <input
          className={isId ? "true" : "false"}
          type="email"
          placeholder="이메일"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          value={form.email}
        />
        <p className={isId ? "successEmail" : "errorEmail"}>
          올바른 이메일 형식이 아닙니다
        </p>

        <input
          className={isPw ? "true" : "false"}
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          value={form.password}
        />
        <p className={isPw ? "successPw" : "errorPw"}>
          비밀번호는 6자리 이상 입력해주세요
        </p>
      </div>
      <div className="loginBtn">
        <button type="submit" className={isButton ? "action" : null}>
          로그인
        </button>
        <div className="flex w-full justify-between px-[40px]">
          <div>
            <span>아이디 찾기</span>
            <span>•</span>
            <span>비밀번호 찾기</span>
          </div>
          <div>
            <span className="signUpColor">
              <Link to="/signup">회원가입</Link>
            </span>
          </div>
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
