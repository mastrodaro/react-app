import {
  action,
  autorun,
  computed,
  flow,
  IReactionDisposer,
  makeObservable,
  observable,
  reaction,
  runInAction,
} from "mobx";
import { fetchIncrement } from "@/services/increment";

class Counter {
  value = 0;
  amountCheckedHandler: IReactionDisposer;

  constructor(value: number) {
    // makeAutoObservable(this);
    makeObservable(this, {
      value: observable,
      double: computed,
      lessThanTen: computed,
      increment: action,
      decrement: action,
      incrementByValue: action,
      incrementAsyncGen: flow,
    });

    this.value = value;

    // not run once initialized
    this.amountCheckedHandler = reaction(
      () => this.lessThanTen,
      (lessThanTen) => {
        if (lessThanTen) {
          console.log("Reaction to < 10");
        } else {
          console.log("Reaction to 10+");
        }
      },
    );
  }

  get double() {
    return this.value * 2;
  }

  get lessThanTen() {
    return this.value < 10;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  incrementByValue(value: number) {
    this.value += value;
  }

  async incrementAsync(value: number) {
    const val = await fetchIncrement(value);
    runInAction(() => {
      this.value += val.data;
    });
  }

  // flow makes it easier for async operations - no need wrap with runInAction
  *incrementAsyncGen(value: number) {
    const response: { data: number } = yield fetchIncrement(value);
    this.value += response.data;
  }

  // clean up function
  dispose() {
    console.log("CLEANINNG");
    this.amountCheckedHandler();
  }
}

const counter = new Counter(0);

autorun(() => {
  console.log("reacted");
});

// run once initialized
autorun(() => {
  console.log(counter.lessThanTen ? "Value < 10" : "Value 10+");
});

export default counter;
