export default function formatCurrency({ amount }: { amount: number }){
  const prefix = '₺';
  const fixedAmount = amount.toFixed(2);
  
  // European/Turkish style: 1.234,56 (dot for thousands, comma for decimals)
  const formattedAmount = fixedAmount
    .replace('.', ',')  // Replace decimal point with comma
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Add dots for thousands
  
  return `${prefix}${formattedAmount}`;
}