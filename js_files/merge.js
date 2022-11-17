function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("merge_sort").addEventListener("click", sort);

async function sort(){
    let count_of_bars = document.getElementById("bars").childElementCount;
    mergeSort(0, count_of_bars-1);
}

function merge(l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
    var L1 = new Array(n1);
    var L2 = new Array(n1);
    var R1 = new Array(n2);
    var R2 = new Array(n2);
    for (var i = 0; i < n1; i++){
        L1[i] = window.getComputedStyle(children[l+i]).getPropertyValue("height");
        L2[i] = children[l + i].innerHTML;
    }
    for (var j = 0; j < n2; j++){
        R1[j] = window.getComputedStyle(children[m + 1 + j]).getPropertyValue("height");
        R2[j] = children[m + 1 + j].innerHTML;
    }
    var i = 0;
    var j = 0;
    var k = l;
 
    while (i < n1 && j < n2) {
        if (parseInt(L2[i]) <= parseInt(R2[j])) {
            children[k].style.height  = L1[i];
            children[k].innerHTML = L2[i];
            i++;
        }
        else {
            children[k].style.height  = R1[j];
            children[k].innerHTML = R2[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        children[k].style.height  = L1[i];
        children[k].innerHTML = L2[i];
        i++;
        k++;
    }
 
    while (j < n2) {
        children[k].style.height  = R1[j];
        children[k].innerHTML = R2[j];
        j++;
        k++;
    }
}
 
function mergeSort(l, r){
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(l,m);
    mergeSort(m+1,r);
    merge(l,m,r);
}