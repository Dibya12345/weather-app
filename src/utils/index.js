export function formatDateToWords(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateParts = dateString.split("-");
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);
  const monthName = months[month - 1];
  return `${monthName} ${day}`;
}

export function tempConverter(toogle, temp) {
  if (toogle) {
    return `${temp}°C`;
  } else {
    const fahrenheit = (temp * 9) / 5 + 32;
    return `${fahrenheit.toFixed(2)}°F`;
  }
}
