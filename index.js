function saturdayFun(x = "roller-skate") {
    return (`This Saturday, I want to ${x}!`)
}

const mondayWork = function(x = "go to the office") {
    return (`This Monday, I will ${x}.`)
}

function wrapAdjective(x = "*") {
    return function(a = "special") {
        return `You are ${x}${a}${x}!`
    }
}
