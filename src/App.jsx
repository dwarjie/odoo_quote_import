import readXlsxFile from "read-excel-file";

function App() {
	const handleUpload = (e) => {
		if (!e.target.files[0]) return;

		console.log(e);
	};

	return (
		<div>
			<label htmlFor="input">Upload excel file</label>
			<input type="file" name="input" onInput={handleUpload} />
		</div>
	);
}

export default App;
