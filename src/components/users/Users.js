import React from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import PropTypes from "prop-types";
const Users = ({ users, loading }) => {
  return (
    <div style={userStyle}>
      {loading ? (
        <Spinner />
      ) : (
        users.map((user) => <UserItem key={user.id} user={user} />)
      )}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
