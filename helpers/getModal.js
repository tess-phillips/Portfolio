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
    console.log(modal.id, "btn");
  };

  span.addEventListener("click", function() {
    modal.style.display = "none";
    console.log(modal.id)
    console.log(modal.id, "span");
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log(modal.id, "window");
    }
  });
}