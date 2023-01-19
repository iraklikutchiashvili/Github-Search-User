import React, { useState } from "react";

function Form(props) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query !== "") {
      props.submit(query);
      setQuery("");
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter username or email"
        onChange={handleChange}
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
