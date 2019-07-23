/* Dropdown */

$("#catcon1").click( () => {
    anime.timeline({
        targets: "#catcon1 ul li",
        easing: "linear"
    })
    .add({
        duration: "0",
        padding: "5px"
    })
    .add({
        duration: "200",
        height: "17px",
    })
}, () => {
    anime.timeline({
        targets: "#catcon1 ul li",
        easing: "linear"
    })
    .add({
        duration: "200",
        height: "0px",
    })
    .add({
        duration: "0",
        padding: "0px"
    })
});

$("#catcon2").click( () =>{
    anime.timeline({
        targets: "#catcon2 ul li",
        easing: "linear"
    })
    .add({
        duration: "0",
        padding: "5px"
    })
    .add({
        duration: "200",
        height: "17px",
    })
}, () => {
    anime.timeline({
        targets: "#catcon2 ul li",
        easing: "linear"
    })
    .add({
        duration: "200",
        height: "0px",
    })
    .add({
        duration: "0",
        padding: "0px"
    })
})

$("#catcon3").click( () =>{
    anime.timeline({
        targets: "#catcon3 ul li",
        easing: "linear"
    })
    .add({
        duration: "0",
        padding: ["0px", "5px"]
    })
    .add({
        duration: "200",
        height: ["0px", "17px"],
    })
}, () => {
    anime.timeline({
        targets: "#catcon3 ul li",
        easing: "linear"
    })
    .add({
        duration: "200",
        height: ["17px", "0px"],
    })
    .add({
        duration: "0",
        padding: ["5px", "0px"]
    })
})