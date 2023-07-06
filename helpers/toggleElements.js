/**
 * 
 * @param {*} elementId 
 * @param {*} btnid 
 */
export const toggle = (elementId,btnid) => {
    const element = document.getElementById(elementId);
    const btn = document.getElementById(btnid);
    if (element.style.display == "none") {
      element.style.display = "block";
      btn.innerHTML="Hide resume";
    } else {
      element.style.display = "none";
      btn.innerHTML="Show resume"
    }
}