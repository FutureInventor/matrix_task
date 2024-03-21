type Matrix = Array<Array<number>>

export const matrixZero = (array: Matrix): Matrix => {
    const col_length: any = array.length
    if (!col_length) return array

    const row_length = array[0].length
    if (!row_length) return array

    const new_array = array.map(row => [...row])

    const zero_rows = new Set<number>()
    const zero_columns = new Set<number>()

    array.forEach((row, r_index) => {
        row.forEach((column, c_index) => {
            if (column === 0) {
                zero_rows.add(r_index)
                zero_columns.add(c_index)
            }
        })
    })

    new_array.forEach((row, r_index) => {
        if (zero_rows.has(r_index)) row = row.fill(0)
        else row.forEach((_, c_index) => {
            if (zero_columns.has(c_index)) row[c_index] = 0
        })
    })

    return new_array
}

(function showOutput() {
    try {
        const inputMatrix = JSON.parse(process.argv[2])
        if (!inputMatrix.length) {
            throw new Error("Array is empty. Try with: [[1,2,3],[0,5,6],[7,8,9]]");
        } else {
            console.log("Original array:")
            console.table(inputMatrix)
            console.log("Modified array:")
            console.table(matrixZero(inputMatrix))
        }
    }
    catch (error) {
        console.error(error)
    }
}())