import React from "react";
import "./MainDash.css";
import Table from "../Table/Table";
import SearchBar from "../SearchBar/SearchBar";

const MainDash: React.FC = () => {
  return (
    <div className="MainDash">
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="table-container">
        <Table />
      </div>
      
    </div>
  );
};

export default MainDash;
