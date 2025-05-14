function DescendingSort(jsonArray) {
    try {
        // Parse the input JSON array
        const books = JSON.parse(jsonArray);

        // Check if the parsed result is an array
        if (!Array.isArray(books)) {
            throw new Error("Input is not a valid JSON array.");
        }

        // Sort the array based on libraryID in descending order
        books.sort((a, b) => b.libraryID - a.libraryID);

        // Map the sorted array to the desired output format
        const result = books.map(book => `${book.title}-${book.author}-${book.libraryID}`);

        return result;
    } catch (error) {
        console.error("Error parsing JSON:", error.message);
        return [];
    }
}

// Example usage with input reading
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const sortedBooks = DescendingSort(line);
    sortedBooks.forEach(book => console.log(book));
    rl.close();
});
