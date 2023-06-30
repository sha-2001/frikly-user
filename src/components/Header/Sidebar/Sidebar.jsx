import React from 'react'
import { SidebarContainer } from '../HeaderStyle';

import SidebarHeader from './SidebarHeader';
import SidebarHome from './SidebarHome';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader/>
      <SidebarHome/>
    </SidebarContainer>
  )
}

export default Sidebar