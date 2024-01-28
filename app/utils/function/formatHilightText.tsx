import React from "react";
import { formatBrandingText } from "./formatMainText";

export function formatHilightText(input: string) {
  const jsxElements = input.split(/<\/?b>/g).map((part, index) => {
    if (index % 2 === 0) {
      // Even index, not wrapped in <b></b>
      return (
        <React.Fragment key={index}>{formatBrandingText(part)}</React.Fragment>
      );
    } else {
      // Odd index, wrapped in <b></b>
      return (
        <span className="font-highlight" key={index}>
          {formatBrandingText(part)}
        </span>
      );
    }
  });

  return <>{jsxElements}</>;
}
