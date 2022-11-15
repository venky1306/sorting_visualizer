function swap(el1,el2){

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

}

let count_of_bars = document.getElementById("bars").childElementCount;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("bubble_sort").addEventListener("click", sort);

async function sort(){
    let children = document.getElementById("bars").children;
    // console.log(typeof(children[2].innerHTML));
    // console.log(count_of_bars);
    var i, j;
    for (i = 0; i < count_of_bars-1; i++){
        for (j = 0; j < count_of_bars-i-1; j++){
            children[j].style.background="red";
            children[j+1].style.background="red";
            if (parseInt(children[j].innerHTML) > parseInt(children[j+1].innerHTML)){
                await sleep(75);
                swap(children[j], children[j+1]);
                let temp = children[j].innerHTML;
                children[j].innerHTML = children[j+1].innerHTML;
                children[j+1].innerHTML = temp;
            }
            children[j].style.background="blue";
            children[j+1].style.background="blue";
        }
        children[count_of_bars-1-i].style.background = "green";
    }
    children[0].style.background = "green";
}