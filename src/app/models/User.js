import bcrypt from 'bcrypt';
const { Schema, model, models } = require('mongoose');

const UserSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: {
            type: String,
            required: true,
            validate: (pass) => {
                if (!pass?.length || pass?.length < 5) {
                    new Error('Password must be at least 5 characters');
                }
            },
        },
    },
    { timestamps: true },
);

UserSchema.pre('save', (next, ...rest) => {
    console.log(rest);
    next();
});

UserSchema.post('validate', function (user) {
    const notHashedPass = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPass, salt);
    console.log({ arguments });
});

export const User = models?.User || model('User', UserSchema);
