import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

export const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    'b1be297b-a652-4f76-8e57-a3f7b841be34',
    props.user.username,
    props.user.secret
  )
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  )
}

export default ChatsPage