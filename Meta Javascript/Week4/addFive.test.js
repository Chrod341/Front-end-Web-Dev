const {default:TestRunner} = require("jest-runner")
const addFive = require("../Week4/addFive");

TestRunner("returns the number plus 5", () => {
    expects(addFive(1)).toBe(6)
})