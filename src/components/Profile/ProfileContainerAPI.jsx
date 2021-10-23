import React from "react";
import { Profile } from "./Profile";

export class ProfileContainerAPI extends React.Component {
  render() {
    return <Profile {...this.props} />;
  }
}
