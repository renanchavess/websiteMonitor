import { model, Schema, Document } from "mongoose";
import { SiteInterface } from "../interfaces/site.interface";
import bcrypt from 'bcrypt';

interface SiteModel extends SiteInterface, Document {
    checkPassword(password: string): Promise<boolean>;
}

const SiteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
});

SiteSchema.methods.checkPassword = function (password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
}
export default model<SiteModel>('Site', SiteSchema);