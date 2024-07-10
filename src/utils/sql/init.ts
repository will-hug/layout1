// const sql = function () {
  // const indexedDB=window.indexedDB
  // if(!indexedDB){
  //   alert('改浏览器不支持该项目，请更换浏览器')
  //   return
  // }
 let dbRequery=  window.indexedDB.open('hugSql',1)
 dbRequery.onupgradeneeded =function(event){
  console.log('event',event)
 }
// };
 
 
// export default sql