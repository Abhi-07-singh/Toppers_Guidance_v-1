import React, { useEffect } from 'react';
// import { ZoomMtg } from '@zoomus/websdk';

const LiveChat = ({payload}) => {
  useEffect(async()=>{
    const{ZoomMtg} = await import ("@zoomus/websdk");
    ZoomMtg.setZoomJSLib('https://source.zoom.us/lib','/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();

    ZoomMtg.generateSDKSignature({
      meetingNumber: payload.meetingNumber,
      role: payload.role,
      sdkKey: payload.sdkKey,
      sdkSecret: payload.sdkSecret,
      success: function(signature){
        ZoomMtg.init({
          leaveUrl: payload.leaveUrl,
          success: function(data){
            ZoomMtg.join({
              meetingNumber: payload.meetingNumber,
              signature: signature.result,
              sdkKey: payload.sdkKey,
              userName: payload.userName,
              userEmail: payload.userEmail,
              passWord: payload.passWord,
              tk: "",
              success:function(){
                console.log('-- Joined --');
              },
              error:function(error){
                console.log(error);
              }
            })
          },
          error:function(error){
            console.log(error);
          }
        })

      },
      error: function(error){
        console.log(error);
      }
    })
  }, [])
  return (
    <>
      <link type='text/css' rel='stylesheet' href='https://source.zoom.us/2.14.0/css/bootstrap.css'></link>
      <link type='text/css' rel='stylesheet' href='https://source.zoom.us/2.14.0/css/react-select.css'></link>
    </>
  )
}

export default LiveChat;
