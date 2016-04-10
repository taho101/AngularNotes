notes.factory('Note', function() { 
	function Note(title) {
		this.title = title;
		this.complete = false;
		this.archived = false;
	};
	
	return Note;
});
