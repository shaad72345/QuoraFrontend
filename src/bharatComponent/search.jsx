import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputLeftElement, Modal, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'

function SearchBox() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>

            <InputGroup onClick={onOpen} size='sm' w='40%' marginRight='10px'>
                <InputLeftElement
                    pointerEvents="none"
                    color='gray'
                    fontSize='0.9em'
                    children={<SearchIcon />}
                />
                <Input borderRadius='20px' size='sm' placeholder='Search Quora' w={{base:'25%', md:'320px'}} />
            </InputGroup>

            <Modal onClose={onClose} isOpen={isOpen} >
                <ModalOverlay />
                <ModalContent top={"-3.34rem"} right={"-6.8rem"} >
                    <InputGroup size='sm' borderRadius='1px' w='50%'>
                        <InputLeftElement
                            pointerEvents="none"
                            color='gray'
                            fontSize='0.9em'
                            children={<SearchIcon />}

                        />
                        <Input borderRadius='1px' placeholder='Search Quora' bg={"white"} />
                    </InputGroup>
                </ModalContent>
            </Modal>
        </>
    )
}

export { SearchBox }