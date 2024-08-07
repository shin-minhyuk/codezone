import React, { useEffect, useRef } from "react";
// 실행함수, 의존성배열
const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};
//Id 유효성검사 func // 아이디 상태값 deps

export default useDidMountEffect;
