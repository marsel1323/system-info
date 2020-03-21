const si = require('systeminformation');



// return object with cpu temperature (if supported)
// {
//    main, // main temperature (avg)
//    cores, // array of temperatures
//    max, // max temperature
// }
const cpuTemperature = async () => {
    return si.cpuTemperature()
        .then(data => console.log(data))
        .catch(error => console.error(error));
};

const cpuCores = async () => {
    return si.cpu()
        .then(data => console.log(data))
        .catch(error => console.error(error));
};
// used ram
const ramUsedMemory = async () => {
    return si.cpuTemperature()
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
// total ram

// used memory

// total memory

// cpu speed
