// import classNames from "classnames";

import { useState, useRef, useLayoutEffect } from "react";

const Switch = ({ items, onToggle, isToggled }) => {
  // const [isToggled, setIsToggled] = useState(false);
  const [item1Width, setItem1Width] = useState();
  const [item2Width, setItem2Width] = useState();
  const item1ref = useRef();
  const item2ref = useRef();

  useLayoutEffect(() => {
    setItem1Width(item1ref.current.offsetWidth);
    setItem2Width(item2ref.current.offsetWidth);
  }, []);

  const handleToggle = (selectedItem) => onToggle(selectedItem);

  const activeTextColor =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]";

  return (
    <div className="flex relative z-[1] cursor-pointer h-8 border-tmdbDarkBlue border-solid border-[1px] rounded-[30px] font-semibold items-center">
      <div
        ref={item1ref}
        onClick={() => handleToggle(items[0])}
        className={`py-1 px-5 h-8 rounded-[30px] ${
          isToggled || activeTextColor
        }`}
      >
        {items[0]}
      </div>
      <div
        ref={item2ref}
        onClick={() => handleToggle(items[1])}
        className={`py-1 px-5 h-8 rounded-[30px] ${
          isToggled && activeTextColor
        }`}
      >
        {items[1]}
      </div>
      <div
        className="h-8 z-[-1] bg-tmdbDarkBlue absolute rounded-[30px] transition-all duration-150 ease-in"
        style={
          isToggled
            ? { left: item1Width, width: item2Width }
            : { left: "0", width: item1Width }
        }
      ></div>
    </div>
  );
};

export default Switch;
