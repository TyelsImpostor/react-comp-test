import React, { Fragment } from 'react';

const ShowUsers = props => {
  const { users } = props;
  return (
    <Fragment>
      {users.map(user => (
        <>
          <a>{user.username}</a>
          <br />
        </>
      ))}
    </Fragment>
  );
};
export default ShowUsers;
