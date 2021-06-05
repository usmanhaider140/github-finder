import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please Enter Something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-block btn-danger"
        />
        {githubContext.users.length && (
          <button
            className="btn btn-block btn-light"
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
