export default function stateReducer(state: object | any, action: object | any) {
    if (action.deepType) {
        return {
            ...state,
            [action.type]: {
                ...state[action.type],
                [action.deepType]: action.value,
            },
        };
    }

    if (!action.type) {
        return {
            ...action.value,
        };
    }

    return {
        ...state,
        [action.type]: action.value,
    };
}