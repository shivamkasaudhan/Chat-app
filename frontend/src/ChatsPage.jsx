import { PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
           <PrettyChatWindow
                projectId='138f2ba9-f071-41ec-a9a9-109f2cc30c31'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage;