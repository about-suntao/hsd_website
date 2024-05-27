import React, { useEffect, Children, useRef, useState } from 'react';
import EventBus from '../EventBus';

interface IProps {
    readonly direction?: string,
    readonly speed?: number,
    readonly children?: any,
}
// direction  
// verticalUp 垂直往上滚动
// verticalDown 垂直往下滚动
// crosswiseLeft 横向往左滚动
// crosswiseRight 横向往右边滚动



// 无缝滚动组件
export default function Scroll(props: IProps) {
    // 设置默认值
    const { direction = 'crosswiseLeft', speed = 2, children } = props
    const scroll: any = useRef(null)
    const scrollSource: any = useRef(null)
    const scrollClone: any = useRef(null)
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        // 更新窗口宽度的函数
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        // 监听窗口大小变化
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // 不同屏幕像素分布比
        let devicePixelRatio = speed / window.devicePixelRatio
        let pause = true
        let Animation: any = null;
        let scrollSpeed: number = 0;
        let copySpeed: number = 0;
        // 滚动
        const playScroll = () => {
            pause = true
        }
        // 暂停
        const pauseScroll = () => {
            pause = false
        }

        EventBus.on('pause', pauseScroll)
        EventBus.on('start', playScroll)

        const verticalUp = () => {
            const scrollHeight = scrollSource.current ? scrollSource.current.scrollHeight : null
            scrollSpeed += devicePixelRatio
            copySpeed += devicePixelRatio
            if (scrollSpeed >= scrollHeight) {
                scrollSpeed = -scrollHeight
            }
            if (copySpeed >= scrollHeight * 2) {
                copySpeed = 0
            }
            if (scrollSource.current && scrollClone.current) {
                scrollSource.current.style.transform = `translateY(${-scrollSpeed}px)`
                scrollClone.current.style.transform = `translateY(${-copySpeed}px)`
            }
        }

        const crosswiseLeft = () => {
            const scrollWidth = scrollSource.current ? scrollSource.current.scrollWidth : null
            scrollSpeed += devicePixelRatio
            copySpeed += devicePixelRatio
            if (scrollSpeed >= scrollWidth) {
                scrollSpeed = -scrollWidth
            }
            if (copySpeed >= scrollWidth * 2) {
                copySpeed = 0
            }
            if (scrollSource.current && scrollClone.current) {
                scrollSource.current.style.transform = `translateX(${-scrollSpeed}px)`
                scrollClone.current.style.transform = `translateX(${-copySpeed}px)`
            }
        }

        const crosswiseRight = () => {
            const scrollWidth = scrollSource.current ? scrollSource.current.scrollWidth : null
            scrollSpeed -= devicePixelRatio
            copySpeed -= devicePixelRatio
            if (scrollSpeed <= -scrollWidth) {
                scrollSpeed = scrollWidth
            }
            if (copySpeed <= 0) {
                copySpeed = scrollWidth * 2
            }
            if (scrollSource.current && scrollClone.current) {
                scrollSource.current.style.transform = `translateX(${-scrollSpeed}px)`
                scrollClone.current.style.transform = `translateX(${-copySpeed}px)`
            }
        }

        function onAnimation() {
            if (pause) {
                // 垂直往上滚动
                if (direction === 'verticalUp') {
                    verticalUp()
                }
                // 横向往左滚动
                if (direction === 'crosswiseLeft') {
                    crosswiseLeft()
                }
                // 横向往右滚动
                if (direction === 'crosswiseRight') {
                    crosswiseRight()
                }
            }
            Animation = requestAnimationFrame(onAnimation)
        }
        Animation = requestAnimationFrame(onAnimation)

        return () => {
            cancelAnimationFrame(Animation)
            EventBus.off('pause', pauseScroll)
            EventBus.off('start', playScroll)
        }

    }, [speed, direction, screenWidth])

    return <div ref={scroll} style={{ width: `${screenWidth == 0 ? null : screenWidth}` }}>
        {
            Children.map(children, child => {
                return [//复制一份包裹的组件
                    React.cloneElement(child, {
                        ref: scrollSource
                    }),
                    React.cloneElement(child, {
                        ref: scrollClone
                    })
                ]
            })
        }
    </div>
}