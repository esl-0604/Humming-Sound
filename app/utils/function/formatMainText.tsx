import React from "react";

export function formatMainText(input: string) {
  const jsxElements = input.split(/<\/?b>/g).map((part, index) => {
    if (index % 2 === 0) {
      // Even index, not wrapped in <b></b>
      return (
        <React.Fragment key={index}>{formatBrandingText(part)}</React.Fragment>
      );
    } else {
      // Odd index, wrapped in <b></b>
      return (
        <span className="font-main" key={index}>
          {formatBrandingText(part)}
        </span>
      );
    }
  });

  return <>{jsxElements}</>;
}

export function formatBrandingText(input: string) {
  const jsxElements = input.split(/(STCL)/g).map((part, index) => {
    if (part === "STCL") {
      return (
        <span className="font-branding" key={index}>
          {part}
        </span>
      );
    } else {
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }
  });

  return <>{jsxElements}</>;
}
