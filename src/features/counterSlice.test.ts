import counterReducer, {
  CounterState,
  decrement,
  increment,
  incrementAsync,
  incrementByValue,
} from "@/features/counterSlice";

describe("Counter reducer", () => {
  const initialState: CounterState = {
    value: 10,
  };

  test("should have initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
    });
  });

  test("should handle increment", () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(11);
  });

  test("should handle decrement", () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(9);
  });

  test("should handle incrementByValue", () => {
    const actual = counterReducer(initialState, incrementByValue(5));
    expect(actual.value).toEqual(15);
  });

  test("should handle incrementAsync", async () => {
    const action = { type: incrementAsync.fulfilled.type, payload: 5 };
    const actual = counterReducer(initialState, action);
    expect(actual.value).toEqual(15);
  });
});
