import { Avatar } from '@mui/material'
import React, { memo } from 'react'

const Comment = ({productComment}) => {

    return (
        <div>
            {
                productComment.map((comment) => (
                    <div key={comment.id} className="flex flex-row px-4 my-2 border-b-2">
                        <div className="w-fit">
                            <Avatar alt={comment.user_name} src={comment.user_img} />
                        </div>
                        <div className="w-fit max-w-xs break-normal mx-3 flex flex-col items-start">
                            <div>
                                <span className="text-slate-600 text-lg">{comment.user_name}</span>
                            </div>
                            <div>
                                <span className="text-slate-400 text-xs">{comment.createdAt}</span>
                            </div>
                            <div>
                                <span className="text-slate-500 text-md">{comment.content}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default memo(Comment);