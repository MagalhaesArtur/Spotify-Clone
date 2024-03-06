"use client";

import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box className=" flex bg-transparent w-full items-center justify-center">
      <BounceLoader color="#22c55e" size={24} />
    </Box>
  );
};

export default Loading;
