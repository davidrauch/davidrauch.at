var episodes = {
	s00e00 : {
		name: "Previous Adventures"
	},
	s05e01 : {
		name : "The Eleventh Hour"
	},
	s05e02 : {
		name : "The Beast Below"
	},
	s05e03 : {
		name : "Victory of the Daleks"
	},
	s05e04 : {
		name : "The Time of Angels (1)"
	},
	s05e05 : {
		name : "Flesh and Stone (2)"
	},
	s05e06 : {
		name : "The Vampires of Venice"
	},
	s05e07 : {
		name : "Amy's Choice"
	},
	s05e08 : {
		name : "The Hungry Earth (1)"
	},
	s05e09 : {
		name : "Cold Blood (2)"
	},
	s05e10 : {
		name : "Vincent and the Doctor"
	},
	s05e11 : {
		name : "The Lodger"
	},
	s05e12 : {
		name : "The Pandorica Opens (1)"
	},
	s05e13 : {
		name : "The Big Bang (2)"
	},
	s05e14 : {
		name : "A Christmas Carol"
	},
	s06e01 : {
		name : "The Impossible Astronaut (1)"
	},
	s06e02 : {
		name : "Day of the Moon (2)"
	},
	s06e03 : {
		name : "The Curse of the Black Spot"
	},
	s06e04 : {
		name : "The Doctor's Wife"
	},
	s06e05 : {
		name : "The Rebel Flesh (1)"
	},
	s06e06 : {
		name : "The Almost People (2)"
	},
	s06e07 : {
		name : "A Good Man Goes to War (1)"
	},
	s06e08 : {
		name : "Let's Kill Hitler (2)"
	},
	s06e09 : {
		name : "Night Terrors"
	},
	s06e10 : {
		name : "The Girl Who Waited"
	},
	s06e11 : {
		name : "The God Complex"
	},
	s06e12 : {
		name : "Closing Time"
	},
	s06e13 : {
		name : "The Wedding of River Song"
	},
	s06e14 : {
		name : "The Doctor, the Widow and the Wardrobe"
	},
	s07e01 : {
		name : "The Asylum of the Daleks"
	},
	s07e02 : {
		name : "Dinosaurs on a Spaceship"
	},
	s07e03 : {
		name : "A Town called Mercy"
	},
	s07e04 : {
		name : "The Power of Three"
	},
	s07e05 : {
		name : "The Angels take Manhattan"
	},
}

var characters = {
	doctor : {
		name : "The Doctor",
		color: "#425A79",
		appearances :[
			{ episode: "s00e00", details: ["first"] },
			{ episode: "s05e01", details: [] },
			{ episode: "s05e02", details: [] },
			{ episode: "s05e03", details: [] },
			{ episode: "s05e04", details: [] },
			{ episode: "s05e05", details: [] },
			{ episode: "s05e06", details: [] },
			{ episode: "s05e07", details: [] },
			{ episode: "s05e08", details: [] },
			{ episode: "s05e09", details: [] },
			{ episode: "s05e10", details: [] },
			{ episode: "s05e11", details: [] },
			{ episode: "s05e12", details: [] },
			{ episode: "s05e13", details: [] },
			{ episode: "s05e14", details: [] },
			{ episode: "s06e01", details: [] },
			{ episode: "s06e02", details: [] },
			{ episode: "s06e03", details: [] },
			{ episode: "s06e04", details: [] },
			{ episode: "s06e05", details: [] },
			{ episode: "s06e06", details: [] },
			{ episode: "s06e07", details: [] },
			{ episode: "s06e08", details: [] },
			{ episode: "s06e09", details: [] },
			{ episode: "s06e10", details: [] },
			{ episode: "s06e11", details: [] },
			{ episode: "s06e12", details: [] },
			{ episode: "s06e13", details: [] },
			{ episode: "s06e14", details: [] },
			{ episode: "s07e01", details: [] },
			{ episode: "s07e02", details: [] },
			{ episode: "s07e03", details: [] },
			{ episode: "s07e04", details: [] },
			{ episode: "s07e05", details: [] },
		]
	},
	amy : {
		name : "Amy",
		color: "#C02942",
		appearances : [
			{ episode: "s05e01", details: ["first"] },
			{ episode: "s05e02", details: [] },
			{ episode: "s05e03", details: [] },
			{ episode: "s05e04", details: [] },
			{ episode: "s05e05", details: [] },
			{ episode: "s05e06", details: [] },
			{ episode: "s05e07", details: [] },
			{ episode: "s05e08", details: [] },
			{ episode: "s05e09", details: [] },
			{ episode: "s05e10", details: [] },
			{ episode: "s05e11", details: [] },
			{ episode: "s05e12", details: [] },
			{ episode: "s05e13", details: [] },
			{ episode: "s05e14", details: [] },
			{ episode: "s06e01", details: ["off"] },
			{ episode: "s06e02", details: ["off"] },
			{ episode: "s06e03", details: ["off"] },
			{ episode: "s06e04", details: ["off"] },
			{ episode: "s06e05", details: ["off"] },
			{ episode: "s06e06", details: ["off"] },
			{ episode: "s06e07", details: [] },
			{ episode: "s06e08", details: [] },
			{ episode: "s06e09", details: [] },
			{ episode: "s06e10", details: [] },
			{ episode: "s06e11", details: [] },
			{ episode: "s06e12", details: [] },
			{ episode: "s06e13", details: [] },
			{ episode: "s06e14", details: [] },
			{ episode: "s07e01", details: [] },
			{ episode: "s07e02", details: [] },
			{ episode: "s07e03", details: [] },
			{ episode: "s07e04", details: [] },
			{ episode: "s07e05", details: ["death"] },
		]
	},
	rory: {
		name: "Rory",
		color: "#a2a453",
		appearances : [
			{ episode: "s05e01", details: ["first"] },
			{ episode: "s05e02", details: ["off"] },
			{ episode: "s05e03", details: ["off"] },
			{ episode: "s05e04", details: ["off"] },
			{ episode: "s05e05", details: ["off"] },
			{ episode: "s05e06", details: [] },
			{ episode: "s05e07", details: [] },
			{ episode: "s05e08", details: [] },
			{ episode: "s05e09", details: ["death"] },
			{ episode: "s05e10", details: ["off"] },
			{ episode: "s05e11", details: ["off"] },
			{ episode: "s05e12", details: [] },
			{ episode: "s05e13", details: [] },
			{ episode: "s05e14", details: [] },
			{ episode: "s06e01", details: [] },
			{ episode: "s06e02", details: [] },
			{ episode: "s06e03", details: [] },
			{ episode: "s06e04", details: [] },
			{ episode: "s06e05", details: [] },
			{ episode: "s06e06", details: [] },
			{ episode: "s06e07", details: [] },
			{ episode: "s06e08", details: [] },
			{ episode: "s06e09", details: [] },
			{ episode: "s06e10", details: [] },
			{ episode: "s06e11", details: [] },
			{ episode: "s06e12", details: [] },
			{ episode: "s06e13", details: [] },
			{ episode: "s06e14", details: [] },
			{ episode: "s07e01", details: [] },
			{ episode: "s07e02", details: [] },
			{ episode: "s07e03", details: [] },
			{ episode: "s07e04", details: [] },
			{ episode: "s07e05", details: ["death"] },
		]
	},
	river : {
		name: "River Song",
		color: "#ecd078",
		appearances : [
			{ episode: "s06e07", details: ["first"] },
			{ episode: "s06e06", details: ["off"] },
			{ episode: "s06e05", details: ["off"] },
			{ episode: "s06e04", details: ["off"] },
			{ episode: "s06e03", details: ["off"] },
			{ episode: "s06e02", details: ["off"] },
			{ episode: "s06e01", details: [] },
			{ episode: "s06e02", details: ["regeneration"] },
			{ episode: "s06e03", details: ["off"] },
			{ episode: "s06e04", details: ["off"] },
			{ episode: "s06e05", details: ["off"] },
			{ episode: "s06e06", details: ["off"] },
			{ episode: "s06e07", details: ["off"] },
			{ episode: "s06e08", details: ["regeneration"] },
			{ episode: "s06e09", details: ["off"] },
			{ episode: "s06e10", details: ["off"] },
			{ episode: "s06e11", details: ["off"] },
			{ episode: "s06e12", details: [] },
			{ episode: "s06e13", details: [] },
			{ episode: "s07e01", details: ["off"] },
			{ episode: "s07e02", details: ["off"] },
			{ episode: "s07e03", details: ["off"] },
			{ episode: "s07e04", details: ["off"] },
			{ episode: "s07e05", details: [] },
			{ episode: "s07e04", details: ["off"] },
			{ episode: "s07e03", details: ["off"] },
			{ episode: "s07e02", details: ["off"] },
			{ episode: "s07e01", details: ["off"] },
			{ episode: "s06e13", details: ["off"] },
			{ episode: "s06e12", details: ["off"] },
			{ episode: "s06e11", details: ["off"] },
			{ episode: "s06e10", details: ["off"] },
			{ episode: "s06e09", details: ["off"] },
			{ episode: "s06e08", details: ["off"] },
			{ episode: "s06e07", details: [] },
			{ episode: "s06e06", details: ["off"] },
			{ episode: "s06e05", details: ["off"] },
			{ episode: "s06e04", details: ["off"] },
			{ episode: "s06e03", details: ["off"] },
			{ episode: "s06e02", details: ["off"] },
			{ episode: "s06e01", details: [] },
			{ episode: "s06e02", details: [] },
			{ episode: "s06e01", details: ["off"] },
			{ episode: "s05e14", details: ["off"] },
			{ episode: "s05e13", details: ["off"] },
			{ episode: "s05e12", details: [] },
			{ episode: "s05e13", details: [] },
			{ episode: "s05e12", details: ["off"] },
			{ episode: "s05e11", details: ["off"] },
			{ episode: "s05e10", details: ["off"] },
			{ episode: "s05e09", details: ["off"] },
			{ episode: "s05e08", details: ["off"] },
			{ episode: "s05e07", details: ["off"] },
			{ episode: "s05e06", details: ["off"] },
			{ episode: "s05e05", details: ["off"] },
			{ episode: "s05e04", details: [] },
			{ episode: "s05e05", details: [] },
			{ episode: "s05e04", details: ["off"] },
			{ episode: "s05e03", details: ["off"] },
			{ episode: "s05e02", details: ["off"] },
			{ episode: "s05e01", details: ["off"] },
			{ episode: "s00e00", details: [] },
		]
	},
	ganger : {
		name: "Amy's Doppelgänger",
		color: "#A03731",
		appearances: [
			{ episode: "s06e01", details: ["first"] },
			{ episode: "s06e02", details: [] },
			{ episode: "s06e03", details: [] },
			{ episode: "s06e04", details: [] },
			{ episode: "s06e05", details: [] },
			{ episode: "s06e06", details: ["death"] },
		]
	}
}