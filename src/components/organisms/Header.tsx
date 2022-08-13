import { Box,  Flex, Heading,  useDisclosure } from '@chakra-ui/react';
import React, { FC, memo, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MenuIconButton from '../atoms/MenuIconButton';

import MenuDrawer from '../molecules/MenuDrawer';


const Header:FC = memo(() => {
    //drawerを管理するstate
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const navigate = useNavigate();
    const onClickHome = useCallback(() => {
        navigate('/home');
        onClose();
    // eslint-disable-next-line
    }, []);
    const onClickMypage = useCallback(() => {
        navigate('/Mypage');
        onClose();
     // eslint-disable-next-line
    }, []);

    return (
    <>
        <Flex
        as='nav'
        bg='teal.500'
        color='gray.50'
        align='center'
        justify='space-between'
        padding={{ base:3,md:5 }}        
        >   
        <Flex align='center' as='a' mr={8} _hover={{ cursor:'pointer' }} onClick={onClickHome} >
            <Heading as='h1' fontSize={{base: 'md', md: 'lg'}}>
            Yakurt
        </Heading>
        </Flex>     
        <Flex align='center' fontSize='sm' flexGrow={2} display={{ base:'none', md:'flex' }} >
            <Box pr={4}>
                <Link to='/home'>ホーム</Link>
            </Box>
            <Box pr={4}>
                <Link to='/mypage' >マイページ</Link>
            </Box>         
            </Flex>
            <MenuIconButton onOpen={onOpen} />
        </Flex>
            <MenuDrawer
                onClose={onClose}
                isOpen={isOpen}
                onClickHome={onClickHome}
                onClickMypage={onClickMypage}
            />
    </>
    )
});

export default Header;
