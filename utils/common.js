export const formatDate = (dateIn) => {
  const date = new Date(dateIn)
  const myyear = date.getFullYear()
  let mymonth = (date.getMonth() + 1).toString()
  let myweekday = date.getDate().toString()
  if (+mymonth < 10) {
    mymonth = '0' + mymonth
  }
  if (+myweekday < 10) {
    myweekday = '0' + myweekday
  }
  return myyear + '-' + mymonth + '-' + myweekday
}

export const formatYearMonth = (dateIn) => {
  const date = new Date(dateIn)
  const myyear = date.getFullYear()
  let mymonth = (date.getMonth() + 1).toString()
  if (+mymonth < 10) {
    mymonth = '0' + mymonth
  }
  return myyear + '-' + mymonth
}