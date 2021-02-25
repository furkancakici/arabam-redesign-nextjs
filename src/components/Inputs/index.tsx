import { useState } from 'react'
import Select from 'react-select'
import { StyledSelectInput, StyledSelect, StyledCategorySelect } from './styles'
import { VehicleSelectData } from '@data/index'

export const SelectInput = () => {
    const [typeOptions, setTypeOptions] = useState(
        VehicleSelectData.VehicleType
    )
    const [brandOptions, setBrandOptions] = useState(
        VehicleSelectData.VehicleBrand
    )
    const [modelOptions, setModelOptions] = useState(
        VehicleSelectData.VehicleModel
    )
    const [modelTwoOptions, setModelTwoOptions] = useState(
        VehicleSelectData.VehicleModel_2
    )
    const [modelThreeOptions, setModelThreeOptions] = useState(
        VehicleSelectData.VehicleModel_3
    )

    const handlePlaceHolder = (x) => {
        return x.slice(0, 1).map((item) => item.label)
    }

    return (
        <StyledSelectInput>
            <StyledSelect>
                <Select
                    key={typeOptions.values}
                    options={typeOptions}
                    placeholder={handlePlaceHolder(typeOptions)}
                />
            </StyledSelect>
            <StyledSelect>
                <Select
                    key={brandOptions.values}
                    options={brandOptions}
                    placeholder={handlePlaceHolder(brandOptions)}
                />
            </StyledSelect>
            <StyledSelect>
                <Select
                    key={modelOptions.values}
                    options={modelOptions}
                    placeholder={handlePlaceHolder(modelOptions)}
                />
            </StyledSelect>
            <StyledSelect>
                <Select
                    key={modelTwoOptions.values}
                    options={modelTwoOptions}
                    placeholder={handlePlaceHolder(modelTwoOptions)}
                />
            </StyledSelect>
            <StyledSelect>
                <Select
                    key={modelThreeOptions.values}
                    options={modelThreeOptions}
                    placeholder={handlePlaceHolder(modelThreeOptions)}
                />
            </StyledSelect>
        </StyledSelectInput>
    )
}
