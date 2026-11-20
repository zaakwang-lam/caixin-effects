// 33张效应卡片数据
const effects = [
  // daily 日常生活
  { id: "daily_01", category: "daily", name: "破窗理论", alias: "Broken Windows Theory", sourceType: "经典实验", source: "Wilson & Kelling, 1982", explanation: "环境中的小破损若不被及时修复，会传递出「无人在意」的信号，从而引发更多破坏行为。", example: "地铁站一扇玻璃破了没修，第二天周围墙上就出现更多涂鸦。", scope: "公共空间、社区管理、组织氛围维护。", limits: "（推论）在高度监管或强文化约束环境下效果减弱。", cautions: "及时修复小问题；避免破窗成为常态；管理者要主动示范。", tags: ["环境", "治理"] },
  { id: "daily_02", category: "daily", name: "宜家效应", alias: "IKEA Effect", sourceType: "经典实验", source: "Norton et al., 2012", explanation: "人们对自己亲手参与制作的物品会赋予更高价值，即使质量一般。", example: "自己组装的书架，觉得比同款成品更值得。", scope: "消费决策、产品设计、用户参与。", limits: "（推论）当参与过程过于痛苦时，效应可能反转。", cautions: "适度让用户参与；避免过度复杂化。", tags: ["消费", "价值"] },
  { id: "daily_03", category: "daily", name: "禀赋效应", alias: "Endowment Effect", sourceType: "学术实证", source: "Thaler, 1980", explanation: "一旦拥有某物，人们对其估值会显著高于未拥有时。", example: "免费试用一周后，用户更不愿意退还产品。", scope: "定价、试用策略、谈判。", limits: "对低价值物品效应较弱。", cautions: "试用期设计要谨慎；注意退货成本。", tags: ["拥有", "价值"] },
  { id: "daily_04", category: "daily", name: "心理账户", alias: "Mental Accounting", sourceType: "学术实证", source: "Thaler, 1985", explanation: "人们会把钱分成不同「账户」，不同来源或用途的钱有不同消费倾向。", example: "工资钱省着花，奖金钱大手大脚。", scope: "预算管理、消费决策。", limits: "（推论）财务意识强的人会主动打破账户。", cautions: "统一看待资金；避免非理性支出。", tags: ["金钱", "决策"] },
  { id: "daily_05", category: "daily", name: "蔡格尼克效应", alias: "Zeigarnik Effect", sourceType: "经典实验", source: "Zeigarnik, 1927", explanation: "未完成的任务比已完成的更容易被记住，会持续占用心理资源。", example: "看了一半的剧，总想着结尾是什么。", scope: "学习、工作、内容设计。", limits: "压力过大时可能转为回避。", cautions: "及时关闭未完成循环；用清单管理。", tags: ["记忆", "任务"] },
  { id: "daily_06", category: "daily", name: "峰终定律", alias: "Peak-End Rule", sourceType: "经典实验", source: "Kahneman, 1993", explanation: "人对一段经历的整体评价，主要由高峰时刻和结束时刻决定。", example: "一次旅行，最美的景色和最后的晚餐决定了整体印象。", scope: "体验设计、服务、活动策划。", limits: "过程中的持续痛苦仍会累积。", cautions: "重视结尾设计；制造正向高峰。", tags: ["体验", "记忆"] },
  { id: "daily_07", category: "daily", name: "棘轮效应", alias: "Ratchet Effect", sourceType: "经验归纳", source: "Duesenberry, 1949", explanation: "消费习惯一旦提高，就很难再降下来，形成不可逆的向上趋势。", example: "习惯了外卖后，很难再天天自己做饭。", scope: "消费升级、生活方式。", limits: "重大收入变化时可能被打破。", cautions: "控制升级节奏；保持弹性。", tags: ["消费", "习惯"] },
  { id: "daily_08", category: "daily", name: "路径依赖", alias: "Path Dependence", sourceType: "经验归纳", source: "Arthur, 1989", explanation: "早期的选择会锁定后续路径，即使后来出现更优方案也难以切换。", example: "键盘布局QWERTY沿用至今，尽管有更高效设计。", scope: "技术标准、个人习惯、组织流程。", limits: "外部强制或重大创新可打破。", cautions: "初期决策要谨慎；定期审视路径。", tags: ["锁定", "习惯"] },

  // social 人际交往
  { id: "social_01", category: "social", name: "旁观者效应", alias: "Bystander Effect", sourceType: "学术实证", source: "Latané & Darley, 1968", explanation: "旁观者越多，个体出手帮助的可能性越低，因为责任被分散。", example: "街头有人摔倒，周围人越多越没人上前。", scope: "紧急情况、公共场合。", limits: "有明确领导者或熟人时减弱。", cautions: "主动指定责任人；不要假设别人会做。", tags: ["责任", "群体"] },
  { id: "social_02", category: "social", name: "责任分散", alias: "Diffusion of Responsibility", sourceType: "学术实证", source: "Darley & Latané", explanation: "群体中每个人都认为责任由他人承担，导致无人行动。", example: "群里有人提问，所有人都以为别人会回。", scope: "团队协作、线上群组。", limits: "角色明确时减轻。", cautions: "明确分工；点名到人。", tags: ["责任", "协作"] },
  { id: "social_03", category: "social", name: "沉默的螺旋", alias: "Spiral of Silence", sourceType: "学术实证", source: "Noelle-Neumann, 1974", explanation: "人们感知多数意见后，会隐藏自己的少数观点，形成沉默螺旋。", example: "会议中没人反对，其实很多人不同意。", scope: "舆论、团队决策。", limits: "匿名环境或强个性者可打破。", cautions: "主动征求反对意见；保护少数声音。", tags: ["舆论", "表达"] },
  { id: "social_04", category: "social", name: "从众效应", alias: "Bandwagon Effect", sourceType: "经典实验", source: "Asch, 1951", explanation: "个体会倾向于与群体保持一致，即使自己判断不同。", example: "排队的店看起来更值得去。", scope: "消费、社交、决策。", limits: "专业知识强或独立性强时减弱。", cautions: "独立验证；警惕虚假繁荣。", tags: ["群体", "决策"] },
  { id: "social_05", category: "social", name: "首因效应", alias: "Primacy Effect", sourceType: "学术实证", source: "Asch, 1946", explanation: "最初获得的信息对后续判断影响最大。", example: "面试前5分钟的表现决定大部分印象。", scope: "社交、招聘、谈判。", limits: "后续信息强烈冲突时可修正。", cautions: "重视第一印象；但不要只看开头。", tags: ["印象", "判断"] },
  { id: "social_06", category: "social", name: "晕轮效应", alias: "Halo Effect", sourceType: "学术实证", source: "Thorndike, 1920", explanation: "对某一方面的好印象会扩散到其他方面。", example: "长得好看的人容易被认为能力也强。", scope: "评价、招聘、品牌。", limits: "负面信息可打破光环。", cautions: "多维度评估；避免以偏概全。", tags: ["评价", "偏见"] },
  { id: "social_07", category: "social", name: "聚光灯效应", alias: "Spotlight Effect", sourceType: "学术实证", source: "Gilovich et al., 2000", explanation: "人们高估自己被他人注意的程度。", example: "觉得自己今天穿得不好看，其实没人注意。", scope: "社交焦虑、自我意识。", limits: "真正突出时才被注意。", cautions: "放轻松；别人没那么关注你。", tags: ["自我", "焦虑"] },
  { id: "social_08", category: "social", name: "弱连接的力量", alias: "Strength of Weak Ties", sourceType: "学术实证", source: "Granovetter, 1973", explanation: "弱关系比强关系更能带来新信息和机会。", example: "通过点头之交找到新工作机会。", scope: "人脉、求职、信息获取。", limits: "需要主动维护弱连接。", cautions: "拓展圈子；不要只待在熟人圈。", tags: ["人脉", "机会"] },
  { id: "social_09", category: "social", name: "弃猫理论", alias: "（网络流行说法）", sourceType: "网络流行说法", source: "网络流行说法，对应旁观者效应", explanation: "描述见死不救的现象，本质是旁观者效应与责任分散的通俗说法，并非正式理论。", example: "网上看到求助信息，很多人只看不行动。", scope: "网络舆论、公共事件。", limits: "（推论）身份明确或利益相关时会改变。", cautions: "不要当作正式理论引用；主动承担责任。", tags: ["网络", "责任"] },

  // money 理财有道
  { id: "money_01", category: "money", name: "沉没成本效应", alias: "Sunk Cost Fallacy", sourceType: "学术实证", source: "Arkes & Blumer, 1985", explanation: "已经投入的成本会影响未来决策，即使继续投入不再理性。", example: "电影不好看也不走，因为票已经买了。", scope: "投资、项目决策、消费。", limits: "理性决策者可克服。", cautions: "只看未来收益；及时止损。", tags: ["决策", "投资"] },
  { id: "money_02", category: "money", name: "损失厌恶", alias: "Loss Aversion", sourceType: "学术实证", source: "Kahneman & Tversky, 1979", explanation: "损失带来的痛苦大约是同等收益快乐的两倍。", example: "宁愿不赚也不愿亏同样金额。", scope: "投资、谈判、定价。", limits: "框架改变可影响程度。", cautions: "用概率思维；避免过度保守。", tags: ["风险", "决策"] },
  { id: "money_03", category: "money", name: "锚定效应", alias: "Anchoring Effect", sourceType: "学术实证", source: "Tversky & Kahneman, 1974", explanation: "人们会过度依赖最先获得的数字作为参照。", example: "先看到原价再打折，觉得很便宜。", scope: "定价、谈判、估值。", limits: "专业知识可减弱。", cautions: "主动寻找多个锚点；质疑第一个数字。", tags: ["定价", "判断"] },
  { id: "money_04", category: "money", name: "处置效应", alias: "Disposition Effect", sourceType: "学术实证", source: "Shefrin & Statman, 1985", explanation: "投资者倾向于过早卖出盈利资产，过久持有亏损资产。", example: "股票涨了就卖，亏了就死扛。", scope: "投资行为。", limits: "专业投资者较轻。", cautions: "设定规则；定期复盘。", tags: ["投资", "行为"] },
  { id: "money_05", category: "money", name: "稀缺效应", alias: "Scarcity Effect", sourceType: "学术实证", source: "Cialdini, 1984", explanation: "越稀缺的东西越觉得有价值，越想得到。", example: "限时最后3小时，购买欲暴增。", scope: "营销、决策。", limits: "过度使用会失效。", cautions: "区分真假稀缺；冷静判断。", tags: ["营销", "决策"] },
  { id: "money_06", category: "money", name: "框架效应", alias: "Framing Effect", sourceType: "经典实验", source: "Tversky & Kahneman, 1981", explanation: "同一信息不同表述方式会改变决策。", example: "「90%存活」比「10%死亡」更让人接受。", scope: "沟通、营销、医疗。", limits: "专业判断可克服。", cautions: "多角度看待信息；注意表述。", tags: ["沟通", "决策"] },
  { id: "money_07", category: "money", name: "过度自信", alias: "Overconfidence", sourceType: "学术实证", source: "多位研究者", explanation: "人们高估自己的判断准确性和能力。", example: "觉得自己能跑赢市场的投资者占比很高。", scope: "投资、规划。", limits: "反馈及时时可校准。", cautions: "记录决策；寻找反证。", tags: ["认知", "投资"] },
  { id: "money_08", category: "money", name: "羊群效应", alias: "Herd Behavior", sourceType: "学术实证", source: "多位研究者", explanation: "个体模仿他人行为，导致群体一致行动。", example: "看到大家都买某基金就跟风。", scope: "投资、消费、舆论。", limits: "独立信息源可减少。", cautions: "独立研究；警惕集体非理性。", tags: ["群体", "投资"] },

  // mind 心理分析
  { id: "mind_01", category: "mind", name: "认知失调", alias: "Cognitive Dissonance", sourceType: "学术实证", source: "Festinger, 1957", explanation: "行为与信念不一致时，人们会调整信念以减少不适。", example: "买了贵的东西后，更倾向于夸它好。", scope: "决策后合理化、态度改变。", limits: "外部强制时较少自我说服。", cautions: "意识到后可主动审视。", tags: ["认知", "态度"] },
  { id: "mind_02", category: "mind", name: "逆火效应", alias: "Reactance / Backfire", sourceType: "学术实证", source: "Brehm, 1966 等", explanation: "当人们感觉自由被限制时，会反向更强烈坚持原观点。", example: "越劝戒烟，有人越想抽。", scope: "说服、沟通。", limits: "信任关系可减轻。", cautions: "避免强推；提供选择。", tags: ["说服", "反抗"] },
  { id: "mind_03", category: "mind", name: "冰山理论", alias: "Iceberg Theory", sourceType: "网络流行说法", source: "弗洛伊德潜意识概念的通俗说法", explanation: "意识只是冰山一角，潜意识影响更大。多为通俗转述，非严格理论。", example: "表面冷静，内心其实很焦虑。", scope: "自我理解、沟通。", limits: "（推论）不能替代专业心理分析。", cautions: "不要过度解读；寻求专业帮助。", tags: ["潜意识", "自我"] },
  { id: "mind_04", category: "mind", name: "依恋理论", alias: "Attachment Theory", sourceType: "学术实证", source: "Bowlby & Ainsworth", explanation: "早期与照料者的关系模式会影响成年后的人际关系。", example: "安全型依恋更容易建立稳定关系。", scope: "亲密关系、亲子。", limits: "后天经历可改变。", cautions: "了解自己的模式；可主动调整。", tags: ["关系", "发展"] },
  { id: "mind_05", category: "mind", name: "皮格马利翁效应", alias: "Pygmalion Effect", sourceType: "经典实验", source: "Rosenthal & Jacobson, 1968", explanation: "他人的期待会影响一个人的表现。", example: "老师相信学生能进步，学生真的进步了。", scope: "教育、管理、自我期待。", limits: "期待过高可能造成压力。", cautions: "给予积极但现实的期待。", tags: ["期待", "表现"] },
  { id: "mind_06", category: "mind", name: "达克效应", alias: "Dunning-Kruger Effect", sourceType: "学术实证", source: "Kruger & Dunning, 1999", explanation: "能力低的人往往高估自己，能力高的人可能低估。", example: "刚学一点就觉得自己很懂。", scope: "学习、自我评估。", limits: "反馈可帮助校准。", cautions: "持续学习；寻求外部反馈。", tags: ["认知", "能力"] },
  { id: "mind_07", category: "mind", name: "习得性无助", alias: "Learned Helplessness", sourceType: "学术实证", source: "Seligman, 1967", explanation: "反复经历无法控制的负面事件后，会放弃努力。", example: "多次失败后，即使有机会也不再尝试。", scope: "学习、情绪、动机。", limits: "成功体验可逆转。", cautions: "创造可控的小成功；寻求支持。", tags: ["动机", "情绪"] },
  { id: "mind_08", category: "mind", name: "刻板印象威胁", alias: "Stereotype Threat", sourceType: "学术实证", source: "Steele & Aronson, 1995", explanation: "担心自己会证实负面刻板印象，反而影响表现。", example: "女生在数学测试前提醒性别，成绩下降。", scope: "考试、绩效、身份。", limits: "自我肯定可缓解。", cautions: "避免强调负面标签；关注个体。", tags: ["身份", "表现"] }
];

const categories = [
  { id: "daily", name: "日常生活", desc: "生活、消费、习惯相关", color: "#4A7C6F", count: 8 },
  { id: "social", name: "人际交往", desc: "沟通、群体、社交", color: "#5B6BA8", count: 9 },
  { id: "money", name: "理财有道", desc: "金钱决策与投资行为", color: "#C08552", count: 8 },
  { id: "mind", name: "心理分析", desc: "认知、情绪、自我", color: "#9A5F7E", count: 8 }
];

module.exports = { effects, categories };
