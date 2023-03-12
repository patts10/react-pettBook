export const dateFormat = (date) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const newDate = new Date(date)

  const day = newDate.getDate()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()

  return `${day} ${monthNames[month]} ${year}`
}
