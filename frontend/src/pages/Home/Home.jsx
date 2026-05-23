import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    console.log(res.data);
    if (res.status === 200) {
      setData(res.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onDeleteUser = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await axios.delete(`http://localhost:5000/users/${id}`);

      if (res.status === 200) {
        getUsers();
      }
    }
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.contact}</td>
                <td>
                  <div className="buttons">
                    <button className="btn btn-primary">View</button>
                    <Link to={`/update/${user.id}`} className="btn btn-success">
                      Edit
                    </Link>
                    <button
                      onClick={() => onDeleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
