
//cultural events
const cultural_events_start_dates = [
    new Date(2026, 1, 17), new Date(2026, 2, 4), new Date(2026, 10, 8), new Date(2026, 2, 20), new Date(2026, 2, 20),
    new Date(2026, 4, 27), new Date(2025, 11, 25), new Date(2026, 1, 17), new Date(2026, 3, 1), new Date(2026, 8, 20),
    new Date(2026, 8, 11), new Date(2026, 8, 25), new Date(2026, 7, 8), new Date(2025, 9, 31), new Date(2026, 5, 24), 
    new Date(2026, 2, 17), new Date(2026, 1, 1), new Date(2026, 2, 20), new Date(2026, 2, 3), new Date(2026, 1, 13)
];
const cultural_events_end_dates = [
    new Date(2026, 2, 3), new Date(2026, 2, 5), new Date(2026, 10, 12), new Date(2026, 3, 2), new Date(2026, 2, 22),
    new Date(2026, 4, 31), new Date(2025, 11, 26), new Date(2026, 2, 18), new Date(2026, 3, 9), new Date(2026, 8, 21),
    new Date(2026, 8, 13), new Date(2026, 8, 26), new Date(2026, 7, 16), new Date(2025, 10, 2), new Date(2026, 5, 25), 
    new Date(2026, 2, 18), new Date(2026, 1, 2), new Date(2026, 2, 29), new Date(2026, 2, 4), new Date(2026, 1, 18)
];
const cultural_events_titles = [
    "Chinese Lunar Year",
    "Holi - Festival of Colours",
    "Diwali (Festival of Lights)",
    "Nowruz (Persian New Year)",
    "Eid al-Fitr",
];
const cultural_events_dets = [
    "This is a lunisolar new year celebrated by Chinese communities globally. It signifies a new beginning and is a time for family reunions, fireworks, and parades. A traditional meal includes dishes representing good luck and prosperity, such as fish (for abundance) and dumplings (for wealth). It occurs in the winter, between January 21 and February 20. The event is a cultural and religious celebration rooted in Chinese traditions.",
    "A Hindu spring festival, Holi signifies the triumph of good over evil. It is observed with music, bonfires, and the throwing of colored powders. The festival is celebrated in India, Nepal, and by the Hindu diaspora. Traditional foods include sweet treats like 'gujiya' and 'malpua', as well as savory snacks. The festival marks the end of winter and the arrival of spring.",
    "A major Hindu festival, Diwali signifies the victory of light over darkness and good over evil. It is celebrated with the lighting of lamps ('diyas') and fireworks. In some regions, it commemorates the return of Lord Rama to Ayodhya after his exile. Sweets and fried snacks are a significant part of the celebration. It takes place in the autumn, typically between October and November.",
    "This is a new year celebration that marks the spring equinox. It is a time for renewal and rebirth. The celebration involves setting up a 'Haft-Seen' table with seven symbolic items. It is observed primarily in Iran, Central Asia, and parts of the Caucasus. It is a cultural celebration with Zoroastrian origins.",
    "This global observance for Muslims marks the end of Ramadan, the month of fasting. It signifies a time of gratitude and charity. The three-day festival includes communal prayers, feasts, and the giving of gifts. Dishes vary by region but often include a variety of sweet foods. It is observed in Muslim-majority countries around the world.",
];

//set the count downs for cultural events
function update_countdown_1(){
    const today = new Date();
    const countdown = document.querySelectorAll(".cultural_countdown");
    countdown.forEach((item, index) => {
        let a = cultural_events_start_dates[index] - today;
        if (a <= 0 && cultural_events_end_dates[index] - today > 0) {
            item.innerHTML = `<span style = "color: green;">Event is Ongoing!</span>`;
            return;
        }
        let seconds_left = Math.floor(a/1000);
        let minutes_left = Math.floor(seconds_left/60);
        let hours_left = Math.floor(minutes_left/60);
        let days_left = Math.floor(hours_left/24);
        let months_left = Math.floor(days_left/30);

        let display_seconds_left = seconds_left % 60;
        let display_minutes_left = minutes_left % 60;
        let display_hours_left = hours_left % 60;
        let display_days_left = days_left % 30;
        item.innerHTML = `${months_left} month(s), ${display_days_left} days, ${display_hours_left} hours, ${display_minutes_left} minutes, ${display_seconds_left} seconds left`;
        if(cultural_events_end_dates[index] - today < 0){
            item.innerHTML = `<span style = "color: red;">Event has passed</span>`
        }
    });
}
setInterval(update_countdown_1, 1000);
update_countdown_1();

