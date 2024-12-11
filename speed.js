function speed(){
    let speed = parseInt(prompt ("Enter car speed"));
    const speedLimit = 70;
    const demeritPoints = Math.floor ((speed - speedLimit)/5);
    const maxDemeritPoints = 12;
    if (speed <=speedLimit ){
        return "Ok"
    }
    else if (speed> speedLimit && demeritPoints <= maxDemeritPoints){
        return `${demeritPoints}`
    }
    else if (demeritPoints > maxDemeritPoints){
        return "license suspended"
    }
}

