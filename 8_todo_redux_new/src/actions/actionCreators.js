
export function createBook(title){
	return {
		type: 'CREATE_BOOK',
		payload: {
			title: title,
			isDone: false,
			notes: []
		}
	}
}

// export function deleteBook(title, bookId){
	
// }

// export function addNote(bookId){
// 	return {
// 		type: "ADD_NOTE",
// 		payload: {
// 		bookId: bookId,
// 		complete: false,
// 		text:text
// 		}
// 	}
// }

// export function toggleNote(text){
	
// }

// export function removeNote(text){
	
// }