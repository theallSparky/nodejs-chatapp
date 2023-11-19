import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId='b1be297b-a652-4f76-8e57-a3f7b841be34'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  )
}

export default ChatsPage