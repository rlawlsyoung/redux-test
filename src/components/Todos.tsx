import React from "react";

const Todos = ({
  input, // input에 입력되는 텍스트
  todos, // 할 일 목록이 들어 있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}: any) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

const TodoItem = ({ todo, onToggle, onRemove }: any) => {
  return (
    <div>
      <input type="checkbox" />
      &nbsp;&nbsp;
      <span>예제 텍스트</span>
      &nbsp;&nbsp;
      <button>삭제</button>
    </div>
  );
};

export default Todos;
