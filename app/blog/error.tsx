"use client";
import React from "react";

const errorMassage = ({ error }: { error: Error }) => {
  return (
    <>
      <h1>{error.name}</h1>
      <p>{error.message}</p>
    </>
  );
};

export default errorMassage;
