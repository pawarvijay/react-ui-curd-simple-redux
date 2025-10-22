// Actions
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

const initialState = {
    items: [],
};

export const itemsReducer = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map((item: any) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item: any) => item.id !== action.payload),
            };
        default:
            return state;
    }
};

// Action Creators
export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});

export const updateItem = (item) => ({
    type: UPDATE_ITEM,
    payload: item,
});

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: id,
});