//feed the start dates at their positions for cultural events
let event_dates = document.querySelectorAll(".cultural_date");
event_dates.forEach((item, index) => {
    item.textContent = cultural_events_start_dates[index].toDateString();
})


//sporting events
const sporting_events_start_dates = [
    new Date(2026, 3, 20), new Date(2026, 5, 28), new Date(2026, 5, 29), new Date(2026, 4, 30), new Date(2026, 2, 15),
    new Date(2026, 1, 8), new Date(2026, 3, 18), new Date(2026, 2, 1), new Date(2026, 7, 20), new Date(2026, 4, 24),
    new Date(2026, 0, 12), new Date(2026, 3, 26), new Date(2026, 6, 2), new Date(2026, 1, 5), new Date(2026, 4, 24), 
    new Date(2026, 4, 24), new Date(2026, 3, 18), new Date(2026, 5, 14), new Date(2026,), new Date(2026,)
];
const sporting_events_end_dates = [
    new Date(2026, 3, 21), new Date(2026, 6, 28), new Date(2026, 6, 12), new Date(2026, 4, 31), new Date(2026, 4, 31),
    new Date(2026, 1, 9), new Date(2026, 5, 15), new Date(2026, 2, 2), new Date(2026, 8, 13), new Date(2026, 5, 7),
    new Date(2026, 1, 11), new Date(2026, 3, 27), new Date(2026, 6, 6), new Date(2026, 2, 15), new Date(2026, 4, 25), 
    new Date(2026, 4, 25), new Date(2026, 3, 20), new Date(2026, 5, 15), new Date(2026,), new Date(2026,)
];
const sporting_events_dets = [];
const sporting_events_titles = [];


//set the count downs for sporting events
function update_countdown_2(){
    const today = new Date();
    let sporting_countdown = document.querySelectorAll(".sporting_countdown");
    sporting_countdown.forEach((item, index) => {
        let a = sporting_events_start_dates[index] - today;
        if (a <= 0 && sporting_events_end_dates[index] - today > 0) {
            item.innerHTML = `<span style = "color: green;">Event is Ongoing!</span>`;
            return;
        }
        let seconds_left = Math.floor(a/1000);
        let minutes_left = Math.floor(seconds_left/60);
        let hours_left = Math.floor(minutes_left/60);
        let days_left = Math.floor(hours_left/24);
        let months_left = Math.floor(days_left/30);

        let display_seconds_left = seconds_left % 60;
        let display_minutes_left = minutes_left % 60;
        let display_hours_left = hours_left % 60;
        let display_days_left = days_left % 30;
        item.innerHTML = `${months_left} month(s), ${display_days_left} days, ${display_hours_left} hours, ${display_minutes_left} minutes, ${display_seconds_left} seconds left`;
        if(sporting_events_end_dates[index] - today < 0){
            item.innerHTML = `<span style = "color: red;">Event has passed</span>`
        }
    });
}
setInterval(update_countdown_2, 1000);
update_countdown_2();


//feed the start dates at their positions for sporting events
let sporting_date = document.querySelectorAll(".sporting_date");
sporting_date.forEach((item, index) => {
    item.textContent = sporting_events_start_dates[index].toDateString();
})



//arts events
const arts_events_start_dates = [
    new Date(2026, 4, 12), new Date(2026,), new Date(2026, 7, 30), new Date(2026, 1, 12), new Date(2026, 2, 12),
    new Date(2026, 4, 4), new Date(2026, 5, 19), new Date(2026, 7), new Date(2026, 3, 10), new Date(2026, 4, 9),
    new Date(2026, 8, 10), new Date(2026, 1, 12), new Date(2026, 8, 17), new Date(2026, 0, 22), new Date(2026, 2, 25), 
    new Date(2026, 8, 6), new Date(2026, 5, 3), new Date(2026, 6, 3), new Date(2026, 8, 19), new Date(2026, 4, 25)
];
const arts_events_end_dates = [
    new Date(2026, 4, 24), new Date(2026,), new Date(2026, 8, 8), new Date(2026, 1, 23), new Date(2026, 2, 19),
    new Date(2026, 4, 5), new Date(2026, 5, 20), new Date(2026, 7), new Date(2026, 3, 20), new Date(2026, 10, 23),
    new Date(2026, 8, 21), new Date(2026, 1, 20), new Date(2026, 8, 21), new Date(2026, 1, 2), new Date(2026, 3, 20), 
    new Date(2026, 8, 7), new Date(2026, 3, 15), new Date(2026, 6, 6), new Date(2026, 9, 5), new Date(2026, 5, 5)
];

