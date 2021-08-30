import React from 'react';
export default function MyPicture() {
  
  return (
    <React.Fragment>
      <img src={`${process.env.PUBLIC_URL}/takashi_4.JPG`} alt="Logo" />
    </React.Fragment>
  );
}
