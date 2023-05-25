import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineInbox } from "react-icons/ai";
import { MdListAlt } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="adminpanel-compoenets list-group-item list-group-item-action"
          >
            <div>
              {" "}
              <BiCategoryAlt />
            </div>
            <div className="icons-adminMenu">Create Category</div>
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="adminpanel-compoenets list-group-item list-group-item-action"
          >
            <div>
              <MdOutlineCreateNewFolder />
            </div>
            <div className="icons-adminMenu">Create Product</div>
          </NavLink>

          <NavLink
            to="/dashboard/admin/products"
            className="adminpanel-compoenets list-group-item list-group-item-action"
          >
            <div>
              {" "}
              <AiOutlineInbox />
            </div>
            <div className="icons-adminMenu"> Products</div>
          </NavLink>

          <NavLink
            to="/dashboard/admin/orders"
            className="adminpanel-compoenets list-group-item list-group-item-action"
          >
            <div>
              <MdListAlt />
            </div>
            <div className="icons-adminMenu">Orders</div>
          </NavLink>

          <NavLink
            to="/dashboard/admin/users"
            className="adminpanel-compoenets list-group-item list-group-item-action"
          >
            <div>
              <FiUsers />
            </div>
            <div className="icons-adminMenu">Users</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
