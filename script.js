// const getResult = () => {
//   setTimeout(() => {
//     console.log("Collecting the Result from Api or database");
//     let Std_roll = [101, 102, 103, 104, 105];
//     console.log(Std_roll);

//     setTimeout(
//       (Std_roll) => {
//         const persondata = {
//           name: "john",
//           dob: "21july",
//         };
//         console.log(
//           `Student roll no is ${Std_roll}.Name of the Student is ${persondata.name}& Dob is ${persondata.dob}`
//         );

//         setTimeout(
//           (name) => {
//             persondata.gender = "male";
//             console.log(
//               `Student roll no is ${Std_roll}.Name of the Student is ${persondata.name}& Dob is ${persondata.dob} .Gender is ${persondata.gender}`
//             );

//             setTimeout(() => {
//               console.log("Result is collected");
//             }, 3000);
//           },
//           3000,
//           persondata.name
//         );
//       },
//       3000,
//       Std_roll[2]
//     );
//   }, 3000);
// };

// getResult();

// // callback hell=>ss
var h = document.getElementById("head");
const order = () =>{
    setTimeout(()=>{
        h.innerHTML="Created Pizza base";
        console.log("Created Pizza base");
        setTimeout(()=>{
            h.innerHTML="Pizza Base ready";
            console.log("Pizza Base ready");
            setTimeout(()=>{
                h.innerHTML="Added sauce";
                console.log("Added sauce");
                setTimeout(()=>{
                    h.innerHTML="Added toppings";
                    console.log("Added toppings");
                    setTimeout(() => {
                        h.innerHTML="pizza Baked";
                        console.log("pizza Baked");
                        setTimeout(()=>{
                            console.log("pizza prepared");
                            h.innerHTML="pizza prepared";
                        },500);
                    }, 4000);
                },1000);
            },1000);
        },2000);
    },3000);
}
order();