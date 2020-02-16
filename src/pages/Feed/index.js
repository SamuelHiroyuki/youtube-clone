import React, { useState } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Feed() {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<>
			<Header setCollapsed={setCollapsed} />
			<Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
		</>
	);
}
