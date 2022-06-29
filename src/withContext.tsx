import React from 'react'
import { useAnimatedScale, useDimension } from './hooks'

const withContext = (MainComponent : React.FC<any>) => {
    return (props : any) => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const mainProps = {
            w, 
            h, 
            scale, 
            onClick 
        }
        const newProps = {
            ...props, 
            ...mainProps
        }
        return (<MainComponent {...newProps}></MainComponent>)
    }
}

export default withContext 