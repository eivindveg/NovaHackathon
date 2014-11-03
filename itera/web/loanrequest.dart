class LoanRequest {

  int principalAmount;

  int loanRaisingMonth;

  int loanRaisingYear;

  double annualNominalInterestRate;

  int totalNumberOfPayments;

  LoanRequest(double annualNominalInterestRate, int totalNumberOfPayments, int principalAmount) {
    this.principalAmount = principalAmount;
    this.annualNominalInterestRate = annualNominalInterestRate;
    this.totalNumberOfPayments = totalNumberOfPayments;
    DateTime now = new DateTime.now();
    this.loanRaisingMonth = now.month;
    this.loanRaisingYear = now.year;
  }

  String toJson() {
    return "{ principalAmount: ${principalAmount}, loanRaisingMonth: ${loanRaisingMonth}, loanRaisingYear: ${loanRaisingYear}, annualNominalInterestRate: ${annualNominalInterestRate}, totalNumberOfPayments: ${totalNumberOfPayments}}";
  }
}