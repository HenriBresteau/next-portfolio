import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 400ms ease;
  }
  &:hover img {
    transform: rotate(380deg);
  }
`
const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={24} height={24} alt="logo"></Image>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="calibri"
            fontWeight="bold"
            ml={3}
            fontSize="1.25rem"
          >
            Henri Bresteau
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}
export default Logo
