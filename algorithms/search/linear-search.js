const arr = ["A", "P", "B", "Z", "S", "T"];

const linearSearch = (targetArray, targetElement) => {
    for (
        let currentIndex = 0;
        currentIndex < targetArray.length;
        currentIndex += 1
    ) {
        if (targetElement === targetArray[currentIndex]) {
            return currentIndex;
        }
    }
    return -1;
};

const linearSearchFor2DArray = (targetArray, targetElement) => {
    for (
        let currentOuterIndex = 0;
        currentOuterIndex < targetArray.length;
        currentOuterIndex += 1
    ) {
        for (
            let currentInnerIndex = 0;
            currentInnerIndex < targetArray[currentOuterIndex].length;
            currentInnerIndex += 1
        ) {
            if (
                targetElement ===
                targetArray[currentOuterIndex][currentInnerIndex]
            ) {
                return {
                    outerIndex: currentOuterIndex,
                    innerIndex: currentInnerIndex,
                };
            }
        }
    }
    return {
        outerIndex: -1,
        innerIndex: -1,
    };
};
