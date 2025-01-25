class LoanCalculator{
    constructor(loanAmount, interestRate, repaymentPeriod){
        this.loanAmount = loanAmount;
        this.interestRate = interestRate;
        this.repaymentPeriod = repaymentPeriod;
    }
    
    calculateMonthlyPayment(){
        const monthlyInterestRate = (this.interestRate / 100) / 12; 
        const numberOfPayments = this.repaymentPeriod * 12;
        const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
        const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
        const monthlyPayment = (this.loanAmount * (numerator / denominator)).toFixed(2);
      return monthlyPayment;
    }
    
    displayMonthlyPayment(){
        const monthlyPayment = this.calculateMonthlyPayment();
        console.log(`Miesieczna rata kredytu wynosi: ${monthlyPayment}`);
    }
    
}

let loanAmount = 100000; // Kwota pożyczki w złotych
let interestRate = 5; // Oprocentowanie w procentach
let repaymentPeriod = 10; // Okres spłaty w latach

let calculator = new LoanCalculator(loanAmount, interestRate, repaymentPeriod);

calculator.displayMonthlyPayment();