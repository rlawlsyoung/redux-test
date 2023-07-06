// 액션 타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성함수 만들기
// 액션 생성함수란 컴포넌트에서 더욱 쉽게 액션을 발생시키기 위한 것이다.
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//초기 상태 및 리듀서 함수 만들기
//초기 상태
const initialState = {
  number: 0,
};

//리듀서 함수
function counterReducer(state = initialState, action: any) {
  if (action.type === INCREASE)
    return {
      number: state.number + 1,
    };
  if (action.type === DECREASE)
    return {
      number: state.number - 1,
    };
  return state;
}

export default counterReducer;
// export : 여러개를 내보낼 수 있고
// export default : 단 한 개만 내보낼 수 있다.
