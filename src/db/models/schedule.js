import { model, Schema } from 'mongoose';

const scheduleSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
      unique: true,
    },
    isWorking: {
      type: Boolean,
      required: true,
    },
    availableSlots: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
    required: false,
  }
);


export const ScheduleCollection = model('schedule', scheduleSchema);

