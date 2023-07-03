import React from 'react'
import { SidebarContainer } from '../HeaderStyle';

import SidebarHeader from './SidebarHeader';
import SidebarHome from './SidebarHome';
import { useState } from 'react';
import TopCategories from './TopCategories';

const Sidebar = () => {
  let [home,setHome] = useState(true);
  let [topCategories, setTopCategories] = useState(false)

  let toggleHome = (state) => {
    switch (state){
      case 'home':
        setHome(true);
        setTopCategories(false);
        break;
      case 'topCategories':
        setHome(false);
        setTopCategories(true);
        break;
    }
  }

  return (
    <SidebarContainer>
      <SidebarHeader/>
      {home && <SidebarHome toggleHome={toggleHome}/>}
      {topCategories && <TopCategories/>}
    </SidebarContainer>
  )
}

export default Sidebar