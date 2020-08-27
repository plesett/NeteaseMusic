import React, { useState, useEffect } from 'react';
import style from './index.less'
import { useDispatch, useSelector } from 'umi';
import RecommendedCard from '@/components/RecommendedCard';

const Playlist = (props: any) => {
    const dispatch = useDispatch()
    const menuTab = useSelector((state: any) => state.global.menuTab)

    return (
        <div>
            <div className={style.title}>热门标签:
                <span>华语</span>
                <span>流行</span>
                <span>摇滚</span>
                <span>民谣</span>
                <span>电子</span>
                <span>另类/独立</span>
                <span>轻音乐</span>
                <span>综艺</span>
                <span>影视原声</span>
                <span>ACG</span>
            </div>
            <div>
                <RecommendedCard
                    titleSwitch={true}
                />
            </div>
        </div>
    )
}

export default Playlist;