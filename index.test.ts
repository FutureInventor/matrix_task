import { matrixZero } from "./index.ts"

describe("matrixZero", () => {
    test("it sets rows and columns containing zeros to zero (one zero case)", () => {
        const inputArray = [
            [1, 2, 3],
            [4, 0, 6],
            [7, 8, 9]
        ]
        const expectedOutput = [
            [1, 0, 3],
            [0, 0, 0],
            [7, 0, 9]
        ]
        expect(matrixZero(inputArray)).toEqual(expectedOutput)
    })

    test("it sets rows and columns containing zeros to zero (multiple zero case)", () => {
        const inputArray = [
            [1, 2, 0],
            [4, 0, 6],
            [0, 8, 9]
        ]
        const expectedOutput = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        expect(matrixZero(inputArray)).toEqual(expectedOutput)
    })

    test("it sets rows and columns containing zeros to zero (negative numbers occur case)", () => {
        const inputArray = [
            [-1, -2, 3],
            [4, 0, -6],
            [7, -8, -9]
        ]
        const expectedOutput = [
            [-1, 0, 3],
            [0, 0, 0],
            [7, 0, -9]
        ]
        expect(matrixZero(inputArray)).toEqual(expectedOutput)
    })

    test("it sets rows and columns containing zeros to zero (huge matrix case)", () => {
        const inputArray = [
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
        expect(matrixZero(inputArray)).toEqual(expectedOutput)
    })

    test("it does not change array when it does not contain zeros", () => {
        const inputArray = [
            [1, 2, 3],
            [4, 1, 6],
            [7, 8, 9]
        ]
        expect(matrixZero(inputArray)).toEqual(inputArray)
    })

    test("it does not change array when the array is made of empty arrays", () => {
        const inputArray = [[], []]
        expect(matrixZero(inputArray)).toEqual(inputArray)
    })
})