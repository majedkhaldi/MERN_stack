import React from 'react'
import { useState } from 'react';


function Tabs(props) {
    const [tab, setTab] = useState("")
    // const [tabobjs, setTabObj] = useState([{tab1: "Test1", cont1: }])

    function handleclick(e) {
      const selectedTab = e.target.id;
      // setTab(selectedTab);
      props.findcontent(selectedTab);
    }
  return (
    <div>
      <button id='tab1' onClick={handleclick}>Test 1</button>
      <button id='tab2' onClick={handleclick}>Test 2</button>
      <button id='tab3' onClick={handleclick}>Test 3</button>
    </div>
  )
}

export default Tabs