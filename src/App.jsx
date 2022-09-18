import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { increment, decrement, set } from "./redux/feature/counter/counter";
import user, { fetchUserThunk } from "./redux/feature/user/user";
function App() {
  const [countValue, setCountValue] = useState();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const { data: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, []);

  function changeHandler(e) {
    const value = e.target.value;
    setCountValue(value);
    dispatch(set(value));
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <input
        type="number"
        step={1}
        onChange={changeHandler}
        value={countValue}
      />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        {loading
          ? "loading"
          : error
          ? error
          : users.map((user) => <div>{user.id + "" + user.name}</div>)}
      </div>
    </div>
  );
}

export default App;
