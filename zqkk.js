[Script]
# 浏览赚：任务中心-》看看赚-》顶部的浏览赚-》点任务开始抓到任务数据包即可
http-request ^https?://kandian\.wkandian\.com\/v5\/task/browse_start\.json script-path=https://raw.githubusercontent.com/ztxtop/x/main/youth_banner.js, requires-body=1, tag=中青浏览赚

# 看看赚：任务中心-》看看赚-》点看看赚任务抓到任务数据包即可
http-request ^https?://kandian\.wkandian\.com/v5/Nameless/adlickstart\.json script-path=https://raw.githubusercontent.com/ztxtop/x/main/youth_banner.js, requires-body=1, tag=中青看看赚

# 任务中心尝试添加看看赚入口
http-response ^https://kd\.youth\.cn/WebApi/NewTaskIos/getTaskList script-path=https://raw.githubusercontent.com/ztxtop/x/main/youth_banner.js, requires-body=1, tag=中青转发、看看赚入口

# 已有阅读时长数据时，只保存大于1分钟的时长数据
http-request ^https?://kandian\.wkandian\.com/v5/user/app_stay\.json script-path=https://raw.githubusercontent.com/ztxtop/x/main/youth_banner.js, requires-body=1, tag=中青iOS时长数据

cron "30 6 * * *" script-path=https://raw.githubusercontent.com/ztxtop/x/main/youth_banner.js, enabled=true, tag=中青看看赚

# 获取阅读所需数据：配置好此重写规则，进入app阅读文章视频，每个文章视频只抓取首次奖励即可换下一个文章视频（单个文章视频的非首次的奖励可通过脚本循环跑时获得），如果频繁提示达上限，请从最后一次阅读开始算起，间隔一天再去抓数据
http-request ^https?://ios\.baertt\.com/v5/article/complete script-path=https://raw.githubusercontent.com/ztxtop/x/main/zqread.js , requires-body=1, tag=中青阅读数据

# 获取阅读时长数据：只会抓取超过1分钟阅读时长的数据
http-request ^https?://ios\.baertt\.com/v5/user/app_stay\.json script-path=https://raw.githubusercontent.com/ztxtop/x/main/zqread.js, requires-body=1, tag=中青阅读时长数据

# 获取签到所需数据：我的->任务中心
http-request ^https?://\w+\.youth\.cn/(TaskCenter|WebApi/NewTaskIos)/(sign|getSign)(\?.+)?$ script-path=https://raw.githubusercontent.com/ztxtop/x/main/zqread.js, tag=中青签到、宝箱数据

cron "8/30 * 1-6 * * *" script-path=https://raw.githubusercontent.com/ztxtop/x/main/zqread.js, enabled=true, tag=中青阅读
cron "15/30 * * * *" script-path=https://raw.githubusercontent.com/ztxtop/x/main/youth.js, enabled=true, tag=中青签到、宝箱

[MITM]
hostname = kandian.wkandian.com, kd.youth.cn, *.youth.cn, ios.baertt.com
