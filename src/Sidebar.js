import React from "react";

import "./Sidebar.css";
import "./SidebarOption.css";

import SidebarOption from "./SidebarOption";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="sidebar__info">
					<h2>Slack Clone Project</h2>
					<h3>
						<FiberManualRecordIcon />
						Ryan Hrechka
					</h3>
				</div>
				<CreateIcon />
			</div>
			<SidebarOption Icon={InsertCommentIcon} title="Threads" />
			<SidebarOption title="Youtube" />
		</div>
	);
}

export default Sidebar;
