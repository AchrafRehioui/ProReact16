import React from "react";


// function createInnerElements(names) {
//     // let arrayElems = [];
//     // for (let i = 0; i < names.length; i++) {
//     //     arrayElems.push(
//     //         <div>
//     //             {`${names[i]} contains ${names[i].length} letters`}
//     //         </div>
//     //     )
//     // }
//     // return arrayElems;
//     return names.map(name =>
//         <div>
//             {`${name} contains ${name.length} letters`}
//         </div>
//     )
// }

export function Summary(props) {

    // <h4 className="bg-info text-white text-center p-2">
    //     {/* { createInnerElements(props.names)} */}
    //     { props.names.map(name =>
    //         <div>
    //             {`${name} contains ${name.length} letters`}
    //         </div>
    //     )
    //     }
    // </h4>
    // return (<>
    //     <td>{props.index + 1} </td>
    //     <td>{props.name} </td>
    //     <td>{props.name.length} </td>
    // </>
    // )


    //attempting changing props  giving error cannot assign to read only property
    // props.name = `Name: ${props.name}`;

    if (props.name.length >= 4) {
        return <React.Fragment>
            <td>{props.index + 1} </td>
            <td>{props.name} </td>
            <td>{props.name.length} </td>
        </React.Fragment>
    } else {
        return null;
    }
}