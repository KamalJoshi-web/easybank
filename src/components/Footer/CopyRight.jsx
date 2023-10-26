import React from "react";
import { Button, Para } from "../index";

const CopyRight = () => {
  return (
    <div className=" flex flex-col justify-between items-start  max-lg:items-center max-lg:gap-5">
      <Button>Request Invite</Button>
      <Para className=" text-left max-lg:text-center">
        © Easybank. All Rights Reserved
      </Para>
    </div>
  );
};

export default CopyRight;
