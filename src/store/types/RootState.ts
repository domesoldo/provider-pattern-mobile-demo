import {appReducer} from '../reducers';

export type AppState = ReturnType<typeof appReducer>;

type ReducerReturnType = ReturnType<typeof appReducer>;
export default interface RootState extends ReducerReturnType {}
