// function digitalClock() {
//     let date = new Date();

//     let hours = date.getHours() + "";
    
//     let minutes = date.getMinutes() + "";

//     let seconds = date.getSeconds() + "";
    
//     let day = date.getDay();


//     if (hours.length<2){
//         hours = "0" + hours
//     }

//     if (minutes.length < 2){
//         minutes = "0" + minutes
//     }
//     if (seconds.length < 2){
//         seconds = "0" + seconds
//     }

//     let weekdays = ['sun', 'mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

//     let clock = weekdays[day] + " " + hours + ":" + minutes + ":" + seconds;

//     document.getElementById('clock').setAttribute('style', 'color: white;');
//     document.getElementById('clock').innerHTML = clock;
//     console.log(clock);
// }

// digitalClock();


// let direct_delete_1 = document.getElementById('direct_delete1');
// direct_delete_1.style.display="none";

let main_app = document.getElementById('main_app');
main_app.style.display="none";
let trash_hide = document.getElementById('trash');
trash_hide.style.display="none";

let jump_start = document.getElementById('get_started');
jump_start.addEventListener('click', 
    () => {
        let username_input = document.getElementById('name_input');
        if (username_input.value=="") {
            let invalid_usename = document.getElementById('invalid_usename');
            invalid_usename.style.display="block"
        }else{
            let main_app_name =  document.getElementById('username');
            main_app_name.textContent = username_input.value;
            
            
            main_app.style.display="block";
            trash_hide.style.display="block";
            document.getElementById('welcome_form').style.display="none";
        }
    }
);
