const character = {
    name: "Michael",
    class: "Lone Swordsman",
    level: 1,
    health: 100,
    maxhealth: 100,
    image: "Michael.png",

    attacked() {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            alert(this.name + " has died!");
        }
        updateCard();
    },

    levelUp() {
        this.level += 1;
        this.maxhealth = 100 + (this.level - 1) * 20;
        this.health = this.maxhealth;
        updateCard();
    },

    heal() {
        if (this.health < this.maxhealth) {
            this.health += 20;
        }
        updateCard();
    }
};

function updateCard() {
    document.getElementById("name").textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
    document.getElementById("maxhealth").textContent = character.maxhealth;
    document.getElementById("characterImage").src = character.image;
}

updateCard();