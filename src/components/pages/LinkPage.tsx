import styled from "styled-components"
import { memo, FC } from "react";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import Sidebar from "../atoms/layout/Sidebar";

type Props = {
  contents: string;
}

export const LinkPage: FC<Props> = memo((props) => {
    const { contents } = props;
    return (
        <>
          <Header />
          <Sidebar />
          <Contents pagecontents={ contents }/>
          <Footer />
        </>
      );
});

const Contents = (props) => {
  const { pagecontents } = props;
  return (
    <Sdiv>{ pagecontents }</Sdiv>
  );
};

const Sdiv = styled.div`
  margin-left: 300px;
`