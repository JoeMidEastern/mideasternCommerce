import { Spinner } from "react-bootstrap";

import React from "react";

const SpinnerLoader = () => {
	return (
		<>
			<Spinner
				style={{
					height: "100vh",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				role="status"
				animation="grow"
			/>
		</>
	);
};

export default SpinnerLoader;
