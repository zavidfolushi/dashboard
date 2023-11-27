import React from "react"
import Dashboard from "../pages/Dashboard";
import UserProfile from "../pages/UserProfile";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export const routes: IRoute[] = [
  { path: "/", component: Dashboard},
  { path: "/:fullName", component: UserProfile },
];