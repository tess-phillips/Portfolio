/**
 * 
 * @param {*} myModal 
 * @param {*} myBtn 
 * @param {*} myClose 
 */
export const getModal = (myModal, myBtn, myClose) => {
  var modal = document.getElementById(myModal);
  var btn = document.getElementById(myBtn);
  var span = document.getElementById(myClose);

  btn.onclick = function() {
    modal.style.display = "block";
  };

  span.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}