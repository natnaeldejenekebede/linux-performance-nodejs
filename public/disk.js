// const usage1=[]

// const time=[]
// const time1=[]
// const usage2=[]
// async function fetchData() {
//     try {
//         console.log("hello")
//       const response = await fetch('/disk');
//       console.log("hello1")
      
//       if (!response.ok) {
//         console.log("hello2")
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await response.json();
//       console.log("hello3")
//       // Display or manipulate the data as needed
//     //   console.log(data.free);
//     //   console.log(typeof(data))
      
//       const ob =JSON.stringify(data,null,2)
  
//       // console.log(ob)
//       // console.log(typeof(ob))
//       const parased=JSON.parse(ob)
//     console.log("hello4")
//       document.getElementById("diskusage").innerHTML =parased;

  
//       // console.log(parased.time);
//       // console.log(typeof(parased))
      
//       // return JSON.parse(ob).totalusage
//       // if(arr.lenght<5){
  
//       //   arr.push({time:JSON.parse(ob).time,totol:JSON.parse(ob).totalusage})
  
//       // }
//       // else if(arr.length>=5){
//       //   arr.shift()
//       //   arr.push({time:JSON.parse(ob).time,totol:JSON.parse(ob).totalusage})
  
  
//       // }
//       // console.log(arr[0])
//       // console.log(arr)
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   }
//   fetchData()
//   // Call the function to fetch data
//   setInterval(fetchData,2000)

async function fetchData1() {
  try {
    // Fetch data from the backend
    const response = await fetch('/getip');
    
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();
    const ob =JSON.stringify(data,null,2)

    // console.log(ob)
    // console.log(typeof(ob))
    const parased=JSON.parse(ob)
    // Use the data in the frontend
    // console.log(response.body)
    // console.log(parased.ip)
    return parased.ip

    // You can update your HTML or perform other actions with the data
  } catch (error) {
    console.error('Error0 fetching data:', error);
  }
}

const usage1=[]

const time=[]
const time1=[]
const usage2=[]
async function fetchData() {
    try {
      const ip=await fetchData1()
        console.log("hello")
      const response = await fetch(`http://${ip}:5000/disk`);
      console.log("hello1")
      
      if (!response.ok) {
        console.log("hello2")
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log("hello3")
      // Display or manipulate the data as needed
    //   console.log(data.free);
    //   console.log(typeof(data))
      
      const ob =JSON.stringify(data,null,2)
  
      // console.log(ob)
      // console.log(typeof(ob))
      const parased=JSON.parse(ob)
    console.log("hello4")
      document.getElementById("read").innerHTML =parased.read;
      document.getElementById("write").innerHTML =parased.write;
      document.getElementById("time").innerHTML =parased.time;

      if(usage1.length<10){
        usage1.push(parseInt(parased.write).toFixed())
        time.push(parased.time)
      }
      else if(usage1.length>=10){
        usage1.shift()
        time.shift()
        usage1.push( parseInt(parased.write).toFixed())
        time.push(parased.time)
      }
      console.log(usage1)
      console.log(time)
    
    const xvalues = time;
    
    const yvalues = usage1;
    
    const y1values = usage2;
    if(usage2.length<10){
    usage2.push(parseInt(parased.read).toFixed())
    time1.push(parased.time)
    }
    else if(usage2.length>=10){
    usage2.shift()
    time1.shift()
    usage2.push( parseInt(parased.read).toFixed())
    time1.push(parased.time)
    }
    
    console.log(usage2)
      console.log(time1)
    new Chart("myChart", {
    type: "line",
    data: {
    labels: xvalues,
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(255,0,0,0.5)",
      borderColor: "rgba(255,0,0,1)",
      data: yvalues
    },{
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,0.5)",
      borderColor: "rgba(0,0,255,1)",
      data: y1values
    }]
    },
    options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:3000}}],
    }
    }
    });
      // console.log(parased.time);
      // console.log(typeof(parased))
      
      // return JSON.parse(ob).totalusage
      // if(arr.lenght<5){
  
      //   arr.push({time:JSON.parse(ob).time,totol:JSON.parse(ob).totalusage})
  
      // }
      // else if(arr.length>=5){
      //   arr.shift()
      //   arr.push({time:JSON.parse(ob).time,totol:JSON.parse(ob).totalusage})
  
  
      // }
      // console.log(arr[0])
      // console.log(arr)
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  fetchData()
  // Call the function to fetch data
  setInterval(fetchData,5000)