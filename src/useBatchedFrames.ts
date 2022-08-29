import { useState } from "react";

export interface BatchedFramesResult {
  getFrame: (id: number) => Promise<number>;
}

const useBatchedFrames = (): BatchedFramesResult => {
  console.log("useBatchedFrames Rendered!!!");
  const [val, setVal] = useState<number>(0);

  return {
    getFrame: async (id: number) => {
      const p = new Promise<number>((resolve) => {
        setTimeout(() => {
          setVal((prev) => {
            console.log("new value", prev + id);
            return prev + id;
          });
          resolve(id);
        }, 5000);
      });
      return p;
    },
  };
};

export default useBatchedFrames;
