import React from "react";

export default function Genre({ name }) {
	let myColorVariable;
	switch (name) {
		case "Action":
			myColorVariable = "#FF5733"; 
			break;
		case "Adventure":
			myColorVariable = "#CA8681"; 
			break;
		case "Fantasy":
			myColorVariable = "#6A5ACD"; 
			break;
		default:
			myColorVariable = "#6699ff"; 
	}

	return (
		<div className="flex gap-2 items-center justify-center">
			<p
				className="flex rounded px-4 py-1 w-32 mt-2 text-center"
				style={{ backgroundColor: myColorVariable, color: "#FFFFFF" }}
			>
				{name}
			</p>
		</div>
	);
}
