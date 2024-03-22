type Matrix = Array<Array<number>>

export const matrixZero = (matrix: Matrix): Matrix => {
    const col_length = matrix.length
    if (!col_length) return matrix

    const row_length = matrix[0].length
    if (!row_length) return matrix

    const new_matrix = matrix.map(row => [...row])

    const zero_rows = new Set<number>()
    const zero_columns = new Set<number>()

    matrix.forEach((row, r_index) => {
        if (row_length !== row.length)
            throw new Error("Every row should have the same length.")
        row.forEach((column, c_index) => {
            if (column === 0) {
                zero_rows.add(r_index)
                zero_columns.add(c_index)
            }
        })
    })

    new_matrix.forEach((row, r_index) => {
        if (zero_rows.has(r_index)) row = row.fill(0)
        else row.forEach((_, c_index) => {
            if (zero_columns.has(c_index)) row[c_index] = 0
        })
    })

    return new_matrix
}

(function() {
    try {
        if (!process.argv[2])
            throw new Error("You didn't provide any matrix. Try with: [[1,2,3],[0,5,6],[7,8,9]]")
        const inputMatrix = JSON.parse(process.argv[2])
        const outputMatrix = matrixZero(inputMatrix)
        console.log("Original matrix:")
        console.table(inputMatrix)
        console.log("Modified matrix:")
        console.table(outputMatrix)
    }
    catch (error) {
        console.error(error)
    }
}())