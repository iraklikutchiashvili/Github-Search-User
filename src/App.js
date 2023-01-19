import React, { useState } from "react";
import Form from "./Form";
import "./styles.css";
import User from "./User";

function App() {
  const API_URL = "https://api.github.com";

  const [results, setResults] = useState([]);

  async function getUsersData(query) {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const userData = await response.json();
      const userInfo = userData.items;
      setResults(userInfo);
    } catch (e) {
      throw new Error(e);
    }
  }

  return (
    <div className="app">
      <main className="main">
        <h2>GitHub User Search</h2>
        <Form submit={getUsersData} />
        <h3>Results</h3>
        <div id="results">
          {results.map((user) => {
            return (
              <User
                key={user.login}
                username={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
