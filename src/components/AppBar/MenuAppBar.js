import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
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

function Transition(props) {
  return <Slide direction="left" {...props} />;
}

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
            <a href="https://www.google.com">
              <li>Me</li>
            </a>
            <a href="https://www.google.com">
              <li>Photography</li>
            </a>
            <a href="https://www.google.com">
              <li>Film</li>
            </a>
            <a href="https://www.google.com">
              <li>Travel</li>
            </a>
            <a href="https://www.google.com">
              <li>Gus Development and E-Marketing</li>
            </a>
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
