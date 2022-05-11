const allTasks = [
    {
        name: "朝の準備",
        children: [
            {name: '枕、シーツを整える(洗濯交換)', checked: false},
            {name: '子供を起こす', checked: false},
            {name: '朝ごはんの用意', checked: false},
        ],
    }, {
        name: "料理",
        children: [
            {name: '献立を決めて買い物', checked: false},
            {name: '買い物したものを冷蔵庫に入れる', checked: false},
            {name: '冷蔵庫にあるものの消費期限の管理する', checked: false},
            {name: '料理する', checked: false},
            {name: '彩りを考えて盛り付ける', checked: false},
            {name: 'テーブルを拭く', checked: false},
            {name: '配膳', checked: false},
            {name: '食器を片付ける', checked: false},
            {name: '食器用洗剤を買ってきて補充', checked: false},
            {name: 'まな板を除菌・漂白', checked: false},
            {name: '包丁を研く', checked: false},
        ],
    }, {
        name: "洗濯",
        children: [
            {name: '洗濯機のフィルターのホコリを取る', checked: false},
            {name: '洗濯洗剤を買ってきて詰め替える', checked: false},
            {name: '漂白剤、柔軟剤を買ってきて詰め替える', checked: false},
            {name: '洗濯機の中の掃除', checked: false},
            {name: '洗濯物を干す', checked: false},
            {name: '乾いたら取り込む', checked: false},
            {name: '畳んでしまう', checked: false},
        ],
    }, {
        name: "お風呂の準備",
        children: [
            {name: 'お風呂を入れる', checked: false},
            {name: 'シャンプー・コンディショナー・石鹸の買い出しと補充', checked: false},
            {name: '使ったバスタオルを回収・干す・交換', checked: false},
        ],
    }, {
        name: "掃除 (お風呂場)",
        children: [
            {name: '浴槽を洗う', checked: false},
            {name: '壁ドア鏡手すりを洗う', checked: false},
            {name: '床を洗う', checked: false},
            {name: '髪の毛を取ってネットを交換する', checked: false},
            {name: 'ネット交換', checked: false},
            {name: '排水溝を洗う', checked: false},
        ],
    }, {
        name: "掃除 (トイレ)",
        children: [
            {name: 'トイレを洗ったり拭いたりする', checked: false},
            {name: '壁・床・棚を拭く', checked: false},
            {name: 'トイレマット・フタカバーを洗って交換する', checked: false},
            {name: 'トイレットペーパーを買ってきて棚に補充', checked: false},
            {name: 'トイレの洗剤を買ってきて補充', checked: false},
        ],
    }, {
        name: "掃除 (キッチン)",
        children: [
            {name: '食器洗う', checked: false},
            {name: '食器を拭く', checked: false},
            {name: 'シンクの水気を拭く', checked: false},
            {name: '食器をしまう', checked: false},
            {name: 'ふきんの洗浄・補充', checked: false},
            {name: '調味料の量把握・補充', checked: false},
            {name: 'キッチン台の片付け・掃除', checked: false},
            {name: 'フライパン・調理器具などをしまう', checked: false},
            {name: 'ガス台・ごとくの拭き掃除', checked: false},
            {name: '食洗機の中と外、フチを掃除する', checked: false},
            {name: '炊飯器の洗浄・掃除', checked: false},
            {name: 'レンジ・オーブンの掃除', checked: false},
            {name: 'トースターの掃除', checked: false},
            {name: 'コーヒーメーカーの掃除', checked: false},
            {name: 'キッチン壁の拭き掃除', checked: false},
            {name: 'キッチン床の拭き掃除', checked: false},
            {name: '換気扇の掃除', checked: false},
        ],
    }, {
        name: "掃除 (家全体)",
        children: [
            {name: '家中で掃除機かける', checked: false},
            {name: '服・おもちゃ・文具、出しっ放しのものをしまう', checked: false},
            {name: '子供のゴミを拾って捨てる', checked: false},
            {name: '玄関の掃除', checked: false},
            {name: '靴を整頓して並べる', checked: false},
            {name: '傘をしまう', checked: false},
            {name: 'テレビ、テレビ台の掃除', checked: false},
            {name: '床の掃除、モップかける', checked: false},
            {name: '物の整理整頓', checked: false},
            {name: '子供部屋の掃除', checked: false},
        ],
    },{
        name: "ゴミ捨て",
        children: [
            {name: 'ゴミ集める・分ける(プラ・可燃・不燃・缶・びん・ペット・紙など)', checked: false},
            {name: 'ペットボトルのふたとフィルム、瓶のフィルムはがす', checked: false},
            {name: 'ゴミ出し', checked: false},
            {name: 'ゴミ箱を洗う', checked: false},
            {name: 'ゴミ箱にゴミ袋装着', checked: false},
            {name: 'ダンボールをつぶして捨てる', checked: false},
        ],
    },{
        name: "家庭内の雑用",
        children: [
            {name: '家族のスケジュールをカレンダーに書き込んで把握・管理', checked: false},
            {name: '郵便物を取りに行く', checked: false},
            {name: '郵便物を分けて捨てる', checked: false},
            {name: '郵便物の支払いもの仕分け・管理', checked: false},
            {name: '注文・補充(米・ビール)', checked: false},
            {name: '日用品の買い足し・補充', checked: false},
            {name: 'アイロン', checked: false},
            {name: '庭やベランダの植物に水やり', checked: false},
            {name: '加湿器に水入れる', checked: false},
        ],
    },{
        name: "子供・学校",
        children: [
            {name: '子供の交友の把握・管理', checked: false},
            {name: '子供の勉強の管理', checked: false},
            {name: '子供の行事ごとの持ち物などの把握', checked: false},
            {name: '子供のスマホ・ゲーム・テレビ時間の管理', checked: false},
            {name: '子供の習い事の管理・送迎', checked: false},
            {name: '水筒を洗って、除菌する', checked: false},
            {name: '体操服を洗う・セットにする', checked: false},
            {name: 'テストや学校のお便りプリントの管理', checked: false},
            {name: '学校行事に参加する', checked: false},
            {name: '学校のPTA活動に参加する', checked: false},
            {name: '地域集会に参加する', checked: false},
            {name: '保護者会に出る', checked: false},
            {name: '写真をアルバムに入れて整理、もしくは電子データで保管', checked: false},
            {name: '子供の病院予約', checked: false},
            {name: '子供のお菓子を買ってきて補充', checked: false},
        ],
    },{
        name: "ペット関連",
        children: [
            {name: '朝の散歩に連れていく', checked: false},
            {name: '夕方の散歩に連れていく', checked: false},
            {name: '餌をやる', checked: false},
            {name: '餌を買ってくる', checked: false},
            {name: '遊んであげる', checked: false},
            {name: '毛並みを整える', checked: false},
        ],
    },{
        name: "介護",
        children: [
            {name: '朝起こす', checked: false},
            {name: '訪問介護、デイケアのお迎えをする', checked: false},
            {name: '食事の手伝いをする', checked: false},
            {name: 'ベット周りの整理整頓をする', checked: false},
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

