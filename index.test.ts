import { matrixZero } from "./index.ts"

describe("matrixZero", () => {
    test("it sets rows and columns containing zeros to zero (one zero case)", () => {
        const inputMatrix = [
            [1, 2, 3],
            [4, 0, 6],
            [7, 8, 9]
        ]
        const expectedOutput = [
            [1, 0, 3],
            [0, 0, 0],
            [7, 0, 9]
        ]
        expect(matrixZero(inputMatrix)).toEqual(expectedOutput)
    })

    test("it sets rows and columns containing zeros to zero (multiple zero case)", () => {
        const inputMatrix = [
            [1, 2, 0],
            [4, 0, 6],
            [0, 8, 9]
        ]
        const expectedOutput = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        expect(matrixZero(inputMatrix)).toEqual(expectedOutput)
    })

    test("it sets rows and columns containing zeros to zero (negative numbers occur case)", () => {
        const inputMatrix = [
            [-1, -2, 3],
            [4, 0, -6],
            [7, -8, -9]
        ]
        const expectedOutput = [
            [-1, 0, 3],
            [0, 0, 0],
            [7, 0, -9]
        ]
        expect(matrixZero(inputMatrix)).toEqual(expectedOutput)
    })

    test("it sets rows and columns containing zeros to zero (huge matrix case)", () => {
        const inputMatrix = [
            [ 0, 1, 0, 1, 0, 1, 0, 1],
            [ 1, 1, 1, 0, 0, 1, 1, 0],
            [ 0, 1, 1, 0, 1, 1, 1, 1],
            [ 1, 1, 1, 1, 1, 1, 1, 1],
            [ 0, 1, 1, 0, 1, 1, 1, 1],
            [ 0, 1, 1, 0, 1, 1, 1, 1],
            [ 0, 1, 1, 0, 1, 1, 1, 1],
        ]
        const expectedOutput = [
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 1, 0, 0, 0, 1, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
        ]
        expect(matrixZero(inputMatrix)).toEqual(expectedOutput)
    })

    test("it does not change matrix when it does not contain zeros", () => {
        const inputMatrix = [
            [1, 2, 3],
            [4, 1, 6],
            [7, 8, 9]
        ]
        expect(matrixZero(inputMatrix)).toEqual(inputMatrix)
    })

    test("it does not change matrix when the matrix is made of empty matrices", () => {
        const inputMatrix = [[], []]
        expect(matrixZero(inputMatrix)).toEqual(inputMatrix)
    })

    test("it throws an error when the matrix's rows have different length", () => {
        const inputMatrix = [[1,2,3],[0,5],[6,7]]
        expect(() => matrixZero(inputMatrix)).toThrow("Every row should have the same length.")
    })
})