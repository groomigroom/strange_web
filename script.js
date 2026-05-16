let one_one = document.querySelector(".one_one");
let color_arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];




one_one.addEventListener("mouseenter", () => {
    let ran_col_one = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_two = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_three = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_four = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_five = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_six = color_arr[Math.floor(Math.random() * color_arr.length)];
    one_one.style.backgroundColor = `#${ran_col_one}${ran_col_two}${ran_col_three}${ran_col_four}${ran_col_five}${ran_col_six}`;
});

one_one.addEventListener("mouseleave", () => {
    one_one.style.backgroundColor = "#ffffff";
});

let one_two = document.querySelector(".one_two");

setInterval(() => {
    let ran_col_seven = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_eight = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_nine = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_ten = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_eleven = color_arr[Math.floor(Math.random() * color_arr.length)];
    let ran_col_twelve = color_arr[Math.floor(Math.random() * color_arr.length)];
    one_two.style.backgroundColor = `#${ran_col_seven}${ran_col_eight}${ran_col_nine}${ran_col_ten}${ran_col_eleven}${ran_col_twelve}`;
}, 2500);

//two

let two_one = document.querySelector(".two_one");
let two_two = document.querySelector(".two_two");

two_one.addEventListener("mouseenter", () => {
    two_one.style.left = "70%";
    two_two.style.left = "70%";
});

two_one.addEventListener("mouseleave", () => {
    two_one.style.left = "50%";
    two_two.style.left = "50%";
});
