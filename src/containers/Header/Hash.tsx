import React, { useCallback } from "react";
import { TabType, useProductTabState } from "./hooks";
import { CategoryContainer, CategoryTxt, CategoryWrapper } from "./Style";

const PageHashController = () => {
  const { tab, setTab } = useProductTabState();

  const onTabAction = useCallback((tab: TabType) => {
      setTab(tab);
      // page scroll
  }, [])

  return (
    <ProductHashHeader
      activeTab={tab}
      onTab={onTabAction}
    />
  );
};

const ProductHashHeader = ({
  activeTab,
  onTab,
}: {
  activeTab: TabType;
  onTab: (tab: TabType) => void;
}) => (
  <CategoryContainer>
    <CategoryWrapper>
      <CategoryTxt
        active={activeTab === "information"}
        onClick={() => {
          onTab("information");
        }}
      >
        상품 설명
      </CategoryTxt>
    </CategoryWrapper>
    <CategoryWrapper>
      <CategoryTxt
        active={activeTab === "introduce"}
        onClick={() => {
          onTab("introduce");
        }}
      >
        상세 정보
      </CategoryTxt>
    </CategoryWrapper>
    <CategoryWrapper>
      <CategoryTxt
        active={activeTab === "review"}
        onClick={() => {
          onTab("review");
        }}
      >
        상품 후기
      </CategoryTxt>
    </CategoryWrapper>
    <CategoryWrapper>
      <CategoryTxt
        active={activeTab === "qna"}
        onClick={() => {
          onTab("qna");
        }}
      >
        상품 문의
      </CategoryTxt>
    </CategoryWrapper>
  </CategoryContainer>
);

export default PageHashController;
