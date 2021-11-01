
export default (s) => (
    s.split("").reduce(
        (acc, letter, i) => (
            i === 0
                ? [...acc, letter.toUpperCase()]
                : letter === letter.toUpperCase()
                    ? [...acc, " ", letter]
                    : [...acc, letter]
        ), []
    ).join("")
)