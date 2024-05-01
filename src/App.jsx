import readXlsxFile from "read-excel-file";
import schema from "./utils/schema";

function App() {
	const handleUpload = (e) => {
		let inputFile = e.target.files[0];
		if (!inputFile) return;

		readXlsxFile(inputFile, { schema, ignoreEmptyRows: false })
			.then(({ rows, errors }) => {
				console.table(rows);
				console.log(errors);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<label htmlFor="input">Upload excel file</label>
			<input type="file" name="input" onInput={handleUpload} />
		</div>
	);
}

export default App;
