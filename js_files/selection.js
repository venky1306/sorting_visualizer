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

async function sort(){

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
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < count_of_bars; j++)
        if (parseInt(children[j].innerHTML) < parseInt(children[min_idx].innerHTML))
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swap(children[min_idx], children[i]);
        let temp = children[i].innerHTML;
        children[i].innerHTML = children[min_idx].innerHTML;
        children[min_idx].innerHTML = temp;
    }

    document.getElementById("insertion_sort").removeAttribute('disabled');
    document.getElementById("merge_sort").removeAttribute('disabled');
    document.getElementById("quick_sort").removeAttribute('disabled');
    document.getElementById("selection_sort").removeAttribute('disabled');
    document.getElementById("bubble_sort").removeAttribute('disabled');
    document.getElementById("new_array").removeAttribute('disabled');
    document.getElementById("arr_sz").removeAttribute('disabled');

}