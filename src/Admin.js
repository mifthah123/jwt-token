import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navigate("/");
    }
    try {
      const res = axios
        .get(`http://admin.incheonicrm.in:8080/lead_qualities`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setData(data.data));
    } catch (err) {
      console.log(err);
    }
  }, [navigate]);

  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>title</th>
        </tr>
        {data.map(({ id, title }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Admin;
