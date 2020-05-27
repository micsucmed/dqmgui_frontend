import React, { useContext } from 'react';
import {
  PlotDataProps,
  QueryProps,
} from '../../../../containers/display/interfaces';
import { ZoomedPlot } from './zoomedPlot';
import { ZoomedJSROOTPlot } from './zoomedJSROOTPlot';
import { ZoomedPlotsWrapper } from '../../../styledComponents';
import { useRouter } from 'next/router';
import { store } from '../../../../contexts/rightSideContext';
import { FormatParamsForAPI } from '../../plot/singlePlot/utils';

interface ZoomedPlotsProps {
  selected_plots: PlotDataProps[];
}

export const ZoomedPlots = ({
  selected_plots,
}: ZoomedPlotsProps) => {

  const globalState = useContext(store)
  const router = useRouter();
  const query: QueryProps = router.query;

  return (
    <ZoomedPlotsWrapper>
      {selected_plots.map((selected_plot: any) => {
        const params_for_api = FormatParamsForAPI(globalState, query, selected_plot.name, selected_plot.path)
        if (globalState.JSROOTmode) {
          return (
            <ZoomedJSROOTPlot
              selected_plot={selected_plot}
              params_for_api={params_for_api}
              key={selected_plot.name}
            />
          );
        }
        return (
          <ZoomedPlot
            selected_plot={selected_plot}
            params_for_api={params_for_api}
            key={selected_plot.name}
          />
        );
      })}
    </ZoomedPlotsWrapper>
  );
};
