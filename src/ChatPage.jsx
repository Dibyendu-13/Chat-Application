import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced"
const  ChatsPage=(props)=>{
    const chatProps=useMultiChatLogic('5a7645bb-b3ab-4f67-841b-a639d5743dff',props.user.username,props.user.secret)
    return <div style={{height:'100vh'}}>
     <MultiChatSocket  {...chatProps}/>
     <MultiChatWindow {...chatProps} style={{height:'100%'}}/>

    </div>
}


export default ChatsPage