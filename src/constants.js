const allTasks = [
    {
        name: "朝の準備",
        children: [
            {name: '子供起こす', checked: false},
            {name: '朝ごはん用意', checked: false},
            {name: '新聞とる', checked: false},
        ],
    }, {
        name: "料理",
        children: [
            {name: '献立決めて買い物', checked: false},
            {name: '冷蔵庫に入れる', checked: false},
            {name: '料理する', checked: false},
            {name: '盛り付け', checked: false},
            {name: 'テーブル拭く', checked: false},
            {name: '配膳', checked: false},
            {name: '食器片付ける', checked: false},
            {name: '食器用洗剤の購入', checked: false},
            {name: 'まな板除菌・漂白', checked: false},
            {name: '包丁研く', checked: false},
        ],
    }, {
        name: "洗濯",
        children: [
            {name: 'フィルターのホコリを取る', checked: false},
            {name: '洗濯洗剤の購入', checked: false},
            {name: '漂白剤、柔軟剤の購入', checked: false},
            {name: '洗濯機の掃除', checked: false},
            {name: '洗濯物を干す', checked: false},
            {name: '洗濯物を取り込む', checked: false},
            {name: '洗濯物を畳む', checked: false},
        ],
    }, {
        name: "お風呂の準備",
        children: [
            {name: 'お風呂を入れる', checked: false},
            {name: 'シャンプー等の買い出し', checked: false},
            {name: 'バスタオルの回収・交換', checked: false},
        ],
    }, {
        name: "掃除 (お風呂場)",
        children: [
            {name: '浴槽を洗う', checked: false},
            {name: '壁ドア・鏡・手すりを洗う', checked: false},
            {name: '床を洗う', checked: false},
            {name: '髪の毛取ってネット交換', checked: false},
            {name: '排水溝を洗う', checked: false},
        ],
    }, {
        name: "掃除 (トイレ)",
        children: [
            {name: 'トイレの掃除', checked: false},
            {name: '壁・床・棚を拭く', checked: false},
            {name: 'トイレマットの交換', checked: false},
            {name: 'トイレットペーパーの購入', checked: false},
            {name: 'トイレ洗剤の購入・補充', checked: false},
        ],
    }, {
        name: "掃除 (キッチン)",
        children: [
            {name: '食器洗う', checked: false},
            {name: '食器を拭く', checked: false},
            {name: 'シンクの水気を拭く', checked: false},
            {name: '食器をしまう', checked: false},
            {name: '調味料の量把握・補充', checked: false},
            {name: 'キッチン台の片付け', checked: false},
            {name: '調理器具をしまう', checked: false},
            {name: 'ガス台・ごとくの拭き掃除', checked: false},
            {name: '食洗機の掃除', checked: false},
            {name: '炊飯器の掃除', checked: false},
            {name: 'レンジ・オーブンの掃除', checked: false},
            {name: 'トースターの掃除', checked: false},
            {name: 'キッチン壁・床の拭き掃除', checked: false},
            {name: '換気扇の掃除', checked: false},
        ],
    }, {
        name: "掃除 (家全体)",
        children: [
            {name: '家中を掃除機かける', checked: false},
            {name: '出しっ放しのものをしまう', checked: false},
            {name: '玄関の掃除', checked: false},
            {name: '靴を整頓', checked: false},
            {name: '傘をしまう', checked: false},
            {name: 'テレビ、テレビ台の掃除', checked: false},
            {name: '床の掃除・モップかける', checked: false},
            {name: '物の整理整頓', checked: false},
            {name: '子供部屋の掃除', checked: false},
        ],
    },{
        name: "ゴミ捨て",
        children: [
            {name: 'ゴミ集める・分ける', checked: false},
            {name: 'ペットボトルフィルムはがす', checked: false},
            {name: 'ゴミ出し', checked: false},
            {name: 'ゴミ箱にゴミ袋装着', checked: false},
            {name: 'ダンボールをつぶして捨てる', checked: false},
        ],
    },{
        name: "家庭内の雑用",
        children: [
            {name: '家族のスケジュール管理', checked: false},
            {name: '郵便物を取りに行く', checked: false},
            {name: '郵便物の仕分け・管理', checked: false},
            {name: '米・ビールの補充', checked: false},
            {name: '日用品の買い足し・補充', checked: false},
            {name: 'アイロン', checked: false},
            {name: '植物に水やり', checked: false},
            {name: '加湿器に水入れる', checked: false},
        ],
    },{
        name: "子供・学校",
        children: [
            {name: '交友の把握・管理', checked: false},
            {name: '勉強みる', checked: false},
            {name: '行事ごとの持ち物把握', checked: false},
            {name: 'スマホ・ゲーム時間の管理', checked: false},
            {name: '習い事の送迎', checked: false},
            {name: '水筒を洗う', checked: false},
            {name: '体操服を洗う', checked: false},
            {name: 'テストやプリントの管理', checked: false},
            {name: '学校行事に参加', checked: false},
            {name: '学校のPTA活動に参加', checked: false},
            {name: '地域集会に参加', checked: false},
            {name: '保護者会に参加', checked: false},
            {name: '写真の整理保管', checked: false},
        ],
    },{
        name: "ペット関連",
        children: [
            {name: '朝の散歩', checked: false},
            {name: '夕方の散歩', checked: false},
            {name: '餌をやる', checked: false},
            {name: '餌の購入', checked: false},
            {name: '遊ぶ', checked: false},
            {name: '毛並みを整える', checked: false},
        ],
    },{
        name: "介護",
        children: [
            {name: '訪問介護、デイケアのお迎え', checked: false},
            {name: '食事の手伝い', checked: false},
            {name: 'ベット周りの整理整頓', checked: false},
            {name: 'トイレの介助', checked: false},
            {name: '外出の介助', checked: false},
            {name: '通院の手伝い', checked: false},
        ],
    }
];

