import http from './http';

export async function getAllUsers() {
  try {
    const { data: response } = await http.get('/user');
    return response;
  } catch (error) {
    return error;
  }
}

export async function createUser(payload) {
  try {
    const { data: response } = await http.post('/user', payload);
    return response;
  } catch (error) {
    return error;
  }
}

export async function updateUser(id, payload) {
  try {
    const { data: response } = await http.put(`/user/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}

export async function deleteUser(id) {
  try {
    const { data: response } = await http.delete(`/user/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}
