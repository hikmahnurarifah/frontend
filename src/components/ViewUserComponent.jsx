import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View User Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Nama: </label>
              <div> {this.state.user.nama}</div>
            </div>
            <div className="row">
              <label> Usia: </label>
              <div> {this.state.user.usia}</div>
            </div>
            <div className="row">
              <label> Jenis Kelamin : </label>
              <div> {this.state.user.jenis_kelamin}</div>
            </div>
            <div className="row">
              <label> Alamat: </label>
              <div> {this.state.user.alamat}</div>
            </div>
            <div className="row">
              <label> Deskripsi: </label>
              <div> {this.state.user.deskripsi}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
