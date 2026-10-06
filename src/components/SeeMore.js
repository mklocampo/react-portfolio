import { HStack, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SeeMore = ({seeMoreUrl}) => {
    return (
        <HStack className="father-link">
            <Link as="a" className="child-link" href={seeMoreUrl} target="_blank" rel="noopener noreferrer">
                <HStack spacing={1} alignItems="center" display="inline-flex">
                    <Text>See More</Text>
                     <FontAwesomeIcon icon={faArrowRight} size="1x" />
                </HStack>
            </Link>
        </HStack>
    )
}

export default SeeMore;