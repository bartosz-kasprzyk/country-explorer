"use client";

import {
  ControlsGroup,
  SearchInput,
  DropdownSelect,
  StyledButton,
  ControlsWrapper,
} from "./styled";

interface CountryListControlsProps {
  searchTerm: string;
  setSearchTerm: (e: string) => void;
  regionFilter: string;
  setRegionFilter: (e: string) => void;
  regionList: string[];
}

export function CountryListControls({
  searchTerm,
  setSearchTerm,
  regionFilter,
  setRegionFilter,
  regionList,
}: CountryListControlsProps) {
  return (
    <ControlsWrapper>
      <ControlsGroup>
        <StyledButton href="/favorites">❤️ Favorites</StyledButton>
      </ControlsGroup>

      <ControlsGroup>
        <SearchInput
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <DropdownSelect
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          <option value="">All Regions</option>
          {regionList.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </DropdownSelect>
      </ControlsGroup>
    </ControlsWrapper>
  );
}
