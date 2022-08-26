import React from "react";
import Counter from "@/components/Counter";
import Tasks from "@/components/Tasks";

const PageStateManagement = () => {
  return (
    <div>
      <h3>store with @redux/toolkit</h3>
      <Counter />
      <Tasks />
    </div>
  );
};

export default PageStateManagement;
