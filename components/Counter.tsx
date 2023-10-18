"use client";
import {
  increment,
  decrement,
  setCounter,
  reset,
} from "@/redux/features/counter/counterSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchForm.module.css";
import { AppDispatch, RootState } from "@/redux/store";

type Props = {};

const Counter = ({}: Props) => {
  const [counter, setNewCounter] = useState(0);

  const dispatch = useDispatch<AppDispatch>();

  const currentCounter = useSelector(
    (state: RootState) => state.counterSlice.value
  );

  const wasSet = useSelector((state: RootState) => state.counterSlice.wasSet);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(setCounter(counter));
  };

  const onClickInc = () => {
    dispatch(increment());
  };
  const onClickDec = () => {
    dispatch(decrement());
  };
  const onClickReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <br />
      <h2>
        {currentCounter} {wasSet && "was set"}
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="number"
          placeholder="input counter value"
          onChange={(event) => setNewCounter(parseInt(event.target.value))}
          className={styles.searchInput}
        />
        <input type="submit" className={styles.button} value="Set Counter" />
      </form>
      <button onClick={onClickInc}>+</button>
      <button onClick={onClickDec}>-</button>
      <button onClick={onClickReset}>reset</button>
    </>
  );
};

export default Counter;
