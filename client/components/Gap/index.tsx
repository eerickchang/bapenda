import React from "react";

interface GapProps {
  height: number;
  width: number;
}

export default function Gap(props: GapProps) {
  const { height, width } = props;
  return <div style={{ height: height, width: width }}></div>;
}
