let arr = [22, 33, 66, 88, 99];

const binarySearch = (
    targetArray,
    targetElement,
    startIndex = 0,
    endIndex = targetArray.length - 1
) => {
    if (endIndex >= startIndex) {
        let middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);

        if (targetElement === targetArray[middleIndex]) {
            return middleIndex;
        }

        if (targetElement > targetArray[middleIndex]) {
            return binarySearch(
                targetArray,
                targetElement,
                middleIndex + 1,
                endIndex
            );
        }

        if (targetElement < targetArray[middleIndex]) {
            return binarySearch(
                targetArray,
                targetElement,
                startIndex,
                middleIndex - 1
            );
        }
    }

    return -1;
};

const binarySearch2 = (targetArray, targetElement) => {
    let startIndex = 0;
    let endIndex = targetArray.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
        if (targetElement < targetArray[middleIndex]) {
            endIndex = middleIndex - 1;
        } else if (targetElement > targetArray[middleIndex]) {
            startIndex = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
};

const binarySearch2D = (targetArray, targetElement) => {
    let startSubArrayIndex = 0;
    let endSubArrayIndex = targetArray.length - 1;

    while (startSubArrayIndex <= endSubArrayIndex) {
        let middleSubArrayIndex = Math.floor(
            (startSubArrayIndex + endSubArrayIndex) / 2
        );

        if (
            targetElement >
            targetArray[middleSubArrayIndex][
            targetArray[middleSubArrayIndex].length - 1
            ]
        ) {
            startSubArrayIndex = middleSubArrayIndex + 1;
        } else if (targetElement < targetArray[middleSubArrayIndex][0]) {
            endSubArrayIndex = middleSubArrayIndex - 1;
        } else {
            let result = binarySearch(
                targetArray[middleSubArrayIndex],
                targetElement
            );
            if (result !== -1) {
                return [middleSubArrayIndex, result];
            } else {
                return [-1, -1];
            }
        }
    }

    return [-1, -1];
};

console.log(binarySearch(arr, 88)); //test1
console.log(binarySearch2(arr, 88)); //test2
