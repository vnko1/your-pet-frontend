import { useState } from "react";

function NoticesSearch() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    // add debounce
    const { value } = e.currentTarget;
    setSearch(value);
  };

  const handeleSubmit = (e) => {
    e.preventDefault();
  };

  const resetInput = () => {
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={handeleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit">Submit</button>
        {search && <button onClick={resetInput}>X</button>}
      </form>
    </div>
  );
}

export default NoticesSearch;
