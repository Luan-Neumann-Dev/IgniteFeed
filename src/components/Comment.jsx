import styles from './Comment.module.css'
import { Avatar } from './Avatar'

import {Trash, ThumbsUp} from '@phosphor-icons/react'
import { useState } from 'react';

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Luan-Neumann-Dev.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luan Henrique Neumann</strong>
                            <time title="30 de Abril às 15:15h" dateTime="2025-04-30 15:15:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}