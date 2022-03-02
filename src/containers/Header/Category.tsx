import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { CategoryContainer, CategoryTxt, CategoryWrapper } from './Style';

const HeaderCategoryContoller = () => {
    const route = useRouter();
    const { ca_num } = route.query;

    const onRoute = useCallback((path: string, ca_num?: string) => {
        if (!ca_num) route.push(path)
        else route.push({ pathname: path, query: { ca_num }});
    }, [])

    return (
        <CategoryContainer>
            <CategoryItem category='홈' onLink={() => { onRoute('/'); }} active={!ca_num} />
            <CategoryItem category='다래' onLink={() => { onRoute('/category', '1'); }} active={ca_num == '1'} />
            <CategoryItem category='사과' onLink={() => { onRoute('/category', '2'); }} active={ca_num == '2'} />
            <CategoryItem category='조경' onLink={() => { onRoute('/category', '3'); }} active={ca_num == '3'} />
        </CategoryContainer>
    )
}

const CategoryItem = ({ category, onLink, active }: { category: string; onLink: () => void; active?: boolean; }) => (
    <CategoryWrapper onClick={onLink}>
        <CategoryTxt active={active}>{ category }</CategoryTxt>
    </CategoryWrapper>
)

export default HeaderCategoryContoller;