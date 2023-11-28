const bubbleSort = (array) => {
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

    // Bubble sort algorithm with optimized loop conditions
    for (let i = 0; i < newArray.length; i += 1) {
        for (let j = 1; j < newArray.length - i; j += 1) {
            if (newArray[j - 1] > newArray[j]) {
                // Swap elements if they are in the wrong order
                newArray = swapElementUsingIndex(newArray, j - 1, j);
            }
        }
    }

    return newArray;
};
