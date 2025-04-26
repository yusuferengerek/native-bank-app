export default function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  
  // Check if invalid date
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }
  
  // Format time as HH:MM
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  
  // Format date as DD.MM.YYYY (European/Turkish style)
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const dateFormatted = `${day}.${month}.${year}`;
  
  // Check if it's today
  const isToday = 
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();
    
  // Check if it's yesterday
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = 
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();
    
  if (isToday) {
    return `Today, ${timeString}`;
  } else if (isYesterday) {
    return `Yesterday, ${timeString}`;
  } else {
    return `${dateFormatted} ${timeString}`;
  }
} 