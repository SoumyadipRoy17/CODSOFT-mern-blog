import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function OnlyAdminPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser.isAdmin ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to="/sign-in"></Navigate>
  );
}

export default OnlyAdminPrivateRoute;
