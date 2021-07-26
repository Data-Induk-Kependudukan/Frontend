import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <img src="https://i.pinimg.com/736x/f8/0a/35/f80a3595f384622c45242d0da7c0b3bf.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
