import {useState, useEffect, CSSProperties} from 'react'

const scGap : number = 0.01  
const delay : number = 20

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })    
    return {
        w, 
        h
    }
}

export const sinify : Function = (scale : number) : number => Math.sin(scale * Math.PI)

export const useStyle  = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const x = w / 2
    const y = h / 2
    const size : number = Math.min(w, h) / 10
    const lineSize : number = Math.min(w, h) / 90 
    const sf : number = sinify(scale)
    return {
        parentStyle() : CSSProperties {
            return {
                position, 
                left : `${x}px`,
                top: `${y}px`
            }
        },
        blockStyle() : CSSProperties {
            const left = `${-size / 2 + size * 0.5 * sf}px`
            const top = `${-size / 2}px`
            const width = `${size * (1 - sf)}px`
            const height = `${size}px`
            return {
                position, 
                left, 
                top,
                background : 'indigo',
                width, 
                height 
            }
        },

        lineStyle() : CSSProperties {
            const left = `${-size * 0.5 * sf}px`
            const top = `${-lineSize / 2 + 2 * size}px`
            const width = `${size * sf}px`
            const height = `${lineSize}px`
            const background = `indigo`
            return {
                left, 
                top, 
                width, 
                position, 
                height, 
                background 
            }
        }
    }
}