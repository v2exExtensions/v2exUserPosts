console.log('%c Hello,World!', 'background:#000;color:#fff');
console.log('%c Author: github.com/shuiRong', 'background:#000;color:#fff');
console.log('%c Code: github.com/v2exExtensions', 'background:#000;color:#fff');

var target = $('#Main .box').eq(1);
// 如果用户隐藏主题才工作
console.log('当前用户设置了隐藏主题')
if (target.find('.inner table').length === 1) {

    target.find('.inner').remove();
    var htmlString = '<div class="cell item" style><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td width="auto" valign="middle"><span class="item_title"><a href="/t/446058#reply0">充值了需要多少时间到？</a></span><div class="sep5"></div><span class="topic_info"><div class="votes"></div><a class="node" href="/go/chamber">Chamber</a> &nbsp;•&nbsp; <strong><a href="/member/iknowapp">iknowapp</a></strong></span></td><td width="70" align="right" valign="middle"></td></tr></tbody></table></div>';
    var itemDOM = $(htmlString);

    var user = location.href.match("//www.v2ex.com/member/(.*)")[1]

    console.log('尝试从远程获取数据')
    $.get('https://linshuirong.cn/posts?user=' + user, function (res) {
        res.forEach(function (item) {
            console.log('获取数据成功')
            var temp = itemDOM.clone();
            temp.find('.item_title a').attr('href', item.postUrl).text(item.post)
            temp.find('.topic_info a').attr('href', item.nodeUrl).text(item.node)
            temp.find('.topic_info strong a').attr('href', '/member/' + user).text(user)
            target.append(temp);
        })
    })
}