const arts_events_dets = [];
const arts_events_titles = [];

//set the count downs for arts events
function update_countdown_3(){
    const today = new Date();
    let art_countdown = document.querySelectorAll(".art_countdown");
    art_countdown.forEach((item, index) => {
        let a = arts_events_start_dates[index] - today;
        if (a <= 0 && arts_events_end_dates[index] - today > 0) {
            item.innerHTML = `<span style = "color: green;">Event is Ongoing!</span>`;
            return;
        }
        let seconds_left = Math.floor(a/1000);
        let minutes_left = Math.floor(seconds_left/60);
        let hours_left = Math.floor(minutes_left/60);
        let days_left = Math.floor(hours_left/24);
        let months_left = Math.floor(days_left/30);

        let display_seconds_left = seconds_left % 60;
        let display_minutes_left = minutes_left % 60;
        let display_hours_left = hours_left % 60;
        let display_days_left = days_left % 30;
        item.innerHTML = `${months_left} month(s), ${display_days_left} days, ${display_hours_left} hours, ${display_minutes_left} minutes, ${display_seconds_left} seconds left`;
        if(arts_events_end_dates[index] - today < 0){
            item.innerHTML = `<span style = "color: red;">Event has passed</span>`
        }
    });
}
setInterval(update_countdown_3, 1000);
update_countdown_3();

//feed the start dates at their positions for sporting events
let art_dates = document.querySelectorAll(".art_dates");
art_dates.forEach((item, index) => {
    item.textContent = arts_events_start_dates[index].toDateString();
})




//trade events
const trade_events_start_dates = [
    new Date(2026, 0, 8), new Date(2026, 2, 2), new Date(2026, 3), new Date(2026, 10, 2), new Date(2026, 0, 20),
    new Date(2026, 9, 14), new Date(2026, 8, 4), new Date(2026, 5, 22), new Date(2026, 2, 10), new Date(2026, 5, 22),
    new Date(2026, 2, 10), new Date(2026, 10), new Date(2026, 8, 10), new Date(2026, 10), new Date(2026, 8), 
    new Date(2026, ), new Date(2026, 5, 15), new Date(2026, 3, 22), new Date(2026, 3, 27), new Date(2026, 6, 15)
];
const trade_events_end_dates = [
    new Date(2026, 0, 12), new Date(2026, 2, 6), new Date(2026, 3, 30), new Date(2026, 10, 6), new Date(2026, 0, 24),
    new Date(2026, 9, 19), new Date(2026, 8, 10), new Date(2026, 5, 27), new Date(2026, 2, 13), new Date(2026, 5, 27),
    new Date(2026, 2, 13), new Date(2026, 10, 30), new Date(2026, 8, 13), new Date(2026, 10), new Date(2026, 5, 19), 
    new Date(2026, ), new Date(2026, 5, 19), new Date(2026, 3, 25), new Date(2026, 4, 2), new Date(2026, 8)
];

const trade_events_dets = [];
const trade_events_titles = [];

//set the count downs for trade events
function update_countdown_4(){
    const today = new Date();
    let trade_countdown = document.querySelectorAll(".trade_countdown");
    trade_countdown.forEach((item, index) => {
        let a = trade_events_start_dates[index] - today;
        if (a <= 0 && trade_events_end_dates[index] - today > 0) {
            item.innerHTML = `<span style = "color: green;">Event is Ongoing!</span>`;
            return;
        }
        let seconds_left = Math.floor(a/1000);
        let minutes_left = Math.floor(seconds_left/60);
        let hours_left = Math.floor(minutes_left/60);
        let days_left = Math.floor(hours_left/24);
        let months_left = Math.floor(days_left/30);

        let display_seconds_left = seconds_left % 60;
        let display_minutes_left = minutes_left % 60;
        let display_hours_left = hours_left % 60;
        let display_days_left = days_left % 30;
        item.innerHTML = `${months_left} month(s), ${display_days_left} days, ${display_hours_left} hours, ${display_minutes_left} minutes, ${display_seconds_left} seconds left`;
        if(trade_events_end_dates[index] - today < 0){
            item.innerHTML = `<span style = "color: red;">Event has passed</span>`
        }
    });
}
setInterval(update_countdown_4, 1000);
update_countdown_4();


