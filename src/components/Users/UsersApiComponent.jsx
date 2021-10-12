import React from "react";
import * as axios from "axios";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader";

export class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data);
    });
  }

  render() {
    
    return (
    <>
      
        {this.props.isFetching? <Preloader/>:null}

        <Users
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
        />
     </>
    );
  }
}
