class Weapon {
    constructor(name, attack, durability, range) {
      this.name = name;
      this.attack = attack;
      this.durability = durability;
      this.startingDurability = durability;
      this.range = range;
   }
  
    takeDamage(damage) {
      this.durability = this.durability - damage; 
      if (this.durability > 0) {
        return this.durability;   
      } 
      else {
        return this.durability = 0;
      }
    }
  
    getDamage() {
      if (this.durability >= this.startingDurability * 0.3) {
        return this.attack;
      } 
      else if (this.durability <= this.startingDurability * 0.3 & this.durability != 0) {
        return this.attack / 2;
      }
      return this.attack = 0;
      }
    
    isBroken() {
      if (this.durability > 0 || this.durability === Infinity) {
        console.log(`Оружие ${this.name} не сломано.`);
        return false;
      } else {
      console.log(`Оружие ${this.name} сломано.`);
      return true; 
      } 
    }
  }
  
  class Arm extends Weapon {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Рука';
      this.attack =  1;
      this.durability =  Infinity;
      this.range = 1;
      this.startingDurability = this.durability;
    }
  }
  
  class Bow extends Weapon {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Лук';
      this.attack =  10;
      this.durability =  200;
      this.range = 3;
      this.startingDurability = this.durability;
    }
  }
  
  class Sword extends Weapon {
    constructor(name, attack, durability, range) {
    super (name, attack, durability, range);
      this.name = 'Меч';
      this.attack =  25;
      this.durability =  500;
      this.range = 1;
      this.startingDurability = this.durability; 
    }
  }
  
  class Knife extends Weapon {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Нож';
      this.attack =  5;
      this.durability =  300;
      this.range = 1;
      this.startingDurability = this.durability;
    }
  }
  
  class Staff extends Weapon {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Посох';
      this.attack =  8;
      this.durability =  300;
      this.range = 2;
      this.startingDurability = this.durability;
    }
  }
  
  class LongBow extends Bow {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Длинный лук';
      this.attack =  15;
      this.range = 4;
      this.startingDurability = this.durability;
    }
  }
  
  class BattleAxe extends Sword {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Секира';
      this.attack =  27;
      this.durability =  800;
    }
  }
  
  class StormStaff extends Staff {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Посох бури';
      this.attack =  10;
      this.range = 3;
    }
  }
  
