import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("/", "./pages/login/Login.tsx"),
    route("/CreateAccount", "./pages/create_account/CreateAccount.tsx")



] satisfies RouteConfig;
