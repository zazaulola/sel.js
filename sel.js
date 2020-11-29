
/**
 * Query Selector
 * @function $ 
 * @param  {...{object|string}} q query
 * @returns {Element}
 */

function $(...q){
  return q.reduce((r,s)=>!r?null:'object'==typeof s?s:r.querySelector(s),document);
}

/**
 * Query Selector All
 * @function $ 
 * @param  {...{object|string}} q query
 * @returns {ElementCollection}
 */
function $$(...q){
  return q.reduce((r,s,i,q)=>!r?null:'object'==typeof s?s:r['querySelector'+(i==q.length-1?'All':'')](s),document);
}
