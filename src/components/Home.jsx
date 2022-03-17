import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { deleteUser, getAllUsers } from '../apis/users';

export const Home = () => {
  const [userArray, setUserArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function allUsers() {
      try {
        const { data } = await getAllUsers();
        setUserArray(data);
      } catch (err) {
        console.log(err);
      }
    }
    allUsers();
  }, []);

  const removeUser = async (id) => {
    try {
      await deleteUser(id);
      const { data } = await getAllUsers();
      setUserArray(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className="mt-5">
      <Table bordered hover striped>
        <thead>
          <tr>
            <th>#Order</th>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userArray.map((user, index) => (
            <tr key={uuidv4()} style={{ verticalAlign: 'middle' }}>
              <td>{index + 1}</td>
              <td>{user.fullname}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Button
                  className="ms-4"
                  onClick={() => navigate(`/editUser/${user.id}`)}
                  style={{ fontSize: '14px' }}
                  variant="success">
                  EDIT
                </Button>
                <Button
                  className="ms-4"
                  onClick={() => removeUser(user.id)}
                  style={{ fontSize: '14px' }}
                  variant="danger">
                  DELETE
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
