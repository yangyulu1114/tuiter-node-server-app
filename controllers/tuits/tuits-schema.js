import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    replies: Number,
    retuits: Number,
    image: String,
    topic: String,
    time: String,
    username: String,
    handle: String
}, {collection: 'tuits'});
export default schema;