import React from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT } from "../redux/count/actionTypes";
function Counter({ count, increment, decrement }) {
  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch({ type: INCREMENT }),
    decrement: (value) => dispatch({ type: DECREMENT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
