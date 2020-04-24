import React, { useState } from 'react';
import { Button } from 'antd';

import { toggleModal } from '../../../reducers/reference';
import Nav from '../../Nav';
import { useSearch } from '../../../hooks/useSearch';
import SearchResults from '../../../containers/search/SearchResults';
import { change_value_in_reference_table } from '../../../reducers/reference';
import { ResultsWrapper, NavWrapper, StyledModal } from '../styledComponents';

interface CustomModalProps {
  visible: boolean;
  dispatch: any;
  id: any;
  state: any;
}

export const CustomModal = ({
  visible,
  dispatch,
  id,
  state,
}: CustomModalProps) => {
  const [search_run_number, setSearchRunNumber] = useState(NaN);
  const [search_dataset_name, setSearchDatasetName] = useState('');

  const navigationHandler = (
    search_by_run_number: number,
    search_by_dataset_name: string
  ) => {
    setSearchRunNumber(search_by_run_number);
    setSearchDatasetName(search_by_dataset_name);
  };

  const clear = () => {
    setSearchRunNumber(NaN);
    setSearchDatasetName('');
  };

  const onClosing = () => {
    clear();
    toggleModal(false)(dispatch);
  };

  const searchHandler = (run_number: number, dataset_name: string) => {
    change_value_in_reference_table(
      run_number,
      'run_number',
      id
    )(state, dispatch);

    change_value_in_reference_table(
      dataset_name,
      'dataset_name',
      id
    )(state, dispatch);

    toggleModal(false)(dispatch);
    clear();
  };

  const { results, results_grouped, searching, isLoading } = useSearch(
    search_run_number,
    search_dataset_name
  );

  return (
    <StyledModal
      title="Overlay Plots data search"
      visible={visible}
      onCancel={() => onClosing()}
      footer={[
        <Button
          key="Close"
          onClick={() => {
            onClosing();
          }}
        >
          Close
        </Button>,
      ]}
    >
      {visible && (
        <>
          <Nav
            handler={navigationHandler}
            setRunNumber={setSearchRunNumber}
            setDatasetName={setSearchDatasetName}
            type="overlay"
          />
          {searching ? (
            <ResultsWrapper>
              <SearchResults
                handler={searchHandler}
                isLoading={isLoading}
                results={results}
                results_grouped={results_grouped}
              />
            </ResultsWrapper>
          ) : (
            <ResultsWrapper />
          )}
        </>
      )}
    </StyledModal>
  );
};
