import React, { Suspense, lazy } from "react";
import { Memuat } from "Komponen/AnimasiMemuat";

const LoadingHalamanTidakAda = lazy(() =>
  import(/* webpackChunkName: "page-not-found" */ ".")
);

function Data() {
  return (
    <Suspense fallback={Memuat}>
      <LoadingHalamanTidakAda />
    </Suspense>
  );
}
export default Data;