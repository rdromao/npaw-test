import React from "react";
import { connect } from "react-redux";

let EphimeralNotification = props => (
  <div
    className={
      "ephimeralNotificationContainer" +
      (props.showNotification ? " show" : " hide")
    }
  >
    {props.notificationMessage}
  </div>
);

const mapStateToProps = state => {
  return {
    showNotification: state.app.showNotification,
    notificationMessage: state.app.notificationMessage
  };
};

EphimeralNotification = connect(
  mapStateToProps,
  null
)(EphimeralNotification);

export default EphimeralNotification;
