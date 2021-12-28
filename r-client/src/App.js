import React, { memo, Suspense } from "react";

import { Provider } from "react-redux";
import store from "./store";

import 'moment/locale/zh-cn';

import { renderRoutes } from "react-router-config";
import routes from "@/router";
import { HashRouter } from "react-router-dom";

import Loading from "@/components/loading-page";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
      </HashRouter>
    </Provider>
  );
});
