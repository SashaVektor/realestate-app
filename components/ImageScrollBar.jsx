import React, { useContext } from 'react'
import Image from 'next/image'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)

    return (
        <Flex justifyContent="center" alignItems="center" mr="1">
            <FaArrowAltCircleLeft fontSize={26} 
            onClick={() => scrollPrev()} style={{ cursor: "pointer" }} />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)

    return (
        <Flex justifyContent="center" alignItems="center" mr="1">
            <FaArrowAltCircleRight fontSize={26} 
            onClick={() => scrollNext()} style={{ cursor: "pointer" }} />
        </Flex>
    )
}


const ImageScrollBar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}
        style={{ overflow: 'hidden' }}>
        {data?.map((image) => (
            <Box w="910px" itemID={image.id} key={image.id} overflow="hidden" p="1">
                <Image placeholder="blur" blurDataURL={image.url} src={image.url} width={1000} 
                height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" alt='image'/>
            </Box>
        ))}
    </ScrollMenu>
)

export default ImageScrollBar
