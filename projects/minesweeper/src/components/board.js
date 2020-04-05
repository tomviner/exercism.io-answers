import React, { useState, useEffect } from 'react';
import Cell from './cell';
import './board.css';

function Board(props) {
  const { width } = props;
  const height = width;
  const cellCount = width * height;

  const [mineGrid, setMineGrid] = useState(null);
  const [hideGrid, setHideGrid] = useState(null);

  const cells = Array(cellCount).fill().map((_,i) =>
    <Cell />
  );
  const widthPx = 100 * width + 1;
  const heightPx = 100 * height + 1;
  const style={width: widthPx, height: heightPx};
  return (
    <div className="board" style={style}>
      {cells}
    </div>
  )

}

export default Board;
