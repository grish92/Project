import React from "react";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader";

export class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          users={this.props.users}
          follow={this.props.follow}
          currentPage={this.props.currentPage}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          following={this.props.following}
        />
      </>
    );
  }
}
