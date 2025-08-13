import React from "react";

const TagBadge = ({ text, variant = "default" }) => {
  const baseStyle =
    "text-[10px] px-2 py-[2px] rounded whitespace-nowrap";

  const variants = {
    default: "bg-black/70 text-white",
    more: "bg-black/40 text-white",
    detail: "bg-surface text-muted text-xs",
    shield: "", // no extra styling so the shield image keeps its native look
  };

  if (variant === "shield") {
    return <img src={text} alt="tag badge" className="h-5 inline-block" />;
  }

  return <span className={`${baseStyle} ${variants[variant]}`}>{text}</span>;
};

export default TagBadge;
