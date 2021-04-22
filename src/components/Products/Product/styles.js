import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	root: {
		maxWidth: "100%",
	},
	media: {
		width: "50%",
		height: "auto",
		margin: "auto",
		paddingTop: "56.25%",
	},
	carDActions: {
		display: "flex",
		justifyContent: "flex-end",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-between",
	},
	prodDesc: {
		fontSize: "0.9rem",
	},
}));