//feed the start dates at their positions for sporting events
let trade_dates = document.querySelectorAll(".trade_date");
trade_dates.forEach((item, index) => {
    item.textContent = trade_events_start_dates[index].toDateString();
})



//awareness events
const awareness_events_start_dates = [
    new Date(2026, 11, 1), new Date(2026, 2, 8), new Date(2026, 3, 22), new Date(2026, 9, 10), new Date(2026, 2, 13),
    new Date(2026, 1, 4), new Date(2026, 8, 5), new Date(2026, 11, 1), new Date(2026, ), new Date(2026, ), new Date(2026, 11, 3),
    new Date(2026, 5, 20), new Date(2026, 1, 6), new Date(2026, 5, 5), new Date(2026, 5, 14), new Date(2026, 9, 10), 
    new Date(2026, 11, 9), new Date(2026, 8, 21), new Date(2026, 10, 1), new Date(2026, 9, 5)
];
const awareness_events_end_dates = [
    new Date(2026, 11, 2), new Date(2026, 2, 9), new Date(2026, 3, 23), new Date(2026, 9, 11), new Date(2026, 2, 14),
    new Date(2026, 1, 5), new Date(2026, 8, 6), new Date(2026, 11, 2), new Date(2026, ), new Date(2026, ), new Date(2026, 11, 4),
    new Date(2026, 5, 21), new Date(2026, 1, 7), new Date(2026, 5, 6), new Date(2026, 5, 15), new Date(2026, 9, 11), 
    new Date(2026, 11, 10), new Date(2026, 8, 21), new Date(2026, 11, 1), new Date(2026, 9, 6)
];

const awareness_events_dets = [];
const awareness_events_titles = [];

//set the count downs for awareness events
function update_countdown_5(){
    const today = new Date();
    let awareness_countdown = document.querySelectorAll(".awareness_countdown");
    awareness_countdown.forEach((item, index) => {
        let a = awareness_events_start_dates[index] - today;
        if (a <= 0 && awareness_events_end_dates[index] - today > 0) {
            item.innerHTML = `<span style = "color: green;">Event is Ongoing!</span>`;
            return;
        }
        let seconds_left = Math.floor(a/1000);
        let minutes_left = Math.floor(seconds_left/60);
        let hours_left = Math.floor(minutes_left/60);
        let days_left = Math.floor(hours_left/24);
        let months_left = Math.floor(days_left/30);

        let display_seconds_left = seconds_left % 60;
        let display_minutes_left = minutes_left % 60;
        let display_hours_left = hours_left % 60;
        let display_days_left = days_left % 30;
        item.innerHTML = `${months_left} month(s), ${display_days_left} days, ${display_hours_left} hours, ${display_minutes_left} minutes, ${display_seconds_left} seconds left`;
        if(awareness_events_end_dates[index] - today < 0){
            item.innerHTML = `<span style = "color: red;">Event has passed</span>`
        }
    });
}
setInterval(update_countdown_5, 1000);
update_countdown_5();


//feed the start dates at their positions for awareness events
let awareness_dates = document.querySelectorAll(".awareness_date");
awareness_dates.forEach((item, index) => {
    item.textContent = awareness_events_start_dates[index].toDateString();
})

