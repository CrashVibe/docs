var adjectives = [
    "美丽的",
    "英俊的",
    "聪明的",
    "勇敢的",
    "可爱的",
    "慷慨的",
    "善良的",
    "可靠的",
    "开朗的",
    "成熟的",
    "稳重的",
    "真诚的",
    "幽默的",
    "豁达的",
    "有趣的",
    "活泼的",
    "优雅的",
    "敏捷的",
    "温柔的",
    "温暖的",
    "敬业的",
    "细心的",
    "耐心的",
    "深沉的",
    "朴素的",
    "含蓄的",
    "率直的",
    "开放的",
    "务实的",
    "坚强的",
    "自信的",
    "谦虚的",
    "文静的",
    "深刻的",
    "纯真的",
    "朝气蓬勃的",
    "慎重的",
    "大方的",
    "顽强的",
    "迷人的",
    "机智的",
    "善解人意的",
    "富有想象力的",
    "有魅力的",
    "独立的",
    "好奇的",
    "干净的",
    "宽容的",
    "尊重他人的",
    "体贴的",
    "守信的",
    "有耐性的",
    "有责任心的",
    "有担当的",
    "有远见的",
    "有智慧的",
    "有眼光的",
    "有冒险精神的",
    "有爱心的",
    "有同情心的",
    "喜欢思考的",
    "喜欢学习的",
    "具有批判性思维的",
    "善于表达的",
    "善于沟通的",
    "善于合作的",
    "善于领导的",
    "有激情的",
    "有幽默感的",
    "有思想的",
    "有个性的",
    "有正义感的",
    "有责任感的",
    "有创造力的",
    "有想象力的",
    "有艺术细胞的",
    "有团队精神的",
    "有协调能力的",
    "有决策能力的",
    "有组织能力的",
    "有学习能力的",
    "有执行能力的",
    "有分析能力的",
    "有逻辑思维的",
    "有创新能力的",
    "有专业素养的",
    "有商业头脑的",
];
var vegetablesAndFruits = [
    "萝卜",
    "白菜",
    "芹菜",
    "生菜",
    "青椒",
    "辣椒",
    "茄子",
    "豆角",
    "黄瓜",
    "西红柿",
    "洋葱",
    "大蒜",
    "土豆",
    "南瓜",
    "豆腐",
    "韭菜",
    "花菜",
    "西兰花",
    "蘑菇",
    "金针菇",
    "苹果",
    "香蕉",
    "橙子",
    "柠檬",
    "猕猴桃",
    "草莓",
    "葡萄",
    "桃子",
    "杏子",
    "李子",
    "石榴",
    "西瓜",
    "哈密瓜",
    "蜜瓜",
    "樱桃",
    "蓝莓",
    "柿子",
    "橄榄",
    "柚子",
    "火龙果",
];

var HoldLog = console.log;
console.log = function () { };
queueMicrotask(() => {
    const Log = function () {
        HoldLog.apply(console, arguments);
    };
    const ascll = [`ZLW-0`, `调用前置摄像头拍照成功，识别为【小笨蛋】.`, `Photo captured: `, `🤪`];
    setTimeout(
        Log.bind(console, `%c ${ascll[0]} %c ${ascll[1]} %c \n${ascll[2]} %c\n${ascll[3]}\n`, "color:white; background-color:#4fd953", "", "", 'font-size:450%')
        , 200);

    setTimeout(Log.bind(console, "%c WELCOME %c 你好，小笨蛋.", "color:white; background-color:#4f90d9", "")
        , 250);

    setTimeout(
        Log.bind(console, "%c ⚡ Powered by ZL %c 你正在访问 ZL 服务器 Wiki.", "color:white; background-color:#f0ad4e", "")
        , 300);

    setTimeout(
        Log.bind(console, "%c ZLW-3 %c 你已打开控制台.", "color:white; background-color:#4f90d9", "")
        , 350);

    setTimeout(
        Log.bind(console, "%c ZLW-4 %c 你现在正处于监控中.", "color:white; background-color:#d9534f", "")
        , 400);
});