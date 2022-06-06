import React, { Suspense, lazy } from "react";
import { Memuat } from "../../Komponen/AnimasiMemuat";

const HalamanUtamaLazy = lazy(() =>
  import(/* webpackChunkName: "halaman-utama" */ ".")
);

function Data() {
  return (
    <Suspense fallback={Memuat}>
      <HalamanUtamaLazy />
    </Suspense>
  );
}
export default Data;
 



