import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

function Body(props) {
  const { classes } = props;
  return (
    <div class="container">
        <div>
          HEYYYYY
        </div>
    </div>
  );
}

Body.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(Body);
