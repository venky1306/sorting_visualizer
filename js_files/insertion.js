function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("insertion_sort").addEventListener("click", sort);

async function sort(){
    let children = document.getElementById("bars").children;
    var i, j, key1, key2;
    // console.log(count_of_bars); -> number of bars to sort

    for (i = 1; i < count_of_bars; i++)
    { 
        children[i].style.background="red";
        key1 = children[i].innerHTML; // -> string
        // console.log(typeof window.getComputedStyle(children[i]).getPropertyValue("height")); -> string
        key2 = window.getComputedStyle(children[i]).getPropertyValue("height");
        j = i - 1; 
   
        while (j >= 0 && (parseInt(children[j].innerHTML) > parseInt(key1)))
        { 
            await sleep(100);
            children[j+1].style.background="blue";
            children[j+1].style.height  = window.getComputedStyle(children[j]).getPropertyValue("height");
            children[j+1].innerHTML = children[j].innerHTML;
            j = j - 1; 
            children[j+1].style.background="red";
        } 
        children[j+1].style.background="blue"
        children[j+1].style.height = key2;
        children[j+1].innerHTML = key1;
        children[i].style.background="blue";
    } 


}