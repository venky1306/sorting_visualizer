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

document.getElementById("selection_sort").addEventListener("click", sort);

function sort(){
    sort1();
    stoping_var = false;
}

async function sort1(){

    document.getElementById("insertion_sort").disabled = true;
    document.getElementById("merge_sort").disabled = true;
    document.getElementById("quick_sort").disabled = true;
    document.getElementById("selection_sort").disabled = true;
    document.getElementById("bubble_sort").disabled = true;
    document.getElementById("new_array").disabled = true;
    document.getElementById("arr_sz").disabled = true;
    

    let count_of_bars = document.getElementById("bars").childElementCount;
    let children = document.getElementById("bars").children;

    var i, j, min_idx;
    for (i = 0; i < count_of_bars-1; i++)
    {
        let no_of_bar=document.querySelector("#bars_speed").value;
        // Find the minimum element in unsorted array
        min_idx = i;
        children[i].style.background="red";
        if(stoping_var) return;
        await sleep(160-no_of_bar);
        for (j = i + 1; j < count_of_bars; j++){
            children[j].style.background="red";
            await sleep(160-no_of_bar);
            if (parseInt(children[j].innerHTML) < parseInt(children[min_idx].innerHTML)){
                if(min_idx!=i)
                    children[min_idx].style.background="blue";
                children[j].style.background="red";
                no_of_bar=document.querySelector("#bars_speed").value;
                if(stoping_var) return;
                await sleep(160-no_of_bar);
                min_idx = j;
            }
            else{
                no_of_bar=document.querySelector("#bars_speed").value;
                if(stoping_var) return;
                await sleep(200-no_of_bar);
                children[j].style.background="blue";
            }
                
        }
        // Swap the found minimum element with the first element
        no_of_bar=document.querySelector("#bars_speed").value;
        if(stoping_var) return;
        await sleep(160-no_of_bar);
        swap(children[min_idx], children[i]);
        let temp = children[i].innerHTML;
        children[i].innerHTML = children[min_idx].innerHTML;
        children[min_idx].innerHTML = temp;
        
        children[min_idx].style.background="blue";
        children[i].style.background="green";
        
    }
    children[i].style.background="green";

    document.getElementById("insertion_sort").removeAttribute('disabled');
    document.getElementById("merge_sort").removeAttribute('disabled');
    document.getElementById("quick_sort").removeAttribute('disabled');
    document.getElementById("selection_sort").removeAttribute('disabled');
    document.getElementById("bubble_sort").removeAttribute('disabled');
    document.getElementById("new_array").removeAttribute('disabled');
    document.getElementById("arr_sz").removeAttribute('disabled');

}