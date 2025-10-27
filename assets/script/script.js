
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
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), 
    new Date(), new Date(), new Date(), new Date(), new Date()
];
const sporting_events_end_dates = [
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), 
    new Date(), new Date(), new Date(), new Date(), new Date()
];


//arts events
const arts_events_start_dates = [
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), 
    new Date(), new Date(), new Date(), new Date(), new Date()
];
const arts_events_end_dates = [
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), 
    new Date(), new Date(), new Date(), new Date(), new Date()
];


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
