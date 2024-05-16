class Player{
    constructor(name, health = 100, power = 10) {
        this.name = name
        this.health = health
        this.power = power
    }

    hit(power) {
        this.health -= power
    }

    useItem(item) {
        this.health += item.health
        this.power += item.power
    }

    showStatus(){
        console.log("Player " + this.name + "(Health => " + this.health + ", Power => " + this.power + ")")
    }
}

class ShootingGame {
    constructor(player1,player2){
        this.player1 = player1
        this.player2 = player2
        this.currentPlayer = player1
        this.otherPlayer = player2
    }

    getRandomItem() {
        return {
            health: Math.random() < 0.5 ? 0 : 10,
            power: Math.random() < 0.5 ? 0 : 10
        }
    }
    start(){
        while (this.player1.health > 0 && this.player2.health > 0){
            console.log("==========TURN============");
            console.log("Player turn: " + this.currentPlayer.name)
            this.player1.showStatus()
            this.player2.showStatus()

            const item1 = this.getRandomItem()
            const item2 = this.getRandomItem()
            this.currentPlayer.useItem(item1)
            this.otherPlayer.useItem(item2)

            console.log("Player " + this.currentPlayer.name + " Gets item= ", item1)
            console.log("Player " + this.otherPlayer.name + " Gets item= ", item2)

            console.log("Player " + this.currentPlayer.name + " Shoots!")
            this.otherPlayer.hit(this.currentPlayer.power)
            this.player1.showStatus()
            this.player2.showStatus()

            const temp = this.currentPlayer
            this.currentPlayer = this.otherPlayer
            this.otherPlayer = temp

        }

        const winner = this.player1.health > 0 ? this.player1.name : this.player2.name
        console.log("==========TAMAT============");
        console.log("Winner " + winner)
    }

}
const player1 = new Player ("Aul")
const player2 = new Player ("Richard")
const game = new ShootingGame(player1, player2)
game.start()

// Salary Employee
class Employee {
    constructor(hourlyRate) {
      this.hourlyRate = hourlyRate;
      this.totalHours = 0;
    }
  
    addHours(hours) {
      this.totalHours += hours;
    }
  
    calculateSalary() {
      return this.totalHours * this.hourlyRate;
    }
  }
  
  class FulltimeEmployee extends Employee {
    constructor() {
      super(100000); 
      this.bonusRate = 75000;
    }
  
    calculateSalary() {
      let salary = super.calculateSalary(); // Hitung gaji dasar dari parent class
      let overtimeHours = Math.max(this.totalHours - 6, 0); // Hitung jam lembur, minimal 0
      let overtimeBonus = overtimeHours * this.bonusRate; // Hitung bonus lembur
      salary += overtimeBonus; // Tambahkan bonus lembur ke gaji
      return salary;
    }
  }
  
  class ParttimeEmployee extends Employee {
    constructor() {
      super(50000); 
      this.bonusRate = 30000;
    }
  
    calculateSalary() {
      let salary = super.calculateSalary(); // Hitung gaji dasar dari parent class
      let overtimeHours = Math.max(this.totalHours - 6, 0); // Hitung jam lembur, minimal 0
      let overtimeBonus = overtimeHours * this.bonusRate; // Hitung bonus lembur
      salary += overtimeBonus; // Tambahkan bonus lembur ke gaji
      return salary;
    }
  }
  
  const fulltimeEmployee = new FulltimeEmployee();
  fulltimeEmployee.addHours(11); // asumsi kan 8 jam kerja
  console.log("Full-time employee's salary:", fulltimeEmployee.totalHours, "x", fulltimeEmployee.hourlyRate, "+", fulltimeEmployee.totalHours - 6, "x", fulltimeEmployee.bonusRate, "=", fulltimeEmployee.calculateSalary());

  const parttimeEmployee = new ParttimeEmployee();
  parttimeEmployee.addHours(6); // asumsi kan 5 jam kerja
  console.log("Part-time employee's salary:", parttimeEmployee.totalHours, "x", parttimeEmployee.hourlyRate, "+", parttimeEmployee.totalHours - 6, "x", parttimeEmployee.bonusRate, "=", parttimeEmployee.calculateSalary());

////