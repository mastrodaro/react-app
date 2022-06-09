import React from "react";
import Counter from "@/components/Counter";
import CounterMobx from "@/components/CounterMobx";

const PageStateManagement = () => {
  return (
    <div>
      <h3>store with @redux/toolkit</h3>
      <Counter />
      <br />
      ________________________
      <br />
      <CounterMobx />
    </div>
  );
};

export default PageStateManagement;
