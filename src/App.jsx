import React from "react";
import Card from "./components/Card";
import users from "./components/User";

const App = () => {
  return (
    <div className="parent">
      {users.map(function (elem) {
        return <Card user={elem} />;
      })}
    </div>
  );
};

export default App;

//lucide react -> npm install lucide react

//remixicon
