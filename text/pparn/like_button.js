const like_Btn_div = document.getElementById("like_Btn");
const like_Btn_button = like_Btn_div.querySelector(".button");
function handleLikeClick(){
    const like_Btn_i = document.getElementById("like_Btn_i");
    like_Btn_i.className="fas fa-heart";
    localStorage.setItem=""
};

like_Btn_button.addEventListener("click", handleLikeClick);