import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, getUser, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  else
    return (
      <>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>

        <>
          Hireable:{" "}
          {hireable ? (
            <i className="fa fa-check text-success"></i>
          ) : (
            <i className="fa fa-times-circle text-danger"></i>
          )}
        </>

        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt={avatar_url}
              style={{ width: "150px" }}
              className="round-img"
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>

          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              <i className="fa fa-github-alt"> </i> &nbsp;Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <>
                    <strong className="text-danger">Username: </strong>
                    <span style={{ color: "#ccc" }}>{login}</span>
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <strong className="text-danger">Company: </strong>
                    <span style={{ color: "#ccc" }}>{company}</span>
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong className="text-danger">Website: </strong>
                    <span style={{ color: "#ccc" }}>{blog}</span>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="card text-center">
          <div className="badge badge-primary">Follower: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-danger">Public Repos: {public_repos}</div>

          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>

        <Repos repos={repos} />
      </>
    );
};

export default User;
