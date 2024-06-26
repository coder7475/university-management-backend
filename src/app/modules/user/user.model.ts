import { model, Schema } from 'mongoose';
import IUser from './user.interface';

const userSchema = new Schema<IUser>(
    {
        id: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        needsPasswordChange: {
            type: Boolean,
            default: true,
        },
        role: {
            type: String,
            enum: ['student', 'faculty', 'admin'],
        },
        status: {
            type: String,
            enum: ['in-progress', 'blocked'],
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    // Default - createdAt, updated At
    {
        timestamps: true,
    },
);

export const User = model<IUser>('User', userSchema);
