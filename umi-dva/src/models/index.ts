import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { GetIndex } from '@/api';

export interface IndexModelState {
    play: boolean;
}
export interface IndexModelType {
    namespace: 'global';
    state: IndexModelState;
    effects: {
        switchPlay: Effect;
    };
    reducers: {
        // save: Reducer<IndexModelState>;
        // 启用 immer 之后
        updateSwitchPlay: ImmerReducer<IndexModelState>;
    };
    subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
    namespace: 'global',
    state: {
        play: false
    },
    effects: {
        *switchPlay({ payload }, { call, put }) {
            // const data = yield call(GetIndex);
            // console.log(payload, '<----携带过来的数据')
            // console.log(data, '<-------请求过来的数据')
            yield put({ type: "updateSwitchPlay", payload });
        },
    },
    reducers: {
        updateSwitchPlay(state, { payload }) {
            if (typeof payload === 'boolean') {
                state.play = payload;
            } else {
                state.play = !state.play;
            }
        },
    },
    subscriptions: {
        // 监听路由变化，如果是 '/' 则执行了dispatch({type: 'query'}) 方法
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    console.log("监听到页面为 '/' 准备派发dispatch")
                    dispatch({
                        type: 'query',
                    })
                }
            });
        }
    }
};
export default IndexModel;