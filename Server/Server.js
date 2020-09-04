const express = require("express")

const app = express()

const port = 3005

app.use(express.json())

let spaces = [
    {
        id: "a_1",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "a_2",
        className: "tan_space",
        hasChecker: {
            id: 1,
            className: "black_checker",
            isKing: false
        }
    },
    {
        id: "a_3",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "a_4",
        className: "tan_space",
        hasChecker: {}
    },
    {
        id: "a_5",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "a_6",
        className: "tan_space",
        hasChecker: {
            id: 2,
            className: "red_checker",
            isKing: false
        }
    },
    {
        id: "a_7",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "a_8",
        className: "tan_space",
        hasChecker: {
            id: 3,
            className: "red_checker",
            isKing: false
        }
    },
    {
        id: "b_1",
        className: "tan_space",
        hasChecker: {
            id: 4,
            className: "black_checker",
            isKing: false
        }
    },
    {
        id: "b_2",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "b_3",
        className: "tan_space",
        hasChecker: {
            id: 5,
            className: "black_checker",
            isKing: false
        }
    },
    {
        id: "b_4",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "b_5",
        className: "tan_space",
        hasChecker: {}
    },
    {
        id: "b_6",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "b_7",
        className: "tan_space",
        hasChecker: {
            id: 6,
            className: "red_checker",
            isKing: false
        }
    },
    {
        id: "b_8",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "c_1",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "c_2",
        className: "tan_space",
        hasChecker: {
            id: 7,
            className: "black_checker",
            isKing: false
        }
    },
    {
        id: "c_3",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "c_4",
        className: "tan_space",
        hasChecker: {}
    },
    {
        id: "c_5",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "c_6",
        className: "tan_space",
        hasChecker: {
            id: 8,
            className: "red_checker",
            isKing: false
        }
    },
    {
        id: "c_7",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "c_8",
        className: "tan_space",
        hasChecker: {
            id: 9,
            className: "red_checker",
            isKing: false
        }
    },
    {
        id: "d_1",
        className: "tan_space",
        hasChecker: {
            id: 10,
            className: "black_checker",
            isKing: false
        }
    },
    {
        id: "d_2",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "d_3",
        className: "tan_space",
        hasChecker: {
            id: 11,
            className: "black_checker",
            isKing: false
        }
    },
    {
        id: "d_4",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "d_5",
        className: "tan_space",
        hasChecker: {}
    },
    {
        id: "d_6",
        className: "white_space",
        hasChecker: {}
    },
    {
        id: "d_7",
        className: "tan_space",
        hasChecker: {
            id: 12,
            className: "red_checker"
        }
    },
    {
        id: "d_1",
        className: "tan_space",
        hasChecker: {}
    },
]

app.listen(port || 3005, () => console.log(`Listening on port ${port || 3005}`))