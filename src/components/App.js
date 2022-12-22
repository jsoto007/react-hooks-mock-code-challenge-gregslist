import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchData, setSearchData] = useState("")
  console.log("from App:", searchData)
  return (
    <div className="app">
      <Header 
        onSearch={setSearchData} 
        searchData={searchData} 
      />
      <ListingsContainer
        searchData={searchData} 
      />
    </div>
  );
}

export default App;
