import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react'
import React, { FC, memo } from 'react'

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickMypage: () => void;
}

const MenuDrawer: FC<Props> = memo((props) => {
    const { onClose, isOpen ,onClickHome, onClickMypage} = props;

  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerBody>
                    <Button w='100%' onClick={onClickHome}>ホーム</Button> 
                    <Button w='100%' onClick={onClickMypage}>マイページ</Button> 
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay> 
    </Drawer>
  )
})

export default MenuDrawer
