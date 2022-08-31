import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function Graph( {finalSearch, color} ) {
  let displayColor = true;

  if (color === "light"){
       displayColor = true;
  } else {
       displayColor = false;
  }

  return (
     <div className="graphSize">
     {displayColor
       ? (
        <TradingViewWidget symbol={finalSearch} theme={Themes.LIGHT} autosize/>
      ) : (
        <TradingViewWidget symbol={finalSearch} theme={Themes.DARK} autosize/>
      )}
     </div>
  );
}

export default Graph;
