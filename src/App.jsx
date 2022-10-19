import userJson from "./assets/users.json";
import { User } from "./components/Users/User";
import { Fragment } from "react";

export const App = () => {
  return (
    <>
      {userJson.map((user) => {
        return (
          <Fragment key={user.id}>
            <User user={user} />
            <hr />
          </Fragment>
        );
      })}
    </>
  );
};
