"use client"; // これを追加

import Error from 'next/error';
import React from 'react';

export default function NotFound() {
  return <Error statusCode={404} />;
}