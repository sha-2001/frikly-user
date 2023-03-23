import React from 'react'

import proMemberLarge from '../../assets/icons/pro-member-large.webp';
import proMemberSmall from '../../assets/icons/pro-member-small.webp';

function ProMember() {
  return (
    <div className='pro-member '>
      <img className='d-none d-md-block' src={proMemberLarge} alt="Become a pro member" />
      <img className='d-block  d-md-none' src={proMemberSmall} alt="Become a pro member" />
    </div>
  )
}

export default ProMember