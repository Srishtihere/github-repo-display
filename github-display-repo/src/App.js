import { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [userName, setUserName] = useState(" ");
  const [repoList, setRepoList] = useState([]);
  const getRepoList = () => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then(
      (res) => {
        if(res.status === 200)
        {
          console.log(res.data);
          setRepoList([...res.data])
        }
      }
    ).catch(
      (error) => {
        alert(`the repo not avaialable`,error);
      }
    )
  }
  return (
    <>
      <div className="background d-flex flex-column align-items-center justify-content-center m-2 p-3">
        <h1 className="display-1 text-white">Github Repository List</h1>
        <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
          <div
            class="input-group mb-3"
            style={{ width: "500px", height: "50px" }}
          >
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={e => {setUserName(e.target.value)}}
            />
          </div>
          <div class="">
            <button class="btn btn-primary" type="button" onClick={getRepoList}>
              Generate Github Repositories
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center p-3">
        <div className="size">
          <ul>
            {repoList.length > 0 && repoList.map((repo) => (
              <li><a href={repo.html_url}><b>{repo.name}</b></a> - {repo.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
