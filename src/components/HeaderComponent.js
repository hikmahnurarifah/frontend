import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-dark bg-primary">
            <div className="container">
              <a href="/users" className="navbar-brand mx-auto">
                Web Pasien Puskesmas
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
