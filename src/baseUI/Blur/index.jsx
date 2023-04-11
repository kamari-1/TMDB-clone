import { memo } from "react";

const Blur = () => {
  console.log("Blur is rendered.");
  return (
    <div className="w-full h-full bg-gradient-to-r from-white/0 to-white/100"></div>
  );
};

export default memo(Blur);
