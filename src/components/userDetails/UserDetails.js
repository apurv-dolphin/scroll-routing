import React, { useEffect, useState } from "react";
import { getDelete, getUser } from "../../services/userFetch";
import { Table } from "react-bootstrap";
import { LuEdit } from "react-icons/lu";
import { AiTwotoneDelete } from "react-icons/ai";
import "./userdetails.css";
import EditModal from "../editUesrModal/EditModal";
import Swal from "sweetalert2";

export default function UserDetails() {
  const [data, setData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUserData, setEditUserData] = useState({});
  const [toggle, setToggle] = useState(false);
  const handleEditModal = (data) => {
    setShowEditModal(true);
    setEditUserData(data);
  };

  const handleClose = () => {
    setShowEditModal(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const DeleteUser = (uid) => {
    Swal.fire({
      title: "Do you want to delete the user?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        await getDelete(uid);
        await getUser();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      setData(user);
    };

    fetchData();
  }, []);

  return (
    <div>
      <button className="contact-btn" onClick={handleToggle}>
        Toggle
      </button>
      <Table
        striped
        bordered
        hover
        className={`active ${!toggle ? "top-to-bottom" : "bottom-to-top"}`}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((newdata, index) => (
              <tr key={index}>
                <td>{index + 1} </td>
                <td>{newdata?.name}</td>
                <td>{newdata?.email}</td>
                <td>{newdata?.username}</td>
                <td>{newdata?.phone}</td>
                <td>{newdata?.address?.city}</td>
                <td>{newdata?.address?.zipcode}</td>
                <td>{newdata?.website}</td>
                <td>
                  <LuEdit onClick={() => handleEditModal(newdata)} />{" "}
                  <AiTwotoneDelete onClick={() => DeleteUser(newdata?.id)} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {showEditModal && (
        <EditModal
          show={showEditModal}
          singleuser={editUserData}
          onHide={handleClose}
        />
      )}
    </div>
  );
}