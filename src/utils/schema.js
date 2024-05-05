const displayType = {
	note: "Note",
	section: "Section",
};

const schema = {
	Display: {
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
		required: (row) => row.display !== "Note" && row.display !== "Section",
	},
	"Unit Price": {
		prop: "unit_price",
		type: Number,
		required: (row) => row.display !== "Note" && row.display !== "Section",
	},
};

export default schema;
