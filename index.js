const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const callback = () => {
    
}
const totalBatteries = batteryBatches.reduce((prev, element) => {
    return prev + element
}, 0);