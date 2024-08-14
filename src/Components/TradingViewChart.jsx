"use client";
import React, { useEffect, useState } from 'react';

const TradingViewWidget = () => {
  const [symbol, setSymbol] = useState("BSE:HDFCBANK");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          "width": "100%",
          "height": "500px", // Adjusted height for better responsiveness
          "symbol": symbol,
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "hide_side_toolbar": false,
          "container_id": "tradingview_widget"
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [symbol]);

  const handleButtonClick = (newSymbol) => {
    setSymbol(newSymbol);
  };

  return (
    <div className='flex flex-col p-4 gap-8'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white text-xs sm:text-sm md:text-base lg:text-lg'
          onClick={() => handleButtonClick('BSE:HDFCBANK')}
        >
          HDFCBANK
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white text-xs sm:text-sm md:text-base lg:text-lg'
          onClick={() => handleButtonClick('BSE:TCS')}
        >
          TCS
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white text-xs sm:text-sm md:text-base lg:text-lg'
          onClick={() => handleButtonClick('BSE:ICICIBANK')}
        >
          ICICIBANK
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white text-xs sm:text-sm md:text-base lg:text-lg'
          onClick={() => handleButtonClick('BSE:RELIANCE')}
        >
          RELIANCE
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white text-xs sm:text-sm md:text-base lg:text-lg'
          onClick={() => handleButtonClick('BSE:SBIN')}
        >
          SBIN
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white text-xs sm:text-sm md:text-base lg:text-lg'
          onClick={() => handleButtonClick('BSE:BPCL')}
        >
          BPCL
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white text-xs sm:text-sm md:text-base lg:text-lg'
          onClick={() => handleButtonClick('BSE:HINDUNILVR')}
        >
          HINDUNILVR
        </button>
      </div>
      <div id="tradingview_widget" className='w-full h-60 sm:h-72 md:h-96 lg:h-128'></div>
    </div>
  );
};

export default TradingViewWidget;
