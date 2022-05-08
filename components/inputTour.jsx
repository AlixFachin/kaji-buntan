import React from "react";
import JoyRide from "react-joyride"

// References:
// https://github.com/learnwithparam/logrocket-product-tours/blob/master/src/components/Tour.js
// https://blog.logrocket.com/complete-guide-to-build-product-tours-on-your-react-apps/
// https://docs.react-joyride.com/props


const TOUR_STEPS = [
    {
        target: "#myInputPanel #demo_participates",
        content: "今の家事分担の入力。タスクの担当の場合、「する」を選んでね！"
    },
    {
        target: "#myInputPanel #demo_effort",
        content: "タスクの好みによって絵文字を選んでね！"
    },
    {
        target: "#myInputPanel #demo_slider",
        content: "タスクにかかる時間を選んでね！"
    },

];


export default function InputTour() {
    return <JoyRide 
        steps={TOUR_STEPS} 
        continuous={true} 
        locale={{
            back:'戻る',
            close: '終了',
            last: '最後へ',
            next: '次へ',
            open: '開始',
            skip: 'スキップ'
        }}
        />;
}