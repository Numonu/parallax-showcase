import { VirtualObject } from "./app.js";

const trees1 = new VirtualObject(document.querySelector("#trees1"), {
	power: {
		x: -0.1,
		y: -0.05,
	},
	maxDistance: {
		x: 700,
		y: 900,
	},
});
const trees2 = new VirtualObject(document.querySelector("#trees2"), {
	power: {
		x: -0.07,
		y: -0.03,
	},
	maxDistance: {
		x: 700,
		y: 900,
	},
});
const trees3 = new VirtualObject(document.querySelector("#trees3"), {
	power: {
		x: -0.05,
		y: -0.01,
	},
	maxDistance: {
		x: 700,
		y: 900,
	},
});
