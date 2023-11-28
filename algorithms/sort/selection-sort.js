const selectionSort = (array) => {
    // Create a copy of the input array
    const newArray = [...array];

    // Function to swap elements in the array using indices
    const swapElementUsingIndex = (array, firstIndex, secondIndex) => {
        let newArray = [...array];
        let temp = newArray[firstIndex];
        newArray[firstIndex] = newArray[secondIndex];
        newArray[secondIndex] = temp;
        return newArray;
    };

    // Function to find the index of the maximum element in a given range
    const getMaxElementIndex = (array, startIndex, lastIndex) => {
        let maxIndex = startIndex;
        for (
            let currentIndex = startIndex;
            currentIndex <= lastIndex;
            currentIndex += 1
        ) {
            if (array[maxIndex] < array[currentIndex]) {
                maxIndex = currentIndex;
            }
        }
        return maxIndex;
    };

    // Selection sort algorithm
    for (let index = 0; index < newArray.length; index++) {
        let startIndex = 0;
        let lastIndex = newArray.length - index - 1;
        let maxIndex = getMaxElementIndex(newArray, startIndex, lastIndex);

        // Swap the maximum element with the last unsorted element
        newArray = swapElementUsingIndex(newArray, maxIndex, lastIndex);
    }

    return newArray;
};
