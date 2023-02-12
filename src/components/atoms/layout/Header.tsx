import styled from "styled-components"
import { Link } from "react-router-dom";
import { memo, FC } from "react";

export const Header: FC = memo(() => {
  
    return (
        <SMenuBox>
          <MenuLink toLink="/home/link1">リンク1</MenuLink>
          <MenuLink toLink="/home/link2">リンク2</MenuLink>
        </SMenuBox>
    );
});

const MenuLink = (props) => {
  const { toLink, children } = props
  return (
      <SHeader>
        <Link to={{ pathname: `${ toLink }`}}>{ children }</Link>
      </SHeader>
  );
};

const SMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 0;
  background-color: #11999e;
`

const SHeader = styled.header`
  color: #fff;
  padding-left: 16px;
`
