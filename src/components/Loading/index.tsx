import React from "react";
import {  StyleLoading } from "./style";
import loading from 'assets/images/loading.gif'  
import { useLoading } from "hooks/LoadingContext";

export default function CustomLoading() {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && (
        <StyleLoading>
          <img src={loading} alt="img loading"/>
        </StyleLoading>
      )}
    </>
  );
}
