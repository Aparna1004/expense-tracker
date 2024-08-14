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
          "height": "650px",
          "symbol": symbol,
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "hide_side_toolbar": false,
          "container_id": "tradingview_bse_hindunilvr"
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
    <div className='flex flex-col gap-14'>
      <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 mt-6'>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'
          onClick={() => handleButtonClick('BSE:HDFCBANK')}
        >
          HDFCBANK
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'
          onClick={() => handleButtonClick('BSE:TCS')}
        >
          TCS
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'
          onClick={() => handleButtonClick('BSE:ICICIBANK')}
        >
          ICICIBANK
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'
          onClick={() => handleButtonClick('BSE:RELIANCE')}
        >
          RELIANCE
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'
          onClick={() => handleButtonClick('BSE:SBIN')}
        >
          SBIN
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'
          onClick={() => handleButtonClick('BSE:BPCL')}
        >
          BPCL
        </button>
        <button
          className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'
          onClick={() => handleButtonClick('BSE:HINDUNILVR')}
        >
          HINDUNILVR
        </button>
      </div>
      <div id="tradingview_bse_hindunilvr" className='w-full h-96 md:h-128'></div>
    </div>
  );
};

export default TradingViewWidget;





// "use client";
// import React, { useEffect, useState } from 'react';

// const TradingViewWidget = () => {

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/tv.js';
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       if (window.TradingView) {
//         new window.TradingView.widget({
//           "width": "100%",
//           "height": "500px",
//           "symbol": "NSE:RELIANCE",
//           "interval": "D",
//           "timezone": "Etc/UTC",
//           "theme": "light",
//           "style": "1",
//           "locale": "en",
//           "toolbar_bg": "#f1f3f6",
//           "enable_publishing": false,
//           "hide_side_toolbar": false,
//           "allow_symbol_change": true,
//           "container_id": "tradingview_bse_hindunilvr"
//         });
//       }
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className=' flex flex-col p-8 gap-14'>
//         <div className='flex gap-10'>
//             <button className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'>HDFCBANK</button>
//             <button className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'>TCS</button>
//             <button className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'>ICICIBANK</button>
//             <button className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'>RELIANCE</button>
//             <button className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'>SBIN</button>
//             <button className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white'>BPCL</button>
//             <button className='py-2 px-4 border-2 border-blue-100 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white anim'>HINDUNILVR</button>
//         </div>
//         <div id="tradingview_bse_hindunilvr" className='w-full'>
//         </div>
//     </div>
// );
// };

// export default TradingViewWidget;
