import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

  useEffect(() => {
      // try {
      //   setError(null);
      //   setUsers(null);
      //   // loading 상태를 true 로 바꿉니다.
      //   setLoading(true);

        

      //   const response = await axios({
      //     method: 'GET',
      //     url: 'http://43.200.123.129:8080/api/apt',
      //     params: {
      //       code: 2110824
      //     }
      //   });
      //   setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      // } catch (e) {
      //   setError(e);
      // }
    //   setLoading(false);

    fetchUsers(2110824);
  }, []);

  const fetchUsers = async (code) => {
    try {
      await axios.get(`http://localhost:8080/api/apt?code=${code}`)
      .then((res) => {console.log(res)})
      .catch((err) => {console.log(err)});
    }
    catch(error) {
      return error;
    }
    return;
  }

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다!!!!</div>;
  if (!users) return null;
  return (
    <ul>
      {users.map(user => (
        <li key={user.year}>
          {user.totalMarketCount} ({user.totalMarketCount})
        </li>
      ))}
    </ul>
  );
}

export default Users;