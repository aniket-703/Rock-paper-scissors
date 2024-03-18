let userscore=0;
let computerscore=0

const choices =document.querySelectorAll(".choice");
const user_name=document.querySelector("#user_name")
const message=document.querySelector("#msg")
const userScore=document.querySelector("#user_score")
const computerScore=document.querySelector("#comp_score")

let c_value=0;
let u_value=0;
let draw_value=0;

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let name_of_user=prompt("Enter your Name");
name_of_user=capitalize(name_of_user);
user_name.innerText=name_of_user;


const show_win= (win_lose,user_ch,computer_ch) => {
    if(win_lose){
        message.innerText=name_of_user+` Win! ${capitalize(user_ch)} Beats ${capitalize(computer_ch)}`;
        userScore.innerText=++u_value;
        message.style.backgroundColor="green";
    }else{
        message.innerText=`Computer Win! ${capitalize(computer_ch)} Beats your ${capitalize(user_ch)}`;
        computerScore.innerText=++c_value;
        message.style.backgroundColor="red";
    }
}

const gen_comp_choice= () =>{
    options=["rock","paper","scissors"]
    const comp_ch_random=Math.floor(Math.random()*3);
    return options[comp_ch_random];
}

const play_game = (user_ch) =>{
    const computer_ch=gen_comp_choice();

    if(user_ch===computer_ch){
        draw_value++;
        if(draw_value>1){
            message.innerText="It's again Draw ! You Should Try Again";  
            message.style.backgroundColor="black";
        }else{
            message.innerText="It's a Draw !\tTry Again";
            message.style.backgroundColor="black";
        }
        
        
    }else{
        let userwin=true;
        draw_value=0;
        if (user_ch==="rock"){
            userwin=computer_ch === "paper" ? false : true;
        }else if (user_ch==="paper"){
            userwin=computer_ch === "scissors" ? false : true;
        }else if (user_ch==="scissors"){
            userwin=computer_ch === "rock" ? false : true;
        }
        show_win(userwin,user_ch,computer_ch);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const user_ch=choice.getAttribute("id");
        play_game(user_ch);
    })

})