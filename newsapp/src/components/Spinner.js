import { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component{
    render()
    {
        return(
            <div className="text-center">
                <img src={loading} alt="Loading" width="40px" height="40px"/>
            </div>
        )
    }
}