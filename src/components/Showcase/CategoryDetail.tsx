import Card from './Card'
import {
    StyledWrapperDetail,
    StyledSideCategoryDetails,
    SideContent,
    StyledInput,
    StyledInputs,
    StyledSpan,
    StyledCollapse,
} from './styles'
import { VehicleDatas } from '@data/index'
import { Button, ButtonsContainer } from '@components/Navbar/styles'
import { Categories } from '@components/index'
import { MainSection } from '@assets/styles/GlobalStyles'
import {
    StyledSelectInput,
    StyledCategorySelect,
    StyledCategoryInput,
} from '@components/Inputs/styles'
import Select from 'react-select'
import { Collapse, UnmountClosed } from 'react-collapse'
import { useState } from 'react'

const CategoryDetail = () => {
    return (
        <>
            <Buttons />
            <MainSection>
                <Categories />
                <StyledWrapperDetail>
                    {VehicleDatas.slice(0, 18).map((data, i) => (
                        <Card
                            key={i}
                            src={data.src}
                            city={data.city}
                            date={data.date}
                            title={data.title}
                            price={data.price}
                        />
                    ))}
                </StyledWrapperDetail>
                <SideCategoryDetails />
            </MainSection>
        </>
    )
}

export default CategoryDetail

export const Buttons = () => {
    return (
        <ButtonsContainer>
            <Button primary width={120}>
                2.El Araçlar
            </Button>
            <Button shadow width={120}>
                Sahibinden
            </Button>
            <Button shadow width={120}>
                Galeriden
            </Button>
            <Button shadow width={135}>
                Yetkili Bayiden
            </Button>
            <Button shadow width={120}>
                Rent A Car
            </Button>
        </ButtonsContainer>
    )
}

const SideCategoryOption_Unit = [
    { value: 'tl', label: 'TL' },
    { value: 'euro', label: 'EURO' },
    { value: 'dolar', label: 'DOLAR' },
]

const SideCategoryOption_City = [
    { value: 'istanbul', label: 'İSTANBUL' },
    { value: 'ankara', label: 'ANKARA' },
    { value: 'izmir', label: 'İZMİR' },
    { value: 'bursa', label: 'BURSA' },
    { value: 'antalya', label: 'ANTALYA' },
]

const SideCategoryOption_District = [
    { value: 'kadıköy', label: 'KADIKÖY' },
    { value: 'çankaya', label: 'ÇANKAYA' },
    { value: 'bayraklı', label: 'BAYRAKLI' },
    { value: 'bursa', label: 'OSMANGAZİ' },
    { value: 'antalya', label: 'ELMALI' },
]

const SideCategoryDetails = () => {
    const [clicked, setClicked] = useState<boolean>(true)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <StyledSideCategoryDetails>
            <SideContent height={150}>
                <h2>Fiyat</h2>
                <StyledCategoryInput>
                    <StyledCategorySelect width={180}>
                        <Select
                            key={SideCategoryOption_Unit.values}
                            options={SideCategoryOption_Unit}
                            placeholder={'TL'}
                        />
                    </StyledCategorySelect>
                </StyledCategoryInput>
                <StyledInputs>
                    <StyledInput type="text" width={60} placeholder="Min" />
                    <StyledInput type="text" width={60} placeholder="Max" />
                </StyledInputs>
            </SideContent>

            <SideContent height={150}>
                <h2>Adres</h2>
                <StyledCategoryInput>
                    <StyledCategorySelect width={175}>
                        <Select
                            key={SideCategoryOption_City.values}
                            options={SideCategoryOption_City}
                            placeholder={'İL'}
                        />
                        <Select
                            key={SideCategoryOption_District.values}
                            options={SideCategoryOption_District}
                            placeholder={'İLÇE'}
                        />
                    </StyledCategorySelect>
                </StyledCategoryInput>
            </SideContent>

            <SideContent height={70}>
                <h2>Yıl</h2>
                <StyledInputs>
                    <StyledInput type="text" width={65} placeholder="Min" />
                    <StyledInput type="text" width={65} placeholder="Max" />
                </StyledInputs>
            </SideContent>

            <SideContent height={80}>
                <h2>Anahtar Kelime</h2>
                <StyledInputs>
                    <StyledInput type="text" width={90} placeholder="Araba" />
                    <Button primary width={70}>
                        Ara
                    </Button>
                </StyledInputs>
            </SideContent>

            <SideContent>
                <div className="justify-content" onClick={handleClick}>
                    <h2>İLAN TARİHİ</h2>
                    <StyledSpan clicked={clicked}>{`>`}</StyledSpan>
                </div>
                <Collapse isOpened={clicked}>
                    <StyledCollapse>
                        <label className="container">
                            Son 1 Gün
                            <input
                                type="radio"
                                defaultChecked={true}
                                name="radio"
                            />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            Son 2 Gün
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            Son 3 Gün
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            Son 7 Gün
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            Son 30 Gün
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                    </StyledCollapse>
                </Collapse>
            </SideContent>

            <SideContent>
                <div className="justify-content">
                    <h2>ÖZEL İLANLAR</h2>
                    <StyledSpan>
                        <span className="bottom">{`>`}</span>
                    </StyledSpan>
                </div>
            </SideContent>

            <SideContent>
                <div className="justify-content">
                    <h2>FOTOĞRAFLI İLANLAR</h2>
                    <StyledSpan>
                        <span className="bottom">{`>`}</span>
                    </StyledSpan>
                </div>
            </SideContent>
        </StyledSideCategoryDetails>
    )
}
