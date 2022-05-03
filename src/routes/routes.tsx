import { RouteObject } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/main/Home";
import PageQueryParams from "@/pages/main/PageQueryParams";
import PathParamsDetails from "@/pages/main/PagePathParams/PathParamsDetails";
import PagePathParams from "@/pages/main/PagePathParams";
import PageLocationState from "@/pages/main/PageLocationState";
import React from "react";
import PageNotFound from "@/pages/main/PageNotFound";
import PageProgrammaticNavigation from "@/pages/main/PageProgrammaticNavigation";

const PageLazyLoad = React.lazy(() => import("@/pages/main/PageLazyLoad"));

const routes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "page-path-params",
        element: <PagePathParams />,
      },
      {
        path: "page-path-params/:id",
        element: <PathParamsDetails />,
      },
      {
        path: "page-query-params",
        element: <PageQueryParams />,
      },
      {
        path: "page-location-state",
        element: <PageLocationState />,
      },
      {
        path: "page-programmatic-navigation",
        element: <PageProgrammaticNavigation />,
      },
      {
        path: "page-lazy-load",
        element: (
          <React.Suspense fallback={<>...</>}>
            <PageLazyLoad />
          </React.Suspense>
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];

export default routes;
