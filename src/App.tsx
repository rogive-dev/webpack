import React, { ReactElement } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Registry from "./modules/Registry";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <main className="content">
        <Routes>
          <Route path="/" element={<Registry />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
