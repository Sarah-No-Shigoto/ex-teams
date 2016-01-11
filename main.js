var Hat = function() {
	var students = ["Karine","Jousna","Jeanne d'arc","Sarah","Juliette","Nadege","Yannic","Yannik","Jerome","Florent","KevinL","KevinC","Ahmed","Flavien","Abdel-malik","Ryad","Marc","Anthony","Bruno","Simon","Adel","Mohamed"];
	
	/*this.teams = function(nb) {

		}
		
	}*/

	this.chance = function(nb) {

		// Créer un tableau vide qui va récupérer les valeurs dans students
		var newTeam = [];
		for (var i = 0; i < nb ; i++) {
			// Créer une variable qui récupère aléatoirement les éléments dans le tableau students
			var rand = Math.floor( Math.random() * (students.length - 1) ); // Math.floor() arrondit un nombre à l'entier inférieur
			
			// Récupérer le nom de l'élément correspondant à l'index rand
			var randStudent = students[rand];

			// Supprimer l'élément déjà sélectionné au fur et à mesure pour ne pas le répéter
			students.splice(rand, 1);

			// Ajouter chaque nouvel élément au nouveau tableau newTeam
			newTeam.push(randStudent);
		}
		console.log(newTeam);
		return newTeam;
		
			
		
	}
}


var h = new Hat();
//h.teams(4);
h.chance(2);