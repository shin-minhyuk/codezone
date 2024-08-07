import { useState } from "react";
import client from "../client/client";
import "../styles/signup.scss";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    client
      .post("/auth/v1/signup", {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        console.log("성공: ", res);
        console.log(form);
      })
      .catch((err) => console.log("에러: ", err));
  };

  return (
    <>
      <div className="signUpContainer">
        <form onSubmit={handleFormSubmit} className="inpForm">
          <label htmlFor="">
            이메일
            <span className="text-[12px] text-[#0040ff] font-[700]">
              {" "}
              *로그인 시 아이디로 사용합니다.
            </span>
          </label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            placeholder="이메일(example@example.com)"
          />
          <label htmlFor="">
            비밀번호
            <span className="text-[12px] text-[#0040ff] font-[700]">
              {" "}
              *6~15자의 영문 대/소문자, 숫자 및 특수문자 조합
            </span>
          </label>
          <input
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            placeholder="비밀번호를 입력해 주세요"
          />
          <label htmlFor="">비밀번호 확인</label>
          <input type="password" placeholder="비밀번호를 다시 입력해 주세요" />
          <div>
            <button type="submit" className="signUpBtn">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
