import React from "react";
import ReactDOM from "react-dom/client";
import { TestCase } from "./test-case";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<TestCase />
	</React.StrictMode>,
);
