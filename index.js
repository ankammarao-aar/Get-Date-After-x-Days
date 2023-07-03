const addDays = require("date-fns/addDays");

function dateAfterXDays(days) {
  const result = addDays(new Date(2020, 8, 22), days);
  return `${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`;
}

module.exports = dateAfterXDays;
