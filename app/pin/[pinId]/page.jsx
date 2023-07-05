"use client"
import React, { useEffect, useState } from 'react'
import PinImage from './../../components/PinDetail/PinImage'
import PinInfo from './../../components/PinDetail/PinInfo'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import app from '@/app/Shared/firebaseConfig'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
function PinDetail({params}) {
  const router=useRouter();
  const db=getFirestore(app);
  const [pinDetail,setPinDetail]=useState([]);
  useEffect(()=>{
    getPinDetail();
  },[])
 const getPinDetail=async()=>{
      const docRef = doc(db, 'pinterest-post',params.pinId );
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
       
        setPinDetail(docSnap.data())
      } else {
       
        console.log("No such document!");
      }
  }
  return (
    <>
   {pinDetail? 
   <div className=' bg-white p-3 md:p-12 rounded-2xl md:px-24 lg:px-36'>
       <HiArrowSmallLeft className='text-[60px] font-bold ml-[-50px] 
       cursor-pointer hover:bg-gray-200 rounded-full p-2 '
       onClick={()=>router.back()}/>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-10 shadow-lg
      rounded-2xl p-3 md:p-7 lg:p-12 xl:pd-16 ' 
      >
     
        <PinImage pinDetail={pinDetail} />
        <div className="">
        <PinInfo pinDetail={pinDetail}/>
        </div>
        </div>
    </div>:null}
    </>
  )
}

export default PinDetail