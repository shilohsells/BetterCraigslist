import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon } from
'lucide-react';
import { categorySubcategories } from '../data/listings';
interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (postData: any) => void;
}
export function CreatePostModal({
  isOpen,
  onClose,
  onSubmit
}: CreatePostModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    title: '',
    description: '',
    price: '',
    location: '',
    image: ''
  });
  // Reset state when modal closes or opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSubmitting(false);
      setIsSuccess(false);
      setFormData({
        category: '',
        subcategory: '',
        title: '',
        description: '',
        price: '',
        location: '',
        image: ''
      });
    }
  }, [isOpen]);
  if (!isOpen) return null;
  const categories = Object.keys(categorySubcategories);
  const subcategories = formData.category ?
  categorySubcategories[formData.category] :
  [];
  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));
  const isStepValid = () => {
    if (step === 1) return !!formData.category;
    if (step === 2) return !!formData.subcategory;
    if (step === 3)
    return (
      !!formData.title.trim() &&
      !!formData.description.trim() &&
      !!formData.location.trim());

    return true;
  };
  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Wait a moment to show success state before closing
      setTimeout(() => {
        onSubmit(formData);
      }, 1500);
    }, 800);
  };
  const renderStepContent = () => {
    if (isSuccess) {
      return (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          className="flex flex-col items-center justify-center py-16 text-center">
          
          <CheckCircleIcon size={64} className="text-green-500 mb-4" />
          <h3
            className="text-2xl font-semibold text-gray-900 mb-2"
            style={{
              fontFamily: "'Playfair Display', serif"
            }}>
            
            Post Created!
          </h3>
          <p className="text-gray-600">
            Your listing has been published successfully.
          </p>
        </motion.div>);

    }
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -20
            }}
            className="space-y-4">
            
            <h4 className="text-lg font-medium text-gray-900 mb-4">
              What type of posting is this?
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {categories.map((cat) =>
              <button
                key={cat}
                onClick={() => {
                  setFormData({
                    ...formData,
                    category: cat,
                    subcategory: ''
                  });
                  handleNext();
                }}
                className={`p-4 rounded-xl border-2 text-center capitalize transition-all duration-200 ${formData.category === cat ? 'border-purple-900 bg-purple-50 text-[#7b64b0] font-medium' : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 text-gray-700'}`}>
                
                  {cat}
                </button>
              )}
            </div>
          </motion.div>);

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -20
            }}
            className="space-y-4">
            
            <h4 className="text-lg font-medium text-gray-900 mb-4">
              Choose a subcategory
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {subcategories.map((sub) =>
              <button
                key={sub}
                onClick={() => {
                  setFormData({
                    ...formData,
                    subcategory: sub
                  });
                  handleNext();
                }}
                className={`p-3 rounded-xl border-2 text-center capitalize transition-all duration-200 ${formData.subcategory === sub ? 'border-purple-900 bg-purple-50 text-[#7b64b0] font-medium' : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 text-gray-700'}`}>
                
                  {sub}
                </button>
              )}
            </div>
          </motion.div>);

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -20
            }}
            className="space-y-5">
            
            <h4 className="text-lg font-medium text-gray-900 mb-2">
              Listing Details
            </h4>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value
                })
                }
                placeholder="e.g., Vintage Leather Couch"
                className="w-full border-2 border-gray-300 px-4 py-2.5 rounded-lg focus:border-purple-900 focus:ring-2 focus:ring-purple-200 outline-none transition-all" />
              
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (Optional)
                </label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: e.target.value
                  })
                  }
                  placeholder="e.g., $450"
                  className="w-full border-2 border-gray-300 px-4 py-2.5 rounded-lg focus:border-purple-900 focus:ring-2 focus:ring-purple-200 outline-none transition-all" />
                
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: e.target.value
                  })
                  }
                  placeholder="e.g., Midtown"
                  className="w-full border-2 border-gray-300 px-4 py-2.5 rounded-lg focus:border-purple-900 focus:ring-2 focus:ring-purple-200 outline-none transition-all" />
                
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value
                })
                }
                placeholder="Describe your listing..."
                rows={4}
                className="w-full border-2 border-gray-300 px-4 py-2.5 rounded-lg focus:border-purple-900 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none" />
              
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL (Optional)
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  image: e.target.value
                })
                }
                placeholder="https://example.com/image.jpg"
                className="w-full border-2 border-gray-300 px-4 py-2.5 rounded-lg focus:border-purple-900 focus:ring-2 focus:ring-purple-200 outline-none transition-all" />
              
            </div>
          </motion.div>);

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -20
            }}
            className="space-y-4">
            
            <h4 className="text-lg font-medium text-gray-900 mb-4">
              Review & Confirm
            </h4>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-6">
                <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  {formData.image ?
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-full object-cover" /> :


                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      No Image
                    </div>
                  }
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {formData.title}
                    </h3>
                    {formData.price &&
                    <span className="text-lg font-medium text-green-700">
                        {formData.price}
                      </span>
                    }
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span className="capitalize">{formData.category}</span>
                    <span>•</span>
                    <span className="capitalize">{formData.subcategory}</span>
                    <span>•</span>
                    <span>{formData.location}</span>
                  </div>
                  <p className="text-gray-700 whitespace-pre-wrap text-sm">
                    {formData.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>);

      default:
        return null;
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={onClose}>
        
        <motion.div
          initial={{
            scale: 0.95,
            opacity: 0,
            y: 20
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0
          }}
          exit={{
            scale: 0.95,
            opacity: 0,
            y: 20
          }}
          transition={{
            type: 'spring',
            duration: 0.5
          }}
          className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}>
          
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-white z-10">
            <div>
              <h3
                className="text-2xl font-semibold text-[#7b64b0]"
                style={{
                  fontFamily: "'Playfair Display', serif"
                }}>
                
                Create a Post
              </h3>
              {!isSuccess &&
              <div className="flex items-center gap-2 mt-2">
                  {[1, 2, 3, 4].map((i) =>
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-purple-900' : i < step ? 'w-4 bg-purple-300' : 'w-4 bg-gray-200'}`} />

                )}
                </div>
              }
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100">
              
              <XIcon size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1 bg-white">
            {renderStepContent()}
          </div>

          {/* Footer */}
          {!isSuccess &&
          <div className="p-6 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
              <button
              onClick={handleBack}
              disabled={step === 1 || isSubmitting}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${step === 1 || isSubmitting ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'}`}>
              
                <ArrowLeftIcon size={18} />
                Back
              </button>

              {step < 4 ?
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-colors ${!isStepValid() ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-purple-900 text-white hover:bg-purple-800'}`}>
              
                  Next
                  <ArrowRightIcon size={18} />
                </button> :

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`flex items-center gap-2 px-8 py-2.5 rounded-lg font-medium transition-colors ${isSubmitting ? 'bg-purple-400 text-white cursor-wait' : 'bg-purple-900 text-white hover:bg-purple-800'}`}>
              
                  {isSubmitting ? 'Publishing...' : 'Publish Post'}
                </button>
            }
            </div>
          }
        </motion.div>
      </motion.div>
    </AnimatePresence>);

}