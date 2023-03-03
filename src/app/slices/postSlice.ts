import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPost {
    postId: string;
    userId: string;
    username: string;
    src: Array<string>;
    caption: string;
    likes: Array<string>;
    comments: IComment[];
    dateCreated: number;
}

interface INewPost {
    photos: FileList | null;
    preview: any;
    caption: string;
}

interface IComment {
    username: string;
    text: string;
    dateCreated: number;
}

interface IPostState {
    newPost: INewPost,
    userPosts: IPost[],
    followPosts: IPost[],
}

const initialState: IPostState = {
    newPost: {
        photos: null,
        preview: null,
        caption: '',
    },
    userPosts: [],
    followPosts: [],
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setCaption(state, action: PayloadAction<string>) {
            state.newPost.caption = action.payload;
        },
        setPhotos(state, action: PayloadAction<FileList | null>) {
            state.newPost.photos = action.payload;
        },
        setPreview(state, action: PayloadAction<any>) {
            state.newPost.preview = action.payload;
        },
        setResetNewPost(state) {
            state.newPost.caption = '';
            state.newPost.photos = null;
            state.newPost.preview = null;
        }
    },
});

export default postSlice.reducer;