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

document.getElementById("bubble_sort").addEventListener("click", sort);

function sort(){
    bubble_sort_fun();
    // not changing the global value
    // console.log(stoping_var);
    stoping_var = false;
    // console.log(stoping_var);
}


async function bubble_sort_fun(){
    document.getElementById("insertion_sort").disabled = true;
    document.getElementById("merge_sort").disabled = true;
    document.getElementById("quick_sort").disabled = true;
    document.getElementById("selection_sort").disabled = true;
    document.getElementById("bubble_sort").disabled = true;
    document.getElementById("new_array").disabled = true;
    document.getElementById("arr_sz").disabled = true;
    

    let count_of_bars = document.getElementById("bars").childElementCount;
    let children = document.getElementById("bars").children;
    var i, j;

    for (i = 0; i < count_of_bars-1; i++){
        for (j = 0; j < count_of_bars-i-1; j++){
            children[j].style.background="red";
            children[j+1].style.background="red";
            if (parseInt(children[j].innerHTML) > parseInt(children[j+1].innerHTML)){
                let arr_size=document.querySelector("#bars_speed"); 
                let no_of_bar=arr_size.value;
                if(stoping_var) return;
                await sleep(170-no_of_bar);
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

    document.getElementById("insertion_sort").removeAttribute('disabled');
    document.getElementById("merge_sort").removeAttribute('disabled');
    document.getElementById("quick_sort").removeAttribute('disabled');
    document.getElementById("selection_sort").removeAttribute('disabled');
    document.getElementById("bubble_sort").removeAttribute('disabled');
    document.getElementById("new_array").removeAttribute('disabled');
    document.getElementById("arr_sz").removeAttribute('disabled');
    
    

}