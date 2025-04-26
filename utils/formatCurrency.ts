export default function formatCurrency({ amount }: { amount: number }){
  const prefix = '₺';
  const fixedAmount = amount.toFixed(2);
  const currency = fixedAmount.replace(/\d(?=(\d{3})+\.)/g, '$&.').replace('.', ',');
  return `${prefix}${currency}`;
}