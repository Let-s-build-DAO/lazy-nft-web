import React from 'react';

const FooterNav = () => {
  return (
    <div className='border-t-2 border-[#7A7A7A] text-[#F3F3F3] p-6 text-center text-sm'>
      Copyright © {new Date().getFullYear()} Let&lsquo;s Build Labs. All rights reserved.
    </div>
  );
};

export default FooterNav;