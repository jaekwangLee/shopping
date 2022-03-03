import { useState } from "react"

export type TabType = 'information' | 'introduce' | 'review' | 'qna';

export function useProductTabState() {
    const [tab, setTab] = useState<TabType>('information')    
    return { tab, setTab }
}