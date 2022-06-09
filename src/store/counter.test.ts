import counterStore from "@/store/counter";

describe("Counter store", () => {
  test("should have initial state", () => {
    expect(counterStore.value).toEqual(0);
  });

  test("should handle increment", () => {
    const stateValue = counterStore.value;
    counterStore.increment();
    expect(counterStore.value).toEqual(stateValue + 1);
  });

  test("should handle decrement", () => {
    const stateValue = counterStore.value;
    counterStore.decrement();
    expect(counterStore.value).toEqual(stateValue - 1);
  });

  test("should handle incrementByValue", () => {
    const stateValue = counterStore.value;
    counterStore.incrementByValue(5);
    expect(counterStore.value).toEqual(stateValue + 5);
  });

  test("should handle incrementAsync", async () => {
    const stateValue = counterStore.value;
    await counterStore.incrementAsync(10);
    expect(counterStore.value).toEqual(stateValue + 10);
  });

  test("should handle incrementAsyncGen", async () => {
    const stateValue = counterStore.value;
    await counterStore.incrementAsyncGen(10);
    expect(counterStore.value).toEqual(stateValue + 10);
  });

  test("should handle computed value - double", () => {
    counterStore.value = 10;
    expect(counterStore.double).toEqual(20);
  });

  test("should handle computed value - lessThanTen", () => {
    counterStore.value = 60;
    expect(counterStore.lessThanTen).toEqual(false);

    counterStore.value = 6;
    expect(counterStore.lessThanTen).toEqual(true);
  });
});
