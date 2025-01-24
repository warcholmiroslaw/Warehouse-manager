import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Button, Flex,
} from '@chakra-ui/react'
import React, {useState} from "react";


const ProductList =({products}) => {
    const [hoveredRow, setHoveredRow] = useState(null);

    return (
    <TableContainer
        maxWidth="100%"
        maxHeight={{base: "80vh", md: "80vh", lg: "78vh"}}
        borderRadius={{base:2 , md:4, lg:8}}
        overflowY="auto"

        // remove scrollbar
        sx={
            {
                '::-webkit-scrollbar':{
                    display:'none'
                }
            }
        }
    >
        <Table variant="unstyled"
               color="black"
        >
            <Thead
                position="sticky"
                height="10vh"
                top="0"
                zIndex="1"
                boxShadow="xl"
                bg="#FFC30D"
            >
                <Tr
                  boxShadow="md"
                  mb={2}
                  boxSizing="border-box"
                >
                    <Th width={{base:"10%", md:"10%", lg:"10%"}}>
                        ID
                    </Th>

                    <Th width={{base:"20%", md:"20%", lg:"20%"}}>
                        Name
                    </Th>
                    <Th width={{base:"40%", md:"30%", lg:"35%"}}>
                        Description
                    </Th>

                    <Th
                        textAlign="right"
                        width={{base:"10%", md:"5%", lg:"5%"}}>
                        Price
                    </Th>

                    <Th
                        textAlign="right"
                        width={{base:"10%", md:"5%", lg:"5%"}}>
                        Quantity on stock
                    </Th>

                    <Th width={{base:"10%", md:"20%", lg:"20%"}}>

                    </Th>


                </Tr>
            </Thead>
            <Tbody>

                {products.map((product, index) => (

                <Tr key={index}
                    boxShadow="2px 2px 5px 1px #667292"
                    bg={index % 2 === 1 ? "#ffdb6e" : "#fff3cf"}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                    _hover={{
                        bg: "white",
                    }}
                    wordWrap="break-word"
                    whiteSpace="normal"
                    maxWidth="100%"
                >
                    <Td
                        wordWrap="break-word"
                    >
                        {product.productCode}
                    </Td>

                    <Td
                        wordWrap="break-word"
                    >
                        {product.name}
                    </Td>
                    <Td
                        wordWrap="break-word"
                    >
                        {product.description}
                    </Td>

                    <Td whiteSpace="nowrap"
                        textAlign="right"
                    >
                        {product.price} $
                    </Td>

                    <Td whiteSpace="nowrap"
                        textAlign="right"
                    >
                        {product.quantityInStock}
                    </Td>
                    <Td>
                        <Flex
                            direction={{ base: "column", md: "row", lg: "row"}}
                            justifyContent="center"
                        >
                            <Button
                                margin = "0"
                                flex="1"
                                color="black"
                                bg="#ffc30d"
                                display={hoveredRow === index ? 'inline-block' : 'none'}
                                mr={{base:0, md:2, lg:2}}
                                justifyContent="center"
                                padding={{base:2, md:2, lg:0}}
                                marginBottom={{base:2, md:0, lg:0}}
                                width="auto"
                                whiteSpace="nowrap"
                            >
                                Edit
                            </Button>
                            <Button
                                flex="1"
                                variant="outline"
                                color="001242"
                                borderColor="001242"
                                display={hoveredRow === index ? 'inline-block' : 'none'}
                                mr={{base:0, md:2, lg:2}}
                                justifyContent="center"
                                padding={{base:2, md:2, lg:0}}
                                width="auto"
                                whiteSpace="nowrap"
                            >
                                Delete
                            </Button>
                        </Flex>
                    </Td>
                </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContainer>
    )
}
export default ProductList;