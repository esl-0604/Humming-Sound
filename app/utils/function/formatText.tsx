import React from "react";

export function formatText(input: string) {
  const parts = input.split(/<\/?b>/g);
  const jsxElements = parts.map((part, index) => {
    const words = part.split(/\s+/); // Split by whitespace
    const wordElements = words.map((word, wordIndex) => (
      <React.Fragment key={wordIndex}>
        {wordIndex > 0 && <>&nbsp;</>} {/* Add &nbsp; between words */}
        <span key={wordIndex}>{word}</span>
      </React.Fragment>
    ));

    if (index % 2 === 0) {
      // Even index, not wrapped in <b></b>
      return <React.Fragment key={index}>{wordElements}</React.Fragment>;
    } else {
      // Odd index, wrapped in <b></b>
      return (
        <span className="font-highlight" key={index}>
          {wordElements}
        </span>
      );
    }
  });

  return <>{jsxElements}</>;
}
