import React from "react";
import { SelectedUser } from "./SelectedUser";

export class SelectedUserApiContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 1;
    }
    this.props.getUser(userId);
    this.props.getPosts(userId);
  }
  render() {
    return <SelectedUser {...this.props} profile={this.props.profile} />;
  }
}
