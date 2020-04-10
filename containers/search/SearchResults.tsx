import React, { FC } from 'react';

import Result from './Result';
import {
  StyledWrapper,
  Spinner,
  SpinnerWrapper,
  StyledTableHead,
  StyledTableRunColumn,
  StyledTableDatasetColumn,
  StyledTableRow,
  StyledTable,
  NotFoundDiv,
  Icon,
  NotFoundDivWrapper,
} from './styledComponents';

interface SearchResultsInterface {
  results: any[];
  results_grouped: any[];
  isLoading: boolean;
}

const SearchResults: FC<SearchResultsInterface> = ({
  results,
  results_grouped,
  isLoading,
}) => {
  return (
    <StyledWrapper>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
          <>
            {results_grouped.length === 0 && !isLoading ? (
              <NotFoundDivWrapper >
                <NotFoundDiv>
                  <Icon />
                  <div>
                    No Results Found
                </div>
                </NotFoundDiv>
              </NotFoundDivWrapper>

            ) :
              <StyledTable>
                <StyledTableHead>
                  <StyledTableRow noHover>
                    <StyledTableDatasetColumn>Dataset</StyledTableDatasetColumn>
                    <StyledTableRunColumn>Runs</StyledTableRunColumn>
                  </StyledTableRow>
                </StyledTableHead>
                <tbody>
                  {results_grouped.map(({ dataset, value }, index) => (
                    <StyledTableRow index={index} key={index}>
                      <StyledTableDatasetColumn>
                        <Result key={dataset} dataset={dataset} value={value} />
                      </StyledTableDatasetColumn>
                      <StyledTableRunColumn>{value.length}</StyledTableRunColumn>
                    </StyledTableRow>
                  ))}
                </tbody>
              </StyledTable>
            }
          </>
        )}
    </StyledWrapper>
  );
};
export default SearchResults;
