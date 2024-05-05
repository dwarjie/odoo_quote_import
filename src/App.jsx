import readXlsxFile from "read-excel-file";
import { fileExists, hasQuoteId } from "./utils/inputValidation";
import schema from "./utils/schema";
import { useState } from "react";

const stateObj = {
	quoteId: "sample",
};

function App() {
	const [property, setProperty] = useState(stateObj);

	const handleInput = (e) => {
		const target = e.target;
		const name = target.name;

		setProperty({ ...property, [name]: target.value });
	};

	const handleUpload = (e) => {
		let inputFile = e.target.files[0];
		if (!fileExists(inputFile) || !hasQuoteId(property.quoteId))
			return console.log("Invalid Input");

		readXlsxFile(inputFile, { schema, ignoreEmptyRows: false })
			.then(({ rows, errors }) => {
				if (errors) return console.log(errors);

				console.log(rows);
				// TODO: Process the imported file and create an equivalent odoo file (using write-excel-file lib)
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<label htmlFor="input">Upload excel file</label>
			<input type="file" name="input" id="input" onChange={handleUpload} />
			<label htmlFor="quoteId">Quote External ID</label>
			<input
				type="text"
				name="quoteId"
				id="quoteId"
				onChange={handleInput}
				defaultValue={property.quoteId}
			/>
		</div>
	);
}

export default App;
