//complete this code
class Animal {
	species;
	constructor(species){
		this.species = species;
	}

	makeSound(){
		return console.log("sound");
	}
	
	get species(){
		return this.species;
	}
}

class Dog extends Animal {
	constructor(){
		super();
	}
	bark(){
		console.log("bark");
	}
}

class Cat extends Animal {
	constructor(){
		super();
	}
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
