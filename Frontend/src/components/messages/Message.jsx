const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' />
				</div>
			</div>
			<div className={`chat-bubble text-white bg-blue-500`}>Hello, My name is Shail</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>13:17</div>
    </div>
  )
}

export default Message