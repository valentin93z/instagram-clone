import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";

interface IAuth {
    user: IUser;
}

export interface IUser {
    uid: string;
    username: string;
    emailAddress: string;
    firstname: string;
    lastname: string;
    profilePhoto?: string;
    following?: Array<string>;
    followers?: Array<string>;
    dateCreated: number;
}

const initialState: IAuth = {
    user: {
        uid: '',
        emailAddress: '',
        username: '',
        firstname: '',
        lastname: '',
        profilePhoto: '',
        followers: [],
        following: [],
        dateCreated: 0,
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload;
        },
    },
});

export default authSlice.reducer;