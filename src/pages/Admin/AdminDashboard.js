


import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [view, setView] = useState("allUsers");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:2885/api/admin/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddUser = async () => {
    if (!email || !name || progress === null) {
      setMessage("Please fill in all fields.");
      setTimeout(() => setMessage(""), 4000); 
      return;
    }

    try {
      const newUser = { email, name, progress };
      await axios.post("http://localhost:2885/api/admin/add", newUser);
      fetchUsers();
      setEmail("");
      setName("");
      setProgress(0);
      setMessage("User successfully added!");
      setTimeout(() => setMessage(""), 3000); 
    } catch (error) {
      console.error("Error adding user:", error);
      setMessage("Error adding user. Please try again.");
      setTimeout(() => setMessage(""), 3000); 
    }
  };

  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:2885/api/admin/user/${id}`);
        fetchUsers();
        setMessage("User successfully deleted!");
        setTimeout(() => setMessage(""), 3000); 
      } catch (error) {
        console.error("Error deleting user:", error);
        setMessage("Error deleting user. Please try again.");
        setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
      }
    }
  };

  // const handleViewUser = async (email) => {
  //   try {
  //     const response = await axios.get(`http://localhost:2885/api/admin/user/${email}`);
  //     setSelectedUser(response.data);
  //     setView("singleUser");
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //   }
  // };

  return (
    <div className={styles.adminDashboard}>
      <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>
      <FontAwesomeIcon icon={faKey} />Admin</h2>

        <button onClick={() => setView("addUser")}>Add Employees</button>
        <button onClick={() => setView("allUsers")}>View All Employees</button>
        <button onClick={() => setView("deleteUser")}>Delete Employee</button>
       
      </div>
      <div className={styles.content}>
        {message && <div className={styles.message}>{message}</div>}
        {view === "addUser" && (
          <div className={styles.addUserForm}>
            <h3>Add Employee</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
           
            <button onClick={handleAddUser}>Add Employee</button>
          </div>
        )}
        {view === "allUsers" && (
          <div className={styles.userList}>
            <h3>Employees List</h3>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} ({user.email}) - Progress: {user.progress}
                </li>
              ))}
            </ul>
          </div>
        )}
        {view === "deleteUser" && (
          <div className={styles.userList}>
            <h3>Delete Employee</h3>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} ({user.email}) - Progress: {user.progress}
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default AdminDashboard;