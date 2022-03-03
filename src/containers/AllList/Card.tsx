import React from "react";
import { Txt12, Txt14, Txt16 } from "@components/common/Text";
import {
  ItemContainer,
  ItemImageCard,
  ItemImageWrapper,
  ItemBgImage,
  ContentContainer,
  ContentDiscountPercent,
  ContentDiscountOriginPrice,
  ContentPriceUnit,
} from "./Style";

const ProductCard = ({
  name,
  price,
  discountPer,
  discountedPrice,
  image,
  onPage
}: {
  name: string;
  price: number;
  discountPer?: number;
  discountedPrice?: number;
  image?: string;
  onPage: () => void;
}) => (
  <ItemContainer onClick={onPage}>
    <ItemImageWrapper>
      <ItemImageCard>
        <ItemBgImage src={image || ''} />
      </ItemImageCard>
    </ItemImageWrapper>
    <ContentContainer>
      <Txt14>{name}</Txt14>
      {!!discountedPrice && (
        <Txt12>
          <ContentDiscountPercent>{discountPer}%</ContentDiscountPercent>
          <ContentDiscountOriginPrice>{price}</ContentDiscountOriginPrice>
        </Txt12>
      )}
      <Txt16>
        <b>{discountedPrice ? discountedPrice : price}</b>
        <ContentPriceUnit>원</ContentPriceUnit>
      </Txt16>
    </ContentContainer>
  </ItemContainer>
);

export default ProductCard;
