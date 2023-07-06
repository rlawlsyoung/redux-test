import { combineReducers } from "redux";
import counterReducer from "./counter";
import todosReducer from "./todos";

// 리듀서를 여러개 만들었는데, store를 만들때는 리듀서를 하나만 사용할수 있기 때문에 리듀서를 하나로 합쳐주는 combineReducers 라는 유틸함수를 이용한다.

const rootReducer = combineReducers({
  counterReducer,
  todosReducer,
});

export default rootReducer;
