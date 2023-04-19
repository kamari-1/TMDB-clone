import { memo } from "react";
import FontAwesomeIcon from "react-fontawesome";

const Ellipsis = () => {
  return (
    <div className="w-full bg-white/50 flex rounded-full justify-center items-center hover:cursor-pointer hover:bg-tmdbLightBlue">
      <div className="scale-[.22] flex gap-2 justify-center items-center">
        <FontAwesomeIcon name="circle" />
        <FontAwesomeIcon name="circle" />
        <FontAwesomeIcon name="circle" />
      </div>
    </div>
  );
};

export default memo(Ellipsis);
