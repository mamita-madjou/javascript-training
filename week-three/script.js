/*function validePhoneNumber(Number){
    return number.startswith('6');
}*/
/*function isMtn(number){
    const initialnumber = number.slice(1,3);
    console.log(initialnumber, 'initial number')
    let mtnInitials = ['50','51','52','53','54','67','68'];

    if(mtnInitials.includes(initialnumber)) {
        return 'MTN number'
    } else {
        return 'Not MTN'
    }
}

    for (initial of mtnInitials) {
        if (initial == initialnumber) {
            return 'The number is MTN'
        } 
        // console.log(initial)
    }
}*/
/*function isorange(number){
    const initialnumber = number.slice(1,3);
    console.log(initialnumber, 'initial number')
    let orangeInitials = ['55','56','57','58','59','69'];

    if(orangeInitials.includes(initialnumber)) {
        return 'orange number'
    } else {
        return 'Not orange'
    }
}
*/
let orangeInitials = ['55','56','57','58','59','96'];
let mtnInitials = ['50','51','52','53','54','67','68'];
let camtelInitials = ['62']

function networkDetector(number) {
    const prefixnumber = number.slice(1,3);
    if(mtnInitials.includes(prefixnumber )) {
        return 'mtn number'
    } else if(camtelInitials.includes(prefixnumber )) {
        return 'camtel number'
    } 
     else if(orangeInitials.includes(prefixnumber )) {
        return 'Orange number'
     }
    else {
        return 'Invalid number'
    }
}


console.log(networkDetector('602398453'))

/*function  IsOrange(number){
    const initialnumber = number.slice(1,3);
    return ['55','56','57','58','59','69'];
}
function  IsCamtel(number){
    const initialnumber = number.slice(1,3);
    return ['62'];
}
function  IsNexttel(number){
    const initialnumber = number.slice(1,3);
    return ['66'];
}

function PrintNetwork(number){
    if(IsMtn = number){
        return "the number is MTN";
    }
    if(IsOrange = number){
        return "the number is ORANGE";
    }
    if(IsCamtel = number){
        return "the number is CAMTEL";
    }
    if(IsNexttel = number){
        return "the number is NEXTTEL";
    }
}
// console.log(PrintNetwork(696349845))*/

// console.log(isorange('654490031'))


const name = 'Alex'
const number = ['1','2','3','4','5']
 const num  = number.slice(1,3);  // 1,2

// console.log(num)



