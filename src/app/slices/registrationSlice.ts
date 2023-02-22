import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IRegistration {
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    avatarData: File | null;
    avatar: string;
}

const initialState: IRegistration = {
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    avatarData: null,
    avatar: '',
}

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        setFirstname(state, action: PayloadAction<string>) {
            state.firstname = action.payload;
        },
        setLastname(state, action: PayloadAction<string>) {
            state.lastname = action.payload;
        },
        setAvatarData(state, action: PayloadAction<File | null>) {
            state.avatarData = action.payload;
        },
    },
});

export default registrationSlice.reducer;