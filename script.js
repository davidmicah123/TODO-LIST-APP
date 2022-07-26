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


let add1 = document.getElementById("add1");
add1.addEventListener('click',
    () => {
        let model_display = document.getElementById("model_display")
        model_display.style.display="block"
        let body = document.getElementById("body");
        body.setAttribute('style', 'background-color: #444;');
        let main_app = document.getElementById("main_app");        
        main_app.setAttribute('style', 'background-color: rgba(28, 121, 68, 0.781);');
    }
);


let cancel_popup = document.getElementById("cancel_popup");
cancel_popup.addEventListener("click",
    () => {
        let body = document.getElementById("body");
        body.setAttribute('style', 'background-color: #000;');
        let set_heading = document.getElementById("new_heading1");
        let heading1 = document.getElementById("task_heading1");
        set_heading.textContent = heading1.value;
        let model_display = document.getElementById("model_display");
        model_display.style.display="none";

    //     let ignore_warning = document.getElementById('ignore_warning');
    //     ignore_warning.addEventListener('click',
    //         () => {
    //             let model_display = document.getElementById("model_display");
    //             model_display.style.display="none";
    //             let popup_warning = document.getElementById('popup_warning');
    //             popup_warning.style.display="none"
                
    //             let main_app = document.getElementById("main_app");
    //             main_app.setAttribute('style', 'background-color: rgba(28, 121, 68, 0.781);');
    //         }
    //     );

    //     let acept_warning = document.getElementById('acept_warning');
    //     acept_warning.addEventListener('click',
    //         () => {
    //             let model_display = document.getElementById("model_display");
    //             model_display.style.display="block";
    //             let popup_warning = document.getElementById('popup_warning');
    //             popup_warning.style.display="none"
    //         }
    //     );

    //     let main_app = document.getElementById("main_app");
    //     main_app.setAttribute('style', 'background-color: springgreen;');
    });


    // let direct_delete1 = document.getElementById('direct_delete1');
    // direct_delete1.style.display="none";



let add_to_list_1 = document.getElementById("add_to_list_1");
add_to_list_1.addEventListener('click', 
    () => {

        let heading1 = document.getElementById("task_heading1");
        let activity1 = document.getElementById("task_activity1");
        if(heading1.value != "" && activity1.value != ""){
            let task1 = document.getElementById("model_display");
            task1.style.display="none"
            
            // let new_task_heading = document.getElementById("task_heading1");
            let set_heading = document.getElementById("new_heading1");
            set_heading.textContent = heading1.value;

            let direct_delete1 = document.getElementById('direct_delete1');
            direct_delete1.style.display="block";

            let add_plus_icon = document.getElementById('add_plus_icon');
            add_plus_icon.style.display="none"
            let view_icon = document.getElementById('view_icon');
            view_icon.style.display="block"

            let view_task1 = document.getElementById("view_icon");
            view_icon.addEventListener('click',
                () => {
                    let task1 = document.getElementById("model_display");
                    task1.style.display="block"
                    let now_task = document.getElementById("model_heading");
                    now_task.textContent="TASK"
                    let now_remove = document.getElementById("add_to_list_1");
                    now_remove.textContent="REMOVE TASK"
                    now_remove.addEventListener('click', 
                        () => {
                            let warning = document.getElementById('popup_warning');
                            warning.style.display="block"
                            let delete_task_1 = document.getElementById('model_display');
                            delete_task_1.style.display="block"
                            let keep_editting = document.getElementById('acept_warning');
                            keep_editting.addEventListener('click',
                                () => {
                                    warning.style.display="none"
                                    let delete_task_1 = document.getElementById('model_display');
                                    delete_task_1.style.display="block"
                                }
                            );
                        let delete_anyway = document.getElementById('ignore_warning');
                            delete_anyway.addEventListener('click',
                                () => {
                                    warning.style.display="none"
                                    let delete_task_1 = document.getElementById('model_display');
                                    delete_task_1.style.display="none"
                                    let main_page_delete = document.getElementById('view_task1');
                                    main_page_delete.style.display="none"

                                    
                                let delete_item1 = document.getElementById('delete_item1');
                                delete_item1.style.display= "block"
                                    
                                    let heading1 = document.getElementById("task_heading1");
                                    let trash_item1_txt = document.getElementById("trash_item1_txt");
                                    trash_item1_txt.textContent = heading1.value;
                                }
                            );
                            // let delete_task_indicator_1 = document.getElementById('view_task1');
                            // delete_task_indicator_1.style.display="none"
                        }
                    );
                }
            );

        }else{
            let required = document.getElementById("required");
            required.textContent = "Input fields required";
            required.setAttribute('style', 'color: red;')
        }
    }
);


let direct_delete1 = document.getElementById('direct_delete1');
direct_delete1.addEventListener('click', 
    () => {
        let popup_warning = document.getElementById('popup_warning');
        popup_warning.style.display="block"
        
        let keep_editting = document.getElementById('acept_warning');
        keep_editting.addEventListener('click',
        () => {
            popup_warning.style.display="none"
        }
        );
        let delete_anyway = document.getElementById('ignore_warning');
        delete_anyway.addEventListener('click',
            () => {
                popup_warning.style.display="none";
                let delete_task_1 = document.getElementById('model_display');
                delete_task_1.style.display="none";
                let main_page_delete = document.getElementById('view_task1');
                main_page_delete.style.display="none";

                
            let delete_item1 = document.getElementById('delete_item1');
            delete_item1.style.display= "block"
                
                let heading1 = document.getElementById("task_heading1");
                let trash_item1_txt = document.getElementById("trash_item1_txt");
                trash_item1_txt.textContent = heading1.value;
            }
        );
        
    }
);


let trash = document.getElementById("trash_box");

let trash_toogler  = document.getElementById("trash_toogler");
trash_toogler.addEventListener('click',
    () => {
        let trash_box = document.getElementById("trash_box");
        if (trash_box.style.display === "none") {
            trash_box.style.display = "block";
        } else {
            trash_box.style.display = "none";
        }
    }
);


// let trash_clone1 = document.getElementById('');




let delete_item1 = document.getElementById('delete_item1');
delete_item1.style.display="none"
delete_item1.addEventListener('click', 
    () => {
        let popup_warning = document.getElementById('popup_warning');
        popup_warning.style.display="block"
        // let item1 = document.getElementById('item1');
        let warning = document.getElementById('popup_warning');
        warning.style.display="block"
        let close_warning = document.getElementById('acept_warning');
        close_warning.textContent="close"
        let keep_editting = document.getElementById('acept_warning');
        keep_editting.addEventListener('click',
            () => {
                warning.style.display="none"
            }
        );
        let delete_anyway = document.getElementById('ignore_warning');
        delete_anyway.addEventListener('click',
            () => {
                warning.style.display="none"
                let permanent_delete = document.getElementById('item1');
                permanent_delete.style.display = 'none';
            }
        );                           

    }
);
