import React from "react";
import { useSelector } from "react-redux";
import LoginDialog from "./LoginDialog";

const DialogManager = () => {
  const dialogState = useSelector((state) => state.dialogReducer);

  return (
    <div>
      {dialogState.dialogType === "DIALOG_LOGIN" ? (
        <LoginDialog />
      ) : (
        <LoginDialog />
      )}
    </div>
  );
};
export default DialogManager;
