import './App.css';
import HelmetExport from 'react-helmet';
// import { useState } from 'react';
//import firebase from 'firebase/compat/app';
import TEST_PAGE from './firestore';
import 'firebase/database';
// import { useEffect } from 'react';
// import { toast } from 'react-toastify';
// import Popup from './popup';使用react寫法的popuppage
import ScrollableModal from './scroll';
//提示訊息
import AlertMessage from './alert';

function App() {
  const twlink = "https://twitter.com/shu_yamino";
  const y2link = "https://www.youtube.com/@ShuYamino";
  // useEffect(() => {
  //   toast.info('Eyyyyyy welcome to what-does-Shu-say, have fun');
  // }, []);
  // popup stting
  // const [buttonPopup, setButtonPopup] = useState(false); 使用react寫法的時候再啟用

  return (
    <div className="App">
      <div>
        <HelmetExport>
          {/* <link rel="icon" href="%PUBLIC_URL%/yaminerd.png" /> */}
          {/* 使用https://favicon.io/favicon-converter/ 轉換 路徑必須放在public 下 */}
          <title>What-does-shu-say</title>
        </HelmetExport>
      </div>

      <div className='content'>

        <TEST_PAGE />

        {/* popup page */}
        {/* <button><img src="./image/savepoint.png" onClick={() => setButtonPopup(true)} width={80} id="collect" alt='collector' /></button>
        <Popup position="top center" trigger={buttonPopup} setTrigger={setButtonPopup} /> */}
        <ScrollableModal />
      </div>

      <AlertMessage />

      <footer>
        <a href={twlink} target="_blank" rel="noopener noreferrer"><img src='./image/twittercon.png' alt="icon" width={90}></img></a>
        <a href={y2link} target="_blank" rel="noopener noreferrer"><img src='./image/button_subscribe.png' alt="icon" width={90}></img></a>
      </footer>
    </div>
  );
}

export default App;
