import { useState } from "react";

export interface TestHook1Result {
  func1: (id: number) => void;
  numbersArray: number[];
}

const useTestHook1 = (): TestHook1Result => {
  const [state1, setState1] = useState<number[]>([]);

  console.log("useTestHook1 hook created");
  return {
    func1: async (id: number) => {
      setState1((prev) => [...prev, id]);
    },
    numbersArray: state1,
  };
};

export default useTestHook1;
