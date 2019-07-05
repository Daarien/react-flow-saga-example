// @flow
import React from "react";
import { DogsState } from "../../store/dogs/actions";
import { ClipLoader } from "react-spinners";

interface Props extends DogsState {
  getDog: () => void;
}

export default function Dogs({ url, loading, getDog }: Props) {
  console.log("TCL: Dogs -> url", url);
  return (
    <div>
      <div>
        <button onClick={getDog}>get dog</button>
      </div>
      <div>
        <img src={url} width="300" alt="random dog" />
      </div>
      <ClipLoader loading={loading} />
    </div>
  );
}
