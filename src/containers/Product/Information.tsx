import React, { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { ShareAltOutlined } from '@ant-design/icons'

import { Txt14, Txt20 } from "@components/common/Text";
import { useProductState } from "./hooks";
import { ProductInfoContainer, ProductInfoWrapper, ProductImageWrapper, ProductImageThumbnail, ProductShareAndPriceWrapper } from "./Style";
import { ContentDiscountOriginPrice, ContentDiscountPercent, ContentPriceUnit } from "@containers/AllList/Style";
type ProductFactors = {
    name: string;
    description: string;
    price: number;
    discountPer?: number;
    discountedPrice?: number;
    photo?: string;
};

const ProductInformationController = () => {
    const { state, fetchItem } = useProductState();
    const route = useRouter();

    useLayoutEffect(() => {
        if (route.query && route.query.item_no && typeof route.query.item_no === "string") {
            fetchItem(route.query.item_no);
        } else {
            route.back();
        }
    }, []);

    if (!state) return <></>;

    return (
        <>
            <ProductInfo {...state} />
        </>
    );
};

const ProductInfo = ({ name, photo, description, price, discountPer, discountedPrice }: ProductFactors) => (
    <ProductInfoContainer>
        <ProductImageWrapper>{!!photo && <ProductImageThumbnail src={photo} />}</ProductImageWrapper>
        <ProductInfoWrapper>
            <Txt20 bold>{name}</Txt20>
            <Txt14 style={{ color: "gray" }}>{description}</Txt14>
            <ProductShareAndPriceWrapper>
                    <div>
                        {!!discountedPrice && (
                            <>
                                <ContentDiscountPercent>{discountPer}%</ContentDiscountPercent>
                                <ContentDiscountOriginPrice>{price}<ContentPriceUnit style={{ color: 'gray'}}>원</ContentPriceUnit></ContentDiscountOriginPrice>
                            </>
                        )}
                        <Txt20>{discountedPrice ? discountedPrice : price }<ContentPriceUnit>원</ContentPriceUnit></Txt20>
                    </div>
                    <ShareAltOutlined style={{ cursor: 'pointer' }} />
            </ProductShareAndPriceWrapper>
        </ProductInfoWrapper>
    </ProductInfoContainer>
);

export default ProductInformationController;
