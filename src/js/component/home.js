import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const TrafficLight = () => {
	const [color, setColor] = useState("");

	return (
		<div className="trafficStop">
			<div className="container">
				<div
					className={color === "red" ? "redOn" : "greyOn"}
					onClick={() => setColor("red")}
				/>
				<div
					className={color === "yellow" ? "yellowOn" : "greyOn"}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={color === "green" ? "greenOn" : "greyOn"}
					onCLick={() => setColor("green")}
				/>
			</div>
		</div>
	);
};
