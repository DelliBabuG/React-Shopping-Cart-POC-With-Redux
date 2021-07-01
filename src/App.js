/* Package JSON Import will be here */
import React from "react";
import { useSelector } from "react-redux";
/* Package JSON Import will be here */

/* Project Import will be here */
import ProductListPage from "./pages/ProductListPage";
import UserName from "./components/user/UserName";
/* Project Import will be here */

const App = () => {

  const user = useSelector(state => state.user);

  return (
    <React.Fragment>
      {user.userName !== "" ? <ProductListPage /> : <UserName />}
    </React.Fragment>

  );
}

export default App;
