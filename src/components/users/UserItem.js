import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, html_url, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img className="circle" src={avatar_url} alt={avatar_url} />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-sm btn-dark my-1">
          <i className="fa fa-github"></i> &nbsp; Github Profile
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
