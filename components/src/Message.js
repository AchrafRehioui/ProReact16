import React from "react";


// export function Message(props) {

//     if (props.name === "Bob") {

//         return <h4 className="bg-warning p-2">{props.greeting}, {props.name}</h4>
//     } else {

//         return <h4 className="bg-success text-white text-center p-2">
//             {props.greeting}, {props.name}
//         </h4>
//     }
// }

export function Message(props) {
    let classes;
    switch (props.name) {
        case "Bob":
            classes = "bg-warning p-2";
            break;
        case "Dora":
            classes = "bg-secondary text-white text-center p-2"
            break;
        default:
            classes = "bg-success text-white text-center p-2"
    }
    return <h4 className={classes}>
        {props.greeting}, {props.name}
    </h4>
}