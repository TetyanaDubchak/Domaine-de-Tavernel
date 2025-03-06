import { create } from "zustand";

export const usePaymentStore = create((set) => ({

    isPaymentPageOpen: false,
    
    openPaymentPage: () => set({ isPaymentPageOpen: true}),
    closePaymentPage: () => set({ isPaymentPageOpen: false }),
}))

export const usePayLinkStore = create((set) => ({

    isContactActive: true,
    isDeliveryActive: false,
    isPaymentActive: false,

    wasContactSent: true,
    wasDeliverySent: false,
    wasPaymentSent: false,

    setContactActive: () => set({ isContactActive: true, isDeliveryActive:false,isPaymentActive:false }),
    setContactDisactive: () => set({ isContactActive: false }),
    setDeliveryActive: () => set({ isDeliveryActive: true,isPaymentActive:false, isContactActive:false }),
    setDeliveryDisactive: () => set({ isDeliveryActive: false}),
    setPaymentActive: () => set({ isPaymentActive: true,isDeliveryActive:false, isContactActive:false }),
    setPaymentDisactive: () => set({ isPaymentActive: false }),
    setContactSent: () => set({ wasContactSent: true }),
    setDeliverySent: () => set({ wasDeliverySent: true }),
    setPaymentSent: () => set({ wasPaymentSent:true }),
}))