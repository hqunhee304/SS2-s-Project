import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsBagCheckFill } from "react-icons/bs";

const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Dashboard</h4>

          <NavLink
            to="/dashboard/user/profile"
            className="das-user-icons userdash list-group-item list-group-item-action"
          >
            <div>
              {" "}
              <CgProfile />
            </div>
            <span className="user-textf">Profile</span>
          </NavLink>

          <NavLink
            to="/dashboard/user/orders"
            className="das-user-icons userdash list-group-item list-group-item-action"
          >
            <div>
              <BsBagCheckFill />
            </div>
            <span className="user-textf">Orders</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
