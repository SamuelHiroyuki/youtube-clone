import React, { useState } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Feed() {
	const [expanded, setExpanded] = useState(true);

	return (
		<>
			<Header expanded={expanded} setExpanded={setExpanded} />
			<Sidebar expanded={expanded} setExpanded={setExpanded} />
		</>
	);
}
