import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Content from './Content';
import Tabs from './Tabs';

function App() {
  const [state, setState] = useState("");

  function showContent(tab) {
    const objs = {
      tab1: "This is to test the first tab",
      tab2: "This is a second test for the second tab",
      tab3: "This is the last test for the third and final tab"
    };

    if (objs.hasOwnProperty(tab)) {
      setState(objs[tab]);
    }
  }

  return (
    <>
      <Tabs findcontent={showContent} />
      <Content neededcontent={state} />
    </>
  );
}

export default App;

