import React from 'react';
import { Redirect } from "react-router-dom";

const Login = React.lazy(() => import("@/pages/login"));

const Major = React.lazy(() => import("@/pages/major"));
const Follow = React.lazy(() => import("@/pages/major/follow"));
const Recommend = React.lazy(() => import("@/pages/major/recommend"));
const Hot = React.lazy(() => import("@/pages/major/hot"));
const Video = React.lazy(() => import("@/pages/major/video"));

const Vip = React.lazy(() => import("@/pages/vip"));

const Answer = React.lazy(() => import("@/pages/answer"));
const AnswerRecommend = React.lazy(() => import("@/pages/answer/recommend"));
const AnswerQuestion = React.lazy(() => import("@/pages/answer/question"));
const AnswerInvite = React.lazy(() => import("@/pages/answer/invite"));
const AnswerPopular = React.lazy(() => import("@/pages/answer/popular"));

const Discover = React.lazy(() => import("@/pages/discover"));
const Special = React.lazy(() => import("@/pages/discover/special"));
const Discuss = React.lazy(() => import("@/pages/discover/discuss"));
const Collect = React.lazy(() => import("@/pages/discover/collect"));
const Column = React.lazy(() => import("@/pages/discover/column"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/login"/>
    )
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/major",
    component: Major,
    routes: [
      {
        path: "/major",
        exact: true,
        render: () => <Redirect to="/major/follow"/>
      },
      {
        path: "/major/follow",
        component: Follow
      },
      {
        path: "/major/Recommend",
        component: Recommend
      },
      {
        path: "/major/hot",
        component: Hot
      },
      {
        path: "/major/video",
        component: Video
      }
    ]
  },
  {
    path: "/vip",
    component: Vip
  },
  {
    path: "/answer",
    component: Answer,
    routes: [
      {
        path: '/answer',
        exact: true,
        render: () => <Redirect to="/answer/recommend"/>
      },
      {
        path: "/answer/recommend",
        component: AnswerRecommend
      },
      {
        path: "/answer/question",
        component: AnswerQuestion
      },
      {
        path: "/answer/popular",
        component: AnswerPopular
      },
      {
        path: "/answer/invite",
        component: AnswerInvite
      },
    ]
  },
  {
    path: "/discover",
    exact: true,
    component: Discover
  },
  {
    path: "/discover/special",
    component: Special
  },
  {
    path: "/discover/discuss",
    component: Discuss
  },
  {
    path: "/discover/collect",
    component: Collect
  },
  {
    path: "/discover/column",
    exact: true,
    component: Column
  }
];

export default routes;
