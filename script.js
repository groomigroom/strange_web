let box = document.querySelector("div");
let color_arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];




box.addEventListener("mouseenter", () => {
    let ran_col_one = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_two = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_three = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_four = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_five = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_six = color_arr[Math.floor(Math.random() * color_arr.length)];
    box.style.backgroundColor = `#${ran_col_one}${ran_col_two}${ran_col_three}${ran_col_four}${ran_col_five}${ran_col_six}`;
});

box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "#ffffff";
});