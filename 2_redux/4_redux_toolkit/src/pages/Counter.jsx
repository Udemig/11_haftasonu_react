import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  setCount,
} from "../redux/slices/counterSlice";

const Counter = () => {
  const { count } = useSelector((store) => store.counterReducer);

  const dispatch = useDispatch();

  return (
    <div className="vh-100 d-grid place-items-center">
      <div className="d-flex gap-4 align-items-center justify-content-center">
        <button
          onClick={() => dispatch(decrease())}
          className="btn btn-danger"
        >
          Azalt
        </button>
        <span className="fs-1">{count}</span>
        <button
          onClick={() => dispatch(increase())}
          className="btn btn-success"
        >
          Arttır
        </button>
        <button
          onClick={() => dispatch(setCount(99))}
          className="btn btn-secondary"
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Counter;