const backgroundColorList = {
    '朝の準備' : 'rgba(255, 99, 132, 0.2)',
    '洗濯' : 'rgba(75, 192, 192, 0.2)',
    '掃除 (洗面所)' : 'rgba(54, 162, 235, 0.2)',
    '掃除 (お風呂場)' : 'rgba(153, 102, 255, 0.2)',
    '掃除 (トイレ)' : 'rgba(255, 255, 0, 0.2)',
    '掃除 (キッチン)' : 'rgba(139, 0, 139, 0.2)',
    '料理' : 'rgba(2, 203, 2, 0.2)',
    'お風呂の準備' : 'rgba(0, 0, 207, 0.2)',
    '掃除 (家全体)' : 'rgba(210 ,180 ,140, 0.2)',
    '家庭内の雑用' : 'rgba(201, 201, 20, 0.2)',
    '子供・学校' : 'rgba(210 ,180 ,140, 0.2)',
    'ゴミ捨て' : 'rgba(139, 30, 139, 0.2)',
    'ペット関連' : 'rgba(201, 20, 20, 0.2)',
    '介護' : 'rgba(0, 0, 207, 0.2)',
}
const borderColorList = {
    '朝の準備' : 'rgba(255, 99, 132)',
    '洗濯' : 'rgba(75, 192, 192)',
    '掃除 (洗面所)' : 'rgba(54, 162, 235)',
    '掃除 (お風呂場)' : 'rgba(153, 102, 255)',
    '掃除 (トイレ)' : 'rgba(255, 255, 0)',
    '掃除 (キッチン)' : 'rgba(139, 0, 139)',
    '料理' : 'rgba(2, 203, 2)',
    'お風呂の準備' : 'rgba(0, 0, 207)',
    '掃除 (家全体)' : 'rgba(210 ,180 ,140)',
    '家庭内の雑用' : 'rgba(201, 201, 20)',
    '子供・学校' : 'rgba(210 ,180 ,140)',
    'ゴミ捨て' : 'rgba(139, 30, 139)',
    'ペット関連' : 'rgba(201, 20, 20)',
    '介護' : 'rgba(0, 0, 207)',
}

const myBackColor = 'rgba(255, 138, 128 ,0.3)'
const myBackColorBorder = 'rgba(255, 138, 128)'

const partnerBackColor = 'rgba(140, 158, 255, 0.3)'
const partnerBackColorBorder = 'rgba(140, 158, 255)'

export default { allTasks, backgroundColorList, borderColorList, myBackColor, partnerBackColor, myBackColorBorder, partnerBackColorBorder};

