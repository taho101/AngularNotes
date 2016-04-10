var notes = angular.module('angularNotes', ['ngMaterial']);

notes.controller("NotesController", function ($scope, Note){
	
	$scope.notes = [];
	
	$scope.addNote = function(){
		if($scope.Title){
			$scope.notes.push(new Note($scope.Title));
			$scope.Title = "";
		}
	};
	
});
