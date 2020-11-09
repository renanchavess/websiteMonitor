import { model, Schema, Document } from "mongoose";
import { SiteAviableHistoryInterface } from "../interfaces/siteAviableHistory.interface";

interface SiteAviableHistory extends SiteAviableHistoryInterface, Document {
    
}

const SiteAviableHistorySchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    aviable: {
        type: Boolean,
        required: true
    },
    site: { type: Schema.Types.ObjectId, ref: 'Site'}
});
export default model<SiteAviableHistory>('SiteAviableHistory', SiteAviableHistorySchema);