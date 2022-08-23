const {getWeek} =require("date-fns")

function getWeekNumber(data) {
   return getWeek(data,{
        firstWeekContainsDate:new Date(new Date().getFullYear(),0,1).getDay()
    })
  }
  function getValidData(str_data){
    const year = Number(str_data.slice(0,4))
    const month = Number(str_data.slice(4,6))
    const day = Number(str_data.slice(6,8))
    const data = new Date(year,(month-1),(day+1))
    return data
}
module.exports={
    getWeekNumber,
    getValidData
}