function swap(el1,el2){

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let children = document.getElementById("bars").children;
document.getElementById("quick_sort").addEventListener("click", sort);


function partition(low, high) {
    let pivot = parseInt(children[high].innerHTML);
    let i = (low - 1);
  
    for (let j = low; j <= high - 1; j++) {
        if (parseInt(children[j].innerHTML) < pivot) {
            i++;
            swap(children[i], children[j]);
            let temp = children[j].innerHTML;
            children[j].innerHTML = children[i].innerHTML;
            children[i].innerHTML = temp;
        }
    }
    swap(children[i + 1], children[high]);
    let temp = children[high].innerHTML;
    children[high].innerHTML = children[i+1].innerHTML;
    children[i+1].innerHTML = temp;
    return (i + 1);
}

function qsort(low, high){
    // console.log(low);
    if (low < high) {
        let pi = partition(low, high);
        qsort(low, pi - 1);
        qsort(pi + 1, high);
    }
}

function sort(){
    let count_of_bars = document.getElementById("bars").childElementCount;
    qsort(0,count_of_bars-1);
}