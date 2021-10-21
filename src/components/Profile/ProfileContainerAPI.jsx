import React from "react";
import { Profile } from "./Profile";
import { usersApi} from "../../api/Api";

export class ProfileContainerAPI extends React.Component {
  componentDidMount() {
  
  }
  render() {
    return <Profile {...this.props}  />;
  }
}
