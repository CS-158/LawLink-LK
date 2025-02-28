import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import dayjs from "dayjs";
import { Heart, ThumbsUp, Reply, MoreHorizontal, Trash } from "lucide-react";

const Message = ({ message, onReply, onDelete }) => {
    const { userData, lawyerData } = useContext(AppContext);
    const [showOptions, setShowOptions] = useState(false);
    const [reaction, setReaction] = useState(message.reaction || null);
    const [reactionTime, setReactionTime] = useState(null);

    const currentUserId = userData?._id || lawyerData?._id || "defaultUserId";
    const isOwnMessage = message.senderId === currentUserId;
    
    const formatTime = (time) => {
        const messageDate = dayjs(time);
        const today = dayjs();
        
        if (messageDate.isSame(today, 'day')) {
            return messageDate.format("h:mm A");
        }
        
        if (messageDate.isSame(today.subtract(1, 'day'), 'day')) {
            return "Yesterday, " + messageDate.format("h:mm A");
        }
        
        return messageDate.format("MMM D, h:mm A");
    };

    const formatReactionTime = (seconds) => {
        if (seconds < 60) {
            return `${seconds}s`;
        } else if (seconds < 3600) {
            return `${Math.floor(seconds / 60)}m`;
        } else if (seconds < 86400) {
            return `${Math.floor(seconds / 3600)}h`;
        } else {
            return `${Math.floor(seconds / 86400)}d`;
        }
    };

    const handleReaction = (type) => {
        const now = dayjs();
        const messageTime = dayjs(message.createdAt);
        const timeDiff = now.diff(messageTime, 'second');

        setReaction(reaction === type ? null : type);
        setReactionTime(timeDiff);

        // Here you would also update the reaction in your backend
    };

    return (
        <div className={`group flex items-end mb-3 ${isOwnMessage ? "justify-end" : "justify-start"}`}>
            {!isOwnMessage && (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mr-2 overflow-hidden">
                    {message.senderAvatar ? (
                        <img 
                            src={message.senderAvatar} 
                            alt="Avatar" 
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-xs font-bold">
                            {message.senderName?.charAt(0) || "U"}
                        </div>
                    )}
                </div>
            )}
            
            <div className="flex flex-col max-w-[70%]">
                {!isOwnMessage && message.senderName && (
                    <span className="text-xs text-gray-500 mb-1 ml-1">{message.senderName}</span>
                )}
                
                <div
                    className={`relative px-4 py-2 rounded-2xl ${
                        isOwnMessage
                            ? "bg-blue-500 text-white rounded-br-none"
                            : "bg-gray-100 text-gray-800 rounded-bl-none"
                    } shadow-sm`}
                    onMouseEnter={() => setShowOptions(true)}
                    onMouseLeave={() => setShowOptions(false)}
                >
                    <div className="message-content text-sm whitespace-pre-wrap">
                        {message.replyTo && (
                            <div className={`text-xs p-1.5 mb-1.5 rounded border-l-2 ${
                                isOwnMessage ? "bg-blue-600 border-blue-300" : "bg-gray-200 border-gray-400"
                            }`}>
                                <p className="truncate">{message.replyTo.message}</p>
                            </div>
                        )}
                        {message.message}
                    </div>
                    
                    <div className={`flex items-center text-xs mt-1 ${
                        isOwnMessage ? "text-blue-100" : "text-gray-500"
                    }`}>
                        {formatTime(message.createdAt)}
                        {isOwnMessage && (
                            <span className="ml-1">
                                {message.isPending ? (
                                    <span className="animate-spin">⟳</span>
                                ) : (
                                    <>
                                        <span className={message.isDelivered ? "opacity-100" : "opacity-50"}>✓</span>
                                        {message.isRead && <span className="ml-0.5">✓</span>}
                                    </>
                                )}
                            </span>
                        )}
                    </div>
                    
                    {showOptions && (
                        <div className={`absolute ${isOwnMessage ? 'left-0' : 'right-0'} -top-8 bg-white shadow-md rounded-full p-1 flex gap-1`}>
                            <button 
                                onClick={() => handleReaction('like')} 
                                className={`p-1 rounded-full hover:bg-gray-100 ${reaction === 'like' ? 'bg-blue-50 text-blue-500' : ''}`}
                            >
                                <ThumbsUp size={14} />
                            </button>
                            <button 
                                onClick={() => handleReaction('love')} 
                                className={`p-1 rounded-full hover:bg-gray-100 ${reaction === 'love' ? 'bg-red-50 text-red-500' : ''}`}
                            >
                                <Heart size={14} />
                            </button>
                            <button 
                                onClick={() => onReply(message)} 
                                className="p-1 rounded-full hover:bg-gray-100"
                            >
                                <Reply size={14} />
                            </button>
                            {isOwnMessage && (
                                <button 
                                    onClick={() => onDelete(message._id)} 
                                    className="p-1 rounded-full hover:bg-gray-100 text-red-500"
                                >
                                    <Trash size={14} />
                                </button>
                            )}
                        </div>
                    )}
                </div>
                
                {reactionTime !== null && (
                    <div className={`text-xs mt-1 ${isOwnMessage ? 'text-blue-100' : 'text-gray-500'}`}>
                        Reacted after {formatReactionTime(reactionTime)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Message;