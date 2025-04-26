export default function calculateBalance({ transactions }: { transactions: any[] }){
  const incomes = transactions.filter((x: any) => x.type == 'income');
  const expenses = transactions.filter((x: any) => x.type == 'expense');
  const totalIncome = incomes.reduce((sum: number, item: any) => sum + item.amount, 0);
  const totalExpense = expenses.reduce((sum: number, item: any) => sum + item.amount, 0);
  return totalIncome - totalExpense;
}