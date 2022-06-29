import React from 'react'
import { useStyle } from './hooks'
import withContext from './withContext'

interface LESProps  {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function  
} 
const LineExpandSquare = (props : LESProps) => {
    const {blockStyle, parentStyle, lineStyle} = useStyle(props.w, props.h, props.scale)
    return (<div style = {parentStyle()}>
        <div style = {blockStyle()} onClick = {() => props.onClick()}></div>
        <div style = {lineStyle()}></div>
    </div>)
}

export default withContext(LineExpandSquare)