const arm = new Arm();
console.log(`Оружие ${arm.name} имеет атаку ${arm.attack}, прочность ${arm.durability} и дальность атаки ${arm.range}`); 
const bow = new Bow();
console.log(`Оружие ${bow.name} имеет атаку ${bow.attack}, прочность ${bow.durability} и дальность атаки ${bow.range}`); 
const sword = new Sword();
console.log(`Оружие ${sword.name} имеет атаку ${sword.attack}, прочность ${sword.durability} и дальность атаки ${sword.range}`); 
const knife = new Knife();
console.log(`Оружие ${knife.name} имеет атаку ${knife.attack}, прочность ${knife.durability} и дальность атаки ${knife.range}`); 
const staff = new Staff();
console.log(`Оружие ${staff.name} имеет атаку ${staff.attack}, прочность ${staff.durability} и дальность атаки ${staff.range}`); 
const longBow = new LongBow();
console.log(`Оружие ${longBow.name} имеет атаку ${longBow.attack}, прочность ${longBow.durability} и дальность атаки ${longBow.range}`); 
const battleAxe = new BattleAxe();
console.log(`Оружие ${battleAxe.name} имеет атаку ${battleAxe.attack}, прочность ${battleAxe.durability} и дальность атаки ${battleAxe.range}`); 
const stormStaff = new StormStaff();
console.log(`Оружие ${stormStaff.name} имеет атаку ${stormStaff.attack}, прочность ${stormStaff.durability} и дальность атаки ${stormStaff.range}`); 
  
  
  sword.takeDamage(5);
  console.log(`Атака ${sword.getDamage()}`);
  console.log(`Прочность ${sword.durability}`); 
  sword.takeDamage(50);
  console.log(`Прочность ${sword.durability}`);
  sword.takeDamage(10);
  console.log(`Прочность ${sword.durability}`); 
  sword.takeDamage(300);
  console.log(`Атака ${sword.getDamage()}`);
  console.log(`Прочность ${sword.durability}`);
  sword.takeDamage(30);
  console.log(`Прочность ${sword.durability}`); 
  sword.takeDamage(110);
  console.log(`Атака ${sword.getDamage()}`);
  console.log(`Прочность ${sword.durability}`);
  sword.isBroken();
  
  battleAxe.takeDamage(5);
  console.log(`Атака ${battleAxe.getDamage()}`);
  console.log(`Прочность ${battleAxe.durability}`); 
  battleAxe.takeDamage(50);
  console.log(`Прочность ${battleAxe.durability}`);
  battleAxe.takeDamage(10);
  console.log(`Прочность ${battleAxe.durability}`); 
  battleAxe.takeDamage(300);
  console.log(`Атака ${battleAxe.getDamage()}`);
  console.log(`Прочность ${battleAxe.durability}`);
  battleAxe.takeDamage(30);
  console.log(`Прочность ${battleAxe.durability}`); 
  battleAxe.takeDamage(110);
  console.log(`Атака ${battleAxe.getDamage()}`);
  console.log(`Прочность ${battleAxe.durability}`);
  battleAxe.takeDamage(200);
  console.log(`Атака ${battleAxe.getDamage()}`);
  console.log(`Прочность ${battleAxe.durability}`);
  battleAxe.isBroken();


  class StudentLog {
    constructor(studentName) {
      this.studentName = studentName;
      this.marks = [];
    }
    getName () {
      return this.studentName;
    }
  
    addGrade(grade, subject) { 
  
     if (grade > 5 || grade <=0 || isNaN(parseInt(grade))) {
        console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        return this.marks;
      } 
        if (!this.marks.some((item, i) => this.marks[i].subjectName === subject)) {
          this.marks.push({subjectName: subject, mark: [grade]}); 
        }
        else {
          let index = this.marks.findIndex(markIndex => markIndex.subjectName === subject);
          this.marks[index].mark.push(grade);
        }
       return this.marks;
      }
    
  
    getAverageBySubject(subject) {
      let index = this.marks.findIndex(markIndex => markIndex.subjectName === subject);
      if (index === -1) {
        return 0;
      } else {
        let averageBySubject = 0;       
        return averageBySubject = (this.marks[index].mark.reduce(function(sum, current){
          return sum + current })) / this.marks[index].mark.length;  
      }
    }
  
    getToralAverage(){
      let average  = 0;
      if (this.marks.length === 0) {
        return 0;
      }
      this.marks.forEach(function(item, i) {
        average += (item.mark.reduce(function(sum, current){
          return sum + current })) / item.mark.length;
        })
      return average / this.marks.length; 
    }
  }
  
  
  
  const student = new StudentLog('Олег Никифоров');
  
  console.log(student.getName()) 
  student.addGrade(4, 'algebra');
  student.addGrade(2, 'geometry');
  student.addGrade(4, 'algebra');
  student.addGrade(4, 'algebra');
  student.addGrade(3, 'geometry');
  student.addGrade(5, 'music');
  student.addGrade(4, 'geometry');
  student.addGrade('отлично!', 'english');
  student.addGrade(6, 'english');
  student.addGrade(5, 'english');
  student.addGrade(5, 'music');
  student.addGrade(5, 'geometry');
  student.addGrade(3, 'english');
  student.addGrade(5, 'music');
  
  console.log(`Средний балл по алгебре ${student.getAverageBySubject('algebra')}`); 
  console.log(`Средний балл по геометрии ${student.getAverageBySubject('geometry')}`);
  console.log(`Средний балл по математике ${student.getAverageBySubject('math')}`); 
  console.log(`Средний балл по музыке ${student.getAverageBySubject('music')}`);
  console.log(`Средний балл по английскому языку ${student.getAverageBySubject('english')}`);
  console.log(`Средний балл по всем предметам ${student.getToralAverage()}`);