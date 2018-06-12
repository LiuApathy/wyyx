(function ($) {
    $.fn.extend({
        countDown: function (options) {
            var defaults = {
                    endTime: '2018/6/14',  //结束时间,90年后
                    day: '.day',
                    hour: '.hour',
                    minute: '.minute',
                    sec: '.sec'
                },
                opts = $.extend({}, defaults, options); //对象扩展到opts
            this.each(function () {     //遍历
                var $this = $(this);
                times();    //先执行一次，防止刷新时数字都显示为0
                var timer = setInterval(times, 1000);   //定时器执行

                function times() {
                    var nowDate = new Date(),
                        endDate = $this.data('end') ? new Date($this.data('end')) : new Date(opts.endTime),// 定义了两种方式，data-end和defaults.endTime,优先data-end
                        tms = endDate - nowDate,    //时间差
                        days = Math.floor(tms / 1000 / 60 / 60 / 24),
                        hours = Math.floor(tms / 1000 / 60 / 60 % 24),
                        minutes = Math.floor(tms / 1000 / 60 % 60),
                        secs = Math.floor(tms / 1000 % 60);
                    if (tms > 0) {  //如果时间差大于0，显示倒计时
                        $this.find(opts.day).text(addZero(days));
                        $this.find(opts.hour).text(addZero(hours));
                        $this.find(opts.minute).text(addZero(minutes));
                        $this.find(opts.sec).text(addZero(secs));
                    } else {    //否则清除定时器，倒计时结束
                        clearInterval(timer);
                    }
                }
            });

            function addZero(t) {  //一位数加0
                if (t < 10) {
                    return t = '0' + t;
                } else {
                    return t;
                }
            }
            return this; //返回this方便链式调用
        }
    });
    $('.dingwei').countDown();//默认调用方法
})(jQuery);