function findMatching(drivers,name){
     
    let element = drivers.filter(function(element){
        return element.toLowerCase() === name.toLowerCase()
        
    })
    return element

    
}
function matchName(driver,name){
    let element = driver.filter(function(element){
        return element.name === name
    })
    return element
}

function fuzzyMatch(driver,name){
    let element = driver.filter(function(element){
        return element.substring(0,2) === name
        
    })
    return element
}
















// Code your solution here
