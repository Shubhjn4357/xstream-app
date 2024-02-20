import { AspectRatio, Badge, Card, Text, Group, Grid } from "@mantine/core"
import ImageContainer from "./ImageContainer"
import { IAnimeResult, IMovieResult } from "../interfaces/type"
import { NavLink } from "react-router-dom"

export interface Cards{
    item:IMovieResult|IAnimeResult,
    ratio?:number,
    type?:string
} 

const CardContainer = ({item,ratio,type}:Cards) => {
    return (
      <Grid.Col my={5} span={{ base: 6,lg:6,xs:6}}>
            <NavLink to={`/sourcedetail/${type?`anime/${item.id}`:item.id}`} >
                <Card radius={15}>
                        <Card.Section>
                            <AspectRatio ratio={ratio?ratio:9/16} >
                                <ImageContainer props={item} />
                            </AspectRatio>
                        </Card.Section>
                    <Group justify="space-between" wrap="nowrap" mt="md" mb="xs">
                        <Text fw={500}>{item?.title as string}</Text>
                        <Badge color="cyan">View More...</Badge>
                    </Group>
                    </Card>
            </NavLink>
        </Grid.Col>
  )
}

export default CardContainer