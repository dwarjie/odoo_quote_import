import { describe, it, expect } from "vitest";
import path from "path";
import schema from "../src/utils/schema";
import readXlsxFile from "read-excel-file/node";

describe("read-excel-file", () => {
	const inputPath = path.resolve(
		"./tests/spreadsheets/sample_draft_quote.xlsx"
	);
	it("should have 4 rows", () => {
		readXlsxFile(inputPath, {
			schema,
			ignoreEmptyRows: false,
		}).then(({ rows, errors }) => {
			expect(rows).toHaveLength(4);
		});
	});

	it("should require product if display_type is null", () => {
		let errors = [];
		readXlsxFile(inputPath, {
			schema,
			ignoreEmptyRows: false,
		}).then(({ rows, errors }) => {
			errors = errors;
		});
		expect(errors).toHaveLength(5);
	});
});
