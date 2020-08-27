import React from 'react';
import style from './style.less'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1769370_ovhwbseqlv.js',
});

class SiderComponents extends React.Component {
    render() {
        return (
            <div className={style.sider}>
                <div>
                    <p className={style.title}>推荐</p>
                    <div className={style.title_text_box}>
                        <div id={style.action}><IconFont type="icon-yinyue" className={style.icon_info} /><span>发现音乐</span></div>
                        <div><IconFont type="icon-xinhao" className={style.icon_info} /><span>私人FM</span></div>
                        <div><IconFont type="icon-yuan" className={style.icon_info} /><span>LOOK直播</span></div>
                        <div><IconFont type="icon-shexiang" className={style.icon_info} /><span>视频</span></div>
                        <div><IconFont type="icon-tubiao_duoyonghu" className={style.icon_info} /><span>朋友</span></div>
                    </div>
                </div>
                <div>
                    <p className={style.title}>我的音乐</p>
                    <div className={style.title_text_box}>
                        <div id={style.action}><IconFont type="icon-yinle1" className={style.icon_info} /><span>本地音乐</span></div>
                        <div><IconFont type="icon-xiazai" className={style.icon_info} /><span>下载管理</span></div>
                        <div><IconFont type="icon-tubiao-yun" className={style.icon_info} /><span>我的音乐云盘</span></div>
                        {/* <div><IconFont type="icon-shexiang" className={style.icon_info} /><span>我的电台</span></div> */}
                        <div><IconFont type="icon-wodeshoucang" className={style.icon_info} /><span>我的收藏</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SiderComponents;