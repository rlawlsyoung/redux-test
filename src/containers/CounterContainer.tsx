import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }: any) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 위의 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect를 사용해야 한다.

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)

// mapStateToProps : 리덕스 스토어 안에 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
// mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수

const mapStateToProps = (state: any) => {
  return {
    number: state.counterReducer.number,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

// mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성함수로 이루어진 객체 형태로 디스패치할 수 있다. 밑처럼. 이게 더 깔끔한듯

export default connect(mapStateToProps, { increase, decrease })(
  CounterContainer
);

// mapStateToProps와 mapDispatchProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
// mapStateToProps : state를 파라미터로 받아오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킨다.
// mapDispatchProps : store의 내장함수 dispatch를 파라미터로 받아온다.
