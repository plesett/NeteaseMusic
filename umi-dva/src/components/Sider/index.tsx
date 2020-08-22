import React from 'react';
import style from './style.less'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1769370_61bvdoostwd.js',
});

class SiderComponents extends React.Component {
    render() {
        return (
            <div className={style.sider}>
                <p className={style.title}>推荐</p>
                <div className={style.title_text_box}>
                    <div id={style.action}><IconFont type="icon-yinyue" className={style.icon_info} />发现音乐</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default SiderComponents;