import React from 'react'
import styled from 'styled-components'
import ConnectWalletButton from "./ConnectWalletButton"

const Header = styled.div`
position:relative;
    width: 100%;
    background-color: white;
`
const LinksContainer = styled.div`

`
const ConnectWalletButtonContainer = styled.div`

`
const NavigationLinksContainer = styled.div`

`
const SearchButtonContainer = styled.div`

`


export default function index() {
    return (
        <Header>
            <LinksContainer>

            </LinksContainer>
            <ConnectWalletButtonContainer>

            </ConnectWalletButtonContainer>
            <NavigationLinksContainer>

            </NavigationLinksContainer>
            <SearchButtonContainer>

            </SearchButtonContainer>

        </Header>
    )
}
