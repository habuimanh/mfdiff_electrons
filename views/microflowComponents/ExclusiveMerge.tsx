/// <reference path="../../typings/index.d.ts" /> 
import * as React from "react";
import { microflow } from "./interfaces";
export class ExclusiveMerge extends React.Component<{ data: microflow.IExclusiveMerge, style?: any }, {}>{
    render() {
        var style = {
            top: this.props.data.geometry.top,
            left: this.props.data.geometry.left,
            width: this.props.data.geometry.width,
            height: this.props.data.geometry.height,
            position: "absolute"
        }
        for (var a in this.props.style) {
            style[a] = this.props.style[a];
        }
        var geometry = {
            p1: (style.width / 2).toString() + ",0",
            p2: (style.width).toString() + "," + (style.height / 2).toString(),
            p3: (style.width / 2).toString() + "," + (style.height).toString(),
            p4: "0," + (style.height / 2).toString()
        }
        let polygon1: string = "";
        for (var a in geometry) {
            polygon1 += geometry[a] + " ";
        }
        return (
            <div className="microflow-wrapper" style={style}>
                <svg width={this.props.data.geometry.width + 2} height={this.props.data.geometry.height + 2}>
                    <linearGradient id="gradient-mx-mf-exclusivemerge" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0" style={{ "stopColor": "#ffffff" }}></stop>
                        <stop offset="1" style={{ "stopColor": "#a1403d" }}></stop>
                    </linearGradient>
                    <g transform="translate(1, 1)">
                        <polygon points={polygon1} stroke="black" className="mx-mf-exclusivesplit" fill="url(#gradient-mx-mf-exclusivemerge)" />
                    </g>
                </svg>
            </div>
        )
    }
}