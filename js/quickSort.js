/*
To swap array elements
 */
function swap(leftIndex, rightIndex) {
    var temp = $arr[leftIndex];
    $arr[leftIndex] = $arr[rightIndex];
    $arr[rightIndex] = temp;
}

/*
For quicksort
 */
function partition(left, right) {
    var pivot = $arr[Math.floor((right + left) / 2)][0];
    var i = left;
    var j = right;

    while (i <= j) {
        while ($arr[i][0] < pivot) {
            i++;
        }
        while ($arr[j][0] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(i, j);
            i++;
            j--;
        }
    }
    return i;
}

/*
Quicksort is used to keep array in order by time
 */
function quickSort(left, right) {
    var index;
    if ($arr.length > 1) {
        index = partition(left, right);
        if (left < index - 1) {
            quickSort(left, index - 1);
        }
        if (index < right) {
            quickSort(index, right);
        }
    }
}