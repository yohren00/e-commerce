import { UserActionType } from "./user.type.js";

export const setCurrentUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: user
});