import { FC } from 'react'
import { VehicleDatas } from '@data/index'
import { FlexTitle, ShowCaseTitle, Label, StyledWrapper } from './styles'
import Card from './Card'
import { useRouter } from 'next/router'

const Showcase: FC = () => {
    const router = useRouter()

    return (
        <>
            <FlexTitle>
                <ShowCaseTitle>Vitrin</ShowCaseTitle>
                <Label>Tümünü Gör</Label>
            </FlexTitle>

            <StyledWrapper>
                {VehicleDatas.slice(0, 20).map((data, i) => (
                    <Card
                        key={i}
                        src={data.src}
                        city={data.city}
                        date={data.date}
                        title={data.title}
                        price={data.price}
                    />
                ))}
            </StyledWrapper>

            <FlexTitle>
                <ShowCaseTitle>Size Özel</ShowCaseTitle>
                <Label>Tümünü Gör</Label>
            </FlexTitle>

            <StyledWrapper>
                {VehicleDatas.slice(0, 15).map((data, i) => (
                    <Card
                        key={i}
                        src={data.src}
                        city={data.city}
                        date={data.date}
                        title={data.title}
                        price={data.price}
                    />
                ))}
            </StyledWrapper>
        </>
    )
}

export default Showcase
