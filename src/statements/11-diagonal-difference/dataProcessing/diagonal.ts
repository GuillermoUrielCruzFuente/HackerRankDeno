// as an alternative to provide ready data to json file we can
// pre process the data in order to follow the correct structure

// required decoder and encoder objects to process file data
const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

// required file paths
const basePath = "./src/statements/11-diagonal-difference/dataProcessing/";
const rawDataPath = basePath + "diagonal.txt";
const finalFilePath = basePath + "diagonal.data.txt";

// read the initial file with the raw data
const rawData = Deno.readFileSync(rawDataPath);
const data = decoder.decode(rawData);

// parse and append data to the final file
const matrixRows = data.split("\n");
Deno.writeFileSync(finalFilePath, encoder.encode("["));
const rows = matrixRows.map((row) => "[" + row.split(" ").join() + "]").join();
Deno.writeFileSync(finalFilePath, encoder.encode(rows + "]"), { append: true });
