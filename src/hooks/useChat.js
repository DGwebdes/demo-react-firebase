import { useState, useEffect } from "react";
import { ref, query, orderByChild, limitToLast, onChildAdded, push, off, update, serverTimestamp, startAt } from 'firebase/database'
import { database } from "../utils/firebase"
import { MAX_MESSAGES } from '../utils/constants'

export function useChat(profile) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const window24 = Date.now() - (24 * 60 * 60 * 1000);

        const messagesRef = ref(database, "messages");
        const q = query(messagesRef, orderByChild("timestamp"), startAt(window24), limitToLast(MAX_MESSAGES))

        const unsubscribe = onChildAdded(q, (snap) => {
            const msg = {id: snap.key, ...snap.val() }

            setMessages(prev => {
                const next = [...prev, msg];
                return next.length > MAX_MESSAGES ? next.slice(-MAX_MESSAGES) : next
            })
        })

        return () => off(q, "child_added", unsubscribe)

    }, [])

    async function sendMessage(text) {
        if (!profile ||  !text.trim()) return

        const newRef = push(ref(database, "messages"));
        

        try {
            await update(ref(database), {
                [`messages/${newRef.key}`]: {
                    uid: profile.uid,
                    user: profile.displayName,
                    color: profile.color,
                    avatar: profile.avatar,
                    text: text.trim(),
                    timestamp: serverTimestamp(),
                },
                [`userActivity/${profile.uid}/lastMessage`]: serverTimestamp(),
            })

        } catch (error) {
            console.error("send error: ", error)
            throw error
        }


    }

    return { messages, sendMessage }
}