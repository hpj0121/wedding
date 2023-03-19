import React from 'react'
import useScrollFadeIn from "hooks/useScrollFadeIn";

const Invitation = () => {
    const animatedItem = useScrollFadeIn();
    return (
        <div className="component" {...animatedItem}>
            <div className="componentTitle underline">홍표제 & 박건이</div>
            <div className="weddingInfo centeredText">
                <div>2023년 5월 13일 토요일 오후 3시</div>
                <div>청주 아모르아트컨벤션 몇층 무슨무슨 홀</div>
            </div>
            <div className="invitation centeredText">이렇게 좋은날~ 어쩌고 저쩌고~ 
            초대합니당~ <br/>쓰고싶은 인삿말, 초대말 쓰기~~~</div>
        </div>
    )
}

export default Invitation
