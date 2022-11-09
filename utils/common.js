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

export const formatDateText = (dateIn) => {
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
  return myyear + '年' + mymonth + '月' + myweekday + '日'
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

// toast
export const toast = (data) => {
	return uni.showToast({
		title: data,
		icon: 'none',
		duration: 1500
	})
}

// 根据value找名称
export const findNameInList = (value, list) => {
	const target = list.find(item => {
		return item.value === value
	})
	return target[0].label
}
