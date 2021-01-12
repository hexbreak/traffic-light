import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const TrafficLight = () => {
	const [color, setColor] = useState("");

	return (
		<div className="trafficStop">
			<div className="container">
				<div className="greyOn redOn" />
				<div className="greyOn yellowOn" />
				<div
					className={color === "green" ? "greenOn" : "greyOn"}
					onCLick={() => setColor("green")}
				/>
			</div>
		</div>
	);
};
