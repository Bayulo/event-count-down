
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

//set the count downs for cultural events
function update_countdown(){
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
setInterval(update_countdown, 1000);
update_countdown();

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


//feed the start dates at their positions for sporting events
let art_dates = document.querySelectorAll(".art_dates");
art_dates.forEach((item, index) => {
    item.textContent = arts_events_start_dates[index].toDateString();
})



//trade events
const trade_events_start_dates = [
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), 
    new Date(), new Date(), new Date(), new Date(), new Date()
];
const trade_events_end_dates = [
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), 
    new Date(), new Date(), new Date(), new Date(), new Date()
];


//awareness events
const awareness_events_start_dates = [
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), 
    new Date(), new Date(), new Date(), new Date(), new Date()
];
const awareness_events_end_dates = [
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), 
    new Date(), new Date(), new Date(), new Date(), new Date()
];


//holiday linked events
const holiday_linked_events_start_dates = [
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), 
    new Date(), new Date(), new Date(), new Date(), new Date()
];
const holiday_linked_events_end_dates = [
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), 
    new Date(), new Date(), new Date(), new Date(), new Date()
];
