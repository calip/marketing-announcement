
const formatDate = (d, f) => {
  const date = new Date(d).toLocaleDateString(undefined, { dateStyle: f })
  const time = new Date(d).toLocaleTimeString(undefined)
  return `${date} ${time}`
}

const Helper = {
  formatDate: (d, format) => formatDate(d, format)
}

export default Helper