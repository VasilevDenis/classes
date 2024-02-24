export default class Character {
  constructor(name, type, attack, defence) {
      if (name.length < 2 || name.length > 10) {
          throw new Error('Name must be between 2 and 10 characters long');
      }

      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!validTypes.includes(type)) {
          throw new Error('Invalid character type');
      }

      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;
  }
}






