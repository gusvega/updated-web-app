import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./MenuAppBar.css";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul id="menu">
            <div id="menu-container">
              <a href="#">
                <li>Me</li>
              </a>
              <a href="#">
                <li>Photography</li>
              </a>
              <a href="#">
                <li>Film</li>
              </a>
              <a href="#">
                <li>Travel</li>
              </a>
              <a href="#">
                <li>GUX Studio</li>
              </a>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
