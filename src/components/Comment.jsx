import styles from './Comment.module.css'
import { Avatar } from './Avatar'

import {Trash, ThumbsUp} from '@phosphor-icons/react'

export function Comment(){
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

                        <button>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}