import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}: any) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

const mapStateToProps = (state: any) => ({
  input: state.todosReducer.input,
  todos: state.todosReducer.todos,
});

export default connect(mapStateToProps, {
  changeInput,
  insert,
  toggle,
  remove,
})(TodosContainer);
