//complete this code
class Animal {
	species;
	constructor(species){
		this.species = species;
	}

	makeSound(){
		return console.log(`The ${this.species} makes a sound`);
	}
	
	get species(){
		return this.species;
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
