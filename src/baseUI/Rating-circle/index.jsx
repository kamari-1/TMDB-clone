import { memo } from "react";

const getColour = (rating) => {
  if (rating >= 70) return "high";
  if (rating >= 40) return "mid";
  if (rating >= 0) return "low";
  return "none";
};

const RatingCircle = ({ percent }) => {
  const dashArray = Math.PI * 100;
  const dashOffset = Math.PI * (100 - percent);

  const bar = {
    low: "#db2360",
    mid: "#d2d531",
    high: "#21d07a",
    none: "#d4d4d4",
  };
  const track = {
    low: "#571435",
    mid: "#423d0f",
    high: "#204529",
    none: "#666666",
  };

  return (
    <div className="w-[38px] h-[38px] bg-tmdbDarkBlue  rounded-full flex justify-center items-center">
      <svg
        width="34px"
        height="34px"
        viewBox="0 0 100 100"
        className="rotate-[-90deg]"
      >
        {/* //track */}
        <circle
          cx="53"
          cy="53"
          r="50"
          fill="transparent"
          stroke={track[getColour(percent)]}
          strokeWidth="6"
          strokeDasharray={dashArray}
          className="scale-[0.94]"
        />

        {/* //bar */}
        <circle
          cx="53"
          cy="53"
          r="50"
          fill="transparent"
          stroke={bar[getColour(percent)]}
          strokeWidth="6"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          className="scale-[0.94]"
        />
      </svg>
      <div className="font-semibold absolute text-white text-[.85rem]">
        {percent ? (
          <div>
            {Math.trunc(percent)}
            <sup className="text-[5px] align-super">%</sup>
          </div>
        ) : (
          "NR"
        )}
      </div>
    </div>
  );
};

export default memo(RatingCircle);
