import { describe, it, expect } from "vitest";
import path from "path";
import schema from "../src/utils/schema";
import readXlsxFile from "read-excel-file/node";

const inputPath = path.resolve("./tests/spreadsheets/sample_draft_quote.xlsx");
describe("read-excel-file", () => {
	it("should have 4 rows", () => {
		readXlsxFile(inputPath, {
			schema,
			ignoreEmptyRows: false,
		}).then(({ rows, errors }) => {
			expect(rows).toHaveLength(4);
		});
	});

	it("should require product if display_type is null", () => {
		readXlsxFile(inputPath, {
			schema,
			ignoreEmptyRows: false,
		}).then(({ rows, errors }) => {
			expect(errors).equal([
				{
					column: "Display",
					error: "required",
					row: 2,
					type: String,
					value: null,
				},
				{
					column: "Quantity",
					error: "required",
					row: 5,
					type: Number,
					value: null,
				},
				{
					column: "Unit Price",
					error: "required",
					row: 5,
					type: Number,
					value: null,
				},
			]);
		});
	});
});
