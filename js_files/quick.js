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

var speed = document.querySelector("#bars_speed").value;



async function partition(low, high) {
    let pivot = parseInt(children[high].innerHTML);
    let i = (low - 1);
  
    for (let j = low; j <= high - 1; j++) {
        if (parseInt(children[j].innerHTML) < pivot) {
            i++;
            if(stoping_var) return;
            await sleep(160-no_of_bar);
            swap(children[i], children[j]);
            let temp = children[j].innerHTML;
            children[j].innerHTML = children[i].innerHTML;
            children[i].innerHTML = temp;
            await sleep(160-no_of_bar)
        }
    }
    if(stoping_var) return;
    no_of_bar=document.querySelector("#bars_speed").value;
    
    swap(children[i + 1], children[high]);
    let temp = children[high].innerHTML;
    children[high].innerHTML = children[i+1].innerHTML;
    children[i+1].innerHTML = temp;
    await sleep(160-no_of_bar);
    return (i + 1);
}


async function qsort(low, high){
    // console.log(low);
    if (low < high) {
        let pi = await partition(low, high);
        await qsort(low, pi - 1);
        if(stoping_var) return;
        await qsort(pi + 1, high);
    }
}

function sort(){

    document.getElementById("insertion_sort").disabled = true;
    document.getElementById("merge_sort").disabled = true;
    document.getElementById("quick_sort").disabled = true;
    document.getElementById("selection_sort").disabled = true;
    document.getElementById("bubble_sort").disabled = true;
    document.getElementById("new_array").disabled = true;
    document.getElementById("arr_sz").disabled = true;

    let count_of_bars = document.getElementById("bars").childElementCount;
    qsort(0,count_of_bars-1);
    stoping_var = false;

    document.getElementById("insertion_sort").removeAttribute('disabled');
    document.getElementById("merge_sort").removeAttribute('disabled');
    document.getElementById("quick_sort").removeAttribute('disabled');
    document.getElementById("selection_sort").removeAttribute('disabled');
    document.getElementById("bubble_sort").removeAttribute('disabled');
    document.getElementById("new_array").removeAttribute('disabled');
    document.getElementById("arr_sz").removeAttribute('disabled');
}