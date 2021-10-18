import React from "react";
import { Profile } from "./Profile";
import { usersApi} from "../../api/Api";

export class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 1;
    }
    this.props.getUser(userId)
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
