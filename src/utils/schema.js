const schema = {
	"Display Type": {
		prop: "display_type",
		type: String,
		oneOf: ["Section", "Note"],
	},
	Product: {
		prop: "product",
		type: String,
		required: (display_type) => {
			if (!display_type) return true;
		},
	},
	Description: {
		prop: "desc",
		type: String,
		required: true,
	},
	Quantity: {
		prop: "quantity",
		type: Number,
	},
	"Unit Price": {
		prop: "unit_price",
		type: Number,
	},
	Subtotal: {
		prop: "subtotal",
		type: Number,
	},
};

export default schema;
