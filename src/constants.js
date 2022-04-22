const allTasks = [
    {
        name: "料理",
        children: [
            {name: '朝ご飯作る', checked: true},
            {name: '弁当買う', checked: true},
            {name: '昼ご飯作る', checked: true},
            {name: '夕ご飯作る', checked: true},
            {name: '買い物行く', checked: true}
        ],
    }, {
        name: "掃除",
        children: [
            {name: 'リビング掃除', checked: true},
            {name: 'お風呂掃除', checked: true},
            {name: 'トイレ掃除', checked: true},
            {name: '台所掃除', checked: true},
            {name: 'ゴミ出し', checked: true}
        ],
    }, {
        name: "ベッド",
        children: [
            {name: 'お布団整える', checked: false},
        ]
    }, {
        name: "子供",
        children: [
            {name: '読み聞かせ', checked: false},
            {name: '宿題みる', checked: false},
            {name: 'お迎え', checked: false},
            {name: '病院連れ', checked: false},
        ]
    }, {
        name: "ペット",
        children: [
            {name: '散歩', checked: false},
            {name: '餌やり', checked: false},
        ]
    }
];

export default { allTasks };
