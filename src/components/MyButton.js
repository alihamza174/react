import React from 'react'
import { useState } from 'react';

export default function MyButton({count, onClick}) {
  
  

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}