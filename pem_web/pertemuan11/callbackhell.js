function fetchData1(callback){
    setTimeout(()=>{
        console.log("Fetch data 1...");
        callback("Data1");
    },1000);
}
function fetchData2(data1, callback2) {
    setTimeout(()=>{
        console.log(`Fetch data 2...${data1}`);
        callback2("Data2");
    },1000);
}
function fetchData3(data2, callback3){
    setTimeout(()=>{
        console.log(`Fetch data 3...${data2}`);
        callback3("Data3");
    },1000);
}
// Memanggil Callback  hell
fetchData1((data)=> {
    fetchData2(data, (data1)=> {
        fetchData3(data1, (data2)=> {
            console.log(`Final Data: ${data2}`);
        });
    });
});