//holiday linked events
const holiday_linked_events_start_dates = [
    new Date(2026, 0, 1), new Date(2026, 1, 14), new Date(2026, 3, 5), new Date(2026, 9, 31), new Date(2026, 11, 25),
    new Date(2026, 5, 21), new Date(2026, 11, 21), new Date(2026, 1, 17), new Date(2026, 11, 26),
    new Date(2026, 4, 1), new Date(2026, 10, 27), new Date(2026, 10, 5), new Date(2026, ), new Date(2026, 11, 5), 
    new Date(2026, 5, 24), new Date(2026, ), new Date(2026, 10, 26), new Date(2026, 9, 12), new Date(2026, 10, 11)
];
const holiday_linked_events_end_dates = [
    new Date(2026, 0, 2), new Date(2026, 1, 15), new Date(2026, 3, 6), new Date(2026, 10, 1), new Date(2026, 11, 26),
    new Date(2026, 5, 22), new Date(2026, 11, 22), new Date(2026, 1, 18), new Date(2026, 11, 27),
    new Date(2026, 4, 2), new Date(2026, 10, 28), new Date(2026, 10, 6), new Date(2026, ), new Date(2026, 11, 7), 
    new Date(2026, 5, 25), new Date(2026, ), new Date(2026, 10, 27), new Date(2026, 9, 13), new Date(2026, 10, 12)
];

const holiday_linked_events_dets = [];
const holiday_linked_events_titles = [];

//set the count downs for holiday-lined events
function update_countdown_6(){
    const today = new Date();
    let holiday_linked_countdown = document.querySelectorAll(".holiday_linked_countdown");
    holiday_linked_countdown.forEach((item, index) => {
        let a = holiday_linked_events_start_dates[index] - today;
        if (a <= 0 && holiday_linked_events_end_dates[index] - today > 0) {
            item.innerHTML = `<span style = "color: green;">Event is Ongoing!</span>`;
            return;
        }
        let seconds_left = Math.floor(a/1000);
        let minutes_left = Math.floor(seconds_left/60);
        let hours_left = Math.floor(minutes_left/60);
        let days_left = Math.floor(hours_left/24);
        let months_left = Math.floor(days_left/30);

        let display_seconds_left = seconds_left % 60;
        let display_minutes_left = minutes_left % 60;
        let display_hours_left = hours_left % 60;
        let display_days_left = days_left % 30;
        item.innerHTML = `${months_left} month(s), ${display_days_left} days, ${display_hours_left} hours, ${display_minutes_left} minutes, ${display_seconds_left} seconds left`;
        if(holiday_linked_events_end_dates[index] - today < 0){
            item.innerHTML = `<span style = "color: red;">Event has passed</span>`
        }
    });
}
setInterval(update_countdown_6, 1000);
update_countdown_6();


//feed the start dates at their positions for awareness events
let holiday_dates = document.querySelectorAll(".holiday_date");
holiday_dates.forEach((item, index) => {
    item.textContent = holiday_linked_events_start_dates[index].toDateString();
})


let cultural_pops = document.querySelectorAll(".cultural_pops");
cultural_pops.forEach(element => {
    element.addEventListener("click", test);
});

function test(e){
    
    if (e.target.classList.contains("cultural_pops")) {
        const step = Number(e.target.dataset.index1);
        show_popup(cultural_events_titles[step], cultural_events_dets[step]);
    }
    if (e.target.classList.contains("sporting_pops")) {
        const step = Number(e.target.dataset.index2);
        show_popup(sporting_events_titles[step], sporting_events_dets[step]);
    }
    if (e.target.classList.contains("arts_pops")) {
        const step = Number(e.target.dataset.index3);
        show_popup(arts_events_titles[step], arts_events_dets[step]);
    }
    if (e.target.classList.contains("trade_pops")) {
        const step = Number(e.target.dataset.index4);
        show_popup(trade_events_titles[step], trade_events_dets[step]);
    }
    if (e.target.classList.contains("awareness_pops")) {
        const step = Number(e.target.dataset.index5);
        show_popup(awareness_events_titles[step], awareness_events_dets[step]);
    }
    if (e.target.classList.contains("holiday_linked_pops")) {
        const step = Number(e.target.dataset.index);
        show_popup(holiday_linked_events_titles[step], holiday_linked_events_dets[step]);
    }
    }

const dark_background = document.getElementById("dark_background");
const pop_holder = document.getElementById("pop_holder");
const pop_title = document.getElementById("pop_title");
const pop_content = document.getElementById("pop_content");

dark_background.onclick = function(){
    hide_popup();
}

function hide_popup(){
    pop_holder.style.display = "none";
    dark_background.style.display = "none";
}
function show_popup(title, content){
    pop_title.textContent = title;
    pop_content.textContent = content;
    dark_background.style.display = "block";
    pop_holder.style.display = "block";
}