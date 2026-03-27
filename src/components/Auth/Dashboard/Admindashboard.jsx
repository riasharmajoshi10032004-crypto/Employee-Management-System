import React from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask";
import AllTask from "../../other/AllTask";

const Admindashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white p-8">
      
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask/>
      <AllTask/>

    </div>
  );
};

export default Admindashboard;