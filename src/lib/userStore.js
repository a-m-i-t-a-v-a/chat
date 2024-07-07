import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

export const useUserStore=create((set)=>({
    currentUser:null,
    isLoading:true,
    fetchUserInfo: async (uid)=>{
        if(!uid) return set({currentUser:null,isLoading:false});
        try{
            const userRef=doc(db,'users',uid);
            const userDoc=await getDoc(userRef)
            if(userDoc.exists()){
                set({currentUser:userDoc.data(),isLoading:false})
            }
        }catch(err){
            return set({currentUser:null,isLoading:false});
        }
    }  
}))