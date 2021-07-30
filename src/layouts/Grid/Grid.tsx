import React from "react";
import "./styles.scss";

type Props = {
  columns: number;
  children: React.ReactNode;
};

function Grid(props: Props) {
  const { columns, children } = props;

  return (
    <div className="grid">
      {React.Children.map(children, (child) => (
        <div style={{ flexBasis: `${100 / columns}%` }}>{child}</div>
      ))}
    </div>
  );
}

export default Grid;
