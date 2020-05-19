import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Select, Spin, Button } from 'antd';
import { CaretRightFilled, CaretLeftFilled } from '@ant-design/icons';
import Router from 'next/router';
import { useRouter } from 'next/router';

import { StyledFormItem } from '../styledComponents';
import { StyledSelect, OptionParagraph } from '../viewDetailsMenu/styledComponents';
import { QueryProps } from '../../containers/display/interfaces';
import { useSearch } from '../../hooks/useSearch';

const { Option } = Select;

const getRunNumbers = (results_grouped: any[]) => {
  const runs: number[] = [];
  results_grouped.forEach((result) => {
    result.value.forEach((data: any) => {
      runs.push(data.run);
    });
  });
  return runs;
};

export const RunBrowser = () => {
  const inputEl = useRef(null);
  const router = useRouter();
  const query: QueryProps = router.query;
  const run_number = query.run_number ? query.run_number : NaN;
  const [currentRunNumber, setCurrentRunNumber] = useState(run_number);
  const [openSelect, setSelect] = useState(false)

  //seting  run field width to prev. selected run name field width,
  // because when spinner is shown, field becomes spinner width
  const refElem = useRef(0)
  const [width, setWidth] = useState<number | undefined>()

  useEffect(() => {
    Router.replace({
      pathname: '/',
      query: {
        run_number: currentRunNumber,
        dataset_name: query.dataset_name,
        folder_path: query.folder_path,
        overlay: query.overlay,
        overlay_data: query.overlay_data,
        selected_plots: query.selected_plots,
      },
    });
  }, [currentRunNumber]);

  const { results_grouped, searching, isLoading, errors } = useSearch(
    NaN,
    query.dataset_name
  );

  const runNumbers = getRunNumbers(results_grouped);
  const currentRunNumberIndex = runNumbers.indexOf(currentRunNumber);

  return (
    <Col >
      <StyledFormItem
        labelColor="white"
        name={currentRunNumber}
        label="Run:">
        <Row justify="center" align="middle">
          <Col>
            <Button
              disabled={!runNumbers[currentRunNumberIndex - 1]}
              icon={<CaretLeftFilled />}
              type="link"
              onClick={() => {
                setWidth(undefined)
                setCurrentRunNumber(runNumbers[currentRunNumberIndex - 1])
              }}
            />
          </Col>
          <Col>
            <div ref={(refElem: HTMLDivElement) => {
              if (refElem && !openSelect) {
                setWidth(refElem.clientWidth)
              }
            }}>
              <StyledSelect
                onClick={() => setSelect(!openSelect)}
                value={currentRunNumber}
                onChange={(e: any) => {
                  setCurrentRunNumber(e)
                  setSelect(!openSelect)
                }}
                showSearch={true}
                open={openSelect}
                width={width}
              >
                {runNumbers &&
                  runNumbers.map((run: number) => {
                    return (
                      <Option
                        onClick={() => {
                          setSelect(false)
                        }}
                        value={run}
                        key={run.toString()}>
                        {isLoading ?
                          <OptionParagraph>
                            <Spin />
                          </OptionParagraph> :
                          <p onClick={() => setWidth(undefined)}>
                            {run}
                          </p>}
                      </Option>
                    );
                  })}
              </StyledSelect>
            </div>
          </Col>
          <Col>
            <Button
              icon={<CaretRightFilled />}
              disabled={!runNumbers[currentRunNumberIndex + 1]}
              type="link"
              onClick={() => {
                setWidth(undefined)
                setCurrentRunNumber(runNumbers[currentRunNumberIndex + 1])
              }}
            />
          </Col>
        </Row>
      </StyledFormItem>
    </Col>
  );
};
