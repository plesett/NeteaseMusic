import React, { useEffect, useState } from 'react';
import style from './style.less'
import { dataTab } from './mock'
import { useDispatch, useSelector, history, withRouter } from 'umi';

const MenuTab = (props: any) => {
	const dispatch = useDispatch()
	const [RouterPage, setRouter] = useState(0)
	const menuTab = useSelector((state: any) => state.global.menuTab)
	const handleClickItemMenuTab = (id: number, router: string) => {
		dispatch({ type: 'global/switchMenuTab', payload: id })
		history.push(router)
		setRouter(id)
	}
	useEffect(() => {
		// 检查当前的路由是否匹配正常的tab
		if (props.history.location.pathname === dataTab[RouterPage].router) {
			console.log("页面正常")
		} else {
			console.log("页面与路由不匹配")
			// 按照 tab 值去实现
			history.push('/')
		}
	}, [menuTab])
	return (
		<div className={style.MenuTab}>
			{
				dataTab.map((v) => {
					return (
						<div
							onClick={() => handleClickItemMenuTab(v.id, v.router)}
							key={v.id}
							id={menuTab === v.id ? style.action : null}
						>{v.name}</div>
					)
				})
			}
		</div>
	)
}

export default withRouter(MenuTab);