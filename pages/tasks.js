import TaskCategoryList from "components/taskCategoryList"

const allTasks = [
    {
        name: "料理",
        children: [
            {name: '朝ご飯', checked: false},
            {name: '弁当', checked: false},
            {name: '昼ご飯', checked: true},
            {name: '夕ご飯', checked: true},
            {name: '買い物', checked: true}
        ],
    }, {
        name: "掃除",
        children: [
            {name: 'リビング', checked: false},
            {name: 'お風呂場', checked: true},
            {name: 'トイレ', checked: false}
        ],
    }, {
        name: "子育て",
        children: [
            {name: '音読', checked: false},
            {name: '宿題', checked: false},
            {name: 'お迎え', checked: false},
            {name: '病院連れ', checked: false},
        ]
    }, {
        name: "その他",
        children: [
            {name: '皿洗い', checked: true},
        ]
    }
];


export default function Tasks() {
    const handleChange = (event) => {
        allTasks[event.index].children[event.child.index].checked = event.child.checked;

    }
    return (
        <TaskCategoryList taskTree={allTasks} onChange={handleChange}></TaskCategoryList>
    )
}
