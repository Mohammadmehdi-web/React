import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the dynamic year

  return (
    <div className='copyright-text text-center'>
      <p  className='bg-black text-white'>© {currentYear} Auctech Marketing Communications Pvt. Ltd. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
