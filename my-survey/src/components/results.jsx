import React from "react";

export default function Results({ payload, header }) {
  const result = [];
  for (const [i, value] of payload.entries()) {
    result.push(<p key={i}>{value}</p>);
  }

  return (
    <div>
      <h2>{header}</h2>
      {result}
    </div>
  );
}
