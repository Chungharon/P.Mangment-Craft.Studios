import mongoose from "mongoose";
const { Schema } = mongoose;
// Gig Schema
const gigSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 80
  },
  description: {
    type: String,
    required: true,
    maxlength: 1200
  },
  category: {
    type: String,
    required: true,
    enum: ['graphics-design', 'digital-marketing', 'writing-translation', 'video-animation', 'music-audio', 'programming-tech', 'business', 'lifestyle']
  },
  subcategory: String,
  tags: [String],
  images: [String],
  videos: [String],
  packages: [{
    name: {
      type: String,
      required: true,
      enum: ['basic', 'standard', 'premium']
    },
    description: String,
    deliveryTime: {
      type: Number,
      required: true
    },
    revisions: {
      type: Number,
      default: 1
    },
    price: {
      type: Number,
      required: true
    },
    features: {
        type: [String],
        required: false,
    },
    sales: {
        type: Number,
        default: 0,
    }

  }],
  extras: [{
    name: String,
    description: String,
    price: Number,
    deliveryTime: Number
  }],
  requirements: [{
    question: String,
    type: {
      type: String,
      enum: ['text', 'file', 'multiple-choice'],
      default: 'text'
    },
    choices: [String],
    required: Boolean
  }],
  stats: {
    views: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    orders: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isApproved: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model("Gig", gigSchema);