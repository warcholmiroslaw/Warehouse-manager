import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Container, Flex, Text} from "@chakra-ui/react";
import ButtonWithLabel from "../components/ButtonWithLabel";
import { MdOutlineAddBox } from "react-icons/md";
import ProductList from "../components/ProductList";


const Products = () => {

    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:8081/products/all`);
                const data = await response.json();
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.error("Błąd podczas pobierania danych:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!products.length && !loading) {
        return <p>No products found </p>;
    }

    return (
    <Container
        display="block"
        maxHeight="100vh"
        FlexDirection="column"
        justifyContent="center"
        maxWidth="100%"
        overflowY="hidden"
        boxSizing="border-box"
    >
            <Flex
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding={{base: 4, md: 4, lg: 8}}
                width="100%"
                boxSizing="border-box"
            >
                <Text
                    fontSize="5xl"
                    fontWeight="bold"
                    color="black"
                >Products
                </Text>

                <ButtonWithLabel
                    action=" "
                    name="Add product"
                    icon = {MdOutlineAddBox}
                />

            </Flex>

            <ProductList
                display="flex"
                maxWidth="100%"
                products={products} />
    </Container>
    )
}
export default Products;