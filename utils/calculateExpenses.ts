export default function ({ transactions }: { transactions: any }){
  const incomes = transactions.filter((x: any) => x.type == 'expense');
  return incomes.reduce((total: any, income: any) => total + income.amount, 0);
}