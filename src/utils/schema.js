const displayType = {
	note: "Note",
	section: "Section",
};

const schema = {
	Product: {
		prop: "display",
		type: String,
		required: true,
	},
	Description: {
		prop: "desc",
		type: String,
		required: true,
	},
	Quantity: {
		prop: "quantity",
		type: Number,
		required: (row) =>
			row.display != displayType.note || row.display != displayType.section,
	},
	"Unit Price": {
		prop: "unit_price",
		type: Number,
		required: (row) =>
			row.display != displayType.note || row.display != displayType.section,
	},
};

export default schema;
