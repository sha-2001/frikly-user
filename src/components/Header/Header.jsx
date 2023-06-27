import { Fragment } from 'react'

import { HeaderContainer } from './HeaderStyle'
import HeaderFirst from './HeaderFirst'
import HeaderSecond from './HeaderSecond'
import HeaderThird from './HeaderThird'

const Header = () => {
  return (
    <Fragment>
        <HeaderContainer>
            {/* 1 header bar */}
            <HeaderFirst/>
            {/* 2 header bar */}
            <HeaderSecond/>
            {/* 3 header bar */}
            <HeaderThird />
        </HeaderContainer>
    </Fragment>
  )
}

export default Header