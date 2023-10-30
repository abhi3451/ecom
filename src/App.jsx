import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Spin from "./component/Layout/Spinner";

const Section = React.lazy(() => import("./component/ItemList/PandC"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route path="/" element={<Section